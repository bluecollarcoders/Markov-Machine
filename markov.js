//  Textual markov chain generator

class MarkovMachine {
    // bulid markov machine; read in text.

    constructor(text) {
        let words = text.split(/[ \r\n]+/);
        this.words = words,filter(c => c !== "");
        this.makeChains();
    }

    // set markov chains: For text of "the cat in the hat", chains will be {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]}

    makeChains() {
        // TODO
    }

    // 
    makeText(numWords = 100) {
        // TODO
    }
}