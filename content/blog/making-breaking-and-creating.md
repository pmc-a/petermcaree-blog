---
path: making-breaking-creating
date: 2019-04-20T20:10:41.468Z
title: Making, Breaking and Creating
description: AINI Hackathon adventure
---
![AINI Hackathon sponsorship TV](/assets/aini-hack-tv.jpg "AINI Hackathon")

This past weekend, [Chloe McAteer](https://twitter.com/ChloeMcAteer3), Eamon Compston and myself took part in the AINI hackathon - the largest that Northern Ireland has ever seen!

The hackathon was ran across two locations, Belfast (QUB) and Derry (UU) - with over 200 people taking part in total. The theme was utilising AI for good and building innovative solutions that would benefit the world or humanity.

- - -

It all kicked off on Saturday, we had arrived in the morning and spent no time messing around - we quickly grabbed a project room as we thought this would be the best environment to allow us to brainstorm, whiteboard and get the creative juices flowing.

Post-its and whiteboard markers at the ready, we proceeded to the opening address which noted some important resources including the judging criteria that would be used the next day. It was completely transparent and everyone had access to give themselves the best chance of competing in the competition!

After a quick boost of caffeine, we were good to go. The brainstorming commenced.

![Essential tools for hackers - post-its, snacks and a pensive pose](/assets/whiteboarding.jpg "Essential tools for hackers - post-its, snacks and a pensive pose")

- - -

We wanted to align our idea as closely with the theme as possible, building a solution that will have a positive impact on humanity. After some initial research, we had discovered that an ongoing problem that is widespread throughout every industry is that human bias (intentional and unintentional) plays a significant part in the initial screening of job applicants - specifically bias in the shortlisting of CVs.

We had found some staggering statistics that really hammered home that this is truly a major issue. How could we use our skills to tackle this? Could we create a viable solution that could positively impact humanity and potentially remove this bias? How feasible is a solution for this problem?

The event was just over one day long, but we had ambitious plans.

- - -

## Enter DiverseCV 📄

We wanted to craft an experience that would level the playing field for both employers and potential candidates, ensuring that candidates could trust that they were being treated fairly and would get the opportunity to progress in the recruitment process based on their skills and those alone.

For a team of three, we had quite a range of different skills, ranging from front-end development to machine learning & data science. We decided to utilise natural language processing to build an engine that would process CVs and remove anything that could pose as a potential flag for human bias, for example: gender, race and ethnicity.

We then wanted the engine to be wrapped up and exposed as a simple API to allow different clients to interact with. As with most of the ML/AI world, there is heavy usage of Python - so we decided this would definitely be the path of least resistance. Settling for Django as our web application framework and PostgreSQL as our persistence layer, we were ready to get cracking.

However, when it came to pitching we didn't want to just showcase a Postman request or cURL command - we wanted something a bit more substantial, so we decided on building a simple React application to interact with our API.

![Chloe giving us a whirlwind on how our NLP engine should work inbehind the scenes](assets/spacy-onboarding.jpg "Chloe giving us a whirlwind on how our NLP engine should work inbehind the scenes")

## Let's get engineering 🛠

For the front-end, we wanted to showcase the perspective from both types of users using the service - the applicants uploading their CV and the company viewing the applicants anonymous CVs. We built a simple interface that allowed the applicant to upload their CV before being sent off to the backend service.

The flip side of the UI was a simple accordion that displayed each of the anonymous CVs with only the relevant UUID indicator that linked to the submission stored in the database.

For the backend, we simply exposed a few endpoints within Django that interacted with the database but crucially invoked the natural language processing functionality before storing the documents in an S3 bucket.

By Saturday evening, we were all exhausted - it had been incredibly productive but we needed rest. Closing the laptops and grabbing a beer we had called it a night. Having managed to get both services up and running we were happy with our progress.

- - -

## Pitchin' 📣

Sunday morning. Time to pitch our idea and progress. Since the judging criteria was completely transparent, we wanted to ensure that we were meeting each of them - we gathered in our project room and started progressing through each of the criteria along with putting some slides together for our idea. We really wanted to hammer home how much of an issue this was along with how viable our solution was.

Critically, at the initial opening of the hackathon, it was stressed that the judges want to see the solution that has been built - not just a problem pitched with a fleshed out idea for a solution.

![DiverseCV Presentation Slide](/assets/diversecv-pitch.jpg "Readying our story telling abilities")

After fuelling up with some coffee, we quickly merged the two services together and began practicing our pitch.

Given a strict five minute slot, we highlighted the different aspects of our solution, both technical and general feasibility. We also highlighted that the solution was viable to integrate into different existing platforms that deal with recruitment.

Whilst we pitched the idea with the different use cases and technical complexities, we wanted to highlight that our goal ultimately, was helping to level the playing field - giving everyone the fair opportunity to be judged for their skills and their skills alone.

## Conclusion

At the closing address of the hackathon, we were absolutely ecstatic to be awarded 3rd prize! There were some incredibly innovative uses of AI for good throughout the weekend, ranging from in-depth data science and analysis to real-time translation of sign language.

Huge thanks to the organisers, [@AINI community](https://twitter.com/AI_NI_community) - overall, it was a brilliant weekend and thoroughly enjoyable. Looking forward to the next one!