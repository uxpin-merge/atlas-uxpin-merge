import * as React from "react";
import {  PrimaryButton as PrimaryButtonM, PrimaryButtonProps } from '@atlaskit/atlassian-navigation';


// export interface MergeButtonProps extends ButtonProps{
//   children: React.ReactNode;
//   iconAfter:React.ReactNode;
//   iconBefore:React.ReactNode;
// }

/**
 * @uxpindocurl https://atlassian.design/components/button/examples
 */
function PrimaryButton(props: PrimaryButtonProps) {
  return (

      <PrimaryButtonM {...props}/>

  );
}

export { PrimaryButton as default };
