# Ethiopian Project Management System

A comprehensive project management system built with React, Node.js, and MongoDB for managing Ethiopian development projects.

## Features

- Project creation and management
- Analytics dashboard with charts and statistics
- Regional and sector-based project tracking
- Gender distribution analysis
- Status monitoring and reporting

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS, Recharts
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Local or Atlas)
- **Build Tool**: Vite

## Database Setup

### MongoDB Local (Default)
The project is configured to use MongoDB local by default. Make sure you have MongoDB installed and running locally.

### MongoDB Atlas Setup
To use MongoDB Atlas instead of local MongoDB:

1. **Create a MongoDB Atlas Account**
   - Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
   - Sign up for a free account
   - Create a new cluster

2. **Get Your Connection String**
   - In your Atlas dashboard, click "Connect"
   - Choose "Connect your application"
   - Copy the connection string

3. **Configure Environment Variables**
   - Copy `env.template` to `.env`
   - Replace the placeholder with your actual MongoDB Atlas connection string:
   ```
   MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority
   ```

4. **Network Access**
   - In Atlas, go to Network Access
   - Add your IP address or use `0.0.0.0/0` for all IPs (not recommended for production)

5. **Database User**
   - Create a database user with read/write permissions
   - Use the username and password in your connection string

## Available Scripts

### `npm run dev`

Runs both the frontend and backend in development mode.\
Frontend: [http://localhost:5173](http://localhost:5173)\
Backend: [http://localhost:3001](http://localhost:3001)

### `npm run server`

Runs only the backend server on port 3001.

### `npm run client`

Runs only the frontend development server on port 5173.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
