
import {articleForm, articleComment, articleCommentEdit} from "./form.js"
import {articleComments,editcommentput, editComments, deleteComments } from "./helpersingle.js"

window.editComments = editComments;
window.deleteComments = deleteComments;

export const getComments = async () =>{
    const response = await fetch(`http://5e0df4b536b80000143db9ca.mockapi.io/etranzact/v1/article/${localStorage.numId}/comments`);
    const data = await response.json();
    console.log(data)
    articleComments(data)
     
}

export const getIndividualComment = async () =>{
    alert("hi")
    const response = await fetch(`http://5e0df4b536b80000143db9ca.mockapi.io/etranzact/v1/article/${localStorage.numId}/comments/${localStorage.commentId}`);
    const data = await response.json();
    console.log(data)
    editcommentput(data)
}


export const postComments = async (data) => {
    let { author, articleId, comment} = data;

    fetch(`http://5e0df4b536b80000143db9ca.mockapi.io/etranzact/v1/article/${localStorage.numId}/comments`, {
        method: "post",
        headers: new Headers(),
        body:JSON.stringify({author, articleId, comment})
    }).then(res => res.json())
    .then(data =>{
         console.log(data)
         window.location = '../singlearticle.html'
        })
    .catch(err => console.log(err))

}

export const posteditComment = async (data) => {
    let { author, articleId, comment} = data;

    fetch(`http://5e0df4b536b80000143db9ca.mockapi.io/etranzact/v1/article/${localStorage.numId}/comments/${localStorage.commentId}`,{
        method:"PUT",
        body:JSON.stringify({author, articleId, comment})

    }).then(res => res.json())
    .then(data =>{
         console.log(data)
         window.location = '../singlearticle.html'
        })
    .catch(err => console.log(err))
    
}


export const postDeleteComment = async () => {
    fetch(`http://5e0df4b536b80000143db9ca.mockapi.io/etranzact/v1/article/${localStorage.numId}/comments/${localStorage.deleteCommentId}`, {
        method: "delete"
    }).then(res => res.json())
    .then(data => {
        alert("deleted")
        localStorage.removeItem('deleteCommentId');
        window.location = '../singlearticle.html'
    })
}