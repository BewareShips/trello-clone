import React, { FC } from "react";
import { AddNewItem } from "./AddNewItem";
import { Column } from "./Column";
import { addList } from "./state/actions";
import { useAppState } from "./state/AppStateContext";
import { AppContainer } from "./styles";

type Props = {
   children?: React.ReactNode;
};

export const App: FC<Props> = () => {
   const {lists,dispatch} = useAppState()
   return (
      <AppContainer>
         {lists.map((list)=>(
            <Column text={list.text} key={list.id} id={list.id}/>
         ))}
        
         <AddNewItem
            onAdd={text => dispatch(addList(text))}
            toggleButtonText="+ Add another list"
         />
      </AppContainer>
   );
};
