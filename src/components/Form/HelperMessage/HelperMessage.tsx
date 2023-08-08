import React from "react";
import { HelperMessage as HelperMessageM } from '@atlaskit/form';

export interface HelperMessageProps {
  /**
   * The content of the message
   */
  children: React.ReactNode;
  /**
   * A testId prop is provided for specified elements, which is a unique string
   *  that appears as a data attribute data-testid in the rendered code,
   *  serving as a hook for automated tests
   */
  testId?: string;
};


/**
 * @uxpindocurl https://atlassian.design/components/form/examples
 */

function HelperMessage(props: HelperMessageProps) {
  return (
    <HelperMessageM {...props} />
  );
}

export { HelperMessage as default };
