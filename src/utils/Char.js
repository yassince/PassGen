/**
 * Little class for obtaining the necesary char
 */
class Char {
    get upperCase() {
        return Array.from({ length: 90 - 65 + 1 }, (_, i) => String.fromCharCode(65 + i))
    }

    get lowerCase() {
        return Array.from({ length: 122 - 97 + 1 }, (_, i) => String.fromCharCode(97 + i))
    }

    get symbol() {
        /* The special characters that are commonly used in passwords */
        let symbol = ['! @ # $ % ^ & * ( ) - _ + = , . ?']
        symbol = symbol.join("").split(" ")
        return symbol
    }

    get number() {
        return Array.from({ length: 57 - 48 + 1 }, (_, i) => String.fromCharCode(48 + i) )
    }
}

export default Char;