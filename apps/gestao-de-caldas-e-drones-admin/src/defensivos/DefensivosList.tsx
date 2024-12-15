import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CALDA_TITLE_FIELD } from "../calda/CaldaTitle";

export const DefensivosList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"DefensivosItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <ReferenceField label="Calda" source="calda.id" reference="Calda">
          <TextField source={CALDA_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Descricao" source="descricao" />
        <TextField label="ID" source="id" />
        <TextField label="Nome" source="nome" />
        <TextField label="Tipo" source="tipo" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
