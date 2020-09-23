---
templateKey: blog-post
title: Debounce and Throttle
date: 2020-09-23T18:52:49.303Z
description: Debouncing and Throttling in JS
featuredpost: true
featuredimage: /img/pexels-mitchell-luo-3761759.jpg
tags:
  - JS
  - React
---
Debounce and throttle are used to limit no of events emitted.

Consider the following example, in 5 seconds try to click the rounded button as much as you can

<iframe height="355" style="width: 100%;" scrolling="no" title="Normal Counter" src="https://codepen.io/majidzeno/embed/YzqBzNZ?height=355&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/majidzeno/pen/YzqBzNZ'>Normal Counter</a> by Majid 

  (<a href='https://codepen.io/majidzeno'>@majidzeno</a>) on <a href='https://codepen.io'>CodePen</a>.</iframe>

How many counts did you get? about 25 ? 
What if every single click is a rich action, imagine if you're trying to load more posts and with every single click you send a request to the server to get 5 more posts, try the next example, try to do the same what you've done with the last one, click as fast as you can for about 5 seconds.

<iframe height="378" style="width: 100%;" scrolling="no" title="get_posts -- NOT-Debounced-Version" src="https://codepen.io/majidzeno/embed/OJNdJzZ?height=378&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/majidzeno/pen/OJNdJzZ'>get_posts -- NOT-Debounced-Version</a> by Majid 
  (<a href='https://codepen.io/majidzeno'>@majidzeno</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

How many posts did you get, imagine with every single click you send a request to the server, do you think that would make a good UX or performant application ?, think what could be the solution to this problem ? 
What if we could bundle all these clicks to just emit one event every second ? can we do this ? try to do what you did with the previous 2 examples with the next one, try to click as fast as you can, and see how many counts did you get in 5 seconds.

<iframe height="344" style="width: 100%;" scrolling="no" title="Debounced Counter" src="https://codepen.io/majidzeno/embed/JjXxjEG?height=344&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/majidzeno/pen/JjXxjEG'>Debounced Counter</a> by Majid 
  (<a href='https://codepen.io/majidzeno'>@majidzeno</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

How many counts did you get this time ? 1 ? how this could be useful ? try the next example 

<iframe height="349" style="width: 100%;" scrolling="no" title="get_posts -- Debounced-Version" src="https://codepen.io/majidzeno/embed/dyMaPod?height=349&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/majidzeno/pen/dyMaPod'>get_posts -- Debounced-Version</a> by Majid 
  (<a href='https://codepen.io/majidzeno'>@majidzeno</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
Now we can control number of requests will be sent to the server.

This is an implementation to debounce function, it could be useful in many other cases.
how it works ?!

```javascript
const debounce = (fn,delay)=>{
  let timeoutId;
  return function(...args){
    if(timeoutId){
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(()=>{
      fn(...args);
    },delay)
  }
}
```