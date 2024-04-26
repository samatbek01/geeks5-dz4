import React from 'react';
import { useSelector,useDispatch} from "react-redux";
import {changeTitle} from "../../store/PostsSlice";

const MainPAge = () => {

    const {title} = useSelector(state => state.postsReducer)
    const dispatch = useDispatch()

    const changeTitleFunc = ()=> {
        dispatch(changeTitle())
    }

    return (
        <div>
            <h1>{title}</h1>
            <button onClick={changeTitleFunc}>change title</button>
        </div>
    );
};

export default MainPAge;