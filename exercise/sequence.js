/* Buat Logical Hasil Seperti Data Di Bawah
	1 1 2 3 5 8 13 21 ........
*/

const generateSequence = (maxSequence) => { 
    const sequence = [1, 1] // default array value

    for(var i = 2; i < maxSequence; i++) { 
        var sequenceRasio = sequence[i - 1] + sequence[i - 2] // untuk menentukan ratio atau beda pada pola
        sequence.push(sequenceRasio)
    }

    return sequence
}

console.log(generateSequence(10))