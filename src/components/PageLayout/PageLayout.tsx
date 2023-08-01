import * as React from "react";

import  {PageLayout as PageLayoutM} from '@atlaskit/page-layout';
import  {Content} from '@atlaskit/page-layout';
import {PageLayoutProps} from '@atlaskit/page-layout/dist/types/common/types'; 
import Page, { Grid, GridColumn } from '@atlaskit/page';

// export interface MergeButtonProps extends ButtonProps{
//   children: React.ReactNode;
//   iconAfter:React.ReactNode;
//   iconBefore:React.ReactNode;
// }

/**
 * @uxpindocurl https://atlassian.design/components/button/examples
 */
function PageLayout(props: PageLayoutProps) {
  return (
    <PageLayoutM {...props}>
       <Grid spacing="comfortable" columns={12}>
        <GridColumn medium={6}>
          {props.children}
        </GridColumn>
     
      </Grid>
      </PageLayoutM>
  );
}

export { PageLayout as default };
