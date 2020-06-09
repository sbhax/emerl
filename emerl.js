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
        switch (value.type){
            case "uint8":
                dump[key] = file[parseInt(value.offset, 16)]
                break;

        }

        console.log(key + " - " + dump[key])
    }
}