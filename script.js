const form = document.querySelector("#new-post");

function creatpost(post) {
  // event.preventDefault();
  // const name = document.querySelector("#name").value;
  // const Imgsource = document.querySelector("#imgURL").value;
  // const comment = document.querySelector("#comment").value;

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
  icon.classList.add("material-icons");
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

  //comment space
  const comment_review = document.createElement("section");
  comment_review.classList.add("comment_review");
  const comments = document.createElement("section");
  comments.classList.add("comments");
  const usercomment = document.createElement("div");
  usercomment.classList.add("usercomment");
  const icon3 = document.createElement("i");
  icon3.classList.add("material-icons");
  icon3.innerHTML = "account_box";
  const comment_text = document.createElement("p");
  comment_text.classList.add("comment_text");
  comment_text.innerHTML = "i love cat";
  const usercomment1 = document.createElement("div");
  usercomment1.classList.add("usercomment");
  const icon4 = document.createElement("i");
  icon4.classList.add("material-icons");
  icon4.innerHTML = "account_box";
  const comment_text1 = document.createElement("p");
  comment_text1.classList.add("comment_text");
  comment_text1.innerHTML = "i dont know what to say";

  usercomment.appendChild(icon3);
  usercomment.appendChild(comment_text);
  usercomment1.appendChild(icon4);
  usercomment1.appendChild(comment_text1);
  comments.appendChild(usercomment);
  comments.appendChild(usercomment1);
  comment_review.appendChild(comments);

  //comment bar
  const submission = document.createElement("section");
  submission.classList.add("submission_area");
  const inputform = document.createElement("form");
  inputform.classList.add("comment-form");
  const text = document.createElement("input");
  text.classList.add("comment-input");
  text.placeholder = "Add a comment...";
  const postcomment = document.createElement("button");
  postcomment.classList.add("postcomments");
  postcomment.innerHTML = "post";
  inputform.appendChild(text);
  inputform.appendChild(postcomment);
  submission.appendChild(inputform);

  //assemble area
  newpost.appendChild(namebar);
  newpost.appendChild(figure);
  newpost.appendChild(comment_review);
  newpost.appendChild(submission);

  // document.querySelector("#all-post").appendChild(newpost);
  window.scrollTo(0, document.body.scrollHeight);
}

const favorite_button = document.querySelector(".fa");
favorite_button.addEventListener("click", e => {
  e.preventDefault();
  favorite_button.classList.toggle("fa:hover");
});

const readform = document.querySelector(".comment-form");

readform.addEventListener("submit", event => {
  event.preventDefault();
  const comment_review = document.createElement("section");
  comment_review.classList.add("comment_review");
  const comments = document.createElement("section");
  comments.classList.add("comments");
  const usercomment = document.createElement("div");
  usercomment.classList.add("usercomment");
  const icon3 = document.createElement("i");
  icon3.classList.add("material-icons");
  icon3.innerHTML = "account_box";
  const comment_text = document.createElement("p");
  comment_text.classList.add("comment_text");
  comment_text.innerHTML = "i love cat";
  const usercomment1 = document.createElement("div");
  usercomment1.classList.add("usercomment");
  const icon4 = document.createElement("i");
  icon4.classList.add("material-icons");
  icon4.innerHTML = "account_box";
  const comment_text1 = document.createElement("p");
  comment_text1.classList.add("comment_text");
  comment_text1.innerHTML = "i dont know what to say";

  usercomment.appendChild(icon3);
  usercomment.appendChild(comment_text);
  usercomment1.appendChild(icon4);
  usercomment1.appendChild(comment_text1);
  comments.appendChild(usercomment);
  comments.appendChild(usercomment1);
  comment_review.appendChild(comments);
});
