//Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
//Note:- 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
//- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
//Example
//s'12:01:00PM'
//Return '12:01:00.
//s12:01:00AM'
//Return '00:01:00.
//Function Description
//Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.
//timeConversion has the following parameter(s):
//string s: a time in 12 hour format
//Returns
//string: the time in 24 hour format

//Returns
// string: the time in 24 hour format
//Input Format
//A single strings that represents a time in 12-hour clock format C hh:mm:ssAM or hh:mm:ssPM).
//Constraints
//• All input times are valid
//Sample Input
//07:05:45PM
//Sample Output
//19:05:45


function timeConversion(s) {
    // Extract hours, minutes, and seconds from the input string
     const [hours, minutes, secondsAMPM] = s.split(/[:AM|:PM]+/);
     
     // Convert hours to 24-hour format
     const convertedHours = (s.includes('PM') && hours !== '12') ? parseInt(hours, 10) + 12 : (s.includes('AM') && hours === '12') ? '00' : hours;
     
     // Create the 24-hour formatted time string
     const militaryTime = `${convertedHours.toString().padStart(2, '0')}:${minutes}:${secondsAMPM.padStart(2, '0')}`;
     
     return militaryTime;
 }
 
 // Example usage
 console.log(timeConversion('12:01:00PM')); // Output: '12:01:00'
 console.log(timeConversion('12:01:00AM')); // Output: '00:01:00'