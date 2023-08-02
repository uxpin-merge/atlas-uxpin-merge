import React from "react";
import DynamicTableM from '@atlaskit/dynamic-table';
import { StatefulProps } from "@atlaskit/dynamic-table/types";

/**
 * @uxpindocurl https://atlassian.design/components/DynamicTable/examples
 */

function DynamicTable(props: StatefulProps) {
  return (
    <DynamicTableM {...props}/>
  );
}

export { DynamicTable as default };
