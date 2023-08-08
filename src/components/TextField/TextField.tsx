import React from "react";
import TextFieldM, {TextFieldProps} from '@atlaskit/textfield';

/**
 * @uxpindocurl https://atlassian.design/components/textfield/examples
 */
function TextField(props: TextFieldProps) {
  return (
    <TextFieldM {...props}/>
  );
}

export { TextField as default };
