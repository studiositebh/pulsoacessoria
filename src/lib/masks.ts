/** Remove tudo que não for dígito. */
export function onlyDigits(value: string): string {
  return value.replace(/\D/g, "");
}

/**
 * Máscara de telefone brasileiro.
 * Suporta fixo (10 dígitos) e celular (11 dígitos).
 * Ex.: (31) 99999-9999
 */
export function maskPhone(value: string): string {
  const digits = onlyDigits(value).slice(0, 11);

  if (digits.length <= 2) {
    return digits.replace(/^(\d{0,2})/, "($1");
  }
  if (digits.length <= 6) {
    return digits.replace(/^(\d{2})(\d{0,4})/, "($1) $2");
  }
  if (digits.length <= 10) {
    return digits.replace(/^(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
  }
  return digits.replace(/^(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
}

/**
 * Máscara de CNPJ.
 * Ex.: 00.000.000/0000-00
 */
export function maskCNPJ(value: string): string {
  const digits = onlyDigits(value).slice(0, 14);

  return digits
    .replace(/^(\d{2})(\d)/, "$1.$2")
    .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d)/, ".$1/$2")
    .replace(/(\d{4})(\d)/, "$1-$2");
}
