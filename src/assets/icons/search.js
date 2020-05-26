import React from "react";
import Svg, { Path } from "react-native-svg";

export default function SunnyIcon() {
  return (
    <Svg height="24" width="24">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 11.8487 17.3729 13.551 16.3199 14.9056L21.7071 20.2929L20.2929 21.7071L14.9056 16.3199C13.551 17.3729 11.8487 18 10 18ZM16 10C16 13.3137 13.3137 16 10 16C6.68629 16 4 13.3137 4 10C4 6.68629 6.68629 4 10 4C13.3137 4 16 6.68629 16 10Z"
        fill="black"
      />
    </Svg>
  );
}
