# Github - Saving Code Daily

You'll soon come to learn that Github is becoming one of the most essential tools for developers on a day-to-day basis. It is extremely powerful for versioning your projects, and tracking all the changes that you make to your code. It also allows for many different developers to be working on the same files and projects at the same time without losing track of your work and causing fatal errors due to conflicts with each others code.

Luckily for us 21st century developers, simple yet beautiful UI has become somewhat of a standard. It makes navigating around an application easier than ever, while maintaining a fairly high level of granularity as well. Github has created a desktop application for interacting directly with their website, rather than having to type commands into the terminal. This makes our job as developers much more simple, as we can submit the changes we have made to our code through this UI and sync it over to Github. 

Let's break down the Github terminology, that'll help you navigate around the website/application and discuss workflow with the other developers.

### Github Terms and Workflow

Repository

> All work that gets saved by Github is stored into what we call a repository. Simply put, a repository is like a binder. It is a place to store your work, and interact with the existing changes you may have made to your code. Typically you will be working on the Innovasium-2014 private workspace, so you may see multiple repositories to choose from. Ask for guidance from Matt or Ryan regarding which project you will be working on. You will not be able to create or edit repositories, only access the information they contain.

Branches

> All projects that exist within a Github repository are broken up into branches. These branches contain a version of your project that has been isolated by itself, so that you can work on the same code that everyone else is without damaging each others work. For example, Ryan can take a branch off a project to work on database architecture, while Matt can take a branch off the same project and work on UI enhancements. They will be working on the same projects, while not butting heads with each other trying to edit the same code. The main branch in a project is called development, which is where you can find the stable, tested, production-ready version of our code base. Since we want to make sure this code stays clean and running properly, you will not be able to make changes to code on development. Maybe try making your own branch instead?

Commits

> A commit is just a fancy term for saving the changes you've made to your code onto the branch you are currently working on. Since you will be isolated to working off of a branch, you can commit code that may break the build of your app, not a problem at all. Just be aware that when you are finished working on your branch that your code should be tested and stable.

Pull Requests and Merging

> These two terms go hand in hand, therefore it is appropriate to include them together. Creating a pull request means that you want to bring the functionality you created on your branch and join it back into the development branch. Now you see why your new branch needs to be stable? Each pull request must be reviewed by either Matt or Ryan, who will (more than likely) present you with some constructive criticism on changes they would like to see before they give your branch the seal of approval. Once they think your branch is acceptable, they will merge the branch back into development. In summary; you create a pull request, it will be merged into development.

Merge Conflicts

> This term may come up if you have been working along side another developer on the same file but in different branches. You may notice a little button in the Github desktop that says `Update from development`. Since other developers will be merging their branches to development while you are working on yours, updating from development syncs all those changes onto your branch. If you have altered the same file as someone else, Github will show you four pretty, yellow dots on the file stating that there are two different versions of the file. You will need to choose which version of the code you want to keep or discard. Please ask Ryan or Matt for details the first few times this issue arises, they can walk you through it in more detail.

Be sure to check out the picture below for a brief overview of the Github Desktop UI.

![Imgur](http://i.imgur.com/TokQDnt.png)

*Note: You can take as many branches off of development as you want, at any time. Tax free.*









