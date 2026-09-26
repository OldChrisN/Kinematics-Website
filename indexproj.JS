const distancex = document.getElementById("distancex");
const speedogx = document.getElementById("speedogx");

const distancey = document.getElementById("distancey");
const speedogy = document.getElementById("speedogy");
const speedy = document.getElementById("speedy");
const gravityg = document.getElementById("gravityg");

const velocity = document.getElementById("velocity");
const theta = document.getElementById("theta");

const time = document.getElementById("time");

const submittingproj = document.getElementById("submittingproj");

const projresults = document.getElementById("projresults");

submittingproj.onclick = function(){
    projresults.innerHTML = "";

    let resultLines = [];

    let ongoing = true;

    let isDistancexMissing = distancex.value === "";
    let isInitialSpeedxMissing = speedogx.value === "";

    let isDistanceyMissing = distancey.value === "";
    let isSpeedyMissing = speedy.value === "";
    let isInitialSpeedyMissing = speedogy.value === "";
    let isGravityMissing = gravityg.value === "";

    let isVelocityMissing = velocity.value === "";
    let isThetaMissing = theta.value === "";

    let isTimeMissing = time.value === "";

    //-------------------------------------------------------------

    let isDistancexSolved = true;
    let isInitialSpeedxSolved = true;

    let isDistanceySolved = true;
    let isSpeedySolved = true;
    let isInitialSpeedySolved = true;
    let isGravitySolved = true;

    let isVelocitySolved = true;
    let isThetaSolved = true;
    let isMaxHeightSolved = false;
    let isMaxHeightTimeSolved = false;

    let isTimeSolved = true;

    //-------------------------------------------------------------------

    if(isDistancexMissing){
        isDistancexSolved = false;
    }

    if(isInitialSpeedxMissing){
        isInitialSpeedxSolved = false;
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
    
    if(isGravityMissing){
        isGravitySolved = false;
    }

    //

    if(isVelocityMissing){
        isVelocitySolved = false;
    }

    if(isThetaMissing){
        isThetaSolved = false;
    }

    //time is just isolated here
    
    if(isTimeMissing){
        isTimeSolved = false;
    }

    //-------------------------------------------------------------

    let x0 = 0;
    let x = Number(distancex.value);
    let vx0 = Number(speedogx.value);
    let vx = Number(speedogx.value);
    let ax = 0;

    let y0 = 0;
    let y = Number(distancey.value);
    let vy0 = Number(speedogy.value);
    let vy = Number(speedy.value);
    let g = Number(gravityg.value);

    let v = Number(velocity.value);
    let θ = Number(theta.value);
    let h;
    let tup;

    let t = Number(time.value);

    //-------------------------------------------------------------

    while(ongoing){

        if(isNaN(x) || isNaN(vx0) || isNaN(y) || isNaN(vy0) || isNaN(vy) || isNaN(g) || isNaN(v) || isNaN(θ) || isNaN(t)){
            projresults.innerHTML = "Please enter a real number";
            return; 
        }

        let solvedCountBefore = [isDistancexSolved, isInitialSpeedxSolved, isDistanceySolved, isSpeedySolved, isInitialSpeedySolved, isGravitySolved, isVelocitySolved, isThetaSolved, isTimeSolved, isMaxHeightSolved, isMaxHeightTimeSolved].filter(Boolean).length;

        if(!isInitialSpeedxSolved){
            if(isVelocitySolved == true && isThetaSolved == true){
                let solvedV = (v * Math.cos(θ));
                isInitialSpeedxSolved = true;
                vx0 = (solvedV);
                resultLines.push(`vx0 = ${(solvedV.toFixed(2))}m/s`);
                resultLines.push(`vx = ${(solvedV.toFixed(2))}m/s`);
            }

            else if(isDistancexSolved == true && isTimeSolved == true){
                let solvedV = x / t;
                isInitialSpeedxSolved = true;
                vx0 = (solvedV);
                resultLines.push(`vx0 = ${(solvedV.toFixed(2))}m/s`);
                resultLines.push(`vx = ${(solvedV.toFixed(2))}m/s`);
            }

            else if(isVelocitySolved == true && isInitialSpeedySolved == true){
                let solvedV = Math.sqrt((v ** 2) - (vy0 ** 2));
                isInitialSpeedxSolved = true;
                vx0 = (solvedV);
                resultLines.push(`vx0 = ${(solvedV.toFixed(2))}m/s`);
                resultLines.push(`vx = ${(solvedV.toFixed(2))}m/s`);
            }

            else{
                console.log("not enough info")
            }
        }

        if(!isInitialSpeedySolved){
            if(isVelocitySolved == true && isThetaSolved == true){
                let solvedV = (v * Math.sin(θ));
                isInitialSpeedySolved = true;
                vy0 = (solvedV);
                resultLines.push(`vy0 = ${(solvedV.toFixed(2))}m/s`);
            }

            else if(isSpeedySolved == true && isGravitySolved == true && isTimeSolved == true){
                let solvedV = vy + (g * t);
                isInitialSpeedySolved = true;
                vy0 = (solvedV);
                resultLines.push(`vy0 = ${(solvedV.toFixed(2))}m/s`);
            }

            else if(isMaxHeightTimeSolved == true && isGravitySolved == true){
                let solvedV = tup * g;
                isInitialSpeedySolved = true;
                vy0 = (solvedV);
                resultLines.push(`vy0 = ${(solvedV.toFixed(2))}m/s`);
            }

            else if(isTimeSolved == true && isGravitySolved == true){
                let solvedV = (g * t) / 2;
                isInitialSpeedySolved = true;
                vy0 = (solvedV);
                resultLines.push(`vy0 = ${(solvedV.toFixed(2))}m/s`);
            }

            else if(isMaxHeightSolved == true && isGravitySolved == true){
                let solvedV = Math.sqrt(2 * g * h);
                isInitialSpeedySolved = true;
                vy0 = (solvedV);
                resultLines.push(`vy0 = ${(solvedV.toFixed(2))}m/s`);
            }

            else if(isVelocitySolved == true && isInitialSpeedxSolved == true){
                let solvedV = Math.sqrt((v ** 2) - (vx0 ** 2));
                isInitialSpeedySolved = true;
                vy0 = (solvedV);
                resultLines.push(`vy0 = ${(solvedV.toFixed(2))}m/s`);
            }

            else{
                console.log("not enough info")
            }
        }

        if(!isSpeedySolved){
            if(isInitialSpeedySolved == true && isGravitySolved == true && isTimeSolved == true){
                let SolvedV = vy0 - g * t;
                isSpeedySolved = true;
                vy = (SolvedV);
                resultLines.push(`vy = ${(SolvedV.toFixed(2))}m/s`);
            }

            else if(isInitialSpeedySolved == true && isGravitySolved == true && isDistanceySolved == true){
                let solvedV = -Math.sqrt((vy0 ** 2) - (2 * g * y));
                isSpeedySolved = true;
                vy = (solvedV);
                resultLines.push(`vy = ${(solvedV.toFixed(2))}m/s`);
            }

            else{
                console.log("not enough info")
            }
        }

        if(!isDistancexSolved){
            if(isInitialSpeedxSolved == true && isTimeSolved == true){
                let SolvedD = vx0 * t;
                isDistancexSolved = true;
                x = (SolvedD);
                resultLines.push(`x = ${(SolvedD.toFixed(2))}m`);
            }

            else{
                console.log("not enough info")
            }
        }

        if(!isDistanceySolved){
            if(isInitialSpeedySolved == true && isGravitySolved == true && isTimeSolved == true){
                let SolvedD = (vy0 * t) - (.5 * g * (t ** 2));
                isDistanceySolved = true;
                y = (SolvedD);
                resultLines.push(`y = ${(SolvedD.toFixed(2))}m`);
            }

            else if(isInitialSpeedySolved == true && isSpeedySolved == true && isGravitySolved == true){
                let solvedD = ((vy0 ** 2) - (vy ** 2)) / (2 * g);
                isDistanceySolved = true;
                y = (solvedD);
                resultLines.push(`y = ${(solvedD.toFixed(2))}m`);
            }

            else{
                console.log("not enough info")
            }
        }

        if(!isGravitySolved){
            if(isInitialSpeedySolved == true && isMaxHeightTimeSolved == true){
                let solvedG = vy0 / tup;
                isGravitySolved = true;
                g = (solvedG);
                resultLines.push(`g = ${(solvedG.toFixed(2))}m/s^2`);
            }

            else if(isInitialSpeedySolved == true && isTimeSolved == true){
                let solvedG = (2 * vy0) / t;
                isGravitySolved = true;
                g = (solvedG);
                resultLines.push(`g = ${(solvedG.toFixed(2))}m/s^2`);
            }

            else if(isMaxHeightSolved == true && isMaxHeightTimeSolved == true){
                let solvedG = (2 * h) / (tup ** 2);
                isGravitySolved = true;
                g = (solvedG);
                resultLines.push(`g = ${(solvedG.toFixed(2))}m/s^2`);
            }

            else{
                console.log("not enough info")
            }
        }

        if(!isMaxHeightTimeSolved){
            if(isVelocitySolved == true && isThetaSolved == true && isGravitySolved == true){
                let solvedTime = (v * Math.sin(θ)) / g;
                isMaxHeightTimeSolved = true;
                tup = (solvedTime);
                resultLines.push(`tmax = ${(solvedTime.toFixed(2))}s`);
            }

            else if(isTimeSolved == true){
                let solvedTime = t / 2;
                isMaxHeightTimeSolved = true;
                tup = (solvedTime);
                resultLines.push(`tmax = ${(solvedTime.toFixed(2))}s`);
            }

            else{
                console.log("not enough info")
            }
        }

        if(!isTimeSolved){
            if(isVelocitySolved == true && isThetaSolved == true && isGravitySolved == true){
                let solvedTime = 2 * (v * Math.sin(θ)) / g;
                isTimeSolved = true;
                t = (solvedTime);
                resultLines.push(`t = ${(solvedTime.toFixed(2))}s`);
            }

            else if(isDistancexSolved == true && isInitialSpeedxSolved == true){
                let solvedTime = x / vx0;
                isTimeSolved = true;
                t = (solvedTime);
                resultLines.push(`t = ${(solvedTime.toFixed(2))}s`);
            }

            else if(isMaxHeightTimeSolved == true){
                let solvedTime = 2 * tup;
                isTimeSolved = true;
                t = (solvedTime);
                resultLines.push(`t = ${(solvedTime.toFixed(2))}s`);
            }

            else{
                console.log("not enough info")
            }
        }

        if(!isMaxHeightSolved){
            if(isVelocitySolved == true && isThetaSolved == true && isGravitySolved == true){
                let solvedHeight = ((v * Math.sin(θ)) ** 2) / (2 * g);
                isMaxHeightSolved = true;
                h = (solvedHeight);
                resultLines.push(`h = ${(solvedHeight.toFixed(2))}m`);
            }

            else if(isInitialSpeedySolved == true && isGravitySolved == true){
                let solvedHeight = (vy0 ** 2) / (2 * g);
                isMaxHeightSolved = true;
                h = (solvedHeight);
                resultLines.push(`h = ${(solvedHeight.toFixed(2))}m`);
            }

            else{
                console.log("not enough info")
            }
        }

        if(!isVelocitySolved){
            if(isInitialSpeedxSolved == true && isInitialSpeedySolved == true){
                let solvedVelocity = Math.hypot(vx0, vy0);
                isVelocitySolved = true;
                v = (solvedVelocity);
                resultLines.push(`v = ${(solvedVelocity.toFixed(2))}m/s`);
            }

            else{
                console.log("not enough info")
            }
        }

        if(!isThetaSolved){
            if(isInitialSpeedxSolved == true && isInitialSpeedySolved == true){
                let solvedTheta = Math.atan2(vy0, vx0);
                isThetaSolved = true;
                θ = (solvedTheta);
                resultLines.push(`θ = ${(solvedTheta.toFixed(2))}rad`);
            }

            else{
                console.log("not enough info")
            }
        }

        let solvedCountAfter = [isDistancexSolved, isInitialSpeedxSolved, isDistanceySolved, isSpeedySolved, isInitialSpeedySolved, isGravitySolved, isVelocitySolved, isThetaSolved, isTimeSolved, isMaxHeightSolved, isMaxHeightTimeSolved].filter(Boolean).length;

        if(solvedCountAfter == solvedCountBefore){
            ongoing = false;

            if(resultLines.length > 0){
                projresults.innerHTML = resultLines.join("<br>");
            }
            else{
                projresults.innerHTML = "Not enough information to solve anything.";
            }
        }
    }
    
}