This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Problem Statement

Technical Workout

Build your Dream 7 Team - Create a React or React Native app which lets you create your Dream 7 team.

Basic Requirement

Create the app using either React Native or React
If using React Native, you can choose to create using Expo or React Native CLI
Create two screens/sections– One for choosing players and one more for seeing
selected team

Players selection section should show a list of players with their basic information

The list of players information is shared in separate json file which can be used for
building the app

Each player carries a certain point based on his expertise.

Option to add a player to Dream 7 team should be available

A combination of 3 batsmen, 2 all-rounders and 2 bowlers should be chosen to form a
team

The same player should not be duplicated in your team
The maximum allowed points for building a team should not cross 75 (Rules
Validation)

Addition of players should not be allowed once 7 players are chosen
Option to remove players from selected team should be allowed
Write unit test for rules validation if possible (optional)
Optional Requirement
If you cannot complete all the features, please prioritize on logic building more than look and feel. We are only looking for code quality. We expect the task to take not more than 1.5 hours (90 minutes). Please do not spend longer than that.
Evaluation Criteria

Project Structure
Code modularity (Separation of Concerns)
Code readability
Usage of Functional Components, Hooks, Redux etc
Maintain ES6 Coding Standards
Unit Testing (Optional)
