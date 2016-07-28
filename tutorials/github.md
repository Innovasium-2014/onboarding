# Github - Saving Code Daily

You'll soon come to learn that Github is becoming one of the most essential tools for developpers on a day-to-day basis. It is extremely powerful for versioning your projects, and tracking all the changes that you make to your code. It also allows for many different developpers to be working on the same files and projects at the same time without track of your work and causing fatal errors due to conflicts with each others code.

### The Github Workflow

Luckily for us 21st century developers, simple yet beautiful UI is just so easy to use that it makes our bigger more complicated tasks not so difficult. Let me give you a quick example of how Github does that for us while developping, and then I will break it down into parts.

- Github gives us access to a development branch, on which we keep the stable, tested, production-ready version of our code base. In order to create the bulk of this branch, we can take a new branch off of development and name it to be the next slice of functionality we are looking to implement. 

- Since we are not working directly off the development branch any longer, we can make commits to our new branch until our goal has been completed. These commits do not have to be working, they could break our entire app if we really want, they are just a quick way to save the code that you have editted into the Github repository you are working in.

- As long as the final product is tested and works as we would like, it can be merged back into development via a pull request to the branch. These pull requests must be verified by either Matt or Ryan before they become merged to development. They will be checking for merge conflicts, and commented code which will need to be removed. Don't be surprised if you need to refactor some old functions too, it is worth the hassle. 

- Once the pull request has been merged, your code will exist in the development branch. Now you can restart the entire process all over again.

Confused yet? Let's break this down into small steps, that'll make things a little more concrete.

### Github Terms 

Branches

> All projects that exist within a Github repository are broken up into branches. These branches contain a version of your project that has been isolated by itself, so that you can work on the same code that everyone else is without damaging each others work. For example, Ryan can take a branch off X project and work on database architecture, while Matt can take a branch off the same project and work on UI enhancements. They will be working on the same projects, while not butting heads with each other trying to edit the same code.

Commits

> A commit is just a fancy term for saving the changes you've made to Github. Since you will be isolated to working off of a branch, you can commit code that may break the build of your app, not a problem at all. Just be aware that when you are finished working on your branch that your code should be tested and stable.

Pull Requests and Merging

> These two terms go hand in hand, therefore I found it appropriate to include them together. Creating a pull request means that you want to bring the functionality you created on your branch and join it back into the development branch. Now you see why it needs to be stable? Each pull request must be reviewed by either Matt or Ryan, who will (more than likely) present you with some constructive criticism on changes they would like to see before they give your branch the seal of approval. Once they think your branch is adequate, they will merge the branch back into development. In summary; you create a pull request, it will be merged into development.

Merge Conflicts

> This term may come up if you have been working along side another developer on the same file but in different branches. You may notice a little button in the Github desktop that says `update from development`. This button will update your branch with all the changes that have been added to the development branch. If you have altered the same file as someone else, Github will show you four pretty, yellow dots on the file stating that there are two different versions of the file and you need to choose which you want to keep or discard. Please ask Ryan or Matt for details the first few times this issue arises, they can walk you through it in more detail.

That is really all there is to it. Now, go back up and read those bullet points again to make sure you can follow the workflow through the process Github has outlined. Check out the picture below for a brief overview of the Github Desktop UI.

[Imgur](http://i.imgur.com/KaHGzj1.png)

*Note: You can take as many branches off of development as you want, at any time. Tax free.*









