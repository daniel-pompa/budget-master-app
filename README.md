# Budget Master

Budget Master is a budgeting tool designed to help you keep track of your expenses with real-time updates. Its intuitive interface allows you to easily set and monitor budgets, making it easier to achieve your financial goals.

## Table of Contents

1. [Requirements](#requirements)
2. [Technology Stack](#technology-stack)
3. [Project Structure](#project-structure)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Demo](#demo)
7. [Contributing](#contributing)
8. [License](#license)
9. [Author](#author)
10. [Acknowledgements](#acknowledgements)

## Requirements

You need to have the following installed:

A source code editor such as [VSCode](https://code.visualstudio.com/), [Sublime Text](https://www.sublimetext.com/), or any other editor of your choice.

[![NodeJS](https://img.shields.io/badge/Node.js-6DA55F.svg?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/en)
[![npm](https://img.shields.io/badge/npm-%23CB3837.svg?style=flat&logo=npm&logoColor=white)](https://www.npmjs.com/)

> [!NOTE]
> Clicking on the Node.js badge will take you to the Node.js website, where you can download the installer. It is recommended to use the stable version. When you install Node.js, npm will be installed automatically.

Check your Node.js and npm installation by running:

```bash
node --version
npm --version
```

## Technology Stack

The project utilizes the following technologies:

<div>
  <img src="https://skillicons.dev/icons?i=vite" alt="Vite" width="40" height="40" />
  <img src="https://skillicons.dev/icons?i=react" alt="React" width="40" height="40" />
  <img src="https://skillicons.dev/icons?i=ts" alt="TypeScript" width="40" height="40" />
  <img src="https://skillicons.dev/icons?i=html" alt="HTML5" width="40" height="40" />
  <img src="https://skillicons.dev/icons?i=css" alt="CSS3" width="40" height="40" />
  <img src="https://skillicons.dev/icons?i=tailwind" alt="Tailwind CSS" width="40" height="40" />
</div>

In addition to these technologies, the application also employs React Context API for managing global state in the application.

## Project Structure

```bash
├───📁 public/
├───📁 src/
│   ├───📁 assets/
│   ├───📁 components/
│   ├───📁 context/
│   ├───📁 data/
│   ├───📁 hooks/
│   ├───📁 reducers/
│   ├───📁 types/
│   ├───📁 utils/
│   ├───📄 App.tsx
│   ├───📄 index.css
│   ├───📄 main.tsx
│   └───📄 vite-env.d.ts
├───📄 eslint.config.js
├───📄 index.html
├───📄 LICENSE
├───📄 package-lock.json
├───📄 package.json
├───📄 postcss.config.js
├───📄 README.md
├───📄 tailwind.config.js
├───📄 tsconfig.app.json
├───📄 tsconfig.json
├───📄 tsconfig.node.json
└───📄 vite.config.ts
```

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**

```bash
git clone https://github.com/daniel-pompa/budget-master-app.git
```

2. **Navigate to the project directory:**

```bash
cd budget-master-app
```

3. **Install dependencies:**

```bash
npm install
```

4. **Run the development server:**

```bash
npm run dev
```

> [!NOTE]
> The server will typically run on <http://localhost:5173>, but check the output on your terminal to be sure.

## Usage

After starting the development server, navigate to <http://localhost:5173> in your browser to access the application.

1. **Setting a Budget:** Use the form on the main page to set your budget.

2. **Adding Expenses:**
   - Click the floating action button to open a modal with a form.
   - Complete the form in the modal to add a new expense.

3. **Managing Expenses:**
   - **Edit an expense:** Swipe the expense item to the right to open the edit form in a modal. Modify the details and save your changes.
   - **Delete an expense:** Swipe the expense item to the left to remove it.
   - **Filter by category:** Use filters to view expenses for a selected category, providing a clearer view of your spending.

4. **Resetting the Budget:** You can reset your budget at any time to adjust or start over.

5. **Real-Time Updates:** The application provides real-time updates and visualizations of your budget and expenses, ensuring you always have the most current information.

## Demo

Explore the live demo of the application at the following link: [Budget Master](https://budget-master-react.vercel.app/)

Discover the features live and see the app in action!

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new Pull Request.

## License

This project is licensed under the MIT License.

[![MIT License](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://choosealicense.com/licenses/mit/)

> [!NOTE]
> Clicking on the MIT License badge for see the LICENSE file for details.

## Author

This project is maintained and developed by **Daniel Pompa Pareja**.

## Acknowledgements

Special thanks to the developers and contributors of:

- **[Vite](https://vitejs.dev/)** for the fast and modern build tool.
- **[React](https://es.react.dev/)** for the powerful UI library.

I would also like to extend my sincere gratitude to:

- **[Tailwind CSS](https://tailwindcss.com/)** for providing a powerful utility-first CSS framework that greatly simplifies styling and ensures a responsive design.
- **[Node.js](https://nodejs.org/en)** for offering a powerful and efficient runtime environment for JavaScript.
- **[npm](https://www.npmjs.com/)** for being a crucial tool in managing project dependencies and packages.
- **[Skillicons](https://skillicons.dev/)** for the icons used in the project's README to visually represent various technologies.
- **[Freepik](https://www.freepik.com/)** for the icons used in this application, contributing to its overall visual design.
- **Open Source Community** for the countless resources, tutorials, and tools available that have supported my learning journey.

[Back to Top](#table-of-contents)
