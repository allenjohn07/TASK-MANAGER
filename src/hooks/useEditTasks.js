import { doc, updateDoc } from "firebase/firestore"
import { db } from "../config/firebase-config"

export const useEditTasks = () => {
    const editTask = async (taskId, updatedTask) => {
        try {
            const taskRef = doc(db, 'tasks', taskId);
            await updateDoc(taskRef, { task: updatedTask }); // Construct an object with the updated field and its new value
            console.log("Task Updated");
        } catch (error) {
            console.error("Error", error);
            throw error;
        }
    };
    return { editTask };
};
