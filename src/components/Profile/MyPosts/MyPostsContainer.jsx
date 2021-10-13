import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {addPostActionCreator, updatePostActionCreator} from "../../redux/profile-reducer";


/*const MyPostsContainer = () => {

    //let state = props.store.getState();


    return (
        <StoreContext.Consumer>{
            (store) => {

                let addPost = () => {
                    let action = addPostActionCreator();
                    store.dispatch(action);
                }

                let onChangePost = (newText) => {
                    let action = updatePostActionCreator(newText);
                    store.dispatch(action);
                }

                return <MyPosts onChangePost={onChangePost} addPost={addPost}
                                posts={store.getState().profilePage.PostsData}
                                newPostTemp={store.getState().profilePage.newPostTemp}/>
            }

        }
        </StoreContext.Consumer>
    )
}*/
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