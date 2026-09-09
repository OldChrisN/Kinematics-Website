const distance = document.getElementById("distance");
const speedog = document.getElementById("speedog");
const speed = document.getElementById("speed");
const acceleration = document.getElementById("acceleration");
const time = document.getElementById("time");
const submitting = document.getElementById("submitting");

const result1 = document.getElementById("result1");


submitting.onclick = function(){
    result1.innerHTML = "";

    let resultLines = [];

    let ongoing = true;

    let isDistanceMissing = distance.value === "";
    let isSpeedMissing = speed.value === "";
    let isInitialSpeedMissing = speedog.value === "";
    let isAccelerationMissing = acceleration.value === "";
    let isTimeMissing = time.value === "";

    let isDistanceSolved = true;
    let isSpeedSolved = true;
    let isInitialSpeedSolved = true;
    let isAccelerationSolved = true;
    let isTimeSolved = true;


    if(isDistanceMissing){
        isDistanceSolved = false;
    }

    if(isSpeedMissing){
        isSpeedSolved = false;
    }

    if(isInitialSpeedMissing){
        isInitialSpeedSolved = false;
    }
    
    if(isAccelerationMissing){
        isAccelerationSolved = false;
    }
    
    if(isTimeMissing){
        isTimeSolved = false;
    }

    let x0 = 0;
    let x = Number(distance.value);
    let v0 = Number(speedog.value);
    let v = Number(speed.value);
    let a = Number(acceleration.value);
    let t = Number(time.value);

    const allInputs = document.querySelectorAll(".Kinematics-value");
    let filledCount = 0;
    allInputs.forEach(input =>{
        if(input.value !== ""){
            filledCount++;
        }
    });

    while(ongoing){

        if(isNaN(x) || isNaN(v0) || isNaN(v) || isNaN(a) || isNaN(t)){
            result1.innerHTML = "Please enter a real number";
            return; 
        }

        if(filledCount == 3){
            if(!isDistanceSolved){
                if(isInitialSpeedSolved == true && isTimeSolved == true && isAccelerationSolved == true){
                    let solvedX = x0 + (v0 * t) + (0.5 * a * (t ** 2));
                    isDistanceSolved = true;
                    x = (solvedX);
                    resultLines.push(`x = ${(solvedX.toFixed(2))}m`);
                } 

                else if(isInitialSpeedSolved == true && isSpeedSolved == true && isTimeSolved == true){
                    let solvedX = x0 + (0.5 * (v0 + v) * t);
                    isDistanceSolved = true;
                    x = (solvedX);
                    resultLines.push(`x = ${(solvedX.toFixed(2))}m`);
                }

                else if(isInitialSpeedSolved == true && isSpeedSolved == true && isAccelerationSolved == true){
                    let solvedX = x0 + (((v ** 2) - (v0 ** 2)) / (2 * a));
                    isDistanceSolved = true;
                    x = (solvedX);
                    resultLines.push(`x = ${(solvedX.toFixed(2))}m`);
                }

                else{
                    console.log("Not enough info for distance");
                }
            }

            if(!isSpeedSolved){
                if(isInitialSpeedSolved == true && isAccelerationSolved == true && isTimeSolved == true){
                    let solvedV = v0 + (t * a);
                    isSpeedSolved = true;
                    v = (solvedV);
                    resultLines.push(`v = ${(solvedV.toFixed(2))}m/s`);
                } 

                else if(isInitialSpeedSolved == true && isAccelerationSolved == true && isDistanceSolved == true){
                    let solvedV = Math.sqrt((v0 ** 2) + (2 * a * x));
                    isSpeedSolved = true;
                    v = (solvedV);
                    resultLines.push(`v = ${(solvedV.toFixed(2))}m/s`);
                } 

                else if(isDistanceSolved == true && isInitialSpeedSolved == true && isTimeSolved == true){
                    let solvedV = (2 * (x - x0) / t) - v0;
                    isSpeedSolved = true;
                    v = (solvedV);
                    resultLines.push(`v = ${(solvedV.toFixed(2))}m/s`);
                } 

                else{
                    console.log("Not enough info for speed");
                }
            }

            if(!isInitialSpeedSolved){
                if(isSpeedSolved == true && isAccelerationSolved == true && isTimeSolved == true){
                    let solvedV0 = v - (a * t);
                    isInitialSpeedSolved = true;
                    v0 = (solvedV0);
                    resultLines.push(`v0 = ${(solvedV0.toFixed(2))}m/s`);
                } 

                else if(isSpeedSolved == true && isAccelerationSolved == true && isDistanceSolved == true){
                    let solvedV0 = Math.sqrt((v * v) - (2 * a * x));
                    isInitialSpeedSolved = true;
                    v0 = (solvedV0);
                    resultLines.push(`v0 = ${(solvedV0.toFixed(2))}m/s`);
                } 

                else if(isDistanceSolved == true && isSpeedSolved == true && isTimeSolved == true){
                    let solvedV0 = (2 * (x - x0) / t) - v;
                    isInitialSpeedSolved = true;
                    v0 = (solvedV0);
                    resultLines.push(`v0 = ${(solvedV0.toFixed(2))}m/s`);
                } 

                else if(isDistanceSolved == true && isAccelerationSolved == true && isTimeSolved == true){
                    let solvedV0 = ((x - x0) - (0.5 * a * (t ** 2))) / t;
                    isInitialSpeedSolved = true;
                    v0 = (solvedV0);
                    resultLines.push(`v0 = ${(solvedV0.toFixed(2))}m/s`);
                } 

                else{
                    console.log("Not enough info for initial speed");
                }
            }

            if(!isAccelerationSolved){
                if(isSpeedSolved == true && isInitialSpeedSolved == true && isTimeSolved == true){
                    let solvedA = (v - v0) / t;
                    isAccelerationSolved = true;
                    a = (solvedA);
                    resultLines.push(`a = ${(solvedA.toFixed(2))}m/s^2`);
                } 

                else if (isInitialSpeedSolved == true && isTimeSolved == true && isDistanceSolved == true){
                    let solvedA = (2 * ((x - x0) - (v0 * t))) / (t ** 2);
                    isAccelerationSolved = true;
                    a = (solvedA);
                    resultLines.push(`a = ${(solvedA.toFixed(2))}m/s^2`);
                } 

                else if(isDistanceSolved == true && isSpeedSolved == true && isInitialSpeedSolved == true){
                    let solvedA = ((v ** 2) - (v0 ** 2)) / (2 * (x - x0));
                    isAccelerationSolved = true;
                    a = (solvedA);
                    resultLines.push(`a = ${(solvedA.toFixed(2))}m/s^2`);
                } 

                else if(isDistanceSolved == true && isSpeedSolved == true && isTimeSolved == true){
                    let solvedA = (2 * ((v * t) - (x - x0))) / (t ** 2);
                    isAccelerationSolved = true;
                    a = (solvedA);
                    resultLines.push(`a = ${(solvedA.toFixed(2))}m/s^2`);
                } 

                else{
                    console.log("Not enough info for acceleration");
                }
            }

            if(!isTimeSolved){
                if(isSpeedSolved == true && isInitialSpeedSolved == true && isAccelerationSolved == true){
                    let solvedT = (v - v0) / a;
                    isTimeSolved = true;
                    t = (solvedT);
                    resultLines.push(`t = ${(solvedT.toFixed(2))}s`);
                }

                else if (isSpeedSolved == true && isInitialSpeedSolved == true && isDistanceSolved == true){
                    let solvedT = (2 * x) / (v0 + v);
                    isTimeSolved = true;
                    t = (solvedT);
                    resultLines.push(`t = ${(solvedT.toFixed(2))}s`);
                } 

                else if (isDistanceSolved == true && isInitialSpeedSolved == true && isAccelerationSolved == true){
                    let solvedT = (-v0 + Math.sqrt((v0 ** 2) + (2 * a * x))) / a;
                    isTimeSolved = true;
                    t = (solvedT);
                    resultLines.push(`t = ${(solvedT.toFixed(2))}s`);
                } 

                else{
                    console.log("Not enough info for time");
                }
            }

            if(isDistanceSolved == true && isSpeedSolved == true && isInitialSpeedSolved == true && isAccelerationSolved == true && isTimeSolved == true){
                result1.innerHTML = resultLines.join("<br>");
                ongoing = false;
                break;
            }  
        } 

        else if(filledCount > 3){
            result1.innerHTML = "You need to only put in 3 values";
            return;
        }
        
        else{
            ongoing = false;
            return;
        }
  
    }
};
