import React from "react";
import ButtonM, { ButtonProps } from '@atlaskit/button';

/**
 * @uxpindocurl https://atlassian.design/components/button/examples
 */
function Button(props: ButtonProps) {
  return (
    <ButtonM {...props}/>
  );
}

export { Button as default };
