// Emerl dumper

var config = {}
var patch = false
var file = {}

function endSwitch(string, options){
    for (let i = 0; i < options.length; i++) {
        if (string.endsWith(options[i])) {
            return options[i]
        }
    }
};

function getJSValue(file, value, types){
    switch (value.type){
        case "uint8":
            return file[parseInt(value.offset, 16)]

        case "bool":
            if (!value.boolReturns.includes(file[parseInt(value.offset, 16)].toString(16))){
                // If not included
                return undefined
            } else if (file[parseInt(value.offset, 16)] == parseInt(value.boolReturns[1], 16)){
                // If same as true state
                return true
            } else {
                return false
            }

        default:
            let toReturn = {}
            for (const key in types[value.type]){
                let currentValue = types[value.type][key]
                currentValue.offset = parseInt(value.offset, 16) + parseInt(currentValue.offset, 16)
                currentValue.offset = currentValue.offset.toString(16)
                toReturn[key] = getJSValue(file, currentValue, config.types)
            }
            return toReturn

    }
}

for (const filename of Deno.args){
    let data

    switch (endSwitch(filename, [".map.json", ".dump.json"])){
        case ".map.json":
            data = await Deno.readTextFile(filename)
            config = JSON.parse(data)
            console.log("Loaded " + filename + " as data map.")
            break;

        case ".dump.json":
            data = await Deno.readTextFile(filename)
            patch = JSON.parse(data)
            console.log("Loaded " + filename + " as patch.")
            break;

        default:
            file = await Deno.readFile(filename)
            console.log("Loaded " + filename + " as the file.")
        
    }
}

// Dumping flow
if (!patch){
    var dump = {}
    for (const key in config.values){
        let value = config.values[key]
        dump[key] = getJSValue(file, value, config.types)
        console.log(key + " - " + dump[key])
    }
    const encoder = new TextEncoder()
    const data = encoder.encode(JSON.stringify(dump))
    await Deno.writeFile("dump.json", data)
}