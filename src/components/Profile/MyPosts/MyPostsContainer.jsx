import MyPosts from "./MyPosts";
import { connect } from "react-redux";
import { addPost } from "../../../redux/profile-reducer";
import { compose } from 'redux';


let mapStateToProps = (state) => {
	return {
		posts: state.profilePage.PostsData,
	}

};
let mapDispatchToProps = {
	addPost,
};


const MyPostsContainer = compose (
	connect(mapStateToProps, mapDispatchToProps)
)(MyPosts)


export default MyPostsContainer;