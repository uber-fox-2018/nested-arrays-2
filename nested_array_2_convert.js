'use strict'

let roster = [
  ['Number', 'Name', 'Position', 'Points per Game'],
  [12, 'Joe Schmo', 'Center', [14, 32, 7, 0, 23]],
  [9, 'Ms. Buckets', 'Point Guard', [19, 0, 11, 22, 0]],
  [31, 'Harvey Kay', 'Shooting Guard', [0, 30, 16, 0, 25]],
  [7, 'Sally Talls', 'Power Forward ', [18, 29, 26, 31, 19]],
  [22, 'MK DiBoux ', 'Small Forward ', [11, 0, 23, 17, 0]]
]
// [[roster[0][0], roster[1][0]], [roster[0][1], roster[1][1]],...

let students = [
  ['Name', 'Address', 'Scores'],
  ['Drake', 
    {'Street': 'Grasshill 12', 'City': 'Greenwood', 'Region': 'Ashenvale'},
    [{'Subject': 'Math', 'Score': '8'}, {'Subject': 'English', 'Score': '7'}, {'Subject': 'Biology', 'Score': '9'}] 
  ],
  ['Elizabeth', 
    {'Street': 'Ruby 8', 'City': 'Redstone', 'Region': 'Jewelline'},
    [{'Subject': 'Math', 'Score': '9'}, {'Subject': 'English', 'Score': '8'}, {'Subject': 'Biology', 'Score': '8'}] 
  ],
  ['Nero', 
    {'Street': 'Blueflame 3', 'City': 'Fierydune', 'Region': 'Northren Helios'},
    [{'Subject': 'Math', 'Score': '7'}, {'Subject': 'English', 'Score': '9'}, {'Subject': 'Biology', 'Score': '6'}] 
  ],
]

function convert_roster_format(nestedArray) {
  var result = [];
  let rosterObj = {};
  for (let i = 1; i < nestedArray.length; i++) {
    rosterObj = formatRoster(nestedArray[0], nestedArray[i]);
    result.push(rosterObj);
  }
  return result;
}

function formatRoster(keyArr, valueArr) {
  let result = {};
  for(let i = 0; i < keyArr.length; i++) {
    let attr = keyArr[i];
    result[attr] = valueArr[i];
  }
  return result;
}

//Driver code
// let object_roster = convert_roster_format(roster)
// console.log(object_roster[2])

// => { "Number": 31, "Name": "Harvey Kay", "Position": "Shooting Guard", "Points per Game": [0, 30, 16, 0, 25] }

//console.log(object_roster[0]['Name'] == 'Joe Schmo') // outputs true

let object_student = convert_roster_format(students)
console.log(object_student[0])
console.log(object_student[1]['Address']['Region'])
console.log(object_student[2]['Scores'][0]['Score'])

module.exports = {
  convert_roster_format
}
