import React from "react";
// import Form, {
//   CheckboxField,
//   ErrorMessage,
//   Field,
//   FormFooter,
//   FormHeader,
//   FormSection,
//   HelperMessage,
//   RequiredAsterisk,
//   ValidMessage,
// } from '@atlaskit/form';

/**
 * @uxpindocurl https://atlassian.design/components/textfield/examples
 */
import TextFieldM, {TextFieldProps} from '@atlaskit/textfield';

function TextField(props: TextFieldProps) {
  return (
    <TextFieldM {...props}/>
  );
}

export { TextField as default };
