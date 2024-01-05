export default function loadBalancer(chinaDownload, USDownload) {
  // Promise.race resolves with the first promise that resolves or rejects
  return Promise.race([chinaDownload, USDownload]);
}

// Example usage
// import loadBalancer from "./7-load_balancer";
// const resultPromise = loadBalancer(promiseChina, promiseUS);
// resultPromise.then(result => console.log(result));
