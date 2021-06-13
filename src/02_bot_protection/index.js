// One gaming company found out that they are losing money because some players are using scripts that are playing the
// game for players while they are sleeping.
// 
// From the access logs on their servers, developers can see which commands each player is sending. Analysing them, they
// discovered those scripts are using the same sequence of commands all the time.
// 
// Your task is to use cleaned up access logs to discover bots. Cleaned up access log of one player would look like an
// space separated sequence of commands sent by the player. Detect if 3 sequential commands are repeated at least
// 2 times from the cleaned up access log.
// 
// For example, we have following access log:
// 
// left right fire jump fire back forward forward jump fire back left left right
// 
// we can see that the sequence "jump fire back" is repeated two times.

exports.botProtection = function(data) {

    let sequences = [],
        traversed = [];

    for (let i = 0; i < data.length; i++) {

        let sequence = [];

        for (let j = 0; j < 3; j++) {
            if (i + j >= data.length) break;
            sequence.push(data[i + j]);
        }

        (sequence.length === 3) && sequences.push(sequence.join(' '));

    }

    for (let i in sequences) {

        if (traversed.includes(sequences[i]))
            return true;

        traversed.push(sequences[i]);

    }

    return false;

};