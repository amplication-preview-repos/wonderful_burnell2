import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CALDA_TITLE_FIELD } from "./CaldaTitle";

export const CaldaShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Defensivos"
          target="caldaId"
          label="DefensivosItems"
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
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
