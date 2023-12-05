var count = 0;

const callbackSample = (callback) => {
    //let count = 0;
    console.log(count);
    setTimeout(() => {console.log('timed out')}, 10000);
    for (let i=0; i<25000;i++){
        count = count + 1;
    }
    //console.log(count);
    callback();
};

callbackSample( () => {console.log(count)});