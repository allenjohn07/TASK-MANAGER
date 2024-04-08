import { deleteDoc, doc } from "firebase/firestore"
import { db } from "../config/firebase-config"

export const useDeleteTasks = () => {
    const deleteTask = async (taskId) => {
        try {
        const taskRef = doc(db,"tasks", taskId)
        await deleteDoc(taskRef) 
        console.log("Task Deleted");   
        } catch (error) {
            console.error("Error deleting task", error)
        }
    }
    return {deleteTask}
}