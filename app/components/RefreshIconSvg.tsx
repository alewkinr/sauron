import Svg, {Path} from "react-native-svg";
import * as React from "react";

export default (props) => {
    return (
        <Svg {...props}>
            <Path
                d="M14.1751 2.83886C13.6506 2.21803 13.0322 1.67734 12.3385 1.23784C11.0604 0.428048 9.58155 0 8.06203 0C5.92514 0 3.91615 0.832143 2.40515 2.34314C0.894155 3.85414 0.0620117 5.86313 0.0620117 7.99998C0.0620117 10.1368 0.894155 12.1459 2.40515 13.6569C3.91615 15.1678 5.92514 16 8.06203 16C9.70386 16 11.2818 15.5061 12.6253 14.5716C13.937 13.6592 14.9366 12.393 15.516 10.9099L13.697 10.1993C12.784 12.5368 10.572 14.0471 8.06196 14.0471C4.72752 14.0471 2.01475 11.3344 2.01475 7.99991C2.01475 4.66544 4.72756 1.95274 8.06199 1.95274C9.74978 1.95274 11.3105 2.63847 12.4314 3.81392L10.3059 5.0026L13.078 6.65404L15.8502 8.30558L15.8943 5.07914L15.9385 1.8527L14.1751 2.83886Z"
                fill="white"/>
        </Svg>
    );
}