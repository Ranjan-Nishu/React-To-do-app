import { createSlice } from "@reduxjs/toolkit";

 
 let initialState = {
   sharedTasks:[],
   sharedTasksCount: 0
 }

 const TaskSlicer = createSlice({
  name:'task-slicer', 
  initialState,
  reducers: {
    addToShare : (state,action) =>{
      state.sharedTasks.push(action.payload);
      state.sharedTasksCount = state.sharedTasks.length;
    }
  }
 })

 export const {addToShare} = TaskSlicer.actions;
 export default TaskSlicer.reducer;  