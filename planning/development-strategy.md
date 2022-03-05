<!--

  There will be different types of tasks for each user story:
    `type: components`
    `type: css`
    `type: logic`
    `type: handlers`
    ...

-->
# Backlog

## Must-Haves

> these are necessary for basic usability

### 1-Page title

> As a user I can see the title of the page

- [ ] there is a page title which reads "Word List"

  - type: html
    - [ ] use the 'title' html tag to create the page title

> As a user I can type a word to create a list  

- [ ] there is input field for word entry
- a form to receive user input
  - type: html  
    - [ ] use `form` tag to create the form that receives user input  
  
  - type CSS  
    - [ ] add `form-group` bootstrap for the `div` enclosing the form elements for inline styling
    - [ ] add `form-inline` bootstrap class inside the `form` to create inline form
    - [ ] add  `id = input-form` to reference the form for javascript
  
  - type : listener  
    - [ ] use `input-word.js` javascript listener to capture click events on the form
- input field for typing a word
  - type: html  
    - [ ] create a `div` node to wrap the input field for inline styling
    - [ ] use the `input` html tag to create the input field  
  
  - type CSS  
    - [ ] add `form-inline` bootstrap class inside the `form` to create inline form
    - [ ] add  `id = input-form` to reference the form for javascript
    - [ ] use bootstrap `form-control` class to style the `input` field
  - type : listener  
    - [ ] use `input-word.js` javascript listener to add/remove typed text on a button click
  
> As a user I can save a list Item

- [ ] there is "add" button for adding/saving a list item
  - type: html
    - [ ] use `input` html tag with `type = button` and `value = add` attributes to create the button.
  - type:css
    - [ ] add `btn btn-outline-success m-2` bootstrap classes to style the button
  
  - type : listener  
    - [ ] use `input-word.js` javascript listener to capture the `onclick` event on the add button

> As a user I can remove an item from my list

- [ ] there is a "remove" button to remove an item from the list
  - type: html
    - [ ] use `input` html tag with `type = button` and `value = remove` attributes to create the button.
  - type:css
    - [ ] add `btn btn-outline-danger m-2` bootstrap classes to style the button
  
  - type : listener  
    - [ ] use `input-word.js` javascript listener to capture the `onclick` event on the remove button
  
> As a user I can rearrange/reorder my list

- [ ] there is a sortby select dropdown list to sort items based on user preference.
  
  - type : html
    - [ ] use `select` tag to create drop down option menu
    - [ ] use `option` tag to list available sort-by options
  
  - type : css
    - [ ] use bootstrap `form-control` class to style it
    - [ ] use `id="sort-type"` for javascript reference.
  
  - type: listener

    - [ ] use `sort-words.js` javascript listener to capture the `onclick` event on the remove button
  - type: handler

    - [ ] there is a js handler named as `sort-words.js` which is responsible for handling the sort-by event on change
  
> As a user I can see words listed

- type : html
- [ ] there is `div` container element to populate it with the list from the user
- [ ] `ul` tag for list container
- [ ] `li` tag to display word list
  
- type: component

  - [ ] there is a js component named as `render-list.js` which is responsible for populating with word list

## Should-Haves

> these will complete the user experience, but are not necessary

- As a user I can surf the website smoothly both in small and large screen devices
  - [ ] The website is Responsive
- As a user I can see descriptive pop up messages
  - [ ] There are custom messages for user activities
    - successfully saved
    - error! that is not a word
    - List item removed successfully

## Could-Haves

> would be really cool ... if there's time

- As a user I can Drag and drop to sort out the list.
  - List items are easily drag and droppable
- As a user I can edit a word after saving
  - There is 'pencil' icon next to each word in the list to edit typos in existing words
- As a user I can select multiple words and delete at once
  - [ ] words are prefixed by checkboxes for easy selection
  - [ ] There is "delete selected" button to delete selected words from the list.
- As a user I am be able to clear all words to start afresh
  - [ ] there is a 'clear all' button to delete all words in the list
- As a user I can save my list to be stored permanently
  - [] list items are available even after closing the browser session and reopen it.
- As a user I can get error message for misspelled words.
  - [ ] List is checked against dictionary words
