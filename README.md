# ms-fluentui-metadata-sorter

## About
https://github.com/microsoft/fluentui-emoji has each emojis metadata.json file listed in it's own directory, alongside assets for the emoji. This script automates fetching both the metadata.json file (and placing it into a JSON array with all the other metadata) and fetching the 3D version of each emoji.

## How to start.
Copy ``assets`` from Microsoft/fluientui-emoji into the project directory.
Run ``node .`` and the script will compile all the data.

## Example of using the metadata in reactjs

```
let contentItems = emojis.map((data) => {
    if (!data.mappedToEmoticons) { return; }
    const cldr = data.mappedToEmoticons.toString().toLowerCase().replaceAll(" ", "_").replaceAll(/[^a-zA-Z0-9_-]/g, '');;
    return (
        <img onClick={() => {addEmoteToChat(cldr)}} className='hover' style={{width:35,padding:2,paddingTop:4,paddingBottom:4,borderRadius:5}} src={`/emojis/${cldr}_3d.png`}/>
    )
});
```

*yes I know, slightly messy code, but I'm very tired*.


## License
https://github.com/Motionfans/ms-fluentui-metadata-sorter/blob/main/license.txt
