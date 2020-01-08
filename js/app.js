import {getData, postData, postEdit, postDelete} from "./articles";
import {getComments, postComments, posteditComment, postDeleteComment} from "./comments"
import {getImages, postImage, postEditImage, postDeleteComment} from "./images";
import {articleForm, articleComment, articleImage} from "./form"


let url = 'http://5e0df4b536b80000143db9ca.mockapi.io/etranzact/v1/article';