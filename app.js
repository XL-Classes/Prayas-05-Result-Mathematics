let rollNumber = prompt("Enter your roll number here : ");
function checkResult() {
    if (rollNumber == 101) {
        alert("Welcome Aditya, You have scored 50/50 in PRAYAS - 05 and having secured RANK 1🎉 IN CLASS ");
    }
    else if (rollNumber == 102) {
        alert("Welcome Aditya Kumawat, You have scored 31/50 in PRAYAS - 05");
    }
    else if (rollNumber == 103) {
        alert("Welcome Axmita Kumawat, You have scored 29/50 in PRAYAS - 05");
    }
    else if (rollNumber == 104) {
        alert("Welcome Ayushi Jangir, You have scored 27/50 in PRAYAS - 05");
    }
    else if (rollNumber == 105) {
        alert("Welcome Gaurav Khandekar, You have scored 35/50 in PRAYAS - 05");
    }
    else if (rollNumber == 106) {
        alert("Welcome Ishan Ali, You have scored 37/50 in PRAYAS - 05");
    }
    else if (rollNumber == 107) {
        alert("Welcome Jyoti, You have scored 28/50 in PRAYAS - 05");
    }
    else if (rollNumber == 108) {
        alert("Welcome Kanak Gupta, You have scored 22/50 in PRAYAS - 05");
    }
    else if (rollNumber == 109) {
        alert("Welcome Lakshita Kumawat, You have scored 50/50 in PRAYAS - 05 and having secured RANK 1 🎉 IN CLASS");
    }
    else if (rollNumber == 1010) {
        alert("Welcome Love Soni, You have scored 27/50 in PRAYAS - 05");
    }
    else if (rollNumber == 1011) {
        alert("Welcome Manish Verma, You have scored 33/50 in PRAYAS - 05");
    }
    else if (rollNumber == 1012) {
        alert("Welcome Neetin Verma, You have scored 33/50 in PRAYAS - 05");
    }
    else if (rollNumber == 1013) {
        alert("Welcome Nimisha Sharma, You have scored 33/50 in PRAYAS - 05");
    }
    else if (rollNumber == 1014) {
        alert("Welcome Rohit Kumawat, You have scored 42/10 in PRAYAS - 05");
    }
    // else if (rollNumber == 1013) {
    //     alert("Welcome Savesh Khan, You have scored null in PRAYAS - 05");
    // }
    // else if (rollNumber == 1014) {
    //     alert("Welcome Veer Bhargav, You have scored null in PRAYAS - 05");
    // }
    // else if (rollNumber == 1015) {
    //     alert("Welcome Wahid Hussain, You have scored null in PRAYAS - 05");
    // }
    else if (rollNumber == 1015) {
        alert("Welcome Tamanna Swami, You have scored 27/50 in PRAYAS - 05");
    }
    else {
        alert("Incorrect Roll Number ! Please Enter Correct Roll Number.")
        rollNumber = prompt("Enter your correct roll number here : ");
        checkResult();
    }
}
checkResult();