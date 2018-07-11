var roster = [
	['Number', 'Name', 'Position', 'Points per Game'],
	[12 , 'Joe Schmo', 'Center', [14, 32, 7, 0, 23] ],
	[9 , 'Ms. Buckets', 'Point Guard', [18, 0, 11, 22, 0] ],
	[31 , 'Harvey Kay', 'Shooting Guard', [0, 30, 16, 0, 25] ],
	[7 , 'Sally Talls', 'Power Forward', [18, 29, 26, 31, 19] ],
	[22 , 'MK DiBoux', 'Small Forward', [11, 0, 23, 17, 0] ]
]

function convert_roster_format(roster){
	var arr = []
	
	for (var i = 1 ; i < roster.length ; i++){
		var obj = {}
		obj[roster[0][0]] = roster[i][0]
		obj[roster[0][1]] = roster[i][1]
		obj[roster[0][2]] = roster[i][2]
		obj[roster[0][3]] = roster[i][3]
		arr.push(obj)
	}
	return arr
}

var object_roster = convert_roster_format(roster)

console.log(object_roster[2])
console.log(object_roster[3])
console.log(object_roster[0]['Name'] == 'Joe Schmo')