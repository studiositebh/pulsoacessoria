import { onlyDigits } from "@/lib/masks";

export function isNotEmpty(value: string): boolean {
  return value.trim().length > 0;
}

export function isValidEmail(value: string): boolean {
  // Validação simples e suficiente para o frontend.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

/** Telefone brasileiro válido: 10 (fixo) ou 11 (celular) dígitos. */
export function isValidPhone(value: string): boolean {
  const digits = onlyDigits(value);
  return digits.length === 10 || digits.length === 11;
}

/**
 * Validação básica de CNPJ (14 dígitos + dígitos verificadores).
 * Usada apenas quando o campo é preenchido (CNPJ é opcional no formulário).
 */
export function isValidCNPJ(value: string): boolean {
  const cnpj = onlyDigits(value);
  if (cnpj.length !== 14) return false;
  if (/^(\d)\1{13}$/.test(cnpj)) return false;

  const calcCheckDigit = (base: string): number => {
    let factor = base.length - 7;
    let sum = 0;
    for (let i = 0; i < base.length; i++) {
      sum += Number(base[i]) * factor;
      factor = factor === 2 ? 9 : factor - 1;
    }
    const result = sum % 11;
    return result < 2 ? 0 : 11 - result;
  };

  const firstDigit = calcCheckDigit(cnpj.slice(0, 12));
  if (firstDigit !== Number(cnpj[12])) return false;

  const secondDigit = calcCheckDigit(cnpj.slice(0, 13));
  return secondDigit === Number(cnpj[13]);
}
