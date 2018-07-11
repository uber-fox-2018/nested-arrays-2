var roster = [['Number','Name','Position','Points per Game'],
             [12,'Joe schmo','Center',[14,32,7,0,23]],
             [9,'Ms. Buckets','Point Guard',[19,0,11,22,0]],
             [31,'Harvey Kay','Shooting Guard',[0,30,16,0,25]],
             [7,'Sally Talls','Power Forward',[18,29,26,31,19]],
             [22,'Mk DiBoux','Small Forward',[11,0,23,17,0]]]

function convert (param){
var finalConvert = []
for (var i=1 ; i < param.length ; i++){
    var hasilConvert = {}
    for (var j=0 ; j <param[0].length ; j++){
        hasilConvert[param[0][0]] = param[i][0],
        hasilConvert[param[0][1]] = param[i][1],
        hasilConvert[param[0][2]] = param[i][2],
        hasilConvert[param[0][3]] = param[i][3]
    }

    finalConvert.push(hasilConvert)
}
return finalConvert
}
var object_roster = convert(roster)
//console.log(convert(roster))
console.log(object_roster[2])
console.log(object_roster[1])
console.log(object_roster[3])
console.log(object_roster[0])
