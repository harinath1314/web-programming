var temp = '{"quiz":[{"question":"what is your name","choices":[{"otext1":"sunny","iscorrect":"true answer","feedback":"congrats you are right"},{"otext1":"leone","iscorrect":"false answer","feedback":"better luck next time"},{"otext1":"anushka","iscorrect":"false answer","feedback":"better luck next time"},{"otext1":"hari","iscorrect":"false answer","feedback":"better luck next time"}],"hint":"baby doll"},{"question":"who is the best actor","choices":[{"otext1":"sunny leone","iscorrect":"true answer","feedback":"congrats you are right"},{"otext1":"sridevi","iscorrect":"false answer answer","feedback":"better luck next time"},{"otext1":"dani daniels","iscorrect":"false answer answer","feedback":"better luck next time"},{"otext1":"ram gopal varma","iscorrect":"false answer answer","feedback":"better luck next time"}],"hint":"ragini mms-2"},{"question":"bollywood+tollywood+hollywood","choices":[{"otext1":"sunny leone","iscorrect":"true answer","feedback":"congrats you are right"},{"otext1":"mallika sharawat","iscorrect":"false answer answer","feedback":"better luck next time"},{"otext1":"prabhas","iscorrect":"false answer answer","feedback":"better luck next time"},{"otext1":"amy jackson","iscorrect":"false answer answer","feedback":"better luck next time"}],"hint":"baby doll"}]}'
var data = JSON.parse(temp);
var j = 0;
var k = 0;

next(k);
function next(k){
    if(k == 0){


        test(k);
        document.getElementById("pre").style.display= "none";
        document.getElementById("next").style.display= "block";
    }
    else if(k == data.quiz.length -1){
        test(k)
        document.getElementById("pre").style.display= "block";
        document.getElementById("next").style.display= "none";

    }else{
        test(k)
        document.getElementById("pre").style.display= "block";
        document.getElementById("next").style.display= "block";

    }
}
function checkanswer(option) {
    var opt1 = document.getElementById("option1");
    var opt2 = document.getElementById("option2");
    var opt3 = document.getElementById("option3");
    var opt4 = document.getElementById("option4");

    if (option === "1") {
        opt1.style.display = "block";
        opt2.style.display = "none";
        opt3.style.display = "none";
        opt4.style.display = "none";
    } else if (option === "2") {
        opt1.style.display = "none";
        opt2.style.display = "block";
        opt3.style.display = "none";
        opt4.style.display = "none";
    }
    else if (option === "3") {
        opt1.style.display = "none";
        opt2.style.display = "none";
        opt3.style.display = "block";
        opt4.style.display = "none";

    }
    else if (option === "4") {
        opt1.style.display = "none";
        opt2.style.display = "none";
        opt3.style.display = "none";
        opt4.style.display = "block";
    }
}

function test(j) {
    document.getElementById("one").innerHTML = '<p class="row question" style="margin-bottom: 0%; color: white;">' + data.quiz[j].question + '</p>' +
        '<div class="row" style="margin-bottom: 5%">' +
        '<button class="col-md-1" style="background-color:darkgoldenrod;" onclick="hint()">hint' +
        '</button>' +
        '</div>' +
        '<div class="alert alert-warning fade in alert-dismissible " id="hint" style="display:none;">' +
        '<a href="#" class="close" data-dismiss="alert" aria-label="close" title="close">×</a>' +
        data.quiz[j].hint + '<span class="glyphicon glyphicon-chevron-right" style="float:right"></span>' +
        '</div>' +
        '<div class="radio" style="color:azure;">' +
        '<label><input type="radio" name="optradio1" value="1" onclick="checkanswer(value)" style="color:azure">'+data.quiz[j].choices[0].otext1+'</label>' +
        '</div>' +


        '<div class="radio" style="color:azure;">' +
        '<label><input type="radio" name="optradio1" value="2" onclick="checkanswer(value)" style="color:azure">' +data.quiz[j].choices[1].otext1+'</label>' +
        '</div>' +
        '<div class="radio" style="color:azure;">' +
        '<label><input type="radio" name="optradio1" value="3" onclick="checkanswer(value)" style="color:azure">' +data.quiz[j].choices[2].otext1 +'</label>' +
        '</div>' +



        '<div class="radio" style="color:azure;">' +
        '<label><input type="radio" name="optradio1" value="4" onclick="checkanswer(value)" style="color:azure">' +data.quiz[j].choices[3].otext1 +'</label>' +
        '</div>' +

        '<div class="alert alert-danger fade in alert-dismissible" id="option1" style="display:none; margin-top:18px;">' +
        '<a href="#" class="close" data-dismiss="alert" aria-label="close" title="close">×</a>' +
        '<span class="glyphicon glyphicon-ok" style="color:green;"></span>' +
      data.quiz[j].choices[0].iscorrect + '--->' + data.quiz[j].choices[0].feedback +
        '</div>' +
        '<div class="alert alert-danger fade in alert-dismissible" id="option2" style="display:none">' +
        '<a href="#" class="close" data-dismiss="alert" aria-label="close" title="close">×</a>' +
        '<span class="glyphicon glyphicon-remove" style="color:red;"></span>' +
        '<div>' +data.quiz[j].choices[1].iscorrect+ '--->' + data.quiz[j].choices[1].feedback + '</div>' +
        '</div>' +



        '<div class="alert alert-danger fade in alert-dismissible" id="option3" style="display:none; margin-top:18px;">' +
        '<a href="#" class="close" data-dismiss="alert" aria-label="close" title="close">×</a>' +
        '<span class="glyphicon glyphicon-ok" style="color:blue;"></span>' +
      data.quiz[j].choices[2].iscorrect + '--->' + data.quiz[j].choices[2].feedback +
        '</div>' +
        '<div class="alert alert-danger fade in alert-dismissible" id="option4" style="display:none">' +
        '<a href="#" class="close" data-dismiss="alert" aria-label="close" title="close">×</a>' +
        '<span class="glyphicon glyphicon-remove" style="color:black;"></span>' +
        '<div>' +data.quiz[j].choices[3].iscorrect+ '--->' + data.quiz[j].choices[3].feedback + '</div>' +
        '</div>'


        document.getElementById("buttons").innerHTML='<div class="row">' +
        '<div class="col-md-6">' +
        '<button id="pre" onclick="next(--k)" style="display:block; float:left;"> previous </button>' +
        '</div>' +
        '<div class="col-md-6">' +
        
        '<button id = "next" onclick="next(++k)" style="display:block; float:right;"> next </button>' +
        '</div>'+

        
        '</div>'

}