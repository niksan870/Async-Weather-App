var somePrpmise = new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve('Hey it worked!');
        reject('Unable to fulfill promise');
    }, 2500);
});

somePrpmise.then((message) => {
    console.log('Success: ', message);
});