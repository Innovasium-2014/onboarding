# Github - Saving Code Daily

You'll come to learn soon that Github is becoming one of the most essential tools for developpers on a day-to-day basis. It is extremely powerful for versioning your projects, and tracking all the changes that you make to your code. It also allows for many different developpers to be working on the same files and projects at the same time without track of your work and causing fatal errors due to conflicts with each others code.

### The Github Workflow

Luckily for us 21st century developpers, simple yet beautiful UI is just so easy to use that it makes the bigger more complicated tasks not so difficult. Let me give you a quick example of how Github does that for us while developping, and then I will break it down into parts.

Github gives us access to a development branch, on which we keep the stable, tested, production-ready version of our code base. In order to create the bulk of this branch, we can take a new branch off of development and name it to be the next slice of functionality we are looking to implement. Since we are not working directly off the development branch any longer, we can make commits to our new branch until our goal has been completed. These commits do not have to be working, they could break our entire app if we really want. As long as the final product is tested and works as we would like, it can be merged back into development via a pull request to the branch. These pull requests must be verified by either Matt or Ryan before they become merged to development. They will be checking for merge conflicts, and commented code which will need to be removed. Don't be surprised if you need to refactor some old functions too, it is worth the hassle. Once the pull request has been merged, your code will exist in the development branch, and you can restart the entire process all over again.

Confused yet? Let's break this down into small steps, that'll make things a little more concrete.

1. Branches