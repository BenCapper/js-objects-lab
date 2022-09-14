const aCar = { 
    owner : "Ben Capper",
    address: "3 Walkers Lane",
    features : ['Parking assist', 'Alarm', 'Tow-bar'],
    previous_owners: [
        {
        name: "Pat Bob",
        address: "2 Low Street",
        },
        {
        name: "Sheila Smith",
        address: "1 High Street",
        }
    ],
    type : {
        make: 'Toyota',
        model: 'Corolla',
        cc: 1.8
    }, 
    registration : {
        year: '201',
        county: 'WD',
        number: '1058' 
    }
};

console.log(aCar.owner);
console.log(aCar.owner + ' drives a ' + aCar.type.make)
console.log('Reg. = ' + aCar.registration.year + '-' + 
            aCar.registration.county + '-' + aCar.registration.number)
console.log('First owner : ' + aCar.previous_owners[1].name + ' - ' + aCar.previous_owners[1].address )

for (let i = 0 ; i < aCar.features.length ; i += 1) {
    console.log(aCar.features[i]) ;
}

for (let i = 0 ; i < aCar.previous_owners.length ; i += 1) {
    console.log(aCar.previous_owners[i]['name']) ;
}