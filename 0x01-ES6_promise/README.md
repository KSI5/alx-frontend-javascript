
# 0x01-ES6_promise

This repository contains JavaScript files that demonstrate the use of Promises and async/await in the ES6 version of JavaScript.

## Files

### 0-promise.js

This file implements a function `getResponseFromAPI` that returns a Promise. The primary purpose is to showcase creating a basic Promise.

### 1-promise.js

In this file, we define the function `getFullResponseFromAPI`, which takes a boolean parameter and returns a Promise. It resolves with a success message when the parameter is `true` and rejects with an error message when the parameter is `false`.

### 2-then.js

This file introduces the `then` method to handle Promise resolution and rejection. It demonstrates chaining `then` calls to handle asynchronous operations sequentially.

### 3-all.js

The `handleProfileSignup` function in this file collectively resolves all promises imported from `utils.js` (specifically `uploadPhoto` and `createUser`). It logs the results, and in the case of an error, it logs "Signup system offline".

### 4-user-promise.js

This file defines a function `uploadUser` that returns a Promise, resolving with a user object. It serves as a practical use case of Promises for handling asynchronous tasks.

### 5-photo-reject.js

In this file, the function `uploadPhoto` is implemented to take a filename as a parameter and return a Promise. The Promise rejects with an error stating that the given filename cannot be processed.

### 6-final-user.js

The `handleProfileSignup` function in this file is similar to `3-all.js`, but it provides more information about the user and the uploaded photo in the resolved Promise.

### 7-load_balancer.js

The `loadBalancer` function exported in this file accepts two Promise parameters (`chinaDownload` and `USDownload`) and returns the value of the promise that resolves first. It demonstrates handling asynchronous tasks concurrently.

### 8-try.js and 9-try.js

Both files appear to have the same name. Please provide the correct filenames, and I will update the descriptions accordingly.

### 100-await.js

This file defines an async function `asyncUploadUser`, importing `uploadPhoto` and `createUser` from `utils.js`. It concurrently calls both functions using `Promise.all` and returns an object with the results. If any of the promises fails, it returns an empty object.

## How to Run

To execute these files, use the following commands:

```bash
npm install  # Install dependencies
npm run dev <filename>  # Replace <filename> with the desired file, e.g., 0-main.js
```

Make sure you have Node.js and npm installed on your machine.


