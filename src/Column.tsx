import React, { FC, useRef } from "react";
import { AddNewItem } from "./AddNewItem";
import { ColumnContainer, ColumnTitle } from "./styles";
import { useAppState } from "./state/AppStateContext";
import { Card } from "./Card";
import { moveList, addTask } from "./state/actions";
import { useDrop } from "react-dnd";
import { useItemDrag } from "./utils/useItemDrag";
import { isHidden } from "./utils/isHidden"

type ColumnProps = {
   text: string;
   id: string;
   //children?: React.ReactNode;
};
export const Column: FC<ColumnProps> = ({ text, id }) => {
   const { draggedItem, getTasksByListId, dispatch } = useAppState();
   const tasks = getTasksByListId(id);
   const ref = useRef<HTMLDivElement>(null);
   const [, drop] = useDrop({ 
      accept: "COLUMN",
      hover(){
         if(!draggedItem){
            return
         }
         if(draggedItem.type ==="COLUMN"){
            if(draggedItem.id === id){
               return
            }
         }
         dispatch(moveList(draggedItem.id,id))
         
      },
      drop:(item:any)=>{
         console.log(item,'dropping');
         
      }
   });
   const { drag } = useItemDrag({ id, text, type: "COLUMN" });
   drag(drop(ref));
   return (
      <ColumnContainer ref={ref} isHidden={isHidden(draggedItem,"COLUMN",id)}>
         <ColumnTitle>{text}</ColumnTitle>
         {tasks.map((task) => (
            <Card text={task.text} key={task.id} id={task.id} />
         ))}
         <AddNewItem
            toggleButtonText="+ Add another task"
            onAdd={(text) => dispatch(addTask(text, id))}
            dark
         />
      </ColumnContainer>
   );
};
