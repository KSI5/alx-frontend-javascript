export default function uploadPhoto(fileName) {
  return new Promise((resolve, reject) => {
    // Simulate an error by rejecting the promise with an error message
    reject(new Error(`${fileName} cannot be processed`));
  });
}

// Example usage
// import uploadPhoto from './5-photo-reject';
// uploadPhoto('guillaume.jpg').catch(error => console.error(error.message));
