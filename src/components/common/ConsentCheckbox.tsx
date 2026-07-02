import { Link } from "react-router-dom";
import { cn } from "@/lib/cn";

interface ConsentCheckboxProps {
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  error?: string;
}

/** Checkbox de consentimento LGPD (obrigatório, nunca pré-marcado). */
export function ConsentCheckbox({ id, checked, onChange, error }: ConsentCheckboxProps) {
  return (
    <div>
      <label htmlFor={id} className="flex items-start gap-3 text-sm text-ink-soft">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
          className={cn(
            "mt-0.5 h-5 w-5 shrink-0 rounded border-brand-300 text-brand-700 focus-visible:ring-2 focus-visible:ring-accent-300",
            error && "border-red-400",
          )}
        />
        <span>
          Declaro que li a{" "}
          <Link
            to="/politica-de-privacidade"
            className="font-medium text-accent-700 underline underline-offset-2 hover:text-accent-800"
          >
            Política de Privacidade
          </Link>{" "}
          e autorizo o uso dos meus dados para retorno do contato solicitado.
        </span>
      </label>
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
