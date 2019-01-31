var somePrpmise = new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve('Hey it worked!');
    }, 2500);
});

somePrpmise.then((message) => {
    console.log('Success: ', message);
});