# JSONDump

JSONDump is a tool for dumping data quickly from roms. The idea was to have patching too, but this project has been put on the back burner to make way for more flexible, Battle specific tools. As it stands it's still (minorly) useful for quick auditting.

## Usage

``deno --allow-read --allow-write JSONDump.js <mapfile>.map.json <filetodump>``

- Mapping files must have a name which ends with map.json, as this indicates a mapping file in the arguments.

- If multiple files are provided, they'll just be loaded over eachother.

- This outputs at dump.json in your working directory.

## Mapping files

Mapping files are made out of types and values. Types define an offset and a datatype to dump and where to write it while types define a set of data that appears frequently and can be grouped. For examples, check battleUS.map.json.

## Mapping types

- uint8 - Single byte integer

- bool - True if the byte is the same as the first item of boolReturns, false if second, undefined if neither.

- boolLoose - True if the byte is the same as the first item of boolReturns, false if not that.