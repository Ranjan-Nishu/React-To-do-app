import { configureStore } from "@reduxjs/toolkit";
import TaskSlicers from "../slicers/task-slicers";

 
 export const store = configureStore({
   reducer: TaskSlicers 
 })