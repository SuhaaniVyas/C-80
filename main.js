var student= [];
function submit() {
    for (var i= 1;i<=4;i++){
var temp= document.getElementById("n"+i).value;
student.push(temp);
    }
    
    var display= [];
    for (var i= 0;i<4;i++){
    display.push("Name-"+ student[i]+"<br>");
            }
    document.getElementById("display_name_with_commas").innerHTML= display;

    var display2= display.join(" ");
    document.getElementById("display_name_without_commas").innerHTML= display2;
    document.getElementById("submit_button").style.display= "none";
    document.getElementById("sort_button").style.display= "inline";
}
function sorting() {
    student.sort();
    var display= [];
    for (var i= 0;i<4;i++){
    display.push("Name-"+ student[i]+"<br>");
            }
    document.getElementById("display_name_with_commas").innerHTML= display;

    var display2= display.join(" ");
    document.getElementById("display_name_without_commas").innerHTML= display2;
    
}
