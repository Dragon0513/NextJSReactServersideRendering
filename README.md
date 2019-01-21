# nextjs-challenge-boilerplate
A basic boilerplate for nextjs challenge

Hosted on Heroku: http://nextjs-example.musto.io/
Auto deployed when committed to Master branch

You are responsible for writing a node app using nextjs. Your app will consist of two pages (a form, and a feed), and a server that reads and writes to the feed.

Challenge: Create a new Github project with NextJS and React that meets the following criteria:
1. Starts with the command `npm i && npm run dev`
2. Shows a form with “name” and “message” when it runs at localhost:3000
3. When submitting form, runs a `POST` to `/api/guestbook` and resets with a success message (should show an error if things are missing).
4. A link on the homepage takes you to `/guestbook` and shows all posts that have been submitted from the previous form.
  - A link on that page exists to go back to the homepage
  - You do not need to persist that data in any database, just keep it in memory.

**My Notes:**

Logic - When a guest enters their Name and Message, if successful I redirect them to the Guestbook page where they can see their entry.

UI and Styling - 
I looked at how best to import style sheets but ran into a wall.
I'm using style jsx for the most part. I will get the import css style sheets working later for my own education.
Error handling and how I display errors and validation is very simple.

Hosting and deployment - 
I am hosting on heroku where I auto deploy now whenever I commit to the Master repo.

Running local dev (Code Linting) - 
"npm run dev" - 
Code linting is enabled via next.config.js (But it's not running after babel setup. I'll review later.)

Testing with Jest and Enzyme (Terminal: npm run test)
Runs all tests (With snapshots for react)

TODO:
Add redirect message and logic (from index page where state exists)
Add validation to prevent duplicat guests
Run tests?
Add clear?

##### BONUS

Feel free to add the following
1. Add some UI/UX features
2. Unit tests (coverage)
3. Code linting
I started setting these to warning just so as I was coding it would still build.

References:

https://www.npmjs.com/package/eslint-plugin-react

https://github.com/zeit/next.js/tree/master/examples/with-jest

https://medium.com/codeclan/testing-react-with-jest-and-enzyme-20505fec4675

https://stackoverflow.com/questions/52067944/cannot-find-module-babel-core/52067984

