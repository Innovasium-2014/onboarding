# Social Card

Example idea came from here - [React Practice Problems](https://daveceddia.com/react-practice-projects/)

In this example you will be building a social card. This will be a mock of a
tweet that would appear in your timeline on desktop. This component will have a
toggle to put it into edit mode, and normally displays in view only mode. Reference
the original example above for how this card might appear visually.

## Functionality

- Will accept the following props
    - Account name
    - Account handle (@profile)
    - Date posted (should display relative minutes/hours/day)
    - Post body
    - Post image url (maximum of one)
    - number of comments
    - number of shares
    - number of favorites
- Display edit button in top right that toggles the component's mode between view and edit

### View Only Mode
- Increment comment/retweet/like when clicked
- Toggle icon color from grey to something else for comment/retweet/like

### Edit Mode
- Replaces the regular view when toggled
- Edit mode allows the user to alter the post body (`<textarea />` html element)
