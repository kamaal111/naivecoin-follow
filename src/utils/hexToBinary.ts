const lookupTable: Record<string, string> = {
  '0': '0000',
  '1': '0001',
  '2': '0010',
  '3': '0011',
  '4': '0100',
  '5': '0101',
  '6': '0110',
  '7': '0111',
  '8': '1000',
  '9': '1001',
  a: '1010',
  b: '1011',
  c: '1100',
  d: '1101',
  e: '1110',
  f: '1111',
};

export default function hexToBinary(hex: string) {
  let binary = '';

  for (let i = 0; i < hex.length; i += 1) {
    const character = hex[i];
    const characterBinary = lookupTable[character];

    if (characterBinary == undefined) {
      return null;
    }

    binary += lookupTable[character];
  }

  return binary;
}