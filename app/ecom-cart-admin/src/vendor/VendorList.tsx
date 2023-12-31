import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const VendorList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Vendors"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="address" source="address" />
        <TextField label="cEmail" source="cEmail" />
        <TextField label="city" source="city" />
        <TextField label="cName" source="cName" />
        <TextField label="country" source="country" />
        <TextField label="cPhone" source="cPhone" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="state" source="state" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
