import DashedBackground from "./constructor";

const _opts = {
    lineDash: 5,
    spaceDash: 5,
    lineWidth: 1.2,
    color: 'rgba(255,218,168,1)',
    speed: 5,
    msBySteps: 1,
    resize: true,
}

function init() {
    const bgPartners = document.querySelector('canvas.partners-page-dashed');
    if (bgPartners) {
        new DashedBackground(
            bgPartners,
            'M1290.6 134.747C1290.6 134.747 1209.23 49.4931 1142.1 20.2465C919.019 -76.9333 770.44 224.432 545 316C334.5 401.5 21.0005 316 2.09706 189.247C-16.8064 62.4933 240.591 62.2465 271.593 62.2463',
            {
                ..._opts,
                startFrom: 0,
                stopAt: 99,
                width: 1546,
                height: 714,
                cropHeightPercentage: 30,
                minWidthStartRendering: 767,
            }
        )
    }
    const bgPartnersDownload = document.querySelector('canvas.partners-download-dashed');
    if (bgPartnersDownload) {
        new DashedBackground(
            bgPartnersDownload,
            'M-196 1C-196 1 -46.3944 205.286 133.5 346.5C203 401.056 334.527 456.163 416 479C614 534.5 870 475.5 899 388C928 300.5 745.5 312.117 670.5 340C621.701 358.142 592.5 390.5 604.5 425.5C616.5 460.5 732 458.5 770 435.5',
            {
                ..._opts,
                startFrom: 0,
                stopAt: 99,
                width: 1546,
                height: 714,
                minWidthStartRendering: 767,
            }
        )
    }
    const howDoDashed1 = document.querySelector('canvas.how-do-dashed-bg1');
    if (howDoDashed1) {
        new DashedBackground(
            howDoDashed1,
            'M305.301 140.183C305.301 140.183 223.048 131.701 201.759 169.645C184.638 200.158 194.289 234.355 201.759 251.716C242.274 345.887 392.336 290.647 392.336 290.647C392.336 290.647 485.002 223.981 456.364 131.766C410.678 -15.3386 223.769 -28.6937 96.7148 43.9079C-14.3174 107.354 -2.29209 290.647 6.17873 345.887C30.3004 503.19 207.76 642.605 362.824 676.802C555.197 719.225 832.595 663.23 1023.09 714.154C1143.14 746.246 1286.46 796.274 1278.7 924.593C1269.64 1074.29 949.582 1119.96 916.551 974.046C900.493 903.103 964.071 794.121 964.071 794.121',
            {
                ..._opts,
                startFrom: 0,
                stopAt: 99,
                width: 1280,
                height: 1064,
                cropHeightPercentage:79,
                offsetLeftPercentage: 0,
                cropWidthPercentage: 5,
                minWidthStartRendering: 767,
            }
        )
    }
    const howDoDashed2 = document.querySelector('canvas.how-do-dashed-bg2');
    if (howDoDashed2) {
        new DashedBackground(
            howDoDashed2,
            'M949.499 1C949.499 1 773.757 40.8488 714.999 126.5C642.759 231.805 764.257 335.681 714.999 453.5C607.48 710.672 -93.2101 318.875 11.9992 577C57.5812 688.833 122.462 818.676 238.999 787C335.828 760.681 453.786 615.715 367.499 564.5C311.433 531.222 202.999 593 202.999 593',
            {
                ..._opts,
                startFrom: 0,
                stopAt: 99,
                width: 950,
                height: 793,
                cropHeightPercentage:84.5,
                offsetRightPercentage: 30,
                minWidthStartRendering: 767,
            }
        )
    }
    const howDoDashed3 = document.querySelector('canvas.how-do-dashed-bg3');
    if (howDoDashed3) {
        new DashedBackground(
            howDoDashed3,
            'M181.848 1C181.848 1 19.2997 138.972 3.37959 265.221C-28.0069 514.122 257.336 555.6 490.793 576.606C770.743 601.795 1165.64 466.491 1202.67 754.54C1220.16 890.67 1061.77 999.651 949.211 949.624C866.322 912.784 873.725 798.487 873.725 798.487',
            {
                ..._opts,
                startFrom: 0,
                stopAt: 99,
                width: 1205,
                height: 963,
                cropHeightPercentage:82,
                offsetRightPercentage: 12,
                offsetLeftPercentage: 10,
                minWidthStartRendering: 767,
            }
        )
    }
    const howDoDashed4 = document.querySelector('canvas.how-do-dashed-bg4');
    if (howDoDashed4) {
        new DashedBackground(
            howDoDashed4,
            'M928.5 1C928.5 1 754.451 39.8721 717 135.5C668.154 260.222 781.362 281.984 753.5 413C695.863 684.023 310.999 440.5 134 543C-42.9988 645.5 -35.4991 821.5 115 884.5C265.5 947.5 485 842 439.5 718C393.999 594 181 651 181 651',
            {
                ..._opts,
                startFrom: 0,
                stopAt: 99,
                width: 929,
                height: 905,
                cropHeightPercentage:82,
                offsetRightPercentage: 35,
                offsetLeftPercentage: 3,
                minWidthStartRendering: 767,
            }
        )
    }
    const bgRecepts = document.querySelector('canvas.recepts-dashed');
    if (bgRecepts) {
        new DashedBackground(
            bgRecepts,
            'M1322 259.347C1256.17 246.081 1232.81 201.784 1169 180.846C1083.91 152.926 1028.12 135.61 941 156.346C855.058 176.803 830.883 241.698 750.5 278.347C650.011 324.163 607.5 374.5 476.5 348.347C342.261 321.547 371.194 154.205 263 70.3464C144.5 -21.5 3.00002 -10.5 -65.0001 41.8464C-136.326 96.7528 -156.287 169.078 -146 258.5C-133.5 367.153 -6.49988 362.5 128.5 462.847C250.148 553.269 276.966 641.897 406.5 643.846C544.582 645.924 563.21 462.264 700.5 447.347C886.918 427.091 1003.5 632.5 1136.5 685C1269.5 737.5 1371.97 716.432 1477 599.5C1533 537.154 1544.5 502.5 1544.5 425.5C1544.5 348.5 1513.97 285.771 1467 259.347C1424.46 235.411 1369.85 268.989 1322 259.347Z',
            {
                ..._opts,
                startFrom: 48,
                stopAt: 46,
                width: 1546,
                height: 714,
                cropHeightPercentage: 30,
                minWidthStartRendering: 767,
            }
        )
    }
    const bgMainCatalog = document.querySelector('canvas.main-catalog-dashed');
    if (bgMainCatalog) {
        new DashedBackground(
            bgMainCatalog,
            'M-84 153C-84 153 -31.8905 10.5644 45 3C123.576 -4.73031 122.905 123.462 201.5 131C285.736 139.079 387 19 387 19C387 19 442.533 100.596 497.5 108.5C565.019 118.209 580.421 31.3914 647.5 19C740.584 1.80475 782.848 96.6497 877.5 95.5C968.824 94.3907 1007.55 10.6215 1098.5 19C1155.03 24.208 1235 69 1235 69L1337.5 2L1383.5 69L1464 140C1464 140 1501.02 42.2286 1554.5 36C1620.39 28.326 1665 165 1665 165',
            {
                ..._opts,
                startFrom: 0,
                stopAt: 100,
                width: 1546,
                height: 714,
                minWidthStartRendering: 767,
            }
        )
    }
    const bgMainCatalogProducts = document.querySelector('canvas.main-catalog-products-dashed');
    if (bgMainCatalogProducts) {
        new DashedBackground(
            bgMainCatalogProducts,
            'M-84 153C-84 153 -31.8905 10.5644 45 3C123.576 -4.73031 122.905 123.462 201.5 131C285.736 139.079 387 19 387 19C387 19 442.533 100.596 497.5 108.5C565.019 118.209 580.421 31.3914 647.5 19C740.584 1.80475 782.848 96.6497 877.5 95.5C968.824 94.3907 1007.55 10.6215 1098.5 19C1155.03 24.208 1235 69 1235 69L1337.5 2L1383.5 69L1464 140C1464 140 1501.02 42.2286 1554.5 36C1620.39 28.326 1665 165 1665 165',
            {
                ..._opts,
                startFrom: 0,
                stopAt: 100,
                width: 1546,
                height: 714,
                cropHeightPercentage: 60,
                additionalWidthPercentage: 20,
                cropWidthPercentage: -50,
                minWidthStartRendering: 767,
            }
        )
    }
    const aboutDashed = document.querySelector('canvas.about-dashed');
    if (aboutDashed) {
        new DashedBackground(
            aboutDashed,
            'M1290.6 134.747C1290.6 134.747 1209.23 49.4931 1142.1 20.2465C919.019 -76.9333 770.44 224.432 545 316C334.5 401.5 21.0005 316 2.09706 189.247C-16.8064 62.4933 240.591 62.2465 271.593 62.2463',
            {
                ..._opts,
                startFrom: 0,
                stopAt: 100,
                width: 1132,
                height: 352,
                minWidthStartRendering: 0,
                maxHeight: 300,
                additionalWidthOnMaxHeight: 50
            }
        )
    }
    const aboutPartners = document.querySelector('canvas.about-partners-dashed');
    if (aboutPartners) {
        new DashedBackground(
            aboutPartners,
            'M220.501 60.1991C220.501 60.1991 127.501 -35.8006 46.0005 16.6991C-14.7629 55.8405 -9.37283 149.384 40.5005 201.699C112 276.699 229 266.199 314.001 226.199C399.001 186.199 567.901 47.7331 756.001 28.6991C840 20.1991 1009.53 70.5 965.5 119.5C934.051 154.5 906 164.199 858.001 164.199C810.001 164.199 787.5 110.5 830 84C846.343 73.8093 881.411 58.6352 919 52.5C979.16 42.6808 1045 45 1045 45',
            {
                ..._opts,
                startFrom: 0,
                stopAt: 100,
                width: 1046,
                height: 259,
                additionalWidthPercentage: 30,
                minWidthStartRendering: 767,
            }
        )
    }
    const aboutPersons = document.querySelector('canvas.about-persons');
    if (aboutPersons) {
        new DashedBackground(
            aboutPersons,
            'M-88 153.033C-88 153.033 -35.8905 10.5977 41 3.0332C119.576 -4.69711 118.905 123.495 197.5 131.033C281.736 139.112 383 19.0332 383 19.0332C383 19.0332 438.533 100.629 493.5 108.533C561.019 118.242 576.421 31.4246 643.5 19.0332C736.584 1.83796 778.848 96.6829 873.5 95.5332C964.824 94.4239 1003.55 10.6547 1094.5 19.0332C1151.03 24.2412 1231 69.0332 1231 69.0332L1333.5 2.0332L1379.5 69.0332L1460 140.033C1460 140.033 1497.02 42.2618 1550.5 36.0332C1616.39 28.3592 1661 165.033 1661 165.033',
            {
                ..._opts,
                startFrom: 0,
                stopAt: 100,
                width: 1600,
                height: 166,
                additionalWidthPercentage: 30,
                minWidthStartRendering: 767,
                cropHeightPercentage: 50
            }
        )
    }
    const receptDetailsDashed = document.querySelector('canvas.recept-details-dashed');
    if (receptDetailsDashed) {
        new DashedBackground(
            receptDetailsDashed,
            'M-88 153.033C-88 153.033 -35.8905 10.5977 41 3.0332C119.576 -4.69711 118.905 123.495 197.5 131.033C281.736 139.112 383 19.0332 383 19.0332C383 19.0332 438.533 100.629 493.5 108.533C561.019 118.242 576.421 31.4246 643.5 19.0332C736.584 1.83796 778.848 96.6829 873.5 95.5332C964.824 94.4239 1003.55 10.6547 1094.5 19.0332C1151.03 24.2412 1231 69.0332 1231 69.0332L1333.5 2.0332L1379.5 69.0332L1460 140.033C1460 140.033 1497.02 42.2618 1550.5 36.0332C1616.39 28.3592 1661 165.033 1661 165.033',
            {
                ..._opts,
                startFrom: 0,
                stopAt: 100,
                width: 1600,
                height: 166,
                cropHeightPercentage: 90,
                additionalWidthPercentage: 30,
            }
        )
    }
    const productSliderDashed = document.querySelector('canvas.product-slider-dashed');
    if (productSliderDashed) {
        new DashedBackground(
            productSliderDashed,
            'M1 155C1 155 53.1095 12.5644 130 5C208.576 -2.73031 207.905 125.462 286.5 133C370.736 141.079 472 21 472 21C472 21 527.533 102.596 582.5 110.5C650.019 120.209 665.421 33.3914 732.5 21C825.584 3.80475 867.848 98.6497 962.5 97.5C1053.82 96.3907 1092.55 12.6215 1183.5 21C1240.03 26.208 1320 71 1320 71L1422.5 4L1468.5 71L1549 142C1549 142 1586.02 44.2286 1639.5 38C1705.39 30.326 1750 167 1750 167',
            {
                ..._opts,
                startFrom: 0,
                stopAt: 100,
                width: 776,
                height: 168,
                cropHeightPercentage: 75,
                additionalWidthPercentage: 100,
                useNonCanvasSize: true,
                isDebug: false,

                onEnd: ()=>{
                    new DashedBackground(
                        productSliderDashed,
                        'M366 153C366 153 418.11 10.5644 495 3C573.576 -4.73031 572.905 123.462 651.5 131C735.736 139.079 837 19 837 19C837 19 892.533 100.596 947.5 108.5C1015.02 118.209 1030.42 31.3914 1097.5 19C1190.58 1.80475 1232.85 96.6497 1327.5 95.5C1418.82 94.3907 1457.55 10.6215 1548.5 19C1605.03 24.208 1685 69 1685 69L1787.5 2L1833.5 69L1914 140C1914 140 1951.02 42.2286 2004.5 36C2070.39 28.326 2115 165 2115 165',
                        {
                            ..._opts,
                            startFrom: 0,
                            stopAt: 100,
                            width: 1376,
                            height: 168,
                            noReset:true,
                            offsetLeftPercentage: -40,
                        }
                    )
                }
            }
        )
    }
    const bgPromo = document.querySelector('canvas.promo-dashed');
    if (bgPromo) {
        new DashedBackground(
            bgPromo,
            'M134.082 417.398C134.082 417.398 -2.36771 321.18 1.06441 232.2C5.00465 130.047 111.266 37.0879 207.5 11.4256C303.734 -14.2368 479.5 7.31848 607.5 106.926C735.5 206.533 756.575 265.883 723.036 356.236C689 447.926 588.5 477.926 545.5 524.926C502.5 571.926 497.996 635.062 562.5 645.926C657.5 661.926 695 569.926 695 569.926',
            {
                ..._opts,
                startFrom: 0,
                stopAt: 99,
                width: 739,
                height: 649,
                offsetRightPercentage: 30,
                cropHeightPercentage: 28,
                minWidthStartRendering: 767,
                onEnd: () => {
                    /*new DashedBackground(
                        bgPromo,
                        'M66.0424 80.6251C48.0369 82.4484 28.5919 78.7152 12.676 70.0635C7.7633 67.393 5.97719 63.1256 3.6885 58.2325C0.689677 51.8212 0.91284 46.2263 4.19628 39.9275C8.80416 31.0879 15.2544 23.652 24.1515 18.982C31.9665 14.8801 40.6216 12.499 49.1591 10.4769C68.5735 5.87878 87.8548 3.69938 107.73 2.47959C117.813 1.86077 127.903 2.16237 137.993 1.7941C151.133 1.31454 164.46 1.09327 177.548 2.47959C192.978 4.11387 211.082 4.22727 224.847 12.4065C229.551 15.2019 232.083 19.8757 233.2 25.126C234.913 33.1862 230.341 39.1298 224.72 44.4974C213.007 55.6829 197.469 62.628 182.423 68.0324C159.119 76.4026 139.798 89.178 29.8772 92.5997',
                        {
                            lineDash: 5,
                            spaceDash: 5,
                            lineWidth: 1.2,
                            color: 'rgba(255,218,168,1)',
                            speed: 1,
                            msBySteps: 10,
                            startFrom: 0,
                            resize: true,
                            stopAt: 100,
                            width: 235,
                            height: 94,
                            offsetLeftPercentage: 55,
                            offsetTopPercentage: 57.5,
                            noReset: true,
                            isRestoreAfterStop: false,
                        }
                    )*/
                }
            }
        )
    }
}

export default init;