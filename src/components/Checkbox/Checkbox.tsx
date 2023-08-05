import React from 'react';
import CheckboxM from '@atlaskit/checkbox';

export interface CheckboxProps {
  /**
 * The label to be displayed to the right of the checkbox. The label is part
 * of the clickable element to select the checkbox.
 */
  label?: React.ReactChild;
    /**
   * The size of the Checkbox
   */
    size?: 'small' | 'medium' | 'large' | 'xlarge';
  /**
     * Sets whether the checkbox begins checked.
     */
  defaultChecked?: boolean;

  /**
   * Sets whether the checkbox is checked or unchecked.
  * @uxpinbind onChange 0.target.checked
   */
  isChecked?: boolean;
  /**
   * Sets whether the checkbox is disabled.
   */
  isDisabled?: boolean;
  /**
   * Sets whether the checkbox is indeterminate. This only affects the
   * style and does not modify the isChecked property.
   */
  isIndeterminate?: boolean;
  /**
   * Marks the field as invalid. Changes style of unchecked component.
   */
  isInvalid?: boolean;
  /**
   * Marks the field as required & changes the label style.
   */
  isRequired?: boolean;

  /**
   * The name of the submitted field in a checkbox.
   */
  name?: string;
  /**
   * Function that is called whenever the state of the checkbox changes. It will
   * be called with an object containing the react synthetic event. Use currentTarget to get value, name and checked
   */
  onChange?: () => void;
  /**
   * The value to be used in the checkbox input. This is the value that will be returned on form submission.
   */
  value?: number | string;

  /**
 * id assigned to input
 */
  id?: string;
  /**
   * A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests
   * we have generated testid based on the one you pass to the Checkbox component:
   * - `{testId}--hidden-checkbox` to check if it got changed to checked/unchecked.
   */
  testId?: string;
};


/**
 * @uxpindocurl https://atlassian.design/components/checkbox/examples
 */
const Checkbox = (props: CheckboxProps) => {
  return (
    <CheckboxM {...props} key={Math.random()} />
  );
};

export default Checkbox;