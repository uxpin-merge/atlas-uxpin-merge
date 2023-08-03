import React from "react";
import TextAreaM from '@atlaskit/textarea';
import { OwnProps } from '@atlaskit/textarea/dist/types/types';

function TextArea(props: OwnProps) {
  return (
    <TextAreaM {...props}/>
  );
}

export { TextArea as default };
