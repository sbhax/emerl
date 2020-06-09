# emerlPatcher

## Defining a map

Maps are needed to generate and read dump files. 

They consist of types (which map properties of objects to offsets) and values

Below is an example:

```json
{
    "types":{
        "move":[
            {
                "name":"damage",
                "type":"uint8",
                "offset":"00"
            },
            {
                "name":"attack_type",
                "type":"uint8",
                "offset":"04"
            },
            {
                "name":"inherit_attack_type",
                "type":"bool",
                "offset":"06",
                "boolReturns":[
                    "25",
                    "00"
                ]
            }
        ]
    },
    "values":[
        {
            "name":"sonic.stat.acceleration",
            "type":"uint8",
            "offset":"00052FD0"
        },
        {
            "name":"sonic.move.combo1",
            "type":"move",
            "offset":"00053370"
        }
    ]
}
```

## Built-in types

- ``uint8`` - Single byte integer, caps at 255.
- ``uint16`` - Double byte integer, caps at 65,535.
- ``uint32`` - 4 byte integer, caps at 4,294,967,295.
- ``bool`` - True or false, picks either ``boolReturns`` index 0 if false or index 1 if true.
