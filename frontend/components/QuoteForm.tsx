"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { submitInquiry } from "@/lib/api";

const initialState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  product_interest: "JS-R7 Servo Motor",
  quantity: "",
  application: "",
  message: "",
};

export function QuoteForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    try {
      await submitInquiry(form);
      setForm(initialState);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  function updateField(name: string, value: string) {
    setForm((current) => ({ ...current, [name]: value }));
  }

  return (
    <form className="quote-form" onSubmit={onSubmit}>
      <div className="form-grid">
        <label>
          Name
          <input required value={form.name} onChange={(event) => updateField("name", event.target.value)} />
        </label>
        <label>
          Company
          <input value={form.company} onChange={(event) => updateField("company", event.target.value)} />
        </label>
        <label>
          Email
          <input
            required
            type="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
          />
        </label>
        <label>
          Phone
          <input value={form.phone} onChange={(event) => updateField("phone", event.target.value)} />
        </label>
        <label>
          Product Interest
          <select
            value={form.product_interest}
            onChange={(event) => updateField("product_interest", event.target.value)}
          >
            <option>JS-R7 Servo Motor</option>
            <option>Motor Driver</option>
            <option>Software/Firmware</option>
            <option>Custom Development</option>
            <option>Other</option>
          </select>
        </label>
        <label>
          Quantity
          <input value={form.quantity} onChange={(event) => updateField("quantity", event.target.value)} />
        </label>
      </div>
      <label>
        Application
        <input value={form.application} onChange={(event) => updateField("application", event.target.value)} />
      </label>
      <label>
        Message
        <textarea required value={form.message} onChange={(event) => updateField("message", event.target.value)} />
      </label>
      <button className="button primary" type="submit" disabled={status === "loading"}>
        <Send size={18} />
        {status === "loading" ? "Sending..." : "Submit Quote Request"}
      </button>
      {status === "success" && <p className="form-success">문의가 접수되었습니다. 담당자가 확인 후 연락드리겠습니다.</p>}
      {status === "error" && <p className="form-error">전송 중 문제가 발생했습니다. 잠시 후 다시 시도해 주세요.</p>}
    </form>
  );
}
