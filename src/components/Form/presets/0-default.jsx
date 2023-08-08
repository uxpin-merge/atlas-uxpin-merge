import React from 'react';
import Form from '../Form'
import TextField from '../../TextField/TextField'
import FormHeader from '../FormHeader/FormHeader';
import HelperMessage from '../HelperMessage/HelperMessage';
import Field from '../Field/Field';


export default (
    <Form uxpId="form">
        <FormHeader uxpId="form-header" title="Sign in" />
        <Field
              aria-required={true}
              name="username"
              label="Username"
              isRequired
              defaultValue="dst12"
              uxpId="form-field"
            >
        <TextField uxpId="text-field" type="password"/>
        <HelperMessage uxpId="form-helper-message">
            You can use letters, numbers and periods.
        </HelperMessage>
        </Field>
    </Form>
)