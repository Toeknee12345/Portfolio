var AOP;
function calculateAOP(){
    //get value for isUpperBody
    var isUpperBody = null;
    if(document.getElementById("upper").checked){
        isUpperBody = true;
    }else if(document.getElementById("lower").checked){
        isUpperBody = false;
    }else{
        //print error message - must select upper or lower body
    }
    
    //get values for arm or thigh circumference
    var circumference = document.getElementById("circumference").value;

    if(circumference == ""){
        //print error message - need to input arm/leg circumference
    }


    //get cuff width
    var cuffWidth = 0;
    if(document.getElementById("five").checked){
        cuffWidth = 5;
    }else if(document.getElementById("eleven").checked){
        cuffWidth = 11;
    }else if(document.getElementById("thirteen").checked){
        cuffWidth = 13;
    }else if(document.getElementById("eighteen").checked){
        cuffWidth = 18;
    }else{
        //print error message - must select a cuff width
    }


    //get SBP and DBP
    
    var SBP = document.getElementById("sbp").value;
    var DBP = document.getElementById("dbp").value;
    if(SBP == "" || DBP == ""){
        //print error message - must input SBP and DBP values
    }

    //get sex and age - only for lower body 18cm cuff
    var isMale = true;
    var age = 0;
    if(cuffWidth == 18 && !isUpperBody){
        if(document.getElementById("male").checked){
            isMale = true;
        }else if(document.getElementById("female").checked){
            isMale = false;
        }else{
            //print error message - must select male or female
        }

        age = document.getElementById("age").value;
        if(age == ""){
            //print error message - must input age
        }
    }

    //Case 1: Upper body with 5cm cuff
    if(isUpperBody && cuffWidth == 5){
        AOP =  0.514*(SBP) + 0.339 *(DBP) + 1.461*(circumference) + 17.236;
    }
    //Case 2: Lower body with 5cm cuff
    else if(!isUpperBody && cuffWidth == 5){
        AOP =  5.893*(circumference) + 0.912*(SBP) - 220.046;
    }
    //Case 3: Lower body with 11cm cuff
    else if(!isUpperBody && cuffWidth == 11){
        AOP = 3.377*(circumference) + 0.497*(SBP) + 0.755*(DBP) - 137.311;
    }
    //Case 4: Lower body with 13cm cuff
    else if(!isUpperBody && cuffWidth == 13){
        AOP = 2.036*(circumference) + 0.469*(SBP) + 0.605*(DBP) - 58.45;
    }
    //Case 5: Lower body with 18cm cuff
    else if(!isUpperBody && cuffWidth == 18){
        if(isMale){
            AOP = 0.980*(circumference) + 0.554*(SBP) + 0.261*(DBP) + 0.429*(age) + 2.403 - 9.042;
        }else{
            AOP = 0.980*(circumference) + 0.554*(SBP) + 0.261*(DBP) + 0.429*(age) - 9.042;
        }
    }
    //Case 6: Something went wrong :(
    else{
        AOP = -1;
    }
    localStorage.setItem('aopValue', JSON.stringify(AOP));

    console.log(AOP);
    return AOP;
    
}

function calculateRiskLevel() {
    var checkedValue = 0;

    if( document.getElementById("SQ1").checked ) {
        checkedValue += 5; }
    if( document.getElementById("SQ2").checked ) {
        checkedValue += 5; }
    if( document.getElementById("SQ3").checked ) {
        checkedValue += 5; }
    if( document.getElementById("SQ4").checked ) {
        checkedValue += 4; }
    if( document.getElementById("SQ5").checked ) {
        checkedValue += 4; }
    if( document.getElementById("SQ6").checked ) {
        checkedValue += 4; }
    if( document.getElementById("SQ7").checked ) {
        checkedValue += 4; }
    if( document.getElementById("SQ8").checked ) {
        checkedValue += 4; }
    if( document.getElementById("SQ9").checked ) {
        checkedValue += 3; }
    if( document.getElementById("SQ10").checked ) {
        checkedValue += 3; }
    if( document.getElementById("SQ11").checked ) {
        checkedValue += 3; }
    if( document.getElementById("SQ12").checked ) {
        checkedValue += 3; }
    if( document.getElementById("SQ13").checked ) {
        checkedValue += 3; }
    if( document.getElementById("SQ14").checked ) {
        checkedValue += 2; }
    if( document.getElementById("SQ15").checked ) {
        checkedValue += 2; }
    if( document.getElementById("SQ16").checked ) {
        checkedValue += 2; }
    if( document.getElementById("SQ17").checked ) {
        checkedValue += 2; }
    if( document.getElementById("SQ18").checked ) {
        checkedValue += 2; }
    if( document.getElementById("SQ19").checked ) {
        checkedValue += 2; }
    if( document.getElementById("SQ20").checked ) {
        checkedValue += 1; }
    if( document.getElementById("SQ21").checked ) {
        checkedValue += 1; }
    if( document.getElementById("SQ22").checked ) {
        checkedValue += 1; }
    
    if ( checkedValue >= 5) {
        window.location.href="/BFR-not-approved.html";
    }
    else if ( checkedValue == 4) {
        window.location.href="/medical-permission-warning.html";
    }
    else if ( checkedValue == 3) {
        window.location.href="/medical-permission-warning.html";
    }
    else if ( checkedValue  == 2) {
        window.location.href="/level-2.html";
    }
    else if ( checkedValue <= 1 ) {
        window.location.href="/level-1.html";
    }
}

//hides all input fields in the event the user reselects upper/lower
function hideAllBelowUpperLower(){
    document.getElementById("chooseWidthLabel").style.visibility = "hidden";
    document.getElementById("five").style.visibility = "hidden";
    document.getElementById("fiveLabel").style.visibility = "hidden";
    document.getElementById("eleven").style.visibility = "hidden";
    document.getElementById("elevenLabel").style.visibility = "hidden";
    document.getElementById("thirteen").style.visibility = "hidden";
    document.getElementById("thirteenLabel").style.visibility = "hidden";
    document.getElementById("eighteen").style.visibility = "hidden";
    document.getElementById("eighteenLabel").style.visibility = "hidden";
    document.getElementById("enterInfoLabel").style.visibility = "hidden";
    document.getElementById("sbpLabel").style.visibility = "hidden";
    document.getElementById("sbp").style.visibility = "hidden";
    document.getElementById("dbpLabel").style.visibility = "hidden";
    document.getElementById("dbp").style.visibility = "hidden";
    document.getElementById("circumferenceLabel").style.visibility = "hidden";
    document.getElementById("circumference").style.visibility = "hidden";
    document.getElementById("sexLabel").style.visibility = "hidden";
    document.getElementById("male").style.visibility = "hidden";
    document.getElementById("maleLabel").style.visibility = "hidden";
    document.getElementById("female").style.visibility = "hidden";
    document.getElementById("femaleLabel").style.visibility = "hidden";
    document.getElementById("ageLabel").style.visibility = "hidden";
    document.getElementById("age").style.visibility = "hidden";
}

//show cuff width
function clickUpper(){
    //hideAllBelowUpperLower();
    document.getElementById("chooseWidthLabel").style.visibility = "visible";
    document.getElementById("fiveLabel").style.visibility = "visible";
    document.getElementById("five").style.visibility = "visible";

    document.getElementById("eleven").style.visibility = "hidden";
    document.getElementById("elevenLabel").style.visibility = "hidden";
    document.getElementById("thirteen").style.visibility = "hidden";
    document.getElementById("thirteenLabel").style.visibility = "hidden";
    document.getElementById("eighteen").style.visibility = "hidden";
    document.getElementById("eighteenLabel").style.visibility = "hidden";
    document.getElementById("enterInfoLabel").style.visibility = "hidden";
    document.getElementById("sbpLabel").style.visibility = "hidden";
    document.getElementById("sbp").style.visibility = "hidden";
    document.getElementById("dbpLabel").style.visibility = "hidden";
    document.getElementById("dbp").style.visibility = "hidden";
    document.getElementById("circumferenceLabel").style.visibility = "hidden";
    document.getElementById("circumference").style.visibility = "hidden";
    document.getElementById("sexLabel").style.visibility = "hidden";
    document.getElementById("male").style.visibility = "hidden";
    document.getElementById("maleLabel").style.visibility = "hidden";
    document.getElementById("female").style.visibility = "hidden";
    document.getElementById("femaleLabel").style.visibility = "hidden";
    document.getElementById("ageLabel").style.visibility = "hidden";
    document.getElementById("age").style.visibility = "hidden";

    document.getElementById("five").checked = false;
    document.getElementById("eleven").checked = false;
    document.getElementById("thirteen").checked = false;
    document.getElementById("eighteen").checked = false;
}

//show cuff width
function clickLower(){
    document.getElementById("chooseWidthLabel").style.visibility = "visible";
    document.getElementById("five").style.visibility = "visible";
    document.getElementById("fiveLabel").style.visibility = "visible";
    document.getElementById("eleven").style.visibility = "visible";
    document.getElementById("elevenLabel").style.visibility = "visible";
    document.getElementById("thirteen").style.visibility = "visible";
    document.getElementById("thirteenLabel").style.visibility = "visible";
    document.getElementById("eighteen").style.visibility = "visible";
    document.getElementById("eighteenLabel").style.visibility = "visible";

    document.getElementById("enterInfoLabel").style.visibility = "hidden";
    document.getElementById("sbpLabel").style.visibility = "hidden";
    document.getElementById("sbp").style.visibility = "hidden";
    document.getElementById("dbpLabel").style.visibility = "hidden";
    document.getElementById("dbp").style.visibility = "hidden";
    document.getElementById("circumferenceLabel").style.visibility = "hidden";
    document.getElementById("circumference").style.visibility = "hidden";
    document.getElementById("sexLabel").style.visibility = "hidden";
    document.getElementById("male").style.visibility = "hidden";
    document.getElementById("maleLabel").style.visibility = "hidden";
    document.getElementById("female").style.visibility = "hidden";
    document.getElementById("femaleLabel").style.visibility = "hidden";
    document.getElementById("ageLabel").style.visibility = "hidden";
    document.getElementById("age").style.visibility = "hidden";

    document.getElementById("five").checked = false;
    document.getElementById("eleven").checked = false;
    document.getElementById("thirteen").checked = false;
    document.getElementById("eighteen").checked = false;
}

//show SBP, DBP, Circumference
function clickAnyCuffSize(){
    document.getElementById("enterInfoLabel").style.visibility = "visible";
    document.getElementById("sbpLabel").style.visibility = "visible";
    document.getElementById("sbp").style.visibility = "visible";
    document.getElementById("dbpLabel").style.visibility = "visible";
    document.getElementById("dbp").style.visibility = "visible";
    document.getElementById("circumferenceLabel").style.visibility = "visible";
    document.getElementById("circumference").style.visibility = "visible";

    document.getElementById("sexLabel").style.visibility = "hidden";
    document.getElementById("male").style.visibility = "hidden";
    document.getElementById("maleLabel").style.visibility = "hidden";
    document.getElementById("female").style.visibility = "hidden";
    document.getElementById("femaleLabel").style.visibility = "hidden";
    document.getElementById("ageLabel").style.visibility = "hidden";
    document.getElementById("age").style.visibility = "hidden";

}

//show user sex and age
function clickEighteen(){
    document.getElementById("enterInfoLabel").style.visibility = "visible";
    document.getElementById("sbpLabel").style.visibility = "visible";
    document.getElementById("sbp").style.visibility = "visible";
    document.getElementById("dbpLabel").style.visibility = "visible";
    document.getElementById("dbp").style.visibility = "visible";
    document.getElementById("circumferenceLabel").style.visibility = "visible";
    document.getElementById("circumference").style.visibility = "visible";
    document.getElementById("sexLabel").style.visibility = "visible";
    document.getElementById("male").style.visibility = "visible";
    document.getElementById("maleLabel").style.visibility = "visible";
    document.getElementById("female").style.visibility = "visible";
    document.getElementById("femaleLabel").style.visibility = "visible";
    document.getElementById("ageLabel").style.visibility = "visible";
    document.getElementById("age").style.visibility = "visible";

}