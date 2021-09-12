import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC} from "../redux/users-reducer";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.usersData,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Users);