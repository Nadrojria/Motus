export function wordLength(wordPlayer, rightWord) {
    if (wordPlayer.length === rightWord.length) {
        return true;
    } else {
        return false;
    }
}