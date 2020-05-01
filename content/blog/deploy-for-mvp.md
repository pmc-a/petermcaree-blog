---
path: deploy-for-mvp
date: 2018-02-17T20:32:57.472Z
title: Deploy for MVP
description: How to quickly deploy MVP projects to get it in front of your clients!
---
![Rocket launch](/assets/mvp-banner.jpg "Launch your next project!")

Recently, I've been working on a few personal projects both for myself and others. Naturally, after building something I have wanted to show the people involved what I had managed to create. I found myself giving them a demo just whenever I next met them in person – cracked open the laptop, spun up some services locally and demoed from my nice, familiar set up. 

After a few separate occasions where the stakeholders involved asked to review the content at 11.30pm at night (who would have thought!), I simply had to delay until I next seen them. Surely, I should be able to quickly get something deployed to prevent the inevitable texts late in the evening. 

No more *"works on my machine"* I thought, this was the real deal - **DevOps, right?**

## Providers

Now, the recent projects I've been working on lately have been Node.js based with an Angular v5 front-end on top. So, I began my investigation into which provider would be best suited for an MVP-style application with this particular technology stack. 

Crucially, one of the major requirements of my provider was it needed to have some sort of free tier because well, for MVP it just needed to be out there on a small scale. I looked at a couple of different options:

#### Amazon Web Services ☁️

The giant of cloud computing nowadays. Using AWS architecture as part of projects in work, I felt obliged to consider it as one of my options as I knew it was the choice of many production applications. Now, I knew that AWS has a free tier from my previous experiences with Alexa (which you can [read here](https://petermcaree.com/hackathon/alexa/home/automation/2018/01/24/timon-hackathon.html)) and I also found a [nice guide](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/create_deploy_nodejs.html) on how to get your Node.js app deployed to Elastic Beanstalk and include a RDS DB instance too. 

However, I ultimately ruled AWS out because I felt like it was **a bit on the heavy side** – it had plenty of features that I simply didn't need for my small MVP app, along with the fact that their free-tier is timeboxed from the creation of your AWS account for 1 year.

#### NodeChef 👨‍🍳

After some searching, I came across this smaller scale provider that looked promising. Providing Node.js and PostgreSQL support out of the box, this aligned quite nicely with my tech stack. A nice platform that wrapped your application up in a Docker container (and ultimately utilised AWS in the background), they provided a nice UI console for managing your app and a simple CLI that allowed quick deploys. 

Only major downside with NodeChef is that they **don't provide a free tier**, so pretty much ruled them out.

#### Heroku 🚀

A popular PaaS provider. Previously using Heroku a few years ago, I revisited its potential. Again, I noticed it also had a [nice guide](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction) to get your Node.js app up and running which also included a section on provisioning your PostgreSQL database. Heroku offer a generous free tier, the only downside is that after a period of inactivity on your application, they spin down the instances to save money but restart once a new connection to it is made – not a deal breaker for a MVP application. 

**Heroku looked like it was a goer.**

## Deploy, deploy, deploy!

Now that I had decided on using Heroku, I began investigating how I could start integrating it into the applications I had created.

Heroku provide a really nice CLI that does pretty much all of the heavy lifting for you. I downloaded the CLI and followed the [documentation](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction) for deploying a Node.js service. After cloning down their repo and 4 simple commands later, I had the sample application up and running:

```bash
$ heroku login

$ heroku create

$ git push heroku master

$ heroku open
```

*Well, that was easy!*

![Too easy!](https://media.giphy.com/media/iI6eeGjwScTCM/giphy.gif)

So I had some static content served that was provided in the sample application. Now I had to take this knowledge and apply it to one of my other applications - which cruically, included interacting with a PostgreSQL database.

**Note: I created a quick boilerplate application that I use from this point on - check it out [here](https://github.com/pmc-a/heroku-angular-node-boilerplate)**

Heroku offers some nice "Add-on" features which includes provisioning a database which supports a range of different platforms. Again, the Heroku CLI does pretty much all of the work for you. To provision a database, you simply run:

```bash
$ heroku addons:create heroku-postgresql:hobby-dev
```

This essentially just utilises the Heroku add-on marketplace, creates a PostgreSQL database and specifies that it should be the `hobby-dev` tier (which is the free one). Finally, it also sets a environment variable `DATABASE_URL` which is used to actually connect the server to the database itself.

## Heroku ft. Knex

As part of my projects, I was using [Knex](http://knexjs.org/) - which is a lightweight SQL query builder for JavaScript. It wraps up typical database queries in easy to use functions and also allows you to create database migrations to handle any schema changes, creation of tables etc.

Knex also makes it easy to separate the connections to your database depending on which environment the application is running in. It uses a simple config file that is required in your server and the rest is handled by Knex. Here is the sample `Knexfile.js` used in the boilerplate repo:

```js
module.exports = {
    development: {
        client: 'pg',
        connection: {
            host: '127.0.0.1',
            user: '<YOUR_DATABASE_USERNAME>',
            password: '<YOUR_DATABASE_PASSWORD>',
            database: 'boilerplate-sample-database'
        },
        searchPath: ['knex', 'public']
    },
    production: {
        client: 'pg',
        debug: true,
        connection: process.env.DATABASE_URL,
        migrations: {
            tableName: 'migrations'
        },
        ssl: true
    }
}
```

As you can see above, Knex makes it really easy - creating two separate objects for development and production. Focusing on the `production` object, you can see that all we need to specify is which client we are using, the database URL (which comes from the environment variable set by Heroku CLI earlier) and the table name of the migrations we plan on running.

After creating some simple migrations, the last thing to do was run our Knex migrations on our Heroku provisioned database and re-deploy our application:

```bash
$ heroku run knex migrate:latest

$ git push heroku master
```

And it really is as simple as that - full stack application, hooked up to a database and deployed using Heroku.

## Summary

All in all, I didn't really realise just how easy it could be to get a *full-stack application* quickly deployed. Whilst it might not be a perfect solution for large-scale production applications, Heroku most definitely fits the purpose for developing a MVP or prototype - perfect for things that might be developed at hackathons!

Key takeaways:

* **Services like Heroku are awesome.** It makes it really simple for developers, who don't know a whole lot about spinning up AWS ECS clusters that contain EC2 types and all sorts other crazy ops stuff, to get something functional and out there.
* Documentation and support for these PaaS providers is **extensive**. All of them have some form of "Getting started" guide that will point you in the right direction.
* MVP development approach is critical to pivoting and adapting your ideas in order to improve them - **get your apps deployed** and get that feedback as soon as possible.

![Build, Learn, Measure](/assets/mvp-final.jpg "Build, Learn, Measure - launch your project!")

- - -

*This wasn't really meant to be a guide or code walkthrough, just some of my thoughts and ramblings when experimenting with different technologies.*

*Feel free to check out the [boilerplate repo that I created](https://github.com/pmc-a/heroku-angular-node-boilerplate), it contains a README that details how to get the application up and running along with hooking it up to Heroku and other technologies discussed throughout this blog.*

*Find out more about [Heroku here](https://www.heroku.com/)!*