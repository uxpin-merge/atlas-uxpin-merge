import React from "react";
import FormM, {
  CheckboxField,
  ErrorMessage,
  Field,
  FormFooter,
  FormHeader as FormHeaderM,
  
  HelperMessage,
  RequiredAsterisk,
  ValidMessage,
} from '@atlaskit/form';

export interface FormHeaderProps {
      /**
     * Title of the form. This is a header.
     */
      title?: React.ReactNode;
      /**
       * Description or subtitle of the form.
       */
      description?: React.ReactNode;
      /**
       * Child content to render in the form below the title and description.
       */
      children?: React.ReactNode;
};


/**
 * @uxpindocurl https://atlassian.design/components/form/examples
 */

function FormHeader(props: FormHeaderProps) {
  return (
    <FormHeaderM {...props}/>
  );
}

export { FormHeader as default };
