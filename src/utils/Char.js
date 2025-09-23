/**
 * Little class for obtaining the necesary char
 */
export class Char {
    get upperCase() {
        return Array.from({ length: 90 - 65 + 1 }, (_, i) => String.fromCharCode(65 + i) )
    }

    get lowerCase() {
        return Array.from({ length: 122 - 97 + 1 }, (_, i) => String.fromCharCode(97 + i) )
    }

    get symbol() {
        let symbol = Array.from({ length: 126 - 33 + 1 }, (_, i) => String.fromCharCode(33 + i))

        //Remove the number
        symbol.splice(15, 10)

        //Remove upper char
        symbol.splice(22, 26)

        //Remove lower char
        symbol.splice(28, 26)
        return symbol
    }

    get number() {
        return Array.from({ length: 57 - 48 + 1 }, (_, i) => String.fromCharCode(48 + i) )
    }
}
