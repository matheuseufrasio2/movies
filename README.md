### How to run the project:

-- In the start folder run this command to run the api:
```sh
yarn server
```

-- Then run this commando to run frontend:
```sh
yarn dev
```

You can click on the localhost port that will appear in your console.

### Explanation of architecture
I decided to use Vite to create this app because its easer to start to develop and I'm used to it. Like I'm in frontend there is less things to do in the archtectue than backend but I tried to make my code as clean as possible, I created folders to put things related to libs, like firebase, another example is that I created a folder only related to api stuffs. This is important to make your code following the principles of clean code.

### If you had more time, what would you like to improve?
I'd implement the firestore better, using tools like snapshot to create a reaction in realtime when users malkes an addiction to the database.
Also I would implement a pagination feature, even if its not paginated in backend I'd put some pagination on frontend to increase the user experience.
