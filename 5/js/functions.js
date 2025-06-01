function convertStringToMin(str){
  const timeMass = str.split(':');

  return Number(timeMass[0]) * 60 + Number(timeMass[1]);

}

function checkWorkingHours(startWork, endWork, startMeet, durationMinutes){
  const startWorkMin = convertStringToMin(startWork);
  const endWorkMin = convertStringToMin(endWork);
  const startMeetMin = convertStringToMin(startMeet);

  let result = true;

  if((startMeetMin < startWorkMin) || (startMeetMin + durationMinutes) > endWorkMin){
    result = false;
  }
  return result;
}


checkWorkingHours('08:00', '17:30', '14:00', 90);// true
checkWorkingHours('8:0', '10:0', '8:0', 120);// true
checkWorkingHours('08:00', '14:30', '14:00', 90);// false
checkWorkingHours('14:00', '17:30', '08:0', 90);// false
checkWorkingHours('8:00', '17:30', '08:00', 900); // false
