import $ from "jquery";
import select2 from "select2";
import "jquery.maskedinput/src/jquery.maskedinput";

const SITE_TEMPLATE_PATH = "/local/templates/s1/";

let forms = {
  init: function () {
    this.select2Init();
    this.askQuestionForm();
    this.subscriptionForm();
    this.filterFormInit();
  },

  select2Init: function () {
    $(".select2-field").each((key, item) => {
      $(item).select2({
        language: "ru",
        dropdownParent: $(item).parent(),
      });
    });
  },

  askQuestionForm: function () {
    let _ = this;
    var forms = $("form.contact-box-form");
    if (forms.length > 0)
      forms.each(function () {
        var form = $(this);
        var formData = {
          username: form.find("input[name=name]"),
          telephone: form.find("input[name=phone]"),
          email: form.find("input[name=email]"),
          question: form.find("textarea[name=question]"),
        };
        var token = form.find("input[name=g-recaptcha-response]");
        formData["telephone"].mask("+9 (999) 999-9999", {
          placeholder: "+7 (___) ___ - __ - __",
        });

        //Логика работы сообщения об успешном ответе
        form
          .find("+.contact-box-success button.main-link")
          .click(function (event) {
            event.preventDefault();
            form.find("+.contact-box-success").css({
              opacity: 0,
              "pointer-events": "none",
            });

            form
              .find("input")
              .val("")
              .removeAttr("selected")
              .prop("checked", false);
            form.find("textarea").val("");
          });

        //Логика работы формы
        $("#askAgain").click(() => {
          if ($(".modal").hasClass("active")) {
            $(".modal").find(".modal-content").removeClass("active");
            $(".modal").find("#quest").addClass("active");
          }
        });
        form.submit(function (event) {
          event.preventDefault();
          $(".main-field").removeClass("error");
          $(".main-checkbox-name").find("p").css({ color: "#312930" });

          var agreeData = form.find("input[name=agree]:checked");
          let error = 0;
          for (var value in formData) {
            if (
              formData[value].val() == "" ||
              formData[value].val() == undefined
            ) {
              var getParent = formData[value].parent();
              if (!getParent.children(".main-field-addon").length) {
                getParent.addClass("error");
                error++;
              }
            }
          }
          if (!_.validMail(formData["email"].val())) {
            formData["email"].parent().addClass("error");
            error++;
          }
          if (agreeData.length == 0) {
            form
              .find(".main-checkbox-name")
              .find("p")
              .css({ color: "#bb9753" });
            error++;
          }

          //Все хорошо, показываем сообщение что отправили данные с формы
          console.log("mess");
          if (error == 0) {
            $.ajax({
              url: form.attr("action"),
              method: "get",
              dataType: "html",
              data: {
                name: formData["username"].val(),
                phone: formData["telephone"].val(),
                mail: formData["email"].val(),
                text: formData["question"].val(),
                token: token,
              },
              success: function (data) {
                form.find("+.contact-box-success").css({
                  opacity: 1,
                  "pointer-events": "all",
                });
                if ($(".modal").hasClass("active")) {
                  $(".modal").find(".modal-content").removeClass("active");
                  $(".modal").find("#success").addClass("active");
                }
                form
                  .find("input")
                  .val("")
                  .removeAttr("selected")
                  .prop("checked", false);
                form.find("textarea").val("");
              },
              error: function (e) {
                console.error("Ошибка отправки формы", e);
              },
            });
          }
        });
      });
  },

  subscriptionForm: function () {
    var _ = this;
    var defBlock = $("form.subscription-box-form");
    var subBlock = $(".subscription-box-success");
    var email = defBlock.find("input[name=email-sub]");
    var token = defBlock.find("input[name=g-recaptcha-response]");

    function subBlockDisplay(displayValue) {
      subBlock.css({
        opacity: parseInt(displayValue),
        "pointer-events": displayValue ? "all" : "none",
      });
    }

    //Логика работы сообщения об успешном ответе
    subBlock.find("button.main-link").click(function (event) {
      event.preventDefault();
      subBlockDisplay(0);
    });

    defBlock.submit(function (event) {
      let error = 0;
      event.preventDefault();
      $(".main-field").removeClass("error");

      if (email.val() == "" || !_.validMail(email.val())) {
        error++;
        email.parent().addClass("error");
      }
      if (error == 0) {
        $.ajax({
          url: SITE_TEMPLATE_PATH + "/include/ajax/subscribe.php",
          method: "get",
          dataType: "html",
          data: {
            mail: email.val(),
            token: token.val(),
          },
          success: function (data) {
            subBlockDisplay(1);
            defBlock.find("input").val("");
          },
          error: function (e) {
            console.error("Ошибка отправки формы", e);
          },
        });
      }
    });
  },
  filterFormInit: function () {
    $(document).on("submit", "#filterForm", function (e) {
      e.preventDefault();
      let cats = [];
      let prods = [];

      $(this)
        .find("input[name=category]")
        .each(function () {
          if (this.checked) cats.push($(this).attr("id"));
        });
      $(this)
        .find("input[name=product]")
        .each(function () {
          if (this.checked) prods.push($(this).attr("id"));
        });
      console.log(cats, prods);
      $.ajax({
        url: SITE_TEMPLATE_PATH + "/include/ajax/filter.php",
        method: "get",
        dataType: "html",
        data: {
          cats: cats,
          prods: prods,
        },
        success: function (data) {
          $("#insertTargetFilter").find(">*").addClass("hideInFilter");
          setTimeout(function () {
            $("#insertTargetFilter").html(data);
            window.resizeImg();
          }, 300);
        },
        error: function (e) {
          console.error("Ошибка отправки формы", e);
        },
      });
    });
    $(document).on("change", "#filterForm input", function () {
      if (window.innerWidth > 859) $("#filterForm").submit();
    });
    $(document).on("click", "#clearFilter", function (e) {
      e.preventDefault();
      $("#filterForm")
        .find("input[type=checkbox]")
        .each(function () {
          if (this.checked) this.checked = false;
        });
      $("#filterForm").submit();
    });
    $(document).on("click", "#accept", function (e) {
      e.preventDefault();
      $("#filterForm").submit();
    });
  },
  validMail: function (mail) {
    var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    var valid = re.test(mail);
    return valid;
  },
};

export default forms;
