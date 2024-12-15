import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const AreaEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Fazenda" source="fazenda" />
        <TextInput label="Nome" source="nome" />
      </SimpleForm>
    </Edit>
  );
};
