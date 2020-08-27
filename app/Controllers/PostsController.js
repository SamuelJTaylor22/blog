import PostsService from "../Services/PostsService.js";
import STORE from "../store.js";


function _drawPost(){
  STORE.saveState()
  let template = ''
  STORE.State.posts.forEach(p => template += p.Template)


  document.getElementById("post").innerHTML = template
}

//Public
export default class PostsController {
  constructor(){
    _drawPost()
  }

 newPost(){
  event.preventDefault();
  let form = event.target
  let rawPost = {
    // @ts-ignore
    title: form.title.value,
    // @ts-ignore
    content: form.content.value,
  }
  PostsService.newPost(rawPost);
  _drawPost();
 }

 deletePost(id){
  PostsService.deletePost(id)
  _drawPost()
 }

 newComment(id){
  event.preventDefault()
// @ts-ignore
let comment = event.target.comment.value 
PostsService.newComment(comment, id)
_drawPost()
 }

 deleteComment(id, comment){
  PostsService.deleteComment(id, comment)
  _drawPost()
 }

deleteAllComments(id){
  PostsService.deleteAllComments(id);
  _drawPost()
}
}
