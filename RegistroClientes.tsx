import { type ReactNode } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

interface Cliente {
  nombre: string;
  apellido: string;
  correo: string;
  telefono: string;
  empresa: string;
}

export default function RegistroClientes() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Cliente>({
    mode: "onChange",
  });

  const onSubmit = (data: Cliente) => {
    console.log("Cliente registrado:", data);
    toast.success("Cliente registrado correctamente");
    reset();
  };

  return (
    <section id="registro-clientes" className="section form-section">
      <div className="form-intro">
        <span className="eyebrow">REGISTRO DE CLIENTES</span>
        <h2>Registra tus datos</h2>
        <p>
          Completa el formulario para solicitar información sobre nuestros
          servicios.
        </p>
        <ul>
          <li>✓ Datos personales validados</li>
          <li>✓ Correo electrónico validado</li>
          <li>✓ Teléfono de 9 dígitos</li>
          <li>✓ Empresa opcional</li>
        </ul>
      </div>

      <form
        className="service-form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <Field label="Nombre" error={errors.nombre?.message}>
          <input
            className={errors.nombre ? "input-error" : ""}
            type="text"
            placeholder="Nombre"
            {...register("nombre", {
              required: "El nombre es obligatorio",
              minLength: {
                value: 2,
                message: "El nombre debe tener al menos 2 caracteres",
              },
            })}
          />
        </Field>

        <Field label="Apellido" error={errors.apellido?.message}>
          <input
            className={errors.apellido ? "input-error" : ""}
            type="text"
            placeholder="Apellido"
            {...register("apellido", {
              required: "El apellido es obligatorio",
              minLength: {
                value: 2,
                message: "El apellido debe tener al menos 2 caracteres",
              },
            })}
          />
        </Field>

        <Field label="Correo electrónico" error={errors.correo?.message}>
          <input
            className={errors.correo ? "input-error" : ""}
            type="email"
            placeholder="usuario@gmail.com"
            {...register("correo", {
              required: "El correo es obligatorio",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Ingrese un correo válido",
              },
            })}
          />
        </Field>

        <Field label="Teléfono" error={errors.telefono?.message}>
          <input
            className={errors.telefono ? "input-error" : ""}
            type="text"
            inputMode="numeric"
            maxLength={9}
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

        <Field label="Empresa (opcional)" error={errors.empresa?.message}>
          <input
            type="text"
            placeholder="Empresa"
            {...register("empresa")}
          />
        </Field>

        <button className="button submit" type="submit">
          Registrar cliente
        </button>
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
      {error && <p className="error">⚠ {error}</p>}
    </label>
  );
}
