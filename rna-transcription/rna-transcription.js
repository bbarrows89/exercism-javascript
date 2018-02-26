var DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function(dna) {
  var rnaString = [];
  for (var i = 0; i < dna.length; i++) {
    switch(dna[i]) { //check each character in DNA string)
      case 'G':
        rnaString.push('C');
        continue;
      case 'C':
        rnaString.push('G');
        continue;
      case 'T':
        rnaString.push('A');
        continue;
      case 'A':
        rnaString.push('U');
    } // end switch
  } // end for loop
  return rnaString.join(''); 
}

module.exports = DnaTranscriber;