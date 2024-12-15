import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { CaldaList } from "./calda/CaldaList";
import { CaldaCreate } from "./calda/CaldaCreate";
import { CaldaEdit } from "./calda/CaldaEdit";
import { CaldaShow } from "./calda/CaldaShow";
import { AreaList } from "./area/AreaList";
import { AreaCreate } from "./area/AreaCreate";
import { AreaEdit } from "./area/AreaEdit";
import { AreaShow } from "./area/AreaShow";
import { PulverizacaoList } from "./pulverizacao/PulverizacaoList";
import { PulverizacaoCreate } from "./pulverizacao/PulverizacaoCreate";
import { PulverizacaoEdit } from "./pulverizacao/PulverizacaoEdit";
import { PulverizacaoShow } from "./pulverizacao/PulverizacaoShow";
import { DroneList } from "./drone/DroneList";
import { DroneCreate } from "./drone/DroneCreate";
import { DroneEdit } from "./drone/DroneEdit";
import { DroneShow } from "./drone/DroneShow";
import { DefensivosList } from "./defensivos/DefensivosList";
import { DefensivosCreate } from "./defensivos/DefensivosCreate";
import { DefensivosEdit } from "./defensivos/DefensivosEdit";
import { DefensivosShow } from "./defensivos/DefensivosShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"Gestão de Caldas e Drones"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Calda"
          list={CaldaList}
          edit={CaldaEdit}
          create={CaldaCreate}
          show={CaldaShow}
        />
        <Resource
          name="Area"
          list={AreaList}
          edit={AreaEdit}
          create={AreaCreate}
          show={AreaShow}
        />
        <Resource
          name="Pulverizacao"
          list={PulverizacaoList}
          edit={PulverizacaoEdit}
          create={PulverizacaoCreate}
          show={PulverizacaoShow}
        />
        <Resource
          name="Drone"
          list={DroneList}
          edit={DroneEdit}
          create={DroneCreate}
          show={DroneShow}
        />
        <Resource
          name="Defensivos"
          list={DefensivosList}
          edit={DefensivosEdit}
          create={DefensivosCreate}
          show={DefensivosShow}
        />
      </Admin>
    </div>
  );
};

export default App;
