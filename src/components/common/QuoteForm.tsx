import { useState, type FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { TextInput, TextArea } from "@/components/common/FormField";
import { ConsentCheckbox } from "@/components/common/ConsentCheckbox";
import { Button } from "@/components/common/Button";
import { maskPhone, maskCNPJ } from "@/lib/masks";
import {
  isNotEmpty,
  isValidEmail,
  isValidPhone,
  isValidCNPJ,
} from "@/lib/validation";
import { createWhatsAppUrl } from "@/lib/whatsapp";

interface QuoteFormState {
  name: string;
  phone: string;
  email: string;
  condoName: string;
  cnpj: string;
  city: string;
  units: string;
  message: string;
  consent: boolean;
}

const initialState: QuoteFormState = {
  name: "",
  phone: "",
  email: "",
  condoName: "",
  cnpj: "",
  city: "",
  units: "",
  message: "",
  consent: false,
};

type Errors = Partial<Record<keyof QuoteFormState, string>>;

export function QuoteForm() {
  const [form, setForm] = useState<QuoteFormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof QuoteFormState>(key: K, value: QuoteFormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function validate(): Errors {
    const next: Errors = {};
    if (!isNotEmpty(form.name)) next.name = "Informe seu nome completo.";
    if (!isValidPhone(form.phone))
      next.phone = "Informe um telefone válido com DDD.";
    if (!isValidEmail(form.email)) next.email = "Informe um e-mail válido.";
    if (!isNotEmpty(form.condoName))
      next.condoName = "Informe o nome do condomínio.";
    // CNPJ é opcional, mas se preenchido deve ser válido.
    if (isNotEmpty(form.cnpj) && !isValidCNPJ(form.cnpj))
      next.cnpj = "CNPJ inválido.";
    if (!isNotEmpty(form.city)) next.city = "Informe a cidade.";
    if (!form.consent)
      next.consent = "É necessário autorizar o uso dos dados para prosseguir.";
    return next;
  }

  function buildMessage(): string {
    return [
      "Olá, gostaria de solicitar uma análise de Seguro Condomínio.",
      "",
      `Nome: ${form.name}`,
      `Telefone: ${form.phone}`,
      `E-mail: ${form.email}`,
      `Condomínio: ${form.condoName}`,
      `CNPJ: ${form.cnpj || "Não informado"}`,
      `Cidade: ${form.city}`,
      `Quantidade de unidades: ${form.units || "Não informado"}`,
      `Mensagem: ${form.message || "Não informado"}`,
    ].join("\n");
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validation = validate();
    setErrors(validation);
    if (Object.keys(validation).length > 0) {
      return;
    }
    const url = createWhatsAppUrl(buildMessage());
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-brand-100 bg-white p-8 text-center shadow-card">
        <CheckCircle2
          className="mx-auto h-12 w-12 text-whatsapp"
          aria-hidden="true"
        />
        <h3 className="mt-4 text-xl font-bold text-brand-900">
          Solicitação preparada!
        </h3>
        <p className="mt-2 text-ink-soft">
          Abrimos o WhatsApp com os dados preenchidos. Caso a janela não tenha
          aberto, verifique o bloqueador de pop-ups do seu navegador ou fale
          diretamente com um consultor.
        </p>
        <div className="mt-6">
          <Button
            as="button"
            type="button"
            variant="outline"
            onClick={() => {
              setSubmitted(false);
              setForm(initialState);
            }}
          >
            Preencher novamente
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="rounded-2xl border border-brand-100 bg-white p-6 shadow-card sm:p-8"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <TextInput
            id="quote-name"
            label="Nome completo"
            required
            autoComplete="name"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            error={errors.name}
          />
        </div>
        <TextInput
          id="quote-phone"
          label="Telefone/WhatsApp"
          required
          inputMode="tel"
          autoComplete="tel"
          placeholder="(31) 99999-9999"
          value={form.phone}
          onChange={(e) => update("phone", maskPhone(e.target.value))}
          error={errors.phone}
        />
        <TextInput
          id="quote-email"
          label="E-mail"
          type="email"
          required
          autoComplete="email"
          placeholder="voce@email.com"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          error={errors.email}
        />
        <TextInput
          id="quote-condo"
          label="Nome do condomínio"
          required
          value={form.condoName}
          onChange={(e) => update("condoName", e.target.value)}
          error={errors.condoName}
        />
        <TextInput
          id="quote-cnpj"
          label="CNPJ do condomínio"
          inputMode="numeric"
          placeholder="00.000.000/0000-00"
          value={form.cnpj}
          onChange={(e) => update("cnpj", maskCNPJ(e.target.value))}
          error={errors.cnpj}
        />
        <TextInput
          id="quote-city"
          label="Cidade"
          required
          value={form.city}
          onChange={(e) => update("city", e.target.value)}
          error={errors.city}
        />
        <TextInput
          id="quote-units"
          label="Quantidade aproximada de unidades"
          inputMode="numeric"
          placeholder="Ex.: 48"
          value={form.units}
          onChange={(e) =>
            update("units", e.target.value.replace(/\D/g, "").slice(0, 6))
          }
        />
        <div className="sm:col-span-2">
          <TextArea
            id="quote-message"
            label="Mensagem"
            placeholder="Conte um pouco sobre o condomínio e o que você precisa."
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
          />
        </div>
      </div>

      <div className="mt-5">
        <ConsentCheckbox
          id="quote-consent"
          checked={form.consent}
          onChange={(checked) => update("consent", checked)}
          error={errors.consent}
        />
      </div>

      <div className="mt-6">
        <Button as="button" type="submit" variant="whatsapp" size="lg" fullWidth>
          <Send className="h-5 w-5" aria-hidden="true" />
          Enviar pelo WhatsApp
        </Button>
        <p className="mt-3 text-center text-xs text-ink-muted">
          Ao enviar, uma mensagem organizada será aberta no WhatsApp com os
          dados preenchidos. Nenhuma informação é armazenada pelo site.
        </p>
      </div>
    </form>
  );
}
