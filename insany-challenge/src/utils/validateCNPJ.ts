export const validateCNPJ = (cnpj: string): boolean => {
  const cleanCNPJ = cnpj.replace(/\D/g, ''); 

  if (cleanCNPJ.length !== 14) return false;

  const validation1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  const validation2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

  let calc1 = 0;
  let calc2 = 0;
  const t = cleanCNPJ.split('');

  for (let i = 0; i < 12; i++) calc1 += +t[i] * validation1[i];
  let remainder1 = calc1 % 11;
  remainder1 = remainder1 < 2 ? 0 : 11 - remainder1;

  for (let i = 0; i < 13; i++) calc2 += +t[i] * validation2[i];
  let remainder2 = calc2 % 11;
  remainder2 = remainder2 < 2 ? 0 : 11 - remainder2;

  return remainder1 === +t[12] && remainder2 === +t[13];
};
