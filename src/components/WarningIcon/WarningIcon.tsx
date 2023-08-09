import * as React from "react";
import WarningIconM from '@atlaskit/icon/glyph/warning';
import { GlyphProps } from '@atlaskit/icon/types';

/**
 * @uxpindocurl https://atlassian.design/components/icon/examples
 */
function WarningIcon(props: GlyphProps) {
  return (
    <WarningIconM {...props}/>
  );
}

export { WarningIcon as default };
