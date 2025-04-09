import { createSlice,PayloadAction } from "@reduxjs/toolkit";
interface Likestate{
    likecount:boolean
    id:{index:number,cost:number,likecount:boolean};
    Likeobj:{id:{index:number,cost:number,likecount:boolean}}[]
}
const initialState :Likestate={
    likecount:false,
    id:{index:0,cost:0,likecount:false},
    Likeobj:[]
}
const LikeSlice=createSlice({
name:"like",
initialState,
reducers:{
   SetLike(state,action:PayloadAction<any>){
    
      state.Likeobj.push(action.payload)
   } ,
   Setid(state,action:PayloadAction<any>){
        state.id=action.payload
   }


},

})
export const {SetLike,Setid} =LikeSlice.actions;

export const selectLike=(state:{like:Likestate })=>state.like.Likeobj
export default LikeSlice.reducer;