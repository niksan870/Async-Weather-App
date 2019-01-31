var somePrpmise = new Promise((resolve, reject) => {
    resolve('Hey it worked!');
});

somePrpmise.then((message) => {
    console.log('success: ', message);
});