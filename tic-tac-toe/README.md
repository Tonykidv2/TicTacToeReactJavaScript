# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

HOW TO RUN DOCKER

navigate to tic-tac-toe directory
run these commands one after the other Making sure you have Docker installed and running in the background

docker build -t tic-tac-toe:dev .

**you should see a new docker image in docker desktop window**

docker run -p 5173:5173 tic-tac-toe:dev

**app should now be running in the background**

go here: http://localhost:5173/ or whatever link the command window spits out after the run command finishes.

## to have file watching or hot reloading while using docker use this commend instead of using docker build & docker run

docker-compose up
