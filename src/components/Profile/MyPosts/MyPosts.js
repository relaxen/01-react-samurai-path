import c from './MyPosts.module.scss';
import React from 'react';
import Post from "./Post/Post";


const MyPosts = (props) => {

    let newPostElement = React.createRef();

    let PostsData = props.posts;

    let Posts = PostsData.map(
        post => <Post
            message={post.message}
            likesCount={post.likesCount}
            id={post.id}
            key={post.id}/>
    );

    let onPostChange = () => {
        let text = newPostElement.current.value;

        props.onChangePost(text)
    };

    let addPost = () => {
        props.addPost();
    };

    return (
        <div className={c.container}>
            <div className={c.NewPost}>
                <h2 className={c.PostHeader}>
                    My posts
                </h2>
                <form action="" className={c.post}>
                        <textarea className={c.textarea}
                                  name=""
                                  id=""
                                  ref={newPostElement}
                                  value={props.newPostTemp}
                                  onChange={onPostChange}
                                  placeholder='Tell about your day'/>
                    <button
                        onClick={addPost}
                        className={c.button}
                        type="button"
                    >
                        Send
                    </button>
                </form>
            </div>
            <div className={c.postMessages}>
                {Posts}
            </div>
        </div>
    );
}

export default MyPosts;