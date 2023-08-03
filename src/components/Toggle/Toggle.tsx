import React from "react";
import ToggleM from '@atlaskit/toggle';
import { ToggleProps } from '@atlaskit/toggle/dist/types/types';

function Toggle(props: ToggleProps) {
  return (
    <ToggleM {...props}/>
  );
}

export { Toggle as default };
