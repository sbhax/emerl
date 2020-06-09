<p align="center">

<img src="doc/icon.png" height=200px>

</p>

# Emerl

*By* ***SBHAX***

#### A set of tools for working with the Sonic Battle ROM (US) and similar, coded with Deno and JS

<p align="center">
    <a href="https://discord.gg/KGWgnAw" alt="Discord">
        <img src="https://img.shields.io/discord/272603653389549578?color=%23222222&label=SBHAX%20Discord&logo=discord&logoColor=%23ffffff&style=for-the-badge"></a>
    <a href="https://github.com/sbhax/emerl/issues" alt="Github Issues">
        <img src="https://img.shields.io/github/issues-raw/sbhax/emerl?color=%23222222&logo=github&style=for-the-badge"></a>
    <a href="https://github.com/sbhax/emerl/pulls">
        <img src="https://img.shields.io/github/issues-pr-raw/sbhax/emerl?color=%23222222&label=OPEN%20PULL%20REQUESTS&logo=github&style=for-the-badge"></a>
</p>

## Summary

Emerl is designed to provide basic and efficient command line tools for dumping and working with data directly from the Sonic Battle ROM file. It provides some possibly universal classic ROM tools too.

## Current tools

- **JSON Dump/Patch** - Work in progress tool to provide a way to 'map' out values from ROMs according to a JSON and then to dump them into another JSON (dump.json). The original part of the project but it's quickly showing it'll not be flexible enough for our needs. Currently functions for dumping.

## Current projects

*In order of priority*

> Core priority

- **Anim Dumping and Patching** - Tool to dump the frame lists from the ROM and to inject framelists elsewhere in it.

- **Stat Dumping and Patching** - Dump character stats from the ROM.

- **Map Dumping and Patching** - Dump map data from the ROM.

> Interesting idea but hard to execute

- **CSS extender** 

> Low priority: Covered by SBHS, SBRX or generic tools.

- **Sheet Dumping** - Dump sheets a la SBHS.

- **LZ Dump** - Dump LZ compressed graphics.

- **Tile Dump** - Dump arranged tiles.

## Resources

https://github.com/phase/sbhs/issues/7