import { useState } from "react"
import { useSelector } from "react-redux"


const UseToDo = () => {

    const data = useSelector ((store)=>store.toDoSlice.toDoEvent)
    console.log("data from dlice", data);
    

    type toDoType = {
        item:string,
        id?:string
    }

    const [event, setEvent] = useState<any>()
    const [addEvent, setAddEvent] = useState<toDoType[]>([])

   const onChangeHandler = (e:any) => {
        setEvent(e.target.value)
   }

   const addToDo:toDoType = {
    item:event
   }
    const addHandler = () => {
        setAddEvent([...addEvent, addToDo])
        console.log(data)
    }

    return{
        onChangeHandler, event, addHandler, addEvent

    }
}

export default UseToDo