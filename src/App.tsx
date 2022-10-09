import React, { FC } from "react";
import { AppContainer } from "./styles";

type Props = {
   children?: React.ReactNode;
};

export const App: FC<Props> = ({ children }) => {
   return (
      <AppContainer>
         {children}
      </AppContainer>
   );
};
