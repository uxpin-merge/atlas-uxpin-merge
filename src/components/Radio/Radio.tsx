import React from "react";
import { Radio as RadioM } from '@atlaskit/radio';
import { RadioProps } from '@atlaskit/radio/dist/types/types';

function Radio(props: RadioProps) {
  return (
    <RadioM {...props}/>
  );
}

export { Radio as default };
