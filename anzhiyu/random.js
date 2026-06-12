var posts=["posts/50dd7fcb/","posts/4ea6/","posts/c0a3/","posts/653e/","posts/27746/","posts/17120/","posts/58149/","posts/571d/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };