const givenArray = [0,2,-1,4,2,-3,1,3, 0];

const checkSum = (sum) => {
    for (let i=0; i<givenArray.length; i++){
        for (let j=i+1; j<givenArray.length;j++){
            if (givenArray[i] + givenArray[j] == sum){
                console.log([givenArray[i], givenArray[j]]);
                //return;
            }                       
        }        
    }
    //console.log("Condition not met");
} 
checkSum(6);
//console.log(checkSum(-2));