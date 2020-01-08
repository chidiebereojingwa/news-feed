import {getDataPaginated,getData, getDataSingle, postData, postEdit, postDelete} from "./articles.js";
import {articleForm, articleComment, articleImage} from "./form.js"
let pageCounter = 1;
if(localStorage.pageId != null){
   pageCounter = localStorage.pageId;
}


//  const articleData = articleForm();
//  const articleCommentData = articleComment();
//  const articleImageFile = articleImage();

let url = 'http://5e0df4b536b80000143db9ca.mockapi.io/etranzact/v1/article';

if(window.location.href == "http://localhost:5000/")  {
   getDataPaginated();
   getData();
}

export const addArticle = data =>{
   let addToIndex = document.querySelector('#addArticles');
   addToIndex.innerHTML = '';
   data.map(ele =>{ 
      addToIndex.innerHTML += 
       `
         <div class="col-md-5"> <img src="${ele.avatar}" alt="no image"/></div>
         <div class="col-md-7">
            <p> ${ele.title}</p>
           
            <p>${ele.author}</p>
            <p>${ele.createdAt}</p>
             <p>${ele.id}</p>
            <span class="btn btn-primary mt-3 mb-3" onclick="readmorearticle(${ele.id})">Read</span>

         </div>
       `
   })
}

export function readmorearticle(numId) {
   localStorage.setItem('numId', numId);
   window.location = "./singlearticle.html"
}

export function nextPageArticle(){
   if(pageCounter < localStorage.total){
      getDataPaginated()
   // getDataPaginated
      pageCounter++
      localStorage.setItem('pageId', pageCounter);
   }
   

}

export function prevPageArticle(){
   if(pageCounter > 1){
      getDataPaginated()
      pageCounter--
      localStorage.setItem('pageId', pageCounter);
   }
   

}