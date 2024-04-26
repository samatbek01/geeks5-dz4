// import { createSlice } from "@reduxjs/toolkit";
// const postsSlice = createSlice({
//     name:'postSlice',
//     initialState:{
//         title:'',
//     },
//     reducers:{
//         changeTitle:(state,action) => {
//             state.title='Hello Geeks!'
//         }
//     }
// })
// export const { changeTitle } = postsSlice.actions
// export default postsSlice.reducer

import {createSlice} from "@reduxjs/toolkit";

const postSlice = createSlice({
    name:'postSlice',
    initialState:{},
    reducers:{
        messiFunction:async(user)=>{
            const options = {
                method:'POST',
                headers:{
                    'Content-type':'application/json'
                },
                body:JSON.stringify(user)
            }
            await fetch('https://jsonplaceholder.typicode.com/users',options)
        }
    }
})

export const {messiFunction}=postSlice.actions
export default postSlice.reducer