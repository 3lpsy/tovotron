const cap = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1)
}

const folder2FileName = (folder) => {
    let files = folder.split("-");
    files = files.map((file) => {
        return cap(file)
    })
    return files.join("");
}


export {folder2FileName, cap}
