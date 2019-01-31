var somePrpmise = new Promise((resolve, reject) => {
    setTimeout(() => {

    }, 2500);
    resolve('Hey it worked!');
});

somePrpmise.then((message) => {
    console.log('Success: ', message);
});