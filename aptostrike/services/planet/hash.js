const getHashes = (planetHash) => {
    //---- do not edit the following code (you can indent as you wish)
    const alphabet = "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ";
    // "oo" + Array(49).fill(0).map(_ => alphabet[(Math.random() * alphabet.length) | 0]).join('')
    const b58dec = (str) => {
        return [...str].reduce((p, c) => (p * alphabet.length + alphabet.indexOf(c)) | 0, 0)
    };

    const getRegEx = () => {
        return new RegExp(".{" + ((hashTrunc.length / 4) | 0) + "}", 'g');
    };

    const hashTrunc = planetHash.slice(2);
    const regex = getRegEx();
    const hashes = hashTrunc.match(regex).map(h => b58dec(h));
    //---- /do not edit the following code

    return hashes;
};

const sfc32 = (a, b, c, d) => {
    return () => {
        a |= 0; b |= 0; c |= 0; d |= 0
        var t = (a + b | 0) + d | 0
        d = d + 1 | 0
        a = b ^ b >>> 9
        b = c + (c << 3) | 0
        c = c << 21 | c >>> 11
        c = c + t | 0
        return (t >>> 0) / 4294967296
    }
};

export const getRandGenForHash = (planetHash) => {
    const hashes = getHashes(planetHash);
    return sfc32(...hashes);
};
