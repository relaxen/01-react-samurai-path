import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {addPostActionCreator, updatePostActionCreator} from "../../../redux/profile-reducer";


let mapStateToPropsMP = (state) => {
    return {
        posts: state.profilePage.PostsData,
        newPostTemp: state.profilePage.newPostTemp,
    }

};
let mapDispatchToPropsMP = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        onChangePost: (newText) => {
            dispatch(updatePostActionCreator(newText));
        },
    }
};

const MyPostsContainer = connect(mapStateToPropsMP, mapDispatchToPropsMP)(MyPosts);


export default MyPostsContainer;