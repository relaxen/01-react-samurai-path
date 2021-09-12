import React from "react";
import axios from "axios";

let Users = (props) => {
    if (props.users.length === 0) {
        /*        props.setUsers([
                        {
                            userId: 1,
                            name: "Dimych",
                            avatar: "https://lazurit.com/upload/resize_cache/iblock/bd5/105_105_1/5.jpg",
                            followed: true,
                            status: "Hi, i`am new here",
                            city: "Minsk",
                            country: "Belarus"
                        },
                        {
                            userId: 2,
                            name: "Keanu",
                            avatar: "./../../smile.jpg",
                            followed: true,
                            status: "Hi, i`am new here",
                            city: "California",
                            country: "Unated States"
                        },
                        {
                            userId: 3,
                            name: "Voldemort",
                            avatar: "./../../smile.jpg",
                            followed: false,
                            status: "Hi, i`am new here",
                            city: "London",
                            country: "Great Britain"
                        },
                        {
                            userId: 4,
                            name: "Aragorn",
                            avatar: "./../../smile.jpg",
                            followed: true,
                            status: "Hi, i`am new here",
                            city: "Minsk",
                            country: "Mordor"
                        },
                        {
                            userId: 5,
                            name: "Popozoglo",
                            avatar: "./../../smile.jpg",
                            followed: false,
                            status: "Hi, i`am new here",
                            city: "Zalupinsk",
                            country: "Russia"
                        }
                    ]
                )*/
    }

    function getImages(countNumber, callBack) {
        const promise = axios.get(`https://repetitora.net/api/JS/Images?page=${1}&count=${countNumber}`);
        return callBack(promise);
    };

    function showImg(promise) {
        promise.then((data) => {
            data.data.forEach(el => {
                return <img src={el.thumbnail} alt="loaded-img"/>
            })
        })
    }


    return <div id="img">

        {
            props.users.map(user => <div key={user.userId}>


                <div>
                    <img src={user.avatar} alt="avatar"/>
                    <button onClick={() => {
                        props.follow(user.userId)
                    }}>
                        {user.followed ? 'unfollow' : 'follow'}
                    </button>
                </div>
                <div>
                    <div>Name: {user.name}</div>
                    <div>Status: {user.status}</div>
                    <div>Location: {user.country}, {user.city}</div>
                </div>

            </div>)
        }
        <button onClick={() => {
            props.setUsers([
                    {
                        userId: 1,
                        name: "Dimych",
                        avatar: "https://lazurit.com/upload/resize_cache/iblock/bd5/105_105_1/5.jpg",
                        followed: true,
                        status: "Hi, i`am new here",
                        city: "Minsk",
                        country: "Belarus"
                    },
                    {
                        userId: 2,
                        name: "Keanu",
                        avatar: "./../../smile.jpg",
                        followed: true,
                        status: "Hi, i`am new here",
                        city: "California",
                        country: "Unated States"
                    },
                    {
                        userId: 3,
                        name: "Voldemort",
                        avatar: "./../../smile.jpg",
                        followed: false,
                        status: "Hi, i`am new here",
                        city: "London",
                        country: "Great Britain"
                    },
                    {
                        userId: 4,
                        name: "Aragorn",
                        avatar: "./../../smile.jpg",
                        followed: true,
                        status: "Hi, i`am new here",
                        city: "Minsk",
                        country: "Mordor"
                    },
                    {
                        userId: 5,
                        name: "Popozoglo",
                        avatar: "./../../smile.jpg",
                        followed: false,
                        status: "Hi, i`am new here",
                        city: "Zalupinsk",
                        country: "Russia"
                    },
                ]
            )
        }
        }>show more
        </button>
        <br/>
        <input type="number" id="countNumber"/>
        <button onClick={() => {
            getImages(document.querySelector('#countNumber').value, showImg);
        }
        }>get image
        </button>

    </div>


};

export default Users;

