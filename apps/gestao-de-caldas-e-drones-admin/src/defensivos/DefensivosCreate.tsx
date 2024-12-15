import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { CaldaTitle } from "../calda/CaldaTitle";

export const DefensivosCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="calda.id" reference="Calda" label="Calda">
          <SelectInput optionText={CaldaTitle} />
        </ReferenceInput>
        <TextInput label="Descricao" multiline source="descricao" />
        <TextInput label="Nome" source="nome" />
        <TextInput label="Tipo" source="tipo" />
      </SimpleForm>
    </Create>
  );
};
