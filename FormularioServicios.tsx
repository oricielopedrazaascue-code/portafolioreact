import { type ReactNode } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

interface FormularioData {
  nombre: string;
  correo: string;
  telefono: string;
  servicio: string;
  mensaje: string;
}

export default function FormularioServicios() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormularioData>({ mode: "onChange" });

  const onSubmit = (data: FormularioData) => {
    console.log(data);
    toast.success("Solicitud enviada correctamente");
    reset();
  };

  return (
    <section id="solicitar" className="section form-section">
      <div className="form-intro">
        <span className="eyebrow">SOLICITAR SERVICIO</span>
        <h2>¿Tienes un proyecto en mente?</h2>
        <p>Cuéntanos qué necesitas y nos pondremos en contacto contigo.</p>
        <ul>
          <li>✓ Desarrollo Web</li>
          <li>✓ Sistemas</li>
          <li>✓ UI/UX</li>
          <li>✓ Mantenimiento</li>
        </ul>
      </div>

      <form className="service-form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <Field label="Nombre completo" error={errors.nombre?.message}>
          <input
            className={errors.nombre ? "input-error" : ""}
            type="text"
            placeholder="Nombre completo"
            {...register("nombre", {
              required: "El nombre es obligatorio",
              minLength: { value: 3, message: "El nombre debe tener al menos 3 caracteres" },
            })}
          />
        </Field>

        <Field label="Correo electrónico" error={errors.correo?.message}>
          <input
            className={errors.correo ? "input-error" : ""}
            type="email"
            placeholder="correo@ejemplo.com"
            {...register("correo", {
              required: "El correo es obligatorio",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Ingrese un correo electrónico válido",
              },
            })}
          />
        </Field>

        <Field label="Teléfono" error={errors.telefono?.message}>
          <input
            className={errors.telefono ? "input-error" : ""}
            type="text"
            inputMode="numeric"
            placeholder="987654321"
            {...register("telefono", {
              required: "El teléfono es obligatorio",
              pattern: {
                value: /^[0-9]{9}$/,
                message: "El teléfono debe tener 9 dígitos",
              },
            })}
          />
        </Field>

        <Field label="Servicio" error={errors.servicio?.message}>
          <select
            className={errors.servicio ? "input-error" : ""}
            {...register("servicio", { required: "Seleccione un servicio" })}
          >
            <option value="">Seleccione un servicio</option>
            <option value="Desarrollo Web">Desarrollo Web</option>
            <option value="Sistema Empresarial">Sistema Empresarial</option>
            <option value="Diseño UI/UX">Diseño UI/UX</option>
            <option value="Mantenimiento">Mantenimiento Web</option>
          </select>
        </Field>

        <Field label="Descripción del proyecto" error={errors.mensaje?.message}>
          <textarea
            className={errors.mensaje ? "input-error" : ""}
            rows={5}
            placeholder="Cuéntanos sobre tu proyecto"
            {...register("mensaje", {
              required: "La descripción es obligatoria",
              minLength: {
                value: 10,
                message: "Describe tu proyecto con al menos 10 caracteres",
              },
            })}
          />
        </Field>

        <button className="button submit" type="submit">Enviar solicitud</button>
      </form>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="field">
      <span>{label}</span>
      {children}
      {error && <small className="error">{error}</small>}
    </label>
  );
}