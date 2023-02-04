import { useState } from "react"

const UseToDo = () => {

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
        console.log(addEvent)
    }

    return{
        onChangeHandler, event, addHandler, addEvent

    }
}

export default UseToDo