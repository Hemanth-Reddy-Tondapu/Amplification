import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const VendorEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
