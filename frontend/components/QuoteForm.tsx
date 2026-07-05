"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NativeSelect } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
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
          <Input required value={form.name} onChange={(event) => updateField("name", event.target.value)} />
        </label>
        <label>
          Company
          <Input value={form.company} onChange={(event) => updateField("company", event.target.value)} />
        </label>
        <label>
          Email
          <Input
            required
            type="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
          />
        </label>
        <label>
          Phone
          <Input value={form.phone} onChange={(event) => updateField("phone", event.target.value)} />
        </label>
        <label>
          Product Interest
          <NativeSelect
            value={form.product_interest}
            onChange={(event) => updateField("product_interest", event.target.value)}
          >
            <option>JS-R7 Servo Motor</option>
            <option>Motor Driver</option>
            <option>Software/Firmware</option>
            <option>Custom Development</option>
            <option>Other</option>
          </NativeSelect>
        </label>
        <label>
          Quantity
          <Input value={form.quantity} onChange={(event) => updateField("quantity", event.target.value)} />
        </label>
      </div>
      <label>
        Application
        <Input value={form.application} onChange={(event) => updateField("application", event.target.value)} />
      </label>
      <label>
        Message
        <Textarea required value={form.message} onChange={(event) => updateField("message", event.target.value)} />
      </label>
      <Button type="submit" disabled={status === "loading"}>
        <Send size={18} />
        {status === "loading" ? "Sending..." : "Submit Quote Request"}
      </Button>
      {status === "success" && <p className="form-success">문의가 접수되었습니다. 담당자가 확인 후 연락드리겠습니다.</p>}
      {status === "error" && <p className="form-error">전송 중 문제가 발생했습니다. 잠시 후 다시 시도해 주세요.</p>}
    </form>
  );
}
