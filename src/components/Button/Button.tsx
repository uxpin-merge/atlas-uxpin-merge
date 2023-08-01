import * as React from "react";

import ButtonM, { ButtonProps } from '@atlaskit/button';

export interface MergeButtonProps extends ButtonProps{
  children: React.ReactNode;
  iconAfter:React.ReactNode;
  iconBefore:React.ReactNode;
}

/**
 * @uxpindocurl https://atlassian.design/components/button/examples
 */
function Button(props: MergeButtonProps) {
  return (
    <ButtonM {...props}/>
  );
}

export { Button as default };
