import React from 'react';
import {useLocation, Navigate} from "react-router-dom";

const RequireAuth = ({children}) => {
    const location = useLocation();
    //вытащи токен сюда и сделай проверку, просто я не ебу как у тебя тут устроено
    const auth = typeof localStorage.token === 'string';

    if (!auth) {
        return <Navigate to={"/"} state={{from: location}}/>
    }

    return children
};

export default RequireAuth;