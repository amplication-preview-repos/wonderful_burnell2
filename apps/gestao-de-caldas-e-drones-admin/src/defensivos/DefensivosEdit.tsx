import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { CaldaTitle } from "../calda/CaldaTitle";

export const DefensivosEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="calda.id" reference="Calda" label="Calda">
          <SelectInput optionText={CaldaTitle} />
        </ReferenceInput>
        <TextInput label="Descricao" multiline source="descricao" />
        <TextInput label="Nome" source="nome" />
        <TextInput label="Tipo" source="tipo" />
      </SimpleForm>
    </Edit>
  );
};
