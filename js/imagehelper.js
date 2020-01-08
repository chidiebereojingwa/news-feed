import {  getArticleImagesView, postImageDelete} from "./images.js";
import { articleImage } from "./form.js";

if(window.location.href == "http://localhost:5000/images"){
    getArticleImagesView();
}
if(window.location.href == "http://localhost:5000/singleimage"){
    articleImage();
}

export const imagesDisplay = (data) =>{
    let imagedisplay = document.querySelector('#imageAdd');
    data.map(image => {
        imagedisplay.innerHTML += `
            <div class="col-md-11 m-5">
            <img src="${image.avatar}"> <br/>
            </div>
            <span class="btn btn-primary" onclick="viewImageSingle(${image.id}, '${image.avatar}')">view</span>

        `
    })
}

export function viewImageSingle(i, url){
    localStorage.setItem('imageId', i);
    localStorage.setItem('avatar', url);
    window.location = "../singleimage.html"
}

export function deleteImage(){
    alert('oooo')
    postImageDelete()
}