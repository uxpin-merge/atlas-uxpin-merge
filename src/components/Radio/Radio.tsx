import React from "react";
import { Radio as RadioM } from '@atlaskit/radio';

export interface RadioProps {
  /**
   * The label value for the input rendered to the dom
   */
  label?: React.ReactNode;

  /**
   * Makes a `Radio` field unselectable when true. Overridden by `isDisabled` prop of `RadioGroup`.
   */
  isDisabled?: boolean;
  /**
   * Marks this as a required field
   */
  isRequired?: boolean;
  /**
   * Field is invalid
   */
  isInvalid?: boolean;
  /**
   * Set the field as checked
   * @uxpinbind onChange 
   */
  isChecked?: boolean;

  /**
   * onChange event handler, passed into the props of each `Radio` Component instantiated within `RadioGroup`
   */
  onChange?: () => void;
  /**
   * Field value
   */
  value?: string;
  /**
   * the aria-label attribute associated with the radio element
   */
  ariaLabel?: string;
  /**
   * A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests
   * we have 2 different testid generated based on the one you pass to the Radio component:
   * - `{testId}--radio-input` to check if it got changed to checked/unchecked.
   * - `{testId}--radio-label` to click the input
   */
  testId?: string;
  /**
   * Additional information to be included in the `context` of analytics events that come from radio
   * @uxpinignoreprop
   */
  analyticsContext?: Record<string, any>;
};
/**
 * @uxpindocurl https://atlassian.design/components/radio/examples
 */
function Radio(props: RadioProps) {
  return (
    <RadioM {...props} key={Math.random()}/>
  );
}

export { Radio as default };
