function check(name) {
    var isChecked = document.getElementById(name).checked;
    document.getElementById("result").innerHTML = "";
    if (isChecked) {
        var buttonType = name.substring(0, name.length - 1);
        var row = name.substring(name.length - 1);
        if (document.getElementById(otherType(buttonType) + row).checked) {
            document.getElementById(otherType(buttonType) + row).checked = false;
        }
    }
}

function otherType(type) {
    if (type == "present") {
        return "not";
    } else {
        return "present";
    }
}

document.getElementById("button").onclick = function() {
    if (!allChecked()) {
        document.getElementById("result").innerHTML = "Attendance is not completed";
    } else {
        var totalPresent = 0;
        for(var i = 1; i <= 6; i++){
            var presentCheck = document.getElementById("present" + i).checked;
            if(presentCheck){
                totalPresent++;
            }
        }
        document.getElementById("result").innerHTML = "Attendance Submitted! "+totalPresent+" out of 6 students are present";
    }
};

function allChecked() {
    //hardcoded
    for (var i = 1; i <= 6; i++) {
        var presentCheck = document.getElementById("present" + i).checked;
        var notCheck = document.getElementById("not" + i).checked;
        if (!presentCheck && !notCheck) {
            return false;
        }
    }
    return true;
}
