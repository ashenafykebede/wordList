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

- As a user I can see the title of the page
  - [ ] there is appropriate Page title on the landing page .i.e. index.html
- Issue 
  
    ```md
    - [] html
      - use the 'title' html tag to create the page title 
    ```

- As a user I can insert item to create a list  
  - there is `input` field for word entry
- Issue 
  
    ```md
    - [] html
      - use the 'input' html tag to create the input field
    - [] CSS
      - use 'bootstrap form-control' class to style the input field 
    ```
- As a user I can save a list Item
  - [ ] there is "add" button for adding/saving a list item
- As a user I can remove an item from my list
  - [ ] there is a "remove" button to remove an item from the list
- As a user I can rearrange/reorder my list
  - [ ] there is a sortBy select dropdown list to sort items based on user preference.

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

