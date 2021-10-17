import c from './MyPosts.module.scss';
import React from 'react';
import Post from "./Post/Post";
import { Field, reduxForm } from 'redux-form'

let NewPostForm = props => {
	const { handleSubmit } = props
	return <form onSubmit={handleSubmit} className={c.post}>
		<Field component={'textarea'} className={c.textarea}
			name="newPostTextarea"
			id=""
			placeholder='Tell about your day' />
		<button
			className={c.button}>
			Send
		</button>
	</form>
}

NewPostFormRedux = reduxForm({
	// a unique name for the form
	form: 'newpost'
})(NewPostForm)


const MyPosts = (props) => {

	let newPostElement = React.createRef();

	let PostsData = props.posts;

	let Posts = PostsData.map(
		post => <Post
			message={post.message}
			likesCount={post.likesCount}
			id={post.id}
			key={post.id} />
	);

	let onPostChange = () => {
		let text = newPostElement.current.value;

		props.onChangePost(text)
	};

	let addPost = () => {
		props.addPost();
	};

	let addPostReduxForm = (dataForm) => {
		props.onChangePost(dataForm.newPostTextarea);
		props.addPost();
	}

	return (
		<div className={c.container}>
			<div className={c.NewPost}>
				<h2 className={c.PostHeader}>
					My posts
				</h2>
				<NewPostFormRedux onSubmit={addPostReduxForm}/>
			</div>
			<div className={c.postMessages}>
				{Posts}
			</div>
		</div>
	);
}

export default MyPosts;