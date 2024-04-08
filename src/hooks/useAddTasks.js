import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import {db} from '../config/firebase-config'
import {useGetUserInfo} from '../hooks/useGetUserInfo'

export const useAddTasks = () => {

    const tasksCollectionRef = collection(db,'tasks')

    const {userid} = useGetUserInfo()

    const addTask = async ({
        task
    }) => {
        await addDoc(tasksCollectionRef,{
            task,
            userid,
            createdAt: serverTimestamp()
        })
    }

    return {addTask}

}