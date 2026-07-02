import type {
  InputHTMLAttributes,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
  ReactNode,
} from "react";
import { cn } from "@/lib/cn";

const fieldBase =
  "w-full rounded-lg border bg-white px-4 py-2.5 text-base text-ink placeholder:text-ink-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-300";

function fieldClasses(hasError?: boolean) {
  return cn(
    fieldBase,
    hasError
      ? "border-red-400 focus-visible:ring-red-300"
      : "border-brand-200 focus:border-accent-400",
  );
}

interface LabelWrapProps {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
}

function LabelWrap({ id, label, required, error, children }: LabelWrapProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-brand-900">
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

interface TextInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  error?: string;
}

export function TextInput({ id, label, error, required, ...props }: TextInputProps) {
  return (
    <LabelWrap id={id} label={label} required={required} error={error}>
      <input
        id={id}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={fieldClasses(Boolean(error))}
        {...props}
      />
    </LabelWrap>
  );
}

interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  label: string;
  error?: string;
}

export function TextArea({ id, label, error, required, ...props }: TextAreaProps) {
  return (
    <LabelWrap id={id} label={label} required={required} error={error}>
      <textarea
        id={id}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(fieldClasses(Boolean(error)), "min-h-[120px] resize-y")}
        {...props}
      />
    </LabelWrap>
  );
}

interface SelectFieldProps
  extends SelectHTMLAttributes<HTMLSelectElement> {
  id: string;
  label: string;
  error?: string;
  options: string[];
}

export function SelectField({
  id,
  label,
  error,
  required,
  options,
  ...props
}: SelectFieldProps) {
  return (
    <LabelWrap id={id} label={label} required={required} error={error}>
      <select
        id={id}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={fieldClasses(Boolean(error))}
        {...props}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </LabelWrap>
  );
}
