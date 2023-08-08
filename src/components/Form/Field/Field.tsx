import React from "react";
import { Field as FieldM, } from '@atlaskit/form';

export interface FieldProps {
  /**
 * Content to render in the field. This is a function that is called with props for the field component and other information about the field.
 */
  children?: React.ReactNode;
  /**
   * Sets the default value of the field. If a function is provided, it is called with the current default value of the field.
   */
  defaultValue?: string;
  /**
   * Passed to the ID attribute of the field. This is randomly generated if it is not specified.
   */
  id?: string;
  /**
   * Sets whether the field is required for submission. Required fields are marked with a red asterisk.
   */
  isRequired?: boolean;
  /**
   * Sets whether the field is disabled. Users cannot edit or focus on the fields. If the parent form component is disabled, then the field will always be disabled.
   */
  isDisabled?: boolean;
  /**
   * Label displayed above the form field.
   */
  label?: React.ReactNode;
  /**
   * Element displayed after the label, and after the red asterisk if field is required.
   */
  elementAfterLabel?: React.ReactNode;
  /**
   * Specifies the name of the field. This is important for referencing the form data.
   */
  name: string;
  /**
   * Access the current field value and transform it to return a different field value.
   */
  // transform?: ()=>(void);
  /**
   * Checks whether the field input is valid. This is usually used to display a message relevant to the current value using `ErrorMessage`, `HelperMessage` or `ValidMessage`.
   */
  validate?: () => (void);
  /**
   * A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests
   */
  testId?: string;
};


/**
 * @uxpindocurl https://atlassian.design/components/form/examples
 */

function Field(props: FieldProps) {
  return (
    <FieldM {...props}>
      {({ }) => props.children}
    </FieldM>
  );
}

export { Field as default };
