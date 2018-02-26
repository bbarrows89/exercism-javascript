var DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function(dna) {
  var rnaString = [];
  if (dna.length === 0) {
    throw Error('Invalid input');
  }
  for (var i = 0; i < dna.length; i++) {
    if (dna[i] == 'G') { //check each character in DNA string)
      rnaString.push('C');
    } else if (dna[i] == 'C'){
        rnaString.push('G');
    } else if (dna[i] == 'T'){
      rnaString.push('A');
    } else if (dna[i] == 'A'){
      rnaString.push('U');
    } else throw Error('Invalid input')
  } // end for loop
  return rnaString.join(''); 
}

module.exports = DnaTranscriber;