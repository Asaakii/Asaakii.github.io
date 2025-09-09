var posts=["posts/50dd7fcb/","posts/f97c/","posts/4ea6/","posts/27746/","posts/b6d6/","posts/653e/","posts/c0a3/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };