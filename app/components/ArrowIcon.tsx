import Svg, {Path} from "react-native-svg";
import * as React from "react";

export default (props) => {
    return (
        <Svg {...props}>
            <Path
                d="M1.77132 15.5304L1.77131 15.5304C1.41177 15.8899 0.828874 15.8899 0.469543 15.5304L0.469515 15.5304C0.110193 15.171 0.110131 14.5883 0.469511 14.2287C0.469523 14.2287 0.469536 14.2286 0.469549 14.2286L6.55706 8.14147L6.69849 8.00005L6.55706 7.85862L0.469755 1.77143C0.110345 1.41187 0.110395 0.829148 0.469721 0.469851L0.46979 0.469783C0.829112 0.11014 1.41195 0.110099 1.77149 0.469811L1.77153 0.469848L8.65118 7.34932C8.6512 7.34934 8.65122 7.34936 8.65124 7.34938C8.83074 7.52906 8.92045 7.76423 8.92045 8.00004C8.92045 8.23588 8.83055 8.47108 8.65102 8.65071C8.65101 8.65073 8.651 8.65074 8.65099 8.65075L1.77132 15.5304Z"
                fill={props.fill} stroke="white" stroke-width="0.4"/>
        </Svg>
    );
}