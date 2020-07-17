/* 

    Library to (or attempt to) rip GBA palettes and convert them

    According to CoronaC, the format of GBA colours is xrrrrrgggggbbbbb (1xUnused, 5xR, 5xB and 5xG bits),

    This means that each number has 32 values, ranging from 00000 (0) to 11111 (31).

*/

function pad(string, length, padder){
    return padder.repeat(length - string.length) + string
}

// isSonic causes palettes to be read in the format used by Sonic Battle, Sonic Pinball Party and the Sonic Advance trilogy.
function toPNG(bytes, isSonic){
    if (isSonic){
        // rn do nothing
    }

    // get two bytes we need
    let colour = bytes[0] + bytes[1]
    // make binary by converting to a hex number, then converting to binary as a string, then pad it
    colour = pad(parseInt(colour, 16).toString(2), 16, "0")

    // now use the binary to get colour values
    colour = {
         r: parseInt(colour.substr(1, 5), 2),
         g: parseInt(colour.substr(6, 5), 2),
        b: parseInt(colour.substr(11, 5), 2)
    }

    console.log(colour.r * 8 + ", " + colour.g * 8 + ", " + colour.b * 8)
}

toPNG(['E0', 'FF', 'FF', 'FF', 'D6', 'DA', 'CE', '39', '84', '10', '60', 'FE', '00', '75', '80', '54', '00', '34', 'FF', 'CF', 'BF', 'AA', '53', '09', '9F', '10', '14', '00', '7F', '83', '60', '82'], true)