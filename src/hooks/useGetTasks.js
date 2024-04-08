import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore"
import { db } from "../config/firebase-config"
import {useGetUserInfo} from '../hooks/useGetUserInfo'
import { useEffect, useState } from "react"

export const useGetTasks = () => {
    const {userid} = useGetUserInfo()
    const tasksCollectionRef = collection(db,'tasks')
    const [tasks, setTasks] = useState([])
    const getTasks = async () => {
        let unsubscribe
        try{
            const queryTasks = query(tasksCollectionRef, where("userid","==", userid),orderBy("createdAt","desc"))

            unsubscribe = onSnapshot(queryTasks, (snapshot)=>{
                let docs = []
                snapshot.forEach((doc)=>{
                    const task = doc.data()
                    const id = doc.id
                    docs.push({...task, id})
                })
                setTasks(docs)
            })
        }catch(err){
            console.error(err)
        }
        return () => unsubscribe()
    }

    useEffect(()=>{
        getTasks()
    },[])

    return {tasks}
}