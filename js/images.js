import {articleForm, articleComment, articleImage} from "./form.js"
import {articleImages} from "./helpersingle.js"
import { imagesDisplay } from "./imagehelper.js";
import { viewImageSingle, deleteImage } from "./imagehelper.js";
// let counter = 0;

window.viewImageSingle = viewImageSingle;
window.deleteImage = deleteImage;
export const getArticleImages = async () =>{
    const response = await fetch(`http://5e0df4b536b80000143db9ca.mockapi.io/etranzact/v1/article/${localStorage.numId}/images`);
    const data = await response.json();
    
    articleImages(data)
    return data; 
}

export const getArticleImagesView = async () =>{
    const response = await fetch(`http://5e0df4b536b80000143db9ca.mockapi.io/etranzact/v1/article/${localStorage.numId}/images`);
    const data = await response.json();
    console.log(data)
    imagesDisplay(data)
    
    return data; 
}

export const postImages = async (data) => {
    let {image} = data;

    fetch(`http://5e0df4b536b80000143db9ca.mockapi.io/etranzact/v1/article/${localStorage.numId}/images`, {
        method: "post",
        headers: new Headers(),
        body:JSON.stringify({image})
    }).then(res => res.json())
    .then(data => {
        console.log(data);
        window.location = '../singlearticle.html'

    })
    .catch(err => console.log(err))

}

export const updatePostImage = async (data) => {
    let { image} = data;

    fetch(`http://5e0df4b536b80000143db9ca.mockapi.io/etranzact/v1/article/${localStorage.numId}/images/${localStorage.imageId}`,{
        method:"PUT",
        body:JSON.stringify({image:image})

    }).then(res => res.json())
    .then(data => window.location = '../singlearticle.html')
    .catch(err => console.log(err))
    
}


export const postImageDelete = async () => {
    fetch(`http://5e0df4b536b80000143db9ca.mockapi.io/etranzact/v1/article/${localStorage.numId}/images/${localStorage.imageId}`, {
        method: "delete"
    }).then(res => res.json())
    .then(data => {
        console.log(data)
        window.location = '../singlearticle.html'
        
    })
}