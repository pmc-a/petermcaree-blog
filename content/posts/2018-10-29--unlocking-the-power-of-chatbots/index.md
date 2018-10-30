---
title:  "Unlocking the Power of Chatbots"
subTitle: "Conversation & AI"
cover: chatbot-message.jpg
categories: "findings"
---

![Chatbot Texting](./chatbot-message.jpg)

Having built a few chatbots, I wanted to share my thoughts on why I believe they are incredibly powerful and how they can really help to automate a lot of manual tasks - it just requires a mind shift from the humans.

A chatbot is a service that facilitates a natural conversation between itself and a human, consuming instructions along the way.

##The good, the bad and the.. pretty ugly

Chatbots aren't a totally new concept - they've existed ever since the creation of the concept of Artificial Intelligence. However in saying that, they've came a long way since they were initially invented. It's only really been in recent years that we've really started taking them seriously.

![Chatbots Trend](./chatbots-trend.png)

The photo above shows the Google Trend for the term *chatbots* over the past 5 years. It stayed fairly steady up until around 2016 and has been on the rise ever since.

As I did some more research, I had came across the reasoning for this spike:
- Facebook had announced some stuff about conversational UI @ F8
- Google had announced Google Home and some updates around Google Assistant
- But most importantly, Microsoft had released their Twitter **Tay bot**

![Microsoft's Tay Bot](./tay-bot.jpg)

Tay was a Twitter bot that utilised AI (specifically natural language processing) in an attempt to mimic the language patterns of a 19 year old, American girl. The cognitive model in behind the scenes was trained by general public direct messaging the bot about different trends and topics.

Needless to say, this was abused by a minority and Tay quickly turned into a nasty piece of work. **96k tweets and 16 hours into production**, Microsoft had to remove her from Twitter because the bot had begun to respond to users with racist tweets along with various Nazi propaganda - not good.

The whole scenario got out of hand very quickly and does raise an important question around the ethics of AI and chatbots - but that's for another time.

##Chatbots come in all shapes and sizes

Modern day use cases for chatbots really do vary. They can range from simple QnA chatbots that pull from a knowledge base right to chatbot lawyers that can actually appeal your parking tickets and more!

-- photo of DNP? --

One of the most important characteristics of chatbots is that they are **adaptive and versatile**. No matter what industry you are in or who your target audience is - nine times out of ten, a chatbot can fit right into your solution.

Whether you are wishing to engage more users with your service or automate an existing process, a chatbot can be as simple or as complex as you make it.

##Ok, so how are these bots made then?

-- photo of MSBF, Lex & Wit --

Since the increase in popularity around chatbots, there has naturally been an increase in the number of ways they can be developed. There are a number of frameworks and SDKs out in the wild that can be used to build your bot. Most notably, four of the major players all have some sort of framework or SDK released which can be used: Microsoft, Google, Amazon and Facebook.

I've mainly been focusing on using Microsoft's offering - [MS Bot Framework](https://dev.botframework.com/). It offers a really nice SDK for both Node.js and C#. Having just released a new major version (v4) of the Node.js SDK, it welcomes a lot of awesome changes - wraps up a lot of functionality it nice classes, provides a lot of interfaces to abstract most of the low-level logic away from the user.

Working primarily with the Node offering of the SDK, it has good resources and there are a good few examples that they provide via GitHub repos.

However, the documentation for the SDK isn't quite there yet - it's still a work in progress, so I'm sure it'll be up to speed fairly soon. Saying that, they are still useful and a good reference point, I've found using them along with some of the sample repos to be a good pairing.

##Power-ups 🚀

##Summary

Chatbots are incredibly powerful pieces of technology when utilised correctly and welcomed by the end users.

In my opinion, they have a number of standout features:
- **Adaptive & Versatile** - regardless of industry or use case, a chatbot can be used to enhance the user experience.
- **Cognitive Services** - there are a tonne of services that can be used to power up your bot, from natural language processing to image recognition. Give them a try!
- **Integration** - chatbots can be easily integrated into different channels e.g. Slack, Teams etc.
- **Simple Deployments** - serverless computing and chatbots are like a match made in heaven, throw your chatbot at a [Lambda](https://aws.amazon.com/lambda/) or [Azure Function](https://azure.microsoft.com/en-gb/services/functions/) and you're sorted!

I plan on following up this blog with a few more in-depth, technical ones around the various concepts of chatbots and some further topics - so stay tuned!

-----

*So I recently spoke at BelfastJS - a local meetup that focuses around, well, JavaScript. Over the past number of months, I've attended various hackathons, meetups and other events mostly making use of my JavaScript skills along the way.*

*One particular area of interest that caught my attention from attending these events is chatbots. As it turns out, chatbots and JavaScript go hand in hand, so that was my topic of choice!*
