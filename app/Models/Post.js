import { generateId } from "../utils.js"


export default class Post {
    constructor({title, content, comments = []}) {
        this.title = title
        this.content = content
        this.comments = comments
        this.id = generateId()
    }

    get Template() {
        return `                <div class="card my-3" style="width: 18rem;">
        <div class="card-body ">
          <h5 class="card-title">${this.title}</h5>
          <p class="card-text">${this.content}</p>
          <button type="button" class="btn btn-danger" onclick="app.postsController.deletePost('${this.id}')">Delete</button>
        </div>
      </div>
      <div>
      ${this.CommentsTemplate}
        </div>
      <form class="form-inline" onsubmit="app.postsController.newComment('${this.id}')">
      <div class="form-group">
          <input type="text" name="comment" id="comment" class="form-control" placeholder="New comment">
          <button type="submit" class="btn btn-primary">Submit</button>
      </div>
  </form>`
    }

    get CommentsTemplate(){
        let template = ''
        this.comments.forEach(c => template += `
        <p>${c} <i class="fas fa-trash" onclick="app.postsController.deleteComment('${this.id}', '${c}')"></i></p>
        
        `)
        return template
    }

}