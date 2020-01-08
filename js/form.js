import {postComments,posteditComment} from "./comments.js"
import {postEdit, postData} from "./articles.js"
import { postImages, updatePostImage } from "./images.js";
export const articleForm = () =>{
    let btnput = document.querySelector('#btnEditArticle')
    btnput.addEventListener('click', e =>{
        e.preventDefault();
        let form = document.querySelector("#editArticle");
        let title = form.edittitle.value;
        let body = form.editbody.value;
        // let image = e.target.files[0];
        let createdAt = new Date();
        alert(body)
        let data = {title, body, createdAt};
        postEdit(data)
        return data;
    })
   
}

export const articleFormCreate = () =>{
    let btnpost = document.querySelector('#btnCreateArticle')
    btnpost.addEventListener('click', e =>{
        e.preventDefault();
        let form = document.querySelector("#createArticle");
        let title = form.createtitle.value;
        let body = form.createbody.value;
        // let image = e.target.files[0];
        let createdAt = new Date();
        alert(body)
        let data = {title, body, createdAt};
        postData(data)
        return data;
    })
   
}

export const articleComment = () => {
    let btn = document.querySelector('#commentbtn')
    btn.addEventListener('click', e =>{
        e.preventDefault();
        let form = document.querySelector("#addComment");
        let author = form.author.value;
        let articleId = localStorage.articleId;
        let comment = form.comment.value;
        let data = {author, articleId, comment}
        alert(author)
        postComments(data)
        return data;
    })
    
} 

export const articleCommentEdit = () => {
    let editcomment = document.querySelector('#editcommentbtn')
    editcomment.addEventListener('click', e => {

        e.preventDefault();
        let form = document.querySelector("#editComment");
        let comment = form.editcomment.value;
        let data = {comment}
        alert(comment)
        posteditComment(data)
        return data;
    })
}


export const articleImage = () => {
    let imagefile = null;
    let imagePath = document.querySelector("#imageadd")
    imagePath.addEventListener('change', e =>{
        imagefile = e.target.files[0].name;
        // console.log(e.target.files[0].name)
    })
    // for uploads
   let upload = document.querySelector('#uploadImage');
   upload.addEventListener('click', e =>{
       e.preventDefault();
       let form = document.querySelector("#imageAddArticle");
       let image = imagefile;
       let data = {image}
       postImages(data)
   })

//    for updates
let updateImage = document.querySelector("#updateImage");
updateImage.addEventListener('click', e =>{
    e.preventDefault();
    let image = imagefile;
    let data = {image};
    updatePostImage(data)
})
    
}