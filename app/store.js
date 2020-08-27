import Post from "./Models/Post.js";

let _state = {
  /** @type {Post[]} */
  posts: [new Post({title: "Hello", content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, quisquam aspernatur voluptates sunt autem rem earum exercitationem. Consequuntur illo voluptas asperiores nam, illum necessitatibus eum ab provident blanditiis, aspernatur molestias.", comments: ["hello there", "general Kenobi", "old memes"]})]
};

function _loadState() {
  let data = JSON.parse(localStorage.getItem("posts"))
  if (data) {
    data.posts = data.posts.map(p => new Post(p))
    _state = data
  }
}

_loadState()
class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }

  saveState() {
    localStorage.setItem("posts", JSON.stringify(_state))
  }
}

const STORE = new Store();
export default STORE;


