import { useState, type FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { TextInput, TextArea, SelectField } from "@/components/common/FormField";
import { ConsentCheckbox } from "@/components/common/ConsentCheckbox";
import { Button } from "@/components/common/Button";
import { maskPhone } from "@/lib/masks";
import { isNotEmpty, isValidEmail, isValidPhone } from "@/lib/validation";
import { createWhatsAppUrl } from "@/lib/whatsapp";

const subjects = [
  "Seguro Condomínio",
  "Seguros",
  "Plano de saúde",
  "Rastreamento veicular",
  "Benefícios",
  "Outro",
];

interface ContactFormState {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
  consent: boolean;
}

const initialState: ContactFormState = {
  name: "",
  phone: "",
  email: "",
  subject: subjects[0],
  message: "",
  consent: false,
};

type Errors = Partial<Record<keyof ContactFormState, string>>;

export function ContactForm() {
  const [form, setForm] = useState<ContactFormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof ContactFormState>(
    key: K,
    value: ContactFormState[K],
  ) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function validate(): Errors {
    const next: Errors = {};
    if (!isNotEmpty(form.name)) next.name = "Informe seu nome.";
    if (!isValidPhone(form.phone))
      next.phone = "Informe um telefone válido com DDD.";
    if (!isValidEmail(form.email)) next.email = "Informe um e-mail válido.";
    if (!isNotEmpty(form.message))
      next.message = "Escreva uma mensagem.";
    if (!form.consent)
      next.consent = "É necessário autorizar o uso dos dados para prosseguir.";
    return next;
  }

  function buildMessage(): string {
    return [
      "Olá, gostaria de falar com a Pulso.",
      "",
      `Nome: ${form.name}`,
      `Telefone: ${form.phone}`,
      `E-mail: ${form.email}`,
      `Assunto: ${form.subject}`,
      `Mensagem: ${form.message}`,
    ].join("\n");
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validation = validate();
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;
    const url = createWhatsAppUrl(buildMessage());
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-brand-100 bg-white p-8 text-center shadow-card">
        <CheckCircle2 className="mx-auto h-12 w-12 text-whatsapp" aria-hidden="true" />
        <h3 className="mt-4 text-xl font-bold text-brand-900">
          Mensagem preparada!
        </h3>
        <p className="mt-2 text-ink-soft">
          Abrimos o WhatsApp com os dados preenchidos. Caso a janela não tenha
          aberto, verifique o bloqueador de pop-ups do seu navegador.
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
            Enviar nova mensagem
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
            id="contact-name"
            label="Nome"
            required
            autoComplete="name"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            error={errors.name}
          />
        </div>
        <TextInput
          id="contact-phone"
          label="Telefone"
          required
          inputMode="tel"
          autoComplete="tel"
          placeholder="(31) 99999-9999"
          value={form.phone}
          onChange={(e) => update("phone", maskPhone(e.target.value))}
          error={errors.phone}
        />
        <TextInput
          id="contact-email"
          label="E-mail"
          type="email"
          required
          autoComplete="email"
          placeholder="voce@email.com"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          error={errors.email}
        />
        <div className="sm:col-span-2">
          <SelectField
            id="contact-subject"
            label="Assunto"
            options={subjects}
            value={form.subject}
            onChange={(e) => update("subject", e.target.value)}
          />
        </div>
        <div className="sm:col-span-2">
          <TextArea
            id="contact-message"
            label="Mensagem"
            required
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
            error={errors.message}
          />
        </div>
      </div>

      <div className="mt-5">
        <ConsentCheckbox
          id="contact-consent"
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
