const fs = require('fs')

const example_data = "example.json"
const outfile      = "outfile.json"
const buffer       = fs.readFileSync(example_data)
const json_data    = JSON.parse(buffer)

// # FILTERING
// simple filter list
const filtered_list1= json_data["list_of_objects"].filter( item  => 
    (item["number"]<=2 && item["string"].includes("hello")) 
)                                                                             // [ { string: 'hello this is a string', number: 1 } ]
// same thing
const filtered_list2= json_data["list_of_objects"].filter((item) => {
    if (item["number"]<=2 && item["string"].includes("hello")) {
        return item  
    }
})                                                                            // [ { string: 'hello this is a string', number: 1 } ]

// # MAPPING
// simple map list
const mapping1= json_data["list_of_objects"].map( item  => (item["number"]) ) // [ 1, 2, 3 ]
// same thing 
const mapping2= json_data["list_of_objects"].map((item) => {
    return item["number"]
})                                                                            // [ 1, 2, 3 ]
// conversion
const mapping3= json_data["list_of_objects"].map((item) => {
    return {
        "number": item["number"]
    }
})                                                                            // [ { number: 1 }, { number: 2 }, { number: 3 } ]

// # SORTING
// sorting changes the orginal value, even if the object is a const
const sort1    = json_data["list_of_objects"].sort( (a,b) => {
    if      (a["number"] > b["number"]){
        return 1
    }
    else if (a["number"] > b["number"]){
        return -1
    }
    else if (a["number"] === b["number"]){
        return 0
    }
    else{
        return 0
    }
}) // [ { string: 'hello this is another string', number: 3 }, { string: 'hi this is also a string', number: 2 }, { string: 'hello this is a string', number: 1 }]
const sort2    = json_data["list_of_objects"].sort( (a,b) => {
    if      (a["number"] > b["number"]){
        return -1
    }
    else if (a["number"] > b["number"]){
        return 1
    }
    else if (a["number"] === b["number"]){
        return 0
    }
    else{
        return 0
    }
}) // [{ string: 'hello this is another string', number: 3 }, { string: 'hi this is also a string', number: 2 }, { string: 'hello this is a string', number: 1 }]

// # Write json to a file
fs.writeFileSync(outfile, JSON.stringify(json_data, null, 2))

// CATCH MISSING DATA
let missing_data1 = []                                         // []
try{
    json_data.list_of_objects.forEach(item=>{
        const item_feild = item.missing_feild.item 
        missing_data1.push(item_feild)
    })
}
catch(err){
    // handle here
}                                                              
// IGNORE MISSING DATA
let missing_data2 = []                                        // [ undefined, 2, 1 ]
json_data.list_of_objects.forEach(item=>{
    const item_feild = item?.missing_feild?.item
    missing_data2.push(item_feild)
})                                                             
// same thing
let missing_data3 = []                                        // [ undefined, 2, 1 ]
json_data.list_of_objects.forEach(item=>{
    const item_feild = item?.["missing_feild"]?.["item"]
    missing_data3.push(item_feild)
})


// console.log("Buffer:", buffer)
// console.log("# THE DATA ")
console.log(json_data                          )
// console.log(                                   )
// console.log("# FILTERNING"                     )
// console.log("\tfiltered_list1:", filtered_list1)
// console.log("\tfiltered_list2:", filtered_list2)
// console.log("# MAPPING"                        )
// console.log("\tmapping1:",       mapping1      )
// console.log("\tmapping2:",       mapping2      )
// console.log("\tmapping3:",       mapping3      )
// console.log("# SORTING"                        )
// console.log("\tsort1:",          sort1         )
// console.log("\tsort2:",          sort2         )
// console.log(                                   )
// console.log("# Whats changed?")
// console.log(json_data                          )
// console.log(                                   )
// console.log("# Missing data")
// console.log("\tmissing_data1:",  missing_data1 )
// console.log("\tmissing_data2:",  missing_data2 )
// console.log("\tmissing_data3:",  missing_data3 )







