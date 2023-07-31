import React, { useState } from 'react';
import SelectM, { SelectProps } from '@atlaskit/select';

/**
 * @uxpindocurl https://atlassian.design/components/Select/examples
 */
const Select = (props: SelectProps<'Option'>) => {
  return (
      <SelectM {...props}/>
  );
};

export default Select;