import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm, reset} from "redux-form";
import {Input, Textarea} from "../../common/FormControls/FormControls";
import {isRequired, maxLengthCreator} from "../../../utils/validators/validators";


const maxLength = maxLengthCreator(10);

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder={"New post text..."}
                   validate={[isRequired, maxLength]}
                   name={"post"} component={Textarea}/>
            <button>add post</button>
        </form>
    )
};

const resetForm = (result, dispatch) =>
    dispatch(reset('post'));

const PostReduxForm = reduxForm({
    form: 'post',
    onSubmitSuccess: resetForm,
})(PostForm)


class MyPosts extends React.Component {

    onSubmit = values => {
        this.props.addPost(values.post);
    }


    render() {
        const postElements = this.props.profilePage.posts
            .map((post, index) => <Post key={index} likes={post.likes} text={post.text}/>)
        return (
            <div className={s.mypost}>
                <strong>My post</strong>
                <PostReduxForm onSubmit={this.onSubmit}/>
                <div className={s.posts}>
                    {postElements}
                </div>
            </div>
        );
    }
}

export default MyPosts;