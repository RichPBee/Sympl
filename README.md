Sympl -- A very simple component library with a basic view controller.

Requirements:

--Project must have index.html file with a container with id 'app'. This should be the main container, and all other elements are
to be added programatically via the rest of the Sympl module.


How to use:
Create a project folder, and at the root level create an index.ts and App.ts file. The index file should contain a
window.onLoad() call, in which a new App should be instantiated. The app file should contain a class that extends 
SymplApp. Within this project folder, add another folder for view, and one for components. 
Using the BaseComponent and BaseView class, you can then create modular components and import these to views as
required. This way, we can (for example) create a single Button component, and re-use that across as many views
as it is needed. 

In order to use the app, run the command 'npm run build' to compile all the parts, from there you can load the index.html
file however you want, whether that is through VSCode live server, or any other method is up to the user.

***This is mainly intended for personal use and practice developing using TypeScript, over time, I intend to add
new components and functionality, but the library is unlikely to be useful to others in a production environment, 
due to aformentioned intended use cases. 
