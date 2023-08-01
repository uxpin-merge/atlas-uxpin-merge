import * as React from "react";
import { AtlassianNavigation, PrimaryButton, AtlassianNavigationProps, PrimaryButtonProps } from '@atlaskit/atlassian-navigation';


// export interface MergeButtonProps extends ButtonProps{
//   children: React.ReactNode;
//   iconAfter:React.ReactNode;
//   iconBefore:React.ReactNode;
// }

/**
 * @uxpindocurl https://atlassian.design/components/button/examples
 */
function Navigation(props: AtlassianNavigationProps) {
  return (
    <AtlassianNavigation {...props} primaryItems={[
      <PrimaryButton>Explore</PrimaryButton>,
      <PrimaryButton>Issues</PrimaryButton>,
      <PrimaryButton>Services</PrimaryButton>,
    ]}/>
  );
}

export { Navigation as default };
