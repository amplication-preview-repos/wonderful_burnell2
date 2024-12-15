import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AreaList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Areas"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Fazenda" source="fazenda" />
        <TextField label="ID" source="id" />
        <TextField label="Nome" source="nome" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
