301 Entrance Exam
Instructions:
Make sure before starting to:
* Turn off any means of communication (phone, Slack and Email).
* Open your **video cam**, **Mic**, and **start screen recording**.
* You are not allowed to use previous projects, notes , or GitHub.
* You can use Google search engine.
* Use the console to debug.
* Use the reset.css provided in the slack message

******************************************************

Exam:
Create a new repository on your Github and name it 'my-garden'.

Build a one-page website using HTML, CSS, and Vanilla Javascript. The wire-frame of the targeted page is attached to Slack.

You will be building a simple webpage "My Fabulous Garden" which contains all of the flowers that you have.

- As a user, I would like to be able to add new flowers so I can track the flowers I have in my garden. 
    - Create a form in order to add the **flowers name** and **flower category** and **flower season**. 
    - The category should have a predefined list that contains the following categories: 
        - Alstroemerias
        - Gardenias
        - Orchids
        - Roses
        - Sunflowers
        - Tulips
        - Peonies

- As a user, I would like to view all of my Flowers that I already added so that I can quickly view my flowers in my garden. - Whenever you add a flower using the form, you should use the local storage in order to get all the flowers from it and render them using **DOM**.

- As a user, I would like to see along side the flower information, the flower name, season, and image. The flower images can be found in the folder directory img.

**Stretch Goals**
- As a user, I would like to delete any chosen flower so I can handle the flowers in my garden. - When you press on the 'X' button, the flower should be deleted from the rendered DOM and the local storage.

- As a user, I would like to have the option to clear the whole rendered DOM. There will be a button when clicked it will clear the local Storage and the rendered DOM.

******************************************************
Do this work on the 'main' branch.
Create an HTML file and convert the wireframe into HTML structure.

Create a CSS file to apply the style.

The used font is "Roboto" -> google font.
The used colors are: 
- ![#ffd3de](https://via.placeholder.com/15/ffd3de/000000?text=+) `#ffd3de`
- ![#f6b8d1](https://via.placeholder.com/15/f6b8d1/000000?text=+) `#f6b8d1`
- ![#5dc0a6](https://via.placeholder.com/15/5dc0a6/000000?text=+) `#5dc0a6`
- ![#3f8f8d](https://via.placeholder.com/15/3f8f8d/000000?text=+) `#3f8f8d`

Table head color:
- ![#ffc0d0](https://via.placeholder.com/15/ffc0d0/000000?text=+) `#ffc0d0`

Buttons:
- ![#ac0d0d](https://via.placeholder.com/15/ac0d0d/000000?text=+) `#ac0d0d`
- ![#609c4d](https://via.placeholder.com/15/609c4d/000000?text=+) `#609c4d`

Create a js file to handle the functionality.

Handle adding the flowers to the HTML using the DOM and local storage.
Handle getting the flowers from the local storage and rendering them.
Handle removing the selected flowers from the list.

******************************************************

Grades Rubric:
HTML (5 Marks) 
- Header (1)
- Form (4)

CSS (25 Marks): 
- Header (5) 
- form (10) 
- rendered DOM (10)

Linting (5 Marks):
- ESLint (5)

JavaScript (55 Marks): 
- Constructor, properties and prototypes (15)
- Event listener and retrieving form data: (10)
- Store data to local storage (5)
- Check and load data from local storage (10)
- Render the DOM (14) 
- Lowercase image name (1)

**Stretch Goals** 
- Remove the chosen item from the list (10)
- Clearing the items from LS and rendered DOM (5)
- Create table head (5)

General (10 Marks):
- Code style (naming conventions, indentation ..) (5)
- Deploying on GitHub Pages (5)

P.S.: you MUST use constructor and local storage in order to solve this problem PLUS when you refresh the page, all the data should be persistent.

******************************************************

Submission Instructions:
- Submit the link of your GitHub repo.
- Submit your live URL after deploying your site with GitHub pages.
- Submit the link of your recorded video (you can upload it to your Google drive or dropbox then share the link).
- After completing the exam, do NOT commit or push anything to your repo.