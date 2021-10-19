import c from './MyPosts.module.scss';
import React from 'react';
import Post from "./Post/Post";
import { Field, reduxForm } from 'redux-form'
import { maxLength } from '../../common/validators/validators';
import { Textarea } from '../../common/FormControl/FormControl';

const maxLength200 = maxLength(200);

let NewPostForm = props => {
	const { handleSubmit } = props
	return <form onSubmit={handleSubmit} className={c.post}>
		<Field
			component={Textarea}
			className={c.textarea}
			name="newPostTextarea"
			placeholder='Tell about your day'
			validate={[maxLength200]}
		/>
		<button
			className={c.button}>
			Send
		</button>
	</form>
}

const NewPostReduxForm = reduxForm({
	// a unique name for the form
	form: 'newpost'
})(NewPostForm)


const MyPosts = (props) => {

	let PostsData = props.posts;

	let Posts = PostsData.map(
		post => <Post
			message={post.message}
			likesCount={post.likesCount}
			id={post.id}
			key={post.id} />
	);

	let addPostReduxForm = (dataForm) => {
		props.addPost(dataForm.newPostTextarea);
	}

	return (
		<div className={c.container}>
			<div className={c.NewPost}>
				<h2 className={c.PostHeader}>
					My posts
				</h2>
				<NewPostReduxForm onSubmit={addPostReduxForm} />
			</div>
			<div className={c.postMessages}>
				{Posts}
			</div>
		</div>
	);
}

export default MyPosts;