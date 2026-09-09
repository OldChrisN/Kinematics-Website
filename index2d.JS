const distancex = document.getElementById("distancex");
const speedogx = document.getElementById("speedogx");
const speedx = document.getElementById("speedx");
const accelerationx = document.getElementById("accelerationx");

const distancey = document.getElementById("distancey");
const speedogy = document.getElementById("speedogy");
const speedy = document.getElementById("speedy");
const accelerationy = document.getElementById("accelerationy");

const time = document.getElementById("time");

const submitting2d = document.getElementById("submitting2d");

const twodresults = document.getElementById("twodresults");

//-------------------------------------------------------------------

submitting2d.onclick = function(){
    twodresults.innerHTML = "";

    let resultLines = [];

    let ongoing = true;

    let isDistancexMissing = distancex.value === "";
    let isSpeedxMissing = speedx.value === "";
    let isInitialSpeedxMissing = speedogx.value === "";
    let isAccelerationxMissing = accelerationx.value === "";

    let isDistanceyMissing = distancey.value === "";
    let isSpeedyMissing = speedy.value === "";
    let isInitialSpeedyMissing = speedogy.value === "";
    let isAccelerationyMissing = accelerationy.value === "";

    let isTimeMissing = time.value === "";

    //-------------------------------------------------------------

    let isDistancexSolved = true;
    let isSpeedxSolved = true;
    let isInitialSpeedxSolved = true;
    let isAccelerationxSolved = true;

    let isDistanceySolved = true;
    let isSpeedySolved = true;
    let isInitialSpeedySolved = true;
    let isAccelerationySolved = true;

    let isTimeSolved = true;

    //-------------------------------------------------------------

    if(isDistancexMissing){
        isDistancexSolved = false;
    }

    if(isSpeedxMissing){
        isSpeedxSolved = false;
    }

    if(isInitialSpeedxMissing){
        isInitialSpeedxSolved = false;
    }
    
    if(isAccelerationxMissing){
        isAccelerationxSolved = false;
    }

    //This separates the x values and y values

    if(isDistanceyMissing){
        isDistanceySolved = false;
    }

    if(isSpeedyMissing){
        isSpeedySolved = false;
    }

    if(isInitialSpeedyMissing){
        isInitialSpeedySolved = false;
    }
    
    if(isAccelerationyMissing){
        isAccelerationySolved = false;
    }

    //time is just isolated here
    
    if(isTimeMissing){
        isTimeSolved = false;
    }

    //-------------------------------------------------------------

    let x0 = 0;
    let x = Number(distancex.value);
    let vx0 = Number(speedogx.value);
    let vx = Number(speedx.value);
    let ax = Number(accelerationx.value);

    let y0 = 0;
    let y = Number(distancey.value);
    let vy0 = Number(speedogy.value);
    let vy = Number(speedy.value);
    let ay = Number(accelerationy.value);

    let t = Number(time.value);

    //-------------------------------------------------------------

    const allInputsx = document.querySelectorAll(".Kinematicsx-value");
    let filledCountx = 0;
    allInputsx.forEach(input =>{
        if(input.value !== ""){
            filledCountx++;
        }
    });

    const allInputsy = document.querySelectorAll(".Kinematicsy-value");
    let filledCounty = 0;
    allInputsy.forEach(input =>{
        if(input.value !== ""){
            filledCounty++;
        }
    });

    const timeInput = document.querySelectorAll(".Time-value");
    let filledCountt = 0;
    timeInput.forEach(input =>{
        if(input.value !== ""){
            filledCountt++;
        }
    });

    //-------------------------------------------------------------

    
    while(ongoing){

        if(isNaN(x) || isNaN(vx0) || isNaN(vx) || isNaN(ax) || isNaN(x) || isNaN(vy0) || isNaN(vy) || isNaN(ay) || isNaN(t)){
            twodresults.innerHTML = "Please enter a real number";
            return; 
        }

        if(filledCountx == 3 && filledCounty == 2 || filledCountx == 2 && filledCounty == 3 || filledCountx == 2 && filledCounty == 2 && filledCountt == 1){

            //X-Axis calculation

             if(!isDistancexSolved){
                if(isInitialSpeedxSolved == true && isTimeSolved == true && isAccelerationxSolved == true){
                    let solvedX = x0 + (vx0 * t) + (0.5 * ax * (t ** 2));
                    isDistancexSolved = true;
                    x = (solvedX);
                    resultLines.push(`x = ${(solvedX.toFixed(2))}m`);
                } 

                else if(isInitialSpeedxSolved == true && isSpeedxSolved == true && isTimeSolved == true){
                    let solvedX = x0 + (0.5 * (vx0 + vx) * t);
                    isDistancexSolved = true;
                    x = (solvedX);
                    resultLines.push(`x = ${(solvedX.toFixed(2))}m`);
                }

                else if(isInitialSpeedxSolved == true && isSpeedxSolved == true && isAccelerationxSolved == true){
                    let solvedX = x0 + (((vx ** 2) - (vx0 ** 2)) / (2 * ax));
                    isDistancexSolved = true;
                    x = (solvedX);
                    resultLines.push(`x = ${(solvedX.toFixed(2))}m`);
                }

                else{
                    console.log("Not enough info for distance x");
                }
            }

            if(!isSpeedxSolved){
                if(isInitialSpeedxSolved == true && isAccelerationxSolved == true && isTimeSolved == true){
                    let solvedV = vx0 + (t * ax);
                    isSpeedxSolved = true;
                    vx = (solvedV);
                    resultLines.push(`vx = ${(solvedV.toFixed(2))}m/s`);
                } 

                else if(isInitialSpeedxSolved == true && isAccelerationxSolved == true && isDistancexSolved == true){
                    let solvedV = Math.sqrt((vx0 ** 2) + (2 * ax * x));
                    isSpeedxSolved = true;
                    vx = (solvedV);
                    resultLines.push(`vx = ${(solvedV.toFixed(2))}m/s`);
                } 

                else if(isDistancexSolved == true && isInitialSpeedxSolved == true && isTimeSolved == true){
                    let solvedV = (2 * (x - x0) / t) - vx0;
                    isSpeedxSolved = true;
                    vx = (solvedV);
                    resultLines.push(`vx = ${(solvedV.toFixed(2))}m/s`);
                } 

                else{
                    console.log("Not enough info for speed x");
                }
            }

            if(!isInitialSpeedxSolved){
                if(isSpeedxSolved == true && isAccelerationxSolved == true && isTimeSolved == true){
                    let solvedV0 = vx - (ax * t);
                    isInitialSpeedxSolved = true;
                    vx0 = (solvedV0);
                    resultLines.push(`vx0 = ${(solvedV0.toFixed(2))}m/s`);
                } 

                else if(isSpeedxSolved == true && isAccelerationxSolved == true && isDistancexSolved == true){
                    let solvedV0 = Math.sqrt((vx * vx) - (2 * ax * x));
                    isInitialSpeedxSolved = true;
                    vx0 = (solvedV0);
                    resultLines.push(`vx0 = ${(solvedV0.toFixed(2))}m/s`);
                } 

                else if(isDistancexSolved == true && isSpeedxSolved == true && isTimeSolved == true){
                    let solvedV0 = (2 * (x - x0) / t) - vx;
                    isInitialSpeedxSolved = true;
                    vx0 = (solvedV0);
                    resultLines.push(`vx0 = ${(solvedV0.toFixed(2))}m/s`);
                } 

                else if(isDistancexSolved == true && isAccelerationxSolved == true && isTimeSolved == true){
                    let solvedV0 = ((x - x0) - (0.5 * ax * (t ** 2))) / t;
                    isInitialSpeedxSolved = true;
                    vx0 = (solvedV0);
                    resultLines.push(`vx0 = ${(solvedV0.toFixed(2))}m/s`);
                } 

                else{
                    console.log("Not enough info for initial speed x");
                }
            }

            if(!isAccelerationxSolved){
                if(isSpeedxSolved == true && isInitialSpeedxSolved == true && isTimeSolved == true){
                    let solvedA = (vx - vx0) / t;
                    isAccelerationxSolved = true;
                    ax = (solvedA);
                    resultLines.push(`ax = ${(solvedA.toFixed(2))}m/s^2`);
                } 

                else if (isInitialSpeedxSolved == true && isTimeSolved == true && isDistancexSolved == true){
                    let solvedA = (2 * ((x - x0) - (vx0 * t))) / (t ** 2);
                    isAccelerationxSolved = true;
                    ax = (solvedA);
                    resultLines.push(`ax = ${(solvedA.toFixed(2))}m/s^2`);
                } 

                else if(isDistancexSolved == true && isSpeedxSolved == true && isInitialSpeedxSolved == true){
                    let solvedA = ((vx ** 2) - (vx0 ** 2)) / (2 * (x - x0));
                    isAccelerationxSolved = true;
                    ax = (solvedA);
                    resultLines.push(`ax = ${(solvedA.toFixed(2))}m/s^2`);
                } 

                else if(isDistancexSolved == true && isSpeedxSolved == true && isTimeSolved == true){
                    let solvedA = (2 * ((vx * t) - (x - x0))) / (t ** 2);
                    isAccelerationxSolved = true;
                    ax = (solvedA);
                    resultLines.push(`ax = ${(solvedA.toFixed(2))}m/s^2`);
                } 

                else{
                    console.log("Not enough info for acceleration x");
                }
            }

            if(!isTimeSolved){
                if(isSpeedxSolved == true && isInitialSpeedxSolved == true && isAccelerationxSolved == true){
                    let solvedT = (vx - vx0) / ax;
                    isTimeSolved = true;
                    t = (solvedT);
                    resultLines.push(`t = ${(solvedT.toFixed(2))}s`);
                }

                else if (isSpeedxSolved == true && isInitialSpeedxSolved == true && isDistancexSolved == true){
                    let solvedT = (2 * x) / (vx0 + vx);
                    isTimeSolved = true;
                    t = (solvedT);
                    resultLines.push(`t = ${(solvedT.toFixed(2))}s`);
                } 

                else if (isDistancexSolved == true && isInitialSpeedxSolved == true && isAccelerationxSolved == true){
                    let solvedT = (-vx0 + Math.sqrt((vx0 ** 2) + (2 * ax * x))) / ax;
                    isTimeSolved = true;
                    t = (solvedT);
                    resultLines.push(`t = ${(solvedT.toFixed(2))}s`);
                } 

                else{
                    console.log("Not enough info for time (from x)");
                }
            }

            //Y-Axis calculation

            if(!isDistanceySolved){
                if(isInitialSpeedySolved == true && isTimeSolved == true && isAccelerationySolved == true){
                    let solvedY = y0 + (vy0 * t) + (0.5 * ay * (t ** 2));
                    isDistanceySolved = true;
                    y = (solvedY);
                    resultLines.push(`y = ${(solvedY.toFixed(2))}m`);
                } 

                else if(isInitialSpeedySolved == true && isSpeedySolved == true && isTimeSolved == true){
                    let solvedY = y0 + (0.5 * (vy0 + vy) * t);
                    isDistanceySolved = true;
                    y = (solvedY);
                    resultLines.push(`y = ${(solvedY.toFixed(2))}m`);
                }

                else if(isInitialSpeedySolved == true && isSpeedySolved == true && isAccelerationySolved == true){
                    let solvedY = y0 + (((vy ** 2) - (vy0 ** 2)) / (2 * ay));
                    isDistanceySolved = true;
                    y = (solvedY);
                    resultLines.push(`y = ${(solvedY.toFixed(2))}m`);
                }

                else{
                    console.log("Not enough info for distance y");
                }
            }

            if(!isSpeedySolved){
                if(isInitialSpeedySolved == true && isAccelerationySolved == true && isTimeSolved == true){
                    let solvedV = vy0 + (t * ay);
                    isSpeedySolved = true;
                    vy = (solvedV);
                    resultLines.push(`vy = ${(solvedV.toFixed(2))}m/s`);
                } 

                else if(isInitialSpeedySolved == true && isAccelerationySolved == true && isDistanceySolved == true){
                    let solvedV = Math.sqrt((vy0 ** 2) + (2 * ay * y));
                    isSpeedySolved = true;
                    vy = (solvedV);
                    resultLines.push(`vy = ${(solvedV.toFixed(2))}m/s`);
                } 

                else if(isDistanceySolved == true && isInitialSpeedySolved == true && isTimeSolved == true){
                    let solvedV = (2 * (y - y0) / t) - vy0;
                    isSpeedySolved = true;
                    vy = (solvedV);
                    resultLines.push(`vy = ${(solvedV.toFixed(2))}m/s`);
                } 

                else{
                    console.log("Not enough info for speed y");
                }
            }

            if(!isInitialSpeedySolved){
                if(isSpeedySolved == true && isAccelerationySolved == true && isTimeSolved == true){
                    let solvedV0 = vy - (ay * t);
                    isInitialSpeedySolved = true;
                    vy0 = (solvedV0);
                    resultLines.push(`vy0 = ${(solvedV0.toFixed(2))}m/s`);
                } 

                else if(isSpeedySolved == true && isAccelerationySolved == true && isDistanceySolved == true){
                    let solvedV0 = Math.sqrt((vy * vy) - (2 * ay * y));
                    isInitialSpeedySolved = true;
                    vy0 = (solvedV0);
                    resultLines.push(`vy0 = ${(solvedV0.toFixed(2))}m/s`);
                } 

                else if(isDistanceySolved == true && isSpeedySolved == true && isTimeSolved == true){
                    let solvedV0 = (2 * (y - y0) / t) - vy;
                    isInitialSpeedySolved = true;
                    vy0 = (solvedV0);
                    resultLines.push(`vy0 = ${(solvedV0.toFixed(2))}m/s`);
                } 

                else if(isDistanceySolved == true && isAccelerationySolved == true && isTimeSolved == true){
                    let solvedV0 = ((y - y0) - (0.5 * ay * (t ** 2))) / t;
                    isInitialSpeedySolved = true;
                    vy0 = (solvedV0);
                    resultLines.push(`vy0 = ${(solvedV0.toFixed(2))}m/s`);
                } 

                else{
                    console.log("Not enough info for initial speed y");
                }
            }

            if(!isAccelerationySolved){
                if(isSpeedySolved == true && isInitialSpeedySolved == true && isTimeSolved == true){
                    let solvedA = (vy - vy0) / t;
                    isAccelerationySolved = true;
                    ay = (solvedA);
                    resultLines.push(`ay = ${(solvedA.toFixed(2))}m/s^2`);
                } 

                else if (isInitialSpeedySolved == true && isTimeSolved == true && isDistanceySolved == true){
                    let solvedA = (2 * ((y - y0) - (vy0 * t))) / (t ** 2);
                    isAccelerationySolved = true;
                    ay = (solvedA);
                    resultLines.push(`ay = ${(solvedA.toFixed(2))}m/s^2`);
                } 

                else if(isDistanceySolved == true && isSpeedySolved == true && isInitialSpeedySolved == true){
                    let solvedA = ((vy ** 2) - (vy0 ** 2)) / (2 * (y - y0));
                    isAccelerationySolved = true;
                    ay = (solvedA);
                    resultLines.push(`ay = ${(solvedA.toFixed(2))}m/s^2`);
                } 

                else if(isDistanceySolved == true && isSpeedySolved == true && isTimeSolved == true){
                    let solvedA = (2 * ((vy * t) - (y - y0))) / (t ** 2);
                    isAccelerationySolved = true;
                    ay = (solvedA);
                    resultLines.push(`ay = ${(solvedA.toFixed(2))}m/s^2`);
                } 

                else{
                    console.log("Not enough info for acceleration y");
                }
            }

            if(!isTimeSolved){
                if(isSpeedySolved == true && isInitialSpeedySolved == true && isAccelerationySolved == true){
                    let solvedT = (vy - vy0) / ay;
                    isTimeSolved = true;
                    t = (solvedT);
                    resultLines.push(`t = ${(solvedT.toFixed(2))}s`);
                }

                else if (isSpeedySolved == true && isInitialSpeedySolved == true && isDistanceySolved == true){
                    let solvedT = (2 * y) / (vy0 + vy);
                    isTimeSolved = true;
                    t = (solvedT);
                    resultLines.push(`t = ${(solvedT.toFixed(2))}s`);
                } 

                else if (isDistanceySolved == true && isInitialSpeedySolved == true && isAccelerationySolved == true){
                    let solvedT = (-vy0 + Math.sqrt((vy0 ** 2) + (2 * ay * y))) / ay;
                    isTimeSolved = true;
                    t = (solvedT);
                    resultLines.push(`t = ${(solvedT.toFixed(2))}s`);
                } 

                else{
                    console.log("Not enough info for time (from y)");
                }
            }

            //The wall that separates checking if everything iss finished and my calculations

            if(isDistancexSolved == true && isSpeedxSolved == true && isInitialSpeedxSolved == true && isAccelerationxSolved == true && isDistanceySolved == true && isSpeedySolved == true && isInitialSpeedySolved == true && isAccelerationySolved == true && isTimeSolved == true){
                twodresults.innerHTML = resultLines.join("<br>");
                ongoing = false;
                break;
            }
        }

        else if(filledCountx > 3 && filledCounty > 2 || filledCountx > 2 && filledCounty > 3 || filledCountx > 2 && filledCounty > 2 && filledCountt == 1){
            twodresults.innerHTML = "Read the instructions";
            return;
        }
        
        else{
            ongoing = false;
            twodresults.innerHTML = "Read the instructions";
            return;
        }
  
    }
};