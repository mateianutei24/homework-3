function generateArray(characters : string){
    const regex = /\{([^}]+)\}/;
    const match = regex.exec(characters);
    if (match && match[1]) {
        const elements = match[1].split(',');
        return elements.map((element) => element.trim());
    }
    return [];
}


export default generateArray;