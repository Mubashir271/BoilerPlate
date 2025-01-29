import * as React from "react";
import Svg, { G, Rect, Path, Defs, ClipPath } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const CenterSvg = (props) => (
  <Svg
    width={90}
    height={90}
    viewBox="0 0 90 90"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G filter="url(#filter0_d_351_21674)">
      <Rect x={19} y={11} width={52} height={52} rx={26} fill="#282E68" />
      <G clipPath="url(#clip0_351_21674)">
        <Path
          d="M47.2641 25.0657C46.2094 25.2673 45.2344 25.7829 44.4797 26.5423C43.6781 27.3485 43.2 28.2438 42.9328 29.4298C42.8906 29.6079 42.8672 29.9876 42.8719 30.4845C42.8766 31.3376 42.9609 31.7642 43.2609 32.5188C43.4953 33.1048 43.6922 33.3954 45.3375 35.6173L46.9031 37.7267L43.8094 37.7501L40.7109 37.7735L40.3875 37.9048C39.6 38.2188 39.0141 38.8517 38.7844 39.6485C38.6578 40.0892 38.6766 40.7313 38.8312 41.186C38.8969 41.3829 39.0094 41.636 39.075 41.7438C39.3937 42.2501 39.9422 42.6813 40.4953 42.8735L40.8047 42.9767L47.7422 43.0001C54.4828 43.0235 54.6844 43.0282 54.8625 43.1126C55.1062 43.2345 55.35 43.4829 55.4578 43.722C55.5609 43.9563 55.575 44.4345 55.4812 44.6595C55.3922 44.8798 55.0969 45.1892 54.8719 45.311L54.6797 45.4142L46.6312 45.4282C39.0984 45.4376 38.5781 45.4329 38.5781 45.3579C38.5781 45.3157 38.4937 45.1001 38.3859 44.8845C38.0391 44.172 37.3312 43.5907 36.5625 43.3938C36.1734 43.2954 35.4937 43.2954 35.1141 43.3938C34.1391 43.647 33.3328 44.4532 33.0703 45.4376C32.9812 45.7704 32.9812 46.5579 33.0703 46.8907C33.3281 47.861 34.1391 48.672 35.1094 48.9298C35.4422 49.0188 36.2297 49.0188 36.5625 48.9298C37.3547 48.7188 38.0391 48.161 38.3859 47.4438C38.4937 47.2282 38.5781 47.0126 38.5781 46.9704C38.5781 46.8954 39.1266 46.8907 46.6078 46.8907C54.4828 46.8907 54.6469 46.8907 55.0078 46.797C55.8984 46.5673 56.5641 45.9579 56.8687 45.0907C56.9766 44.772 57 44.636 57 44.2423C57 43.9798 56.9672 43.661 56.9297 43.5157C56.6859 42.6017 55.9031 41.8376 54.9797 41.6173C54.7219 41.5563 53.7797 41.547 47.9484 41.547C40.7203 41.547 40.9828 41.5563 40.6406 41.3126C40.4156 41.1532 40.2281 40.8626 40.1719 40.5813C40.0969 40.2298 40.2 39.8829 40.4625 39.5923C40.8328 39.1985 40.4766 39.2313 44.7516 39.2032L48.5531 39.1798L48.7219 39.0392C48.8906 38.9032 52.6969 33.6954 53.0109 33.1845C53.7656 31.9329 53.9391 30.2032 53.4562 28.722C52.9969 27.3063 51.9562 26.1251 50.6016 25.4876C49.8703 25.1407 49.3875 25.0376 48.4219 25.0188C47.8687 25.0095 47.4937 25.0235 47.2641 25.0657ZM49.4297 26.5985C50.8266 27.0204 51.9 28.2063 52.2047 29.6595C52.2797 30.0345 52.2937 30.8173 52.2234 31.1688C52.1531 31.5392 51.9937 31.9751 51.8203 32.2985C51.6656 32.5798 48.4031 37.1032 48.3328 37.1313C48.2859 37.1454 45.0375 32.7626 44.8078 32.3735C44.1984 31.3282 44.1375 29.9735 44.6484 28.8251C45.1359 27.7235 46.125 26.8657 47.2547 26.5704C47.8969 26.397 48.8109 26.411 49.4297 26.5985ZM36.3984 44.8938C36.7359 45.0485 36.9141 45.2173 37.0734 45.5407C37.4344 46.2579 37.1297 47.1017 36.3937 47.4392C35.8875 47.6688 35.2594 47.5517 34.8516 47.1485C34.2234 46.5204 34.35 45.4235 35.0953 44.9829C35.55 44.7157 35.9484 44.6876 36.3984 44.8938Z"
          fill="white"
        />
        <Path
          d="M47.7187 28.3095C47.3953 28.3985 47.1047 28.5673 46.8141 28.8392C45.7594 29.8235 46.05 31.6704 47.3578 32.2798C48.6703 32.8985 50.1656 32.1157 50.3953 30.6907C50.6391 29.1767 49.2141 27.9063 47.7187 28.3095ZM48.6141 29.7907C48.8484 29.922 49.0078 30.2267 48.9656 30.461C48.9 30.7985 48.5437 31.0751 48.225 31.0329C47.5547 30.9438 47.4 30.072 48 29.772C48.2203 29.6595 48.3937 29.6642 48.6141 29.7907Z"
          fill="white"
        />
      </G>
    </G>
    <Defs>
      <ClipPath id="clip0_351_21674">
        <Rect
          width={24}
          height={24}
          fill="white"
          transform="translate(33 25)"
        />
      </ClipPath>
    </Defs>
  </Svg>
);
export default CenterSvg;
