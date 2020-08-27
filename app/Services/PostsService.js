import Post from "../Models/Post.js";
import STORE from "../store.js";

//Public
class PostsService {
  deleteAllComments(id) {
    let foundpost = STORE.State.posts.find(p => p.id == id)
    foundpost.comments = []
  }
  newComment(comment, id) {
    let foundpost = STORE.State.posts.find(p => p.id == id)
    foundpost.comments.push(comment)
  }
  deleteComment(id, comment) {
    let foundpost = STORE.State.posts.find(p => p.id == id)
    let cIndex = foundpost.comments.findIndex(c => c == comment)
    foundpost.comments.splice(cIndex, 1)
  }
  deletePost(id) {
    let pIndex = STORE.State.posts.findIndex(p => p.id == id)
    STORE.State.posts.splice(pIndex, 1)

  }
  newPost(rawPost) {
    let newPost = new Post(rawPost)
    STORE.State.posts.push(newPost)
  }


}

const SERVICE = new PostsService();
export default SERVICE;
