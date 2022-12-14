type Item = {
  id: string
  }

  export const findItemIndexById = <TItem extends Item>(
    items:TItem[],
    id:string
  )=>{
    return items.findIndex((item:TItem )=>item.id === id)
  }

  export const moveItem = <T>(array:T[],from:number,to:number) =>{
    const item = array[from]
    return insertItemAtIndex(removeItemAtIndex(array,from),item,to)
  }

  export function removeItemAtIndex<T>(array:T[],index:number){
    return [...array.slice(0,index),...array.slice(index+1)]
  }

  export function insertItemAtIndex<T>(array:T[],item:T,index:number){
    return[...array.slice(0,index),item,...array.slice(index)]
  }