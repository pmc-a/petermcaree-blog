---
path: build-mobile-web-share-component-with-react
date: 2020-05-13T22:08:48.916Z
title: How to build a mobile web share component with React in under 10 minutes
description: A quick way to implement native share functionality using a simple browser API
---
_Originally posted over on my [personal blog - PeteScript](https://petermcaree.com/blog/build-mobile-web-share-component-with-react)_

---

A super important piece of functionality on any web application is providing the user with the ability to share it - be it a blog, social media post or news article.

Utilising social media is vital to both dissemination of information as well as business success.

Having recently re-built my personal blog, I thought it would be cool to share how easy it is to build a small component that leverages a browser API in order to provide share functionality with a native feel, whether the user is on iOS or Android.

## 🛠 What we are going to build

![GIF of native web share demo in iOS emulator](/assets/pmca-blog-web-share-component.gif)

A simple share component for the web, but with a native feel. It unlocks a lot of extra channels that the user already shares to and interacts with e.g. Twitter, WhatsApp. Which is incredibly powerful and feels natural to the user since it is their native OS taking care of it! Pretty nice, right?

My blog is based on the Gatsby Starter Blog template, therefore it is built using React - so the examples you see below will be somewhat specific to React, but the web share functionality itself is just vanilla JavaScript, so if you're not totally familiar with React - don't worry!

Let's dive in to some short code snippets.

## 📲 Determine the client type

Since the [Web Share](https://www.w3.org/TR/web-share/) API is mostly only [implemented](https://caniuse.com/#feat=web-share) by mobile browsers, we want to only render the component if the client is a **mobile or tablet device**.

For this, I built a quick custom hook that inspects the `User Agent` of the client and returns a boolean value that we can utilise:

```jsx
const useMobileDevice = () => {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    setIsMobileOrTablet(isMobileOrTabletDevice());
  });

  return [isMobileOrTablet];
};

```

I found the common RegEx implementation on the top [StackOverflow answer](https://stackoverflow.com/a/11381730) which I've abstracted out to a separate function (`isTabletOrMobileDevice()`) for simplicity.

## 💅 Style it up

A common UI pattern for a main call-to-action on blogs is to have a floating icon on the view, somewhere the user can easily access. Since we're specifically targeting mobile devices, we should allow the component to live in the bottom right corner of the view - this is a high intent zone of the mobile device, which can be accessed easily by the user's thumb.

We want to build this as a separate component that can house this functionality and easily import into the pages:

```jsx
import React from 'react';

const MobileShare = () => {
  const handleOnClick = () => {
    // TODO: Placeholder to implement web share API 
  };

  return (
    <div className='share-icon' onClick={handleOnClick}>
      <ShareIcon />
    </div>
  );
};

export default MobileShare;
```

In the snippet above, our `ShareIcon` is simply just an SVG of a typical share icon.

For styling it with the floating effect, we need to apply some `fixed` positioning to this element in our CSS:

```css
.share-icon {
  position: fixed;
  bottom: 25px;
  right: 25px;
  cursor: pointer;

  height: 40px;
  width: 40px;
  border-radius: 50%;
  padding: 5px;
  background-color: rgb(43, 135, 255);
  -webkit-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);
}
```

The first portion of the CSS is related to the positioning of the component, the second portion is just some custom styling I wanted for my blog.

## 💡 Wiring up the share API

Final piece of the puzzle is to integrate our `onClick` handler with the web share API. Since it lives on the `navigator` interface, we want to invoke the `share` function on it and pass in some custom parameters that relate to the specific blog post.

We can invoke the functionality by implementing the following as our `handleOnClick` function defined above:

```jsx
const handleOnClick = () => {
    if (navigator.share) {
      navigator
        .share({
          title: `${postTitle} | ${siteTitle}`,
          text: `Check out ${postTitle} on ${siteTitle}`,
          url: document.location.href,
        })
        .then(() => {
          console.log('Successfully shared');
        })
        .catch(error => {
          console.error('Something went wrong sharing the blog', error);
        });
    }
  };
```

As you can see, we want to make sure that the `navigator.share` function is available on the client currently using the site. The reason for this defensive approach is due to the browser implementation of the API that I have noted above.

If it's available, we call the function and pass in an object with some values - these represent the properties the client can render as a preview when invoking the functionality.

As per the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share), there are three properties that can be passed in as part of the configuration object:

> An object containing data to share. At least one of the following fields must be specified.

At least one of these fields must be specified: `title`, `text` or `URL`. You can see in the snippet above, I'm passing in all three as it provides the richest experience when sharing. Different OS and devices will consume these properties slightly differently, so for my use case of sharing a blog, I thought it best to provide as much detail as I could!

The `share()` function itself, is an async function so we can hook into the resolved callback knowing that it is completed - in case you want to perform any further functionality, maybe such as presenting a little notification confirming to the user that the article has been shared. For me, I'm just logging out that it has successfully shared - maybe I'll implement a small toast in the future 😃

---

The API also provides the ability to share files too, which is fairly straightforward and well documented in the MDN docs above.

## 🤔 Quriks and irks

Due to the nature of the API and browsers implementing it differently, there will be variation across devices and browsers. For example, on iOS I noticed that the `text` property takes precedence for the little icon that is displayed within the native share widget - instead of my blogs favicon.

Not a huge deal, but just a little irk I noticed when building it!

## 💫 Summary

A super simple, new-ish browser API to interact with that unlocks sharing functionality for mobile web, but with a native feel.

It was incredibly easy to hook in to and with a few lines of code, we had it up and running!

I'd definitely recommend plugging something like this into your own personal website as it can give it that level-up feel and ease for users sharing your articles!

If you're on a mobile device, you should see the share icon in the bottom right whilst you're reading this, so why don't you give it a go and see how it works? 😉

---

You can check out the quick integration I put together for my blog on [GitHub](https://github.com/pmc-a/petermcaree-blog).