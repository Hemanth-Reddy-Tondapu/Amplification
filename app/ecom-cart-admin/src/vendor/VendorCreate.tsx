import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const VendorCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="address" source="address" />
        <TextInput label="cEmail" source="cEmail" type="email" />
        <TextInput label="city" source="city" />
        <TextInput label="cName" source="cName" />
        <TextInput label="country" source="country" />
        <NumberInput step={1} label="cPhone" source="cPhone" />
        <TextInput label="name" source="name" />
        <TextInput label="state" source="state" />
      </SimpleForm>
    </Create>
  );
};
