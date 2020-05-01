---
path: reactiveconf-2019-whirlwind-edition
date: 2019-11-19T21:18:03.122Z
title: ReactiveConf 2019 - Whirlwind Edition
description: My thoughts and experience of ReactiveConf 2019, Prague
---
![ReactiveConf 2019](/assets/reactiveconf-heading.jpg "ReactiveConf 2019")

Two weeks ago, I had the pleasure of attending [ReactiveConf](https://reactiveconf.com/) in Prague - a three day event focusing on bleeding-edge web technologies. Passionate and inspiring people in tech came from every corner of the Earth to attend, share their stories and spark conversation about the past, present and the future.

With a packed schedule and two main tracks, I was first tasked with making the difficult decision of which talks to attend for each slot! Themes were varied throughout the event, but the most prominent ones included GraphQL, security, web assembly and testing.

The conference venue itself was amazing, located just on the outskirts of the city centre, it comfortably coped with the ~1500 people that were in attendance. Talks were spread across two different stages, with plenty of caffeine in between to keep everyone fuelled up and on top of their game.

All of the talks that I had managed to attend were brilliant, but the following 5 were standouts for me personally - I’ve written a quick overview and some of the key takeaways that I think are relevant:

## Cypress.io - the state of the art end-to-end testing tool (Gleb Bahmutov)

![Gleb Bahmutov - Cypress.io presentation](assets/gleb-cypress-presentation.jpg "Gleb Bahmutov - Cypress.io presentation")

Gleb introduced his talk as a way to implement testing, without it being frustrating and providing *true* value to your application, rather than just another checkbox.

> “Testing is like scaffolding, it doesn’t provide the features and value for users, but it’s necessary for the construction of your application."

Instead of focusing on the intricacies of methodologies such as the testing pyramid, we should focus on the practical application of testing. If you are writing code, you should test it - it doesn’t matter which type of test you write, as long as the test provides you with the confidence that your code works.

Gleb proceeded to give different examples of what Cypress can do and the power of it, but encourages developers to take a step back and truly understand what they want the outcome of their testing to be. Ask yourself: what should I test?

[Cypress.io](https://www.cypress.io/) is built with the developer experience in mind - to allow them to craft the valuable tests with ease.

Gleb's presentation stressed the importance of writing tests for the purposes of value and not for the sake of it. One of the best quotes from the entire talk was around code coverage:

> "Use code coverage as a tool to write your tests, not as the goal."

This really struck a chord with me as sometimes we can get wrapped up in the numbers around code coverage and relying on it saying that we have confidence in our code, which is not always the case.

### Key takeaway

Write the tests that make sense for you. Don't be afraid to utilise different methods to test features, using a combination of testing techniques often provides more value and confidence in your application.

- - -

## Rethinking Design Practices (Mark Dalgleish)

![Mark Dalgliesh - Design practices presentation](assets/mark-seek-.jpg "Mark Dalgliesh - Design practices presentation")

Mark opened with a bold statement that he wanted to rethink design practices - focusing on how our design tools integrate with the technology we have available today.

He floats the idea that our industry is at a crossroads, we can either code in design tools (e.g. sketch) or we can design in code. Focusing on designing in code, he portrays the major advantage of developers and designs speaking the same language.

> "Mirroring our design systems to the designers mental model is critical to success!"

Mark has created an open source tool ([Playroom](https://github.com/seek-oss/playroom)) that encapsulates this idea. Working specifically with React (and JSX), it allows designers to craft *real* prototypes using the *real* components that build the application you're working on.

It provides a medium for a quick feedback loop using an easily translateable language, aligning designers and developers. Mark suggests that this is absolutely key to creating a successful design system.

For me, I can definitely relate to benefits of having a design system in place - making both design and development easier down the line. However in terms of smaller, fast pace startups, I feel the short feedback loop should be between users and features, as I have seen teams get wrapped up in the fine details of design rather than genuine, valuable feedback from a user.

Overall, Mark stressed that If we want to be able to design in code, we need to pay attention to how designers iterate. Understanding how they work, their thought process and what tools would be comfortable for them to perform at the same ability but providing more overlap between design and development.

### Key takeaway:

Mirroring our design systems to the designers mental model is critical to success when it comes to design systems.

- - -

## Mind-reading with Intelligent & Adaptive UIs (David Khourshid)

![David Khourshid - Adaptive UIs presentation](assets/david-mindreading.jpg "David Khourshid - Adaptive UIs presentation")

David introduced his talk by highlighting that we need to craft a user experience that is suitable for all of our users, whether that is a new user or a poweruser of our applications.

> "User flows are seldom linear, each user will have a different path they wish to take to achieve the same outcomes."

Adaptive UIs is one possibility of how to handle this - catering for not only different devices, but also different users, but there is *a lot* that needs to be taken into account.

Libraries such as [Guess.js](https://github.com/guess-js/guess) allow us to prefetch bundles, based on analytics of previous users, that will render the next stage in the users flow, prior to them actually navigating to it.

Next, he portrays the idea of using finite state machines as a way to think about UIs and construct them - thinking of how the users flow through application and what state they have.

For me, this sparked a few different thoughts:

* We already split our applications into different bundles, define certain prefetch flows etc. What if we took this one step further and applied some intelligence to *how* we do this?
* Does this require a mindshift in how we develop features? If we predict and prefetch an incorrect flow for a user, we need to provide some sort of backdoor out of it and back to a previous state, to allow them to achieve their goal.

Nonetheless, I'm super interested in thinking about this more - how we can craft adaptive UIs in order to create better user flows and allow our users to achieve their goals.

### Key takeaway

Users use our applications in different ways, so why don’t we try and learn from this - specifically allow the application to learn and adapt based on the data we have on our users.

- - -

## Kicking Bugs and Logging Names: Errors in JavaScript Error Reporting (Liz Krane)

![Liz Krane - JS Errors presentation](assets/liz-krane-sentry-.jpg "Liz Krane - JS Errors presentation")

Liz opened by giving an awesome history of how JavaScript has evolved, ultimately into something that it probably wasn’t initially intended for.

> "JavaScript sometimes makes you want to throw things, and not always errors!"

Honing in specifically on debugging and error handling, Liz showcased the many, many problems that JavaScript has produced over the years.

However, we have adapted our tools and skillsets that allow us to actually capture these issues and importantly, debug them.

Liz proceeded to showcase Sentry.io - an open source tool for tracking and monitoring errors, and in this case specifically for modern web applications.

This got me thinking about how we could handle our errors, track them and crush the *real* bugs that are causing users issues - not just the ones they report!

### Key Takeaway:

We can’t rely on users reporting the errors, we need to actively track the errors that they face on a daily basis, to provide a more robust outlook on our applications - giving us motivation and statistics in order to address these.

- - -

## Don’t Believe the Rumors: Writing tests for CSS is Possible (Gil Tayar)

![Gil Tayar - CSS testing presentation](assets/gil-testing-.jpg "Gil Tayar - CSS testing presentation")

Gil delivered a somewhat, light-hearted fun and engaging talk but with a real focus and purpose.

We as developers, test our functional logic - backend and frontend, we craft unit tests to provide us with confidence that our logic works as expected e.g. when a function is called, it updates state in a particular way.

But do we test the visual aspect of our applications? Not just UI testing, because we usually assert that a user can input text into the input field, right?

> "How do we actually test the *CSS* of our application?"

Gil proceeded to showcase one of the tools that his company (Applitools) work on, that provides functionality to perform visual regression testing.

It’s a hard one to crack because currently, we always need a human to say whether a change was intentional or not, unless we go with a percentage based approach - which wouldn’t provide as much confidence.

For example: if the colour of our navigation bar changed from white to grey, was that intentional or a mistakenly updated global variable? Without some form of human input there, we wouldn’t be able to tell for certain or not.

Gil’s product provides a combination of pixel by pixel comparison and evaluating for updates, but provides a sleek UI that allows the human to quickly accept or reject changes, providing that confidence in the UI regression.

For me, this sparked different thoughts and shifted my mindset on testing. In combination with Gleb's talk from the previous day, it is encouraging me to re-think how we test our web application code, utilising different techniques that are most appropriate for the subject of the test.

### Key takeaway:

Visual regression testing isn’t considered or implemented enough, and it should form part of our process to ensure consistency across platforms - definitely food for thought!

- - -

## Conclusion

Luckily, all of the talks are available on the [ReactiveConf YouTube](https://www.youtube.com/channel/UCBHdUnixTWymmXBIw12Y8Qg) channel as they were live streamed by the conference organisers - which went incredibly smoothly! So they are available for everyone to tune in, which I would highly recommend!

On top of the talks, I had the opportunity to speak to some of the speakers themselves and get a general vibe for where they think the future of web development lies - everything from the power WASM is potentially going to have to remotely jumping onto a VS code instance online and fixing a production issue.

Overall, the whole conference was great - not only extremely thought provoking about the current approach to problems we face in todays web development ecosystem, but also about the future: how we’re going to have to adapt, how users are going to continue to demand more performance from the applications we produce and ultimately how we can make a better experience both for users and developers!

- - -

Check out my tweets from throughout the conference:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">⚡️ “ReactiveConf 2019”<a href="https://t.co/JsRhW6tyK7">https://t.co/JsRhW6tyK7</a></p>&mdash; Peter McAree (@PMc_A) <a href="https://twitter.com/PMc_A/status/1192117858488258560?ref_src=twsrc%5Etfw">November 6, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>