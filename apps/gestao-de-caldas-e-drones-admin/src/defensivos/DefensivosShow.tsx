import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { CALDA_TITLE_FIELD } from "../calda/CaldaTitle";

export const DefensivosShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Calda" source="calda.id" reference="Calda">
          <TextField source={CALDA_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Descricao" source="descricao" />
        <TextField label="ID" source="id" />
        <TextField label="Nome" source="nome" />
        <TextField label="Tipo" source="tipo" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
