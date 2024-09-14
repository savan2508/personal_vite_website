# Personal Portfolio Website

This repository contains the source code for a personal portfolio website built with React and Sanity.io. The project is designed to be simple and user-friendly, allowing anyone to clone the repository, add their own content, and have their website up and running in no time.

## Project Setup

The project is structured as follows:

- **Frontend**: Developed using React, with reusable components for different sections of the website.
- **Backend**: Integrated with [Sanity.io](https://www.sanity.io/) as the Content Management System (CMS). The backend automatically generates the required schema for your content.

## Prerequisites

To get started, make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/) or [npm](https://www.npmjs.com/get-npm)
- [Sanity.io Account](https://www.sanity.io/)

## Getting Started

Follow these steps to set up the project locally:

### 1. Clone the repository:

```bash
git clone https://github.com/savan2508/personal_vite_website.git
cd personal_vite_website
```

## 2. Install Dependencies:

### Using Yarn:

```bash
cd frontend
yarn install

cd backend
yarn install
```

## 3. Set up Sanity.io:

- Create an account on [Sanity.io](https://www.sanity.io/).
- Create a new project in Sanity.io.
- Get your API keys from the Sanity.io dashboard.
- Update the project ID and dataset name in the `sanity.config.js` file in the `backend` directory.

```
{
    "projectId": "your_project_id",
    "dataset": "production"
}
```

## 4. Configure Environment Variables:

- Create a `.env` file in the frontend directory of the project.
- Add your Sanity API keys and project information in the `.env` file as follows:

```bash
VITE_REACT_SANITY_APP_ID=your_project_id
VITE_REACT_SANITY_TOKEN=your_sanity_token
```

## 5. Update Backend Configuration:

Update the project number in the backend configuration to match your Sanity.io project settings.

## 6. Start the Development Server for the frontend:

### Using Yarn:

```bash
cd frontend
yarn start
```

### Using npm:

```bash
cd frontend
npm start
```

The frontend development server will start at `http://localhost:5173`.

## 7. Start the Development Server for the backend:

### Using Yarn:

```bash
cd backend
yarn run dev
```

### Using npm:

```bash
cd backend
npm run dev
```
This will start the Sanity.io backend server at `http://localhost:3333`. You can access the Sanity.io dashboard by following the link provided in the terminal. Now all your content will be managed through the Sanity.io dashboard. Your will be able to see the changes in the frontend once you add the content in the Sanity.io dashboard and publish them.

It is as simple as that! You now have your personal portfolio website up and running.

## Adding Your Content

Once the project is up and running, you can manage your website content through the Sanity.io dashboard. The backend automatically creates the schema, so all you need to do is start adding your content—like projects, blogs, or personal information—and it will be reflected on the website.

## Hosting Your Website

You can deploy your portfolio website on:

- **[GitHub Pages](https://pages.github.com/)**: Documentation on how to set up hosting on GitHub Pages.
- **[Netlify](https://www.netlify.com/)**: Documentation on how to deploy your site on Netlify.

Both options are free and easy to set up for hosting your website.

## License

This project is open-source, and you're free to clone, modify, and use it for your own purposes. Feel free to customize it to match your personal style and content!

## Contributing

If you want to contribute to improving this project or adding more features, feel free to submit pull requests or open issues.

