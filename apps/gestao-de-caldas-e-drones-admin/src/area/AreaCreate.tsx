import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const AreaCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Fazenda" source="fazenda" />
        <TextInput label="Nome" source="nome" />
      </SimpleForm>
    </Create>
  );
};
