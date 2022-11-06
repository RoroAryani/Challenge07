/* eslint-disable no-unreachable */
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import '../../index.css';

const ajaxGetUser = async (jwt) => {
    const url = 'http://localhost:3100/api/v1/who-am-i';
    const res = await fetch(
        url, {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'x-access-token': jwt
        }
    }
    );
    return res;
}

const destroyToken = (token) => {
    if (token !== '') {
        localStorage.removeItem('token');
    }
}

let loopRender = 0;

function ProtectedRoute({children, callback}) {

    const [navigate, setNav] = useState('');
    const [user, setUser] = useState(undefined);

    console.log('Ini diulangi');

    useEffect(() => {
        try {
            let token = localStorage.getItem('token');
            token = token == null ? '' : token;
            console.log(token);
            ajaxGetUser(token).then(result => {
                result.json().then(json => {
                    if (result.status !== 200) {
                        console.log("Ini error : " ,json);
                        destroyToken(token);
                        setNav('/login')
                    }
                    if(loopRender === 0){
                        setUser(json.user);
                        callback(json.user);
                        loopRender+=1;
                    }
                }).catch(err => {
                    console.log(err);
                    destroyToken(token);
                    setNav('/login')
                })
            }).catch(err => {
                console.log(err);
                destroyToken(token);
                setNav('/login')
            })
        } catch (error) {
            console.log(error);
            setNav('/login')
        }
    })

    return (
        navigate === '' ? children : <Navigate to={navigate} />
    )

}

export { ProtectedRoute };