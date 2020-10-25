
var workingDay = 1;

switch(workingDay){
    case 1:
        alert('Monday... YEAAAAHHH');
    case 2:
    case 3:
        alert('Wednesday... Alright!');
    case 4:
    case 5:
        alert('Working Day!');
        break;

    case 6:
    case 7:
        alert('Weekend... Awesome!');
        break

    default:
        alert(workingDay + ' is not a valid day!');
        break
}


