## Notes:
# React Tutorial for Beginners
https://www.youtube.com/watch?v=SqcY0GlETPk&ab_channel=ProgrammingwithMosh

# launching 
Can use vite to make react projects since supposedly similar
Npm create vite@latest

select react 
then typsecript - for this project

 cd react-app
  npm install
  npm run dev -> use this ot launch in browser

# creating an app

typescript files - tsx for react components .ts for standard files 

vite will automatically update our pages and monitor our changes

## How it works
react builds a virtual DOM in memory with all the components and updates the states for any nodes 

Comapres the nodes in the virtual DOM to the real DOM and updates the places with changes. 

react native loader allows us to load things for mobile react apps - react not tied to any platform, we can switch out react dom piece to make it work elsewhere 

Library vs framework 
library more of a tool 
Framework more of a toolset 

good at making dynamic user interfaces 

Often need other tools for UI, routing, htto, managing app state, internationalization, form validation, animations, etc 

## Building components
installing bootstrap 
npm install 5.2.3

delete all styles from app.css and index.css

-> main.tsx -> replace import './index.css' with import 'bootstrap/dist/css/bootstrap.css'

#add new file called components in src folder 

## Fragments
<>

## Conditions 

state is bounded to component instances - we can do multiple listgroups and they can be independent

## Props

props are inputs to components 