import DashedBackground from "./dashbackground";

function init() {
    const bgRecepts = document.querySelector('canvas.recepts-dashed');
    if (bgRecepts) {
        new DashedBackground(
            bgRecepts,
            'M1322 259.347C1256.17 246.081 1232.81 201.784 1169 180.846C1083.91 152.926 1028.12 135.61 941 156.346C855.058 176.803 830.883 241.698 750.5 278.347C650.011 324.163 607.5 374.5 476.5 348.347C342.261 321.547 371.194 154.205 263 70.3464C144.5 -21.5 3.00002 -10.5 -65.0001 41.8464C-136.326 96.7528 -156.287 169.078 -146 258.5C-133.5 367.153 -6.49988 362.5 128.5 462.847C250.148 553.269 276.966 641.897 406.5 643.846C544.582 645.924 563.21 462.264 700.5 447.347C886.918 427.091 1003.5 632.5 1136.5 685C1269.5 737.5 1371.97 716.432 1477 599.5C1533 537.154 1544.5 502.5 1544.5 425.5C1544.5 348.5 1513.97 285.771 1467 259.347C1424.46 235.411 1369.85 268.989 1322 259.347Z',
            {
                lineDash: 5,
                spaceDash: 5,
                lineWidth: 1.2,
                color: 'rgba(255,218,168,1)',
                speed: 1,
                msBySteps: 10,
                startFrom: 48,
                resize: true,
                stopAt: 46,
                width: 1546,
                height: 714,
                cropHeightPercentage: 30,
            }
        ).start();
    }
    const bgMainCatalog = document.querySelector('canvas.main-catalog-dashed');
    if (bgMainCatalog) {
        new DashedBackground(
            bgMainCatalog,
            'M-84 153C-84 153 -31.8905 10.5644 45 3C123.576 -4.73031 122.905 123.462 201.5 131C285.736 139.079 387 19 387 19C387 19 442.533 100.596 497.5 108.5C565.019 118.209 580.421 31.3914 647.5 19C740.584 1.80475 782.848 96.6497 877.5 95.5C968.824 94.3907 1007.55 10.6215 1098.5 19C1155.03 24.208 1235 69 1235 69L1337.5 2L1383.5 69L1464 140C1464 140 1501.02 42.2286 1554.5 36C1620.39 28.326 1665 165 1665 165',
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
                width: 1546,
                height: 714
            }
        ).start();
    }
    const aboutDashed = document.querySelector('canvas.about-dashed');
    if (aboutDashed) {
        new DashedBackground(
            aboutDashed,
            'M1290.6 134.747C1290.6 134.747 1209.23 49.4931 1142.1 20.2465C919.019 -76.9333 770.44 224.432 545 316C334.5 401.5 21.0005 316 2.09706 189.247C-16.8064 62.4933 240.591 62.2465 271.593 62.2463',
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
                width: 1132,
                height: 352
            }
        ).start();
    }
    const aboutPartners = document.querySelector('canvas.about-partners-dashed');
    if (aboutPartners) {
        new DashedBackground(
            aboutPartners,
            'M220.501 60.1991C220.501 60.1991 127.501 -35.8006 46.0005 16.6991C-14.7629 55.8405 -9.37283 149.384 40.5005 201.699C112 276.699 229 266.199 314.001 226.199C399.001 186.199 567.901 47.7331 756.001 28.6991C840 20.1991 1009.53 70.5 965.5 119.5C934.051 154.5 906 164.199 858.001 164.199C810.001 164.199 787.5 110.5 830 84C846.343 73.8093 881.411 58.6352 919 52.5C979.16 42.6808 1045 45 1045 45',
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
                width: 1046,
                height: 259,
                widthOffset: 200,
            }
        ).start();
    }
    const bgPromo = document.querySelector('canvas.promo-dashed');
    if (bgPromo) {
        new DashedBackground(
            bgPromo,
            'M134.082 417.398C134.082 417.398 -2.36771 321.18 1.06441 232.2C5.00465 130.047 111.266 37.0879 207.5 11.4256C303.734 -14.2368 479.5 7.31848 607.5 106.926C735.5 206.533 756.575 265.883 723.036 356.236C689 447.926 588.5 477.926 545.5 524.926C502.5 571.926 497.996 635.062 562.5 645.926C657.5 661.926 695 569.926 695 569.926',
            {
                lineDash: 5,
                spaceDash: 5,
                lineWidth: 1.2,
                color: 'rgba(255,218,168,1)',
                speed: 1,
                msBySteps: 10,
                startFrom: 0,
                resize: true,
                stopAt: 99,
                width: 739,
                height: 649,
                offsetRightPercentage: 30,
                cropHeightPercentage: 28,
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
                    ).start();*/
                }
            }
        ).start();
    }
}

export default init;