export function cleanInput(input: string): string[] {
    let words: string[] = [];
    input.toLowerCase().split(' ').forEach((word) => {
        word = word.trim();
        if (word) words.push(word);
    });
    return words;
}
