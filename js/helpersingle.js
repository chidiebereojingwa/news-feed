import {getDataSingle, getData, postDelete, getDataSingleEdit } from "./articles.js";
import {getComments, getIndividualComment,postDeleteComment} from "./comments.js"
import {getArticleImages} from "./images.js"
import {articleForm, articleComment, articleCommentEdit, articleImage, articleFormCreate } from "./form.js"
let counter = 0;
let  imagedata = [];

if(window.location.href == "http://localhost:5000/singlearticle"){
    getDataSingle();
    getComments()
    getArticleImages();
    // articleForm();
    articleComment();
} 
if(window.location.href == "http://localhost:5000/editarticle"){
    getDataSingleEdit ();

    setTimeout(articleForm(), 10000)
    articleForm();

}
if(window.location.href == "http://localhost:5000/create"){
    articleFormCreate() 
}

if(window.location.href == "http://localhost:5000/editcomment"){
    articleCommentEdit();
    getIndividualComment();

}










export const singleArticle = data =>{
    let addToSingle = document.querySelector('#article');
    addToSingle.innerHTML += `
        <p>${data.title}</p>
        <p><span>Author: ${data.author}</span><span>time:${data.createdAt}</span></p>
        <p>body</p>

        <a href="/editarticle.html" class="btn btn-primary float-left">Edit</a>
         <span class="btn btn-danger float-right" onclick="deleteArticle(${parseInt(data.id)})">Delete</span>
    `
}

export const articleComments = data => {
    let addToSingleComment = document.querySelector('#articlecomments');
    data.map( elem => {
        addToSingleComment.innerHTML += `
            
            
            <div class="col-md-3"> <img src="${elem.avatar}" alt="no image"/></div>
            <div class="col-md-8"> 
            <p>${elem.comment}</p>
            <p><span>Author: ${elem.author}  </span> <span>time : ${elem.time}</span></p>
            <span class="btn btn-info float-right" onclick="editComments(${parseInt(elem.id)})">Edit</span>
         <span class="btn btn-danger float-right" onclick="deleteComments(${parseInt(elem.id)})">Delete</span>

            </div>

            
       <br/><br/>
            
    `
    })
    
}

export const articleImages = (data) =>{
    let addToSingleImage = document.querySelector('#imageSlide');
         addToSingleImage.innerHTML += ''
        addToSingleImage.innerHTML += `
               <a href="/images.html"> <img src="${data[counter].avatar}" alt="${data[counter].avatar}""/></a>
    
        
        `
     
       
       
        // document.slide.src = data[counter].avatar;
        if(counter < data.length - 1){
            counter++
            console.log(data.length);
            
        }else{
            counter = 0;
        }
        // setTimeout(articleImages, 2000)
    

}


export function deleteArticle(i){
    if(window.location.href == "http://localhost:5000/singlearticle"){
        postDelete();
    }
}

export function editComments(i){
    alert(i)
    localStorage.setItem("commentId", i)
    window.location = "../editcomment.html"
}

export function deleteComments(i){
    localStorage.setItem("deleteCommentId", i)
    postDeleteComment()
}



  export const editarticleput = async data =>{
    
    // let editForm = document.querySelector('#editArticlepage');
    let title = document.querySelector('#edittitle');
    let body = document.querySelector('#editbody');
    title.value = data.title
    body.value = data.title   
}

export const editcommentput = async data =>{
    
    // let editForm = document.querySelector('#editArticlepage');
    let comment = document.querySelector('#editcomment');
    comment.value = data.comment
}
