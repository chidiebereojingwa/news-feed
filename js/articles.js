import {articleForm } from "./form.js"
import {addArticle, readmorearticle, nextPageArticle,prevPageArticle} from "./helpers.js"
import {singleArticle, deleteArticle, editarticleput} from "./helpersingle.js"

window.readmorearticle = readmorearticle
window.deleteArticle = deleteArticle
window.nextPageArticle = nextPageArticle
window.prevPageArticle = prevPageArticle

export const getDataSingle = async () =>{
    const response = await fetch(`http://5e0df4b536b80000143db9ca.mockapi.io/etranzact/v1/article/${localStorage.numId}`);
    const data = await response.json();
    console.log(data);
    singleArticle(data)
    
}

export const getDataSingleEdit = async () =>{
    const response = await fetch(`http://5e0df4b536b80000143db9ca.mockapi.io/etranzact/v1/article/${localStorage.numId}`);
    const data = await response.json();
    console.log(data);
    editarticleput(data)
    
}



export const getDataPaginated = async () =>{
    if(localStorage.pageId == null){
        localStorage.setItem('pageId', 1)
    }
    const response = await fetch(`http://5e0df4b536b80000143db9ca.mockapi.io/etranzact/v1/article?page=${localStorage.pageId}&limit=10`);
    const data = await response.json();
    console.log(data);
    
    addArticle(data)
}

export const getData = async () =>{
    const response = await fetch("http://5e0df4b536b80000143db9ca.mockapi.io/etranzact/v1/article");
    const data = await response.json();
    console.log(data);
    let total = Math.ceil(data.length/10)
    localStorage.setItem('total',total)
    // addArticle(data)
}




export const postData = async (data) => {
    let { title, body, image, createdAt} = data;

    fetch("http://5e0df4b536b80000143db9ca.mockapi.io/etranzact/v1/article", {
        method: "post",
        headers: new Headers(),
        body:JSON.stringify({title:title, body:body, image:image, createdAt:createdAt})
    }).then(res => res.json())
    .then(data => {
         console.log(data)
        window.location = "../index.html"
    })
    .catch(err => console.log(err))

}

export const postEdit = async (data) => {
    let { title, body, image, createdAt} = data;

    fetch(`http://5e0df4b536b80000143db9ca.mockapi.io/etranzact/v1/article/${localStorage.numId}`,{
        method:"PUT",
        body:JSON.stringify({title:title, body:body, image:image, createdAt:createdAt})

    }).then(res => res.json())
    .then(data => {
        // editarticleput(data)
        console.log(data)
        window.location = "../index.html"
    })
    .catch(err => console.log(err))
    
}


export const postDelete = async () => {
    fetch(`http://5e0df4b536b80000143db9ca.mockapi.io/etranzact/v1/article/${localStorage.numId}`, {
        method: "delete"
    }).then(res => res.json())
    .then(data => {
        localStorage.removeItem('numId');
        window.location = '../index.html'

    })
}