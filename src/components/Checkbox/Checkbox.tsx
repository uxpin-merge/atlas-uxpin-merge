import React from 'react';
import CheckboxM from '@atlaskit/checkbox';
import { OwnProps } from '@atlaskit/checkbox/dist/types/types'

interface CheckboxPropsMerge extends Omit<OwnProps, 'label'> {
    // Set label as `string` since `ReactChild` does not work
    label?: string;
}


/**
 * @uxpindocurl https://atlassian.design/components/checkbox/examples
 */
const Checkbox = (props: CheckboxPropsMerge) => {
  return (
      <CheckboxM {...props}/>
  );
};

export default Checkbox;