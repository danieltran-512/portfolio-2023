import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React from "react";
import styles from "../../../styles/Work.module.css";
import Button from "../../Button";
import SkewedParallax from "../../Parallax/SkewedParallax";

function Work() {
  const ref = React.useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  React.useEffect(() => {
    const heading = ref.current;

    gsap.set(heading, { transformOrigin: "50% 100%", scaleY: 0 });
    gsap.to(heading, {
      ease: "none",
      startAt: { scaleY: 0 },
      scaleY: 1,
      scrollTrigger: {
        trigger: heading,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        fastScrollEnd: true,
      },
    });

    const refresh = () => {
      ScrollTrigger.clearScrollMemory();
      window.history.scrollRestoration = "manual";
      ScrollTrigger.refresh(true);
    };

    refresh();

    window.addEventListener("resize", refresh);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.headingText} ref={ref}>
        {/* <svg
          preserveAspectRatio="none"
          width="100%"
          height="100%"
          viewBox="0 0 6201.002 964"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="svgGroup"
            stroke-linecap="round"
            fill-rule="evenodd"
            font-size="9pt"
            stroke="#00000000"
            stroke-width="0"
            fill="#000"
          >
            <path d="M 4265.381 254.403 L 4351.807 240.487 A 52.454 52.454 0 0 0 4368.2 264.503 Q 4383.085 277.424 4409.885 286.116 A 216.052 216.052 0 0 0 4414.673 287.606 Q 4465.404 302.767 4552.793 303.444 A 1064.894 1064.894 0 0 0 4561.035 303.475 Q 4645.927 303.475 4694.409 295.962 A 264.223 264.223 0 0 0 4720.215 290.78 A 153.094 153.094 0 0 0 4738.037 285.069 Q 4756.371 277.801 4763.864 267.553 A 25.828 25.828 0 0 0 4769.043 251.962 A 34.485 34.485 0 0 0 4767.726 242.165 A 25.556 25.556 0 0 0 4758.789 229.013 A 38.952 38.952 0 0 0 4751.089 224.424 Q 4740.926 219.713 4723.877 216.928 Q 4699.219 212.899 4651.367 211.434 L 4449.951 204.354 Q 4372.742 201.85 4331.116 184.453 A 127.271 127.271 0 0 1 4317.993 178.109 Q 4276.367 154.794 4276.367 111.581 Q 4276.367 0.009 4550.537 0.009 A 954.573 954.573 0 0 1 4644.045 4.199 Q 4808.721 20.5 4839.467 100.217 A 99.104 99.104 0 0 1 4840.332 102.548 L 4753.906 116.464 A 59.689 59.689 0 0 0 4726.707 87.085 Q 4685.464 62.806 4588.092 59.047 A 975.305 975.305 0 0 0 4550.537 58.358 Q 4448.73 58.358 4403.564 70.199 A 140.507 140.507 0 0 0 4387.079 75.528 Q 4369.957 82.376 4363.057 92.07 A 24.263 24.263 0 0 0 4358.398 106.454 A 24.839 24.839 0 0 0 4369.534 127.456 Q 4374.596 131.127 4381.958 133.798 A 104.539 104.539 0 0 0 4396.004 137.643 Q 4419.929 142.656 4463.354 143.993 A 896.493 896.493 0 0 0 4465.332 144.052 L 4673.828 151.376 Q 4751.038 154.003 4792.857 170.352 A 129.319 129.319 0 0 1 4808.716 177.743 A 92.286 92.286 0 0 1 4831.551 195.198 A 70.122 70.122 0 0 1 4850.342 244.882 A 80.469 80.469 0 0 1 4824.914 304.936 A 102.21 102.21 0 0 1 4820.923 308.602 A 123.86 123.86 0 0 1 4796.5 324.842 Q 4771.448 337.844 4733.532 346.602 A 448.474 448.474 0 0 1 4726.562 348.153 Q 4682.423 357.612 4621.816 360.641 A 1220.408 1220.408 0 0 1 4561.035 362.069 A 996.115 996.115 0 0 1 4486.403 359.447 Q 4409.828 353.677 4357.544 335.214 Q 4310.826 318.716 4286.726 291.992 A 97.092 97.092 0 0 1 4265.381 254.403 Z M 2927.734 355.966 L 2409.668 355.966 L 2409.668 5.868 L 2923.096 5.868 L 2923.096 62.02 L 2486.572 62.02 L 2486.572 148.446 L 2885.254 148.446 L 2885.254 204.354 L 2486.572 204.354 L 2486.572 300.058 L 2927.734 300.058 L 2927.734 355.966 Z M 3604.248 117.929 L 3517.578 135.507 Q 3491.211 61.044 3311.035 61.044 Q 3208.531 61.044 3151.227 85.3 A 176.867 176.867 0 0 0 3138.184 91.439 A 127.388 127.388 0 0 0 3107.542 113.238 A 91.12 91.12 0 0 0 3080.078 180.917 A 97.342 97.342 0 0 0 3141.482 272.852 Q 3188.223 295.688 3270.542 300.02 A 771.702 771.702 0 0 0 3311.035 301.034 A 741.247 741.247 0 0 0 3364.729 299.222 Q 3414.858 295.568 3448.909 284.549 A 203.252 203.252 0 0 0 3455.322 282.357 A 144.489 144.489 0 0 0 3482.527 269.462 Q 3510.629 252.021 3519.043 224.374 L 3604.248 240.975 A 138.223 138.223 0 0 1 3534.375 321.047 Q 3459.385 362.069 3311.035 362.069 Q 3216.038 362.069 3148.494 343.097 A 297.49 297.49 0 0 1 3079.59 314.828 A 185.797 185.797 0 0 1 3034.857 279.581 A 141.251 141.251 0 0 1 2998.047 180.917 A 141.484 141.484 0 0 1 3049.827 67.902 A 202.095 202.095 0 0 1 3079.59 47.128 Q 3161.133 0.009 3311.035 0.009 A 842.337 842.337 0 0 1 3388.989 3.384 Q 3426.734 6.902 3458.46 14.088 A 350.171 350.171 0 0 1 3510.498 29.916 A 220.06 220.06 0 0 1 3551.062 50.758 Q 3574.352 66.234 3588.489 86.266 A 115.56 115.56 0 0 1 3604.248 117.929 Z M 722.412 355.966 L 642.334 355.966 L 642.334 5.868 L 1025.391 5.868 A 286.682 286.682 0 0 1 1066.874 8.667 Q 1110.444 15.055 1136.841 36.019 A 98.176 98.176 0 0 1 1174.054 105.602 A 141.33 141.33 0 0 1 1174.805 120.37 A 120.304 120.304 0 0 1 1169.054 158.462 A 97.5 97.5 0 0 1 1136.353 204.721 Q 1106.687 228.359 1056.751 233.76 A 291.987 291.987 0 0 1 1025.391 235.36 L 1024.414 235.36 L 1179.932 355.966 L 1068.848 355.966 L 919.434 238.534 L 722.412 238.534 L 722.412 355.966 Z M 3976.074 355.966 L 3895.996 355.966 L 3895.996 66.903 L 3649.414 66.903 L 3649.414 5.868 L 4222.412 5.868 L 4222.412 66.903 L 3976.074 66.903 L 3976.074 355.966 Z M 80.078 355.966 L 0 355.966 L 0 5.868 L 375.977 5.868 A 291.516 291.516 0 0 1 422.393 9.325 Q 446.509 13.222 466.008 21.511 A 134.327 134.327 0 0 1 496.826 39.559 A 109.647 109.647 0 0 1 538.883 118.894 A 157.072 157.072 0 0 1 539.551 133.554 A 136.05 136.05 0 0 1 533.558 174.972 A 106.577 106.577 0 0 1 496.826 227.426 A 142.276 142.276 0 0 1 450.839 250.955 Q 430.753 257.23 406.531 259.583 A 316.292 316.292 0 0 1 375.977 260.995 L 80.078 260.995 L 80.078 355.966 Z M 1480.796 357.74 A 816.077 816.077 0 0 0 1567.871 362.069 Q 1721.191 362.069 1803.223 315.438 Q 1844.879 291.759 1865.382 257.691 A 144.102 144.102 0 0 0 1885.254 181.893 A 142.277 142.277 0 0 0 1849.08 83.36 A 183.993 183.993 0 0 0 1803.223 47.128 Q 1721.191 0.009 1567.871 0.009 A 995.842 995.842 0 0 0 1561.732 0.028 Q 1467.021 0.611 1400.049 19.296 A 298.07 298.07 0 0 0 1331.787 47.006 A 213.937 213.937 0 0 0 1313.829 58.481 Q 1249.756 104.217 1249.756 181.893 A 140.071 140.071 0 0 0 1286.841 280.5 A 184.624 184.624 0 0 0 1331.909 315.438 A 237.235 237.235 0 0 0 1334.33 316.794 Q 1390.964 348.069 1480.796 357.74 Z M 2274.658 5.868 L 2274.658 191.415 Q 2274.658 235.552 2263.615 267.114 A 134.497 134.497 0 0 1 2253.54 289.437 A 117.477 117.477 0 0 1 2210.003 332.706 A 161.013 161.013 0 0 1 2185.791 344.247 Q 2152.992 356.783 2104.975 360.501 A 560.935 560.935 0 0 1 2061.768 362.069 Q 2002.686 362.069 1947.266 353.036 L 1944.092 292.489 A 954.532 954.532 0 0 0 2003.479 298.898 A 731.82 731.82 0 0 0 2058.105 301.034 Q 2120.732 301.034 2152.622 283.156 A 77.095 77.095 0 0 0 2162.964 276.254 Q 2194.092 251.474 2194.092 195.565 L 2194.092 5.868 L 2274.658 5.868 Z M 1567.871 301.034 A 738.384 738.384 0 0 0 1629.222 298.659 Q 1691.008 293.489 1731.165 277.071 A 184.202 184.202 0 0 0 1744.507 271.005 A 130.778 130.778 0 0 0 1774.565 250.614 A 89.569 89.569 0 0 0 1803.955 181.893 A 91.775 91.775 0 0 0 1769.108 107.476 A 137.608 137.608 0 0 0 1744.507 91.561 Q 1685.059 61.044 1567.871 61.044 A 728.957 728.957 0 0 0 1506.412 63.458 Q 1444.539 68.711 1404.434 85.397 A 181.668 181.668 0 0 0 1391.113 91.561 A 129.648 129.648 0 0 0 1360.148 113.186 A 91.464 91.464 0 0 0 1331.787 181.893 A 90.083 90.083 0 0 0 1366.386 255.189 A 136.912 136.912 0 0 0 1391.113 271.005 A 223.392 223.392 0 0 0 1436.302 287.478 Q 1488.972 301.034 1567.871 301.034 Z M 364.014 66.903 L 80.078 66.903 L 80.078 199.96 L 364.014 199.96 Q 457.52 199.96 457.52 134.042 A 67.153 67.153 0 0 0 450.327 101.965 Q 435.49 74.206 390.044 68.424 A 206.916 206.916 0 0 0 364.014 66.903 Z M 1011.719 63.485 L 722.412 63.485 L 722.412 180.917 L 1011.719 180.917 A 165.82 165.82 0 0 0 1040.797 178.601 Q 1092.773 169.293 1092.773 122.567 A 60.079 60.079 0 0 0 1086.713 94.674 Q 1073.855 69.771 1033.718 64.752 A 177.838 177.838 0 0 0 1011.719 63.485 Z" />
          </g>
        </svg> */}

        <svg
          preserveAspectRatio="none"
          width="100%"
          height="100%"
          viewBox="0 0 31105 4935"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="svgGroup"
            stroke-linecap="round"
            fill-rule="evenodd"
            font-size="9pt"
            stroke="#00000000"
            stroke-width="0"
            fill="#000"
          >
            <path d="M 27755 1210 L 27755 1140 A 829.756 829.756 0 0 1 27932.582 627.364 A 1071.055 1071.055 0 0 1 27975 575 A 1373.144 1373.144 0 0 1 28308.594 297.266 A 1814.501 1814.501 0 0 1 28565 170 Q 28935 20 29395 20 L 29435 15 Q 29840 15 30232.5 170 Q 30625 325 30855 675 L 30770 720 A 1444.649 1444.649 0 0 0 29897.411 163.762 A 2295.531 2295.531 0 0 0 29385 110 A 1746.156 1746.156 0 0 0 28856.699 208.613 A 1591.238 1591.238 0 0 0 28640 305 Q 28377.375 444.876 28264.689 625.496 A 546.03 546.03 0 0 0 28180 920 A 587.883 587.883 0 0 0 28318.252 1260.742 A 791.495 791.495 0 0 0 28382.5 1330 Q 28538.643 1479.897 28807.479 1556.978 A 1703.012 1703.012 0 0 0 28920 1585 A 6401.677 6401.677 0 0 0 29192.988 1643.711 A 8180.246 8180.246 0 0 0 29425 1685 Q 29660 1725 29895 1777.5 Q 30130 1830 30347.5 1905 A 1679.902 1679.902 0 0 1 30612.512 2021.741 A 1436.607 1436.607 0 0 1 30735 2097.5 Q 30905 2215 31005 2390 A 733.098 733.098 0 0 1 31085.859 2610.605 Q 31105 2705.625 31105 2815 A 819.719 819.719 0 0 1 30928.906 3322.227 A 1072.17 1072.17 0 0 1 30875 3387.5 A 1411.15 1411.15 0 0 1 30548.005 3654.738 A 1921.95 1921.95 0 0 1 30255 3797.5 A 2228.515 2228.515 0 0 1 29653.047 3937.937 A 2704 2704 0 0 1 29395 3950 A 2473.443 2473.443 0 0 1 28745.872 3869.732 A 1715.435 1715.435 0 0 1 27815 3255 A 4.904 4.904 0 0 1 27816.719 3252.734 Q 27826.996 3242.924 27898.724 3196.802 A 6634.582 6634.582 0 0 1 27925 3180 Q 28150 3485 28480 3665 A 1461.187 1461.187 0 0 0 28852.175 3804.154 Q 29023.589 3844.293 29223.854 3855.582 A 2864.07 2864.07 0 0 0 29385 3860 Q 29765 3860 30097.5 3710 Q 30430 3560 30585 3310 Q 30665 3185 30665 3010 A 430.382 430.382 0 0 0 30542.19 2712.386 Q 30428.613 2588.496 30210 2490 Q 29962.357 2370.173 29440.307 2275.872 A 9145.273 9145.273 0 0 0 29160 2230 Q 28885 2190 28685 2145 Q 27756.758 1940.388 27755.003 1212.758 A 1143.738 1143.738 0 0 1 27755 1210 Z M 16975 2005 L 16975 3795 L 19300 3795 L 19300 3870 L 16300 3870 L 16300 65 L 19300 65 L 19300 140 L 16975 140 L 16975 1935 L 18930 1935 L 18930 2005 L 16975 2005 Z M 7565 3875 L 5790 2005 L 4990 2005 L 5000 3875 L 4320 3875 L 4320 35 Q 5071.543 35 5409.35 31.663 A 19622.828 19622.828 0 0 0 5540 30 L 6390 30 A 3470.024 3470.024 0 0 1 6772.701 55.942 Q 6965.92 80.593 7126.65 128.176 A 1491.389 1491.389 0 0 1 7385 230 A 1438.253 1438.253 0 0 1 7640.685 394.459 Q 7940 639.844 7940 985 A 580.756 580.756 0 0 1 7928.774 1093.55 Q 7908.704 1198.511 7852.75 1331.801 A 1943.04 1943.04 0 0 1 7845 1350 A 568.898 568.898 0 0 1 7747.192 1499.478 Q 7622.813 1640.469 7380 1775 A 1635.821 1635.821 0 0 1 7063.383 1902.317 Q 6833.867 1969.512 6545 1995 L 8280 3875 L 7565 3875 Z M 23385 635 L 23295 680 A 1105.184 1105.184 0 0 0 23015.665 413.077 A 1460.284 1460.284 0 0 0 22815 300 Q 22445 125 22040 125 Q 21665 125 21327.5 280 Q 20990 435 20770 730 Q 20550 1025 20442.5 1367.5 Q 20335 1710 20335 2010 Q 20335 2755 20835 3300 A 2007.459 2007.459 0 0 0 21323.979 3659.517 A 1623.455 1623.455 0 0 0 22075 3840 A 1714.372 1714.372 0 0 0 22608.429 3752.562 A 2010.832 2010.832 0 0 0 22720 3712.5 A 2281.206 2281.206 0 0 0 23148.442 3491.765 A 2023.367 2023.367 0 0 0 23295 3385 L 23370 3445 A 2104.908 2104.908 0 0 1 22367.154 3908.861 A 2940.584 2940.584 0 0 1 21835 3955 A 2580.634 2580.634 0 0 1 21129.434 3860.396 A 2372.086 2372.086 0 0 1 20945 3800 A 2459.6 2459.6 0 0 1 20369.615 3496.711 A 2241.015 2241.015 0 0 1 20217.5 3377.5 Q 19905 3110 19727.5 2750 Q 19550 2390 19550 1985 Q 19550 1575 19727.5 1220 Q 19905 865 20217.5 592.5 A 2286.213 2286.213 0 0 1 20887.147 189.539 A 2608.044 2608.044 0 0 1 20945 167.5 A 2527.107 2527.107 0 0 1 21731.812 16.824 A 2899.674 2899.674 0 0 1 21835 15 Q 22425 20 22830 207.5 A 2069.702 2069.702 0 0 1 23053.124 326.632 Q 23159.802 392.957 23239.391 464.859 A 809.183 809.183 0 0 1 23385 635 Z M 27685 145 L 25980 145 L 25980 3875 L 25305 3875 L 25305 145 L 23655 145 L 23655 70 L 27685 70 L 27685 145 Z M 665 2015 L 675 3865 L 0 3865 L 0 60 L 2050 60 Q 2635 65 2980 220 A 1327.776 1327.776 0 0 1 3258.543 384.735 A 766.865 766.865 0 0 1 3570 1015 Q 3570 1060 3552.5 1210 Q 3536.653 1345.828 3399.862 1537.003 A 1802.72 1802.72 0 0 1 3370 1577.5 Q 3205 1795 2940 1910 A 1129.246 1129.246 0 0 1 2752.789 1964.858 Q 2537.422 2010 2225 2010 L 2055 2015 L 665 2015 Z M 10880 3940 Q 10155 3930 9652.5 3632.5 Q 9150 3335 8887.5 2882.5 Q 8625 2430 8625 1970 Q 8625 1495 8890 1042.5 A 1949.81 1949.81 0 0 1 9440.861 444.864 A 2438.626 2438.626 0 0 1 9667.5 300 Q 10180 10 10920 0 A 2577.194 2577.194 0 0 1 11408.203 49.009 A 1990.012 1990.012 0 0 1 11840 187.5 A 2178.854 2178.854 0 0 1 12310.09 475.481 A 1924.553 1924.553 0 0 1 12512.5 665 Q 12785 960 12925 1305 A 1977.659 1977.659 0 0 1 13034.23 1664.466 A 1571.72 1571.72 0 0 1 13065 1970 A 1639.843 1639.843 0 0 1 13003.63 2406.252 A 2072.635 2072.635 0 0 1 12922.5 2642.5 Q 12780 2990 12500 3280 A 2076.618 2076.618 0 0 1 11984.68 3665.986 A 2478.759 2478.759 0 0 1 11812.5 3750 A 2187.349 2187.349 0 0 1 11260.982 3908.015 A 2842.336 2842.336 0 0 1 10880 3940 Z M 13485 4935 L 13430 4855 A 1504.457 1504.457 0 0 0 13945.703 3972.173 A 2286.015 2286.015 0 0 0 13990 3510 L 13990 60 L 14665 60 L 14665 3380 Q 14660 3805 14512.5 4090 Q 14365 4375 14102.5 4572.5 A 3053.967 3053.967 0 0 1 13777.92 4784.404 A 3980.355 3980.355 0 0 1 13485 4935 Z M 10895 3875 A 1317.357 1317.357 0 0 0 11172.734 3846.985 A 1016.17 1016.17 0 0 0 11445 3747.5 Q 11680 3620 11845 3407.5 Q 12010 3195 12112.5 2942.5 Q 12215 2690 12262.5 2432.5 Q 12310 2175 12310 1960 Q 12310 1320 12005 755 A 1484.05 1484.05 0 0 0 11727.181 376.393 Q 11407.537 68.253 10930.193 60.181 A 1517.526 1517.526 0 0 0 10915 60 A 1501.608 1501.608 0 0 0 10361.118 168.937 Q 9961.875 335.312 9715 755 Q 9385 1315 9385 1965 A 1792.384 1792.384 0 0 0 9409.917 2252.798 Q 9433.259 2395.935 9478.466 2554.691 A 3551.395 3551.395 0 0 0 9525 2705 A 2218.104 2218.104 0 0 0 9721.897 3146.872 A 1745.937 1745.937 0 0 0 10000 3505 A 1217.601 1217.601 0 0 0 10878.632 3874.91 A 1479.657 1479.657 0 0 0 10895 3875 Z M 4990 1930 L 6405 1930 Q 6655 1915 6840 1732.5 A 1039.653 1039.653 0 0 0 7071.343 1382.902 A 1270.708 1270.708 0 0 0 7110 1275 A 1118.337 1118.337 0 0 0 7174.417 940.049 A 1053.587 1053.587 0 0 0 7175 905 Q 7175 840.171 7160.457 722.988 A 4284.441 4284.441 0 0 0 7150 645 A 459.24 459.24 0 0 0 7097.021 490.918 Q 7042.969 391.25 6937.5 290 A 587.433 587.433 0 0 0 6716.206 159.318 Q 6625.633 128.494 6514.993 116.935 A 1348.627 1348.627 0 0 0 6375 110 L 5855 115 L 5000 105 L 4990 1930 Z M 665 1940 L 2065 1940 Q 2310 1925 2495 1742.5 A 1069.988 1069.988 0 0 0 2751.108 1335.903 A 1261.132 1261.132 0 0 0 2765 1295 Q 2825 1110 2825 925 A 921.711 921.711 0 0 0 2823.594 877.031 Q 2820.702 822.08 2811.861 743.998 A 4556.939 4556.939 0 0 0 2802.5 667.5 Q 2785.142 534.419 2669.577 398.362 A 1030.219 1030.219 0 0 0 2592.5 317.5 A 591.771 591.771 0 0 0 2369.118 187.55 Q 2277.756 157.088 2166.329 146.141 A 1344.34 1344.34 0 0 0 2035 140 L 1520 140 L 675 135 L 665 1940 Z" />
          </g>
        </svg>
        {/* <h2 ref={ref}>Projects</h2> */}
      </div>

      <div className={styles.projectsDisplay}>
        <SkewedParallax baseVelocity={1} lengthStart={-5} lengthEnd={-30}>
          <div className={styles.wrapper}>
            <h4>Project name</h4>
            <p>Description </p>
          </div>
          <div className={styles.wrapper}>
            <h4>Project name</h4>
            <p>Werk histry 2 </p>
          </div>
          <div className={styles.wrapper}>
            <h4>Project name</h4>
            <p>Werk histry 3</p>
          </div>
          <div className={styles.wrapper}>
            <h4>Project name</h4>
            <p>Werk histry</p>
          </div>
        </SkewedParallax>
      </div>
      <Button label="Github" />
    </div>
  );
}

export default Work;
