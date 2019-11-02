function creatpost(post) {
  let name = post.username;
  let comment = post.message;
  let Imgsource = post.image_url;

  const postContainer = document.querySelector("#all-post");
  postContainer.classList.add("control-div");

  //   create new scope for new post
  const newpost = document.createElement("article");
  newpost.classList.add("singlepost");
  postContainer.appendChild(newpost);

  //  name space bar for user name
  const namebar = document.createElement("header");
  namebar.classList.add("nameheader");
  const username_bar = document.createElement("header");
  username_bar.classList.add("username");
  const account = document.createElement("div");
  account.classList.add("account_name");
  const username = document.createElement("p");
  username.classList.add("post_username");
  username.innerHTML = name;
  namebar.appendChild(username_bar);
  username_bar.appendChild(account);
  account.appendChild(username);

  // materical icon space
  const logobar = document.createElement("div");
  logobar.classList.add("socialmedia_icon");
  const icon = document.createElement("i");
  icon.classList.add("material-icons", "fa");
  icon.innerHTML = "favorite";
  const icon1 = document.createElement("i");
  icon1.classList.add("material-icons");
  icon1.innerHTML = "comment";
  const icon2 = document.createElement("i");
  icon2.classList.add("material-icons");
  icon2.innerHTML = "share";
  username_bar.appendChild(logobar);
  logobar.appendChild(icon);
  logobar.appendChild(icon1);
  logobar.appendChild(icon2);
  var counter = 0;
  icon.addEventListener("click", e => {
    e.preventDefault();
    icon.classList.toggle("colorred");
    console.log(`${counter++} liked post`);
  });

  //Img space
  const figure = document.createElement("figure");
  figure.classList.add("img_space");
  const img = document.createElement("img");
  img.classList.add("IMGpost");
  img.src = Imgsource;
  figure.appendChild(img);
  const img_caption = document.createElement("section");
  img_caption.classList.add("caption");
  const figurecaption = document.createElement("figcaption");
  figurecaption.classList.add("IMGcaption");
  figurecaption.innerHTML = comment;
  img_caption.appendChild(figurecaption);
  figure.appendChild(img_caption);

  //comment bar
  const submission = document.createElement("section");
  submission.classList.add("submission_area");
  const inputform = document.createElement("form");
  inputform.classList.add("comment-form");
  inputform.innerHTML = `<input class="comment-input" placeholder="Add New comment" />
  <button class="postcomments">post</button>`;

  inputform.addEventListener("submit", function(event) {
    event.preventDefault();
    const message = inputform.querySelector(".comment-input").value;
    let usercomment = createNewComment(message);
    comments.appendChild(usercomment);
    comment_review.appendChild(comments);
    inputform.querySelector(".comment-input").value = "";
  });

  submission.appendChild(inputform);

  //assemble area
  newpost.appendChild(namebar);
  newpost.appendChild(figure);

  var comment_review = document.createElement("section");
  comment_review.classList.add("comment_review");
  var comments = document.createElement("section");
  comments.classList.add("comments");
  for (const PostComment of post.comments) {
    let usercomment = createNewComment(PostComment.message);
    comments.appendChild(usercomment);
    comment_review.appendChild(comments);
  }
  newpost.appendChild(comment_review);
  newpost.appendChild(submission);

  return postContainer;
}

function createNewComment(message) {
  const usercomment = document.createElement("div");
  usercomment.classList.add("usercomment");
  const account_box = document.createElement("i");
  account_box.classList.add("material-icons");
  account_box.innerHTML = "account_box";
  const comment_text = document.createElement("p");
  comment_text.classList.add("comment_text");
  comment_text.innerHTML = message;
  usercomment.appendChild(account_box);
  usercomment.appendChild(comment_text);
  return usercomment;
}

const form = document.querySelector("#new-post");
form.addEventListener("submit", event => {
  event.preventDefault();
  const name = document.querySelector("#name").value;
  const Imgsource = document.querySelector("#imgURL").value;
  const comment = document.querySelector("#comment").value;
  post = {
    username: name,
    message: comment,
    image_url: Imgsource,
    comments: []
  };
  creatpost(post);
  window.scrollTo(0, document.body.scrollHeight);
});

for (let i = 0; i <= posts.length; i++) {
  creatpost(posts[i]);
}
