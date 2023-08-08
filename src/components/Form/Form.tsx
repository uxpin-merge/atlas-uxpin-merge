import React from "react";
import FormM, {
  CheckboxField,
  ErrorMessage,
  Field,
  FormFooter,
  FormHeader,
  FormSection,
  HelperMessage,
  RequiredAsterisk,
  ValidMessage,
} from '@atlaskit/form';

export interface FormProps {
  /**
     *  The contents rendered inside of the form. This is a function where the props will be passed from the form. The function props you can access are `dirty`, `submitting` and `disabled`.
     *  You can read more about these props in [react-final form documentation](https://final-form.org/docs/final-form/types/FormState).
     */
  children?: React.ReactNode
  /**
   *   Event handler called when the form is submitted. Fields must be free of validation errors.
   */
  onSubmit: () => (void);
  /**
   *   Sets the form and its fields as disabled. Users cannot edit or focus on the fields.
   */
  isDisabled?: boolean;
};


/**
 * @uxpindocurl https://atlassian.design/components/form/examples
 */

function Form(props: FormProps) {
  return (
    <FormM {...props}>
      {() => props.children}
    </FormM>
  );
}

export { Form as default };
