import * as React from "react";
import AddCircleIconM from '@atlaskit/icon/glyph/add-circle'
import { GlyphProps } from '@atlaskit/icon/types';


// export interface MergeButtonProps extends ButtonProps{
//   children: React.ReactNode;
//   iconAfter:React.ReactNode;
//   iconBefore:React.ReactNode;
// }

/**
 * @uxpindocurl https://atlassian.design/components/icon/examples
 */
function AddCircleIcon(props: GlyphProps) {
  return (
    <AddCircleIconM {...props}/>
  );
}

export { AddCircleIcon as default };
