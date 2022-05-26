/**
 * @param uniRandom is a simple javascript libary for generating random string
 * @param usage uniRandom() returns a random string 
 * @param options uniRandom({ length: number, charset: String || null, captitalization: lowercase || uppercase || null  }) returns a random string using object values
*/

const uniRandom = (options)=> {
    const $ = {
        length: 15,
        charset: null,
        capitalization: null,
        ...(typeof options === "object" ? options : {})
    }
    if(Number(options)) $.length = options
    let random = ""
    const numeric = "0123456789"
    const hex = "0123456789abcdef"
    const octal = "01234567"
    const binary = "01"
    const lowerCase = "abcdefghijklmnopqrstuvwxyz"
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    
    let chars;
    switch($.charset){
            case "alphanumeric":
            chars = numeric + lowerCase + upperCase
            break
            case "alphabetic":
            chars = lowerCase + upperCase
            break
            case "numeric":
            chars = numeric
            break
            case "hex":
            chars = hex
            break
            case "octal":
            chars = octal
            break
            case "binary":
            chars = binary
            break
            default:
            chars = $.charset ? $.charset : numeric + lowerCase + upperCase
            break
    }
    let i = 0
    while(i < $.length){
        let randomIndex = Math.floor(Math.random() * chars.length)
        random += chars[randomIndex]
        i++
    }

    if($.capitalization === "lowercase") return random.toLowerCase()
    if($.capitalization === "uppercase") return random.toUpperCase()
    return random
}

export default uniRandom