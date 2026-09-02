const services = [
  ["Desarrollo Web", "Sitios web rápidos, responsivos y profesionales."],
  ["Sistema Empresarial", "Soluciones para optimizar procesos de negocio."],
  ["Diseño UI/UX", "Interfaces claras, modernas y fáciles de usar."],
  ["Mantenimiento", "Actualizaciones, mejoras y soporte para tu web."],
];

export default function Services() {
  return (
    <section id="servicios" className="section">
      <div className="section-heading">
        <span className="eyebrow">SERVICIOS</span>
        <h2>Soluciones para tu proyecto</h2>
      </div>
      <div className="cards">
        {services.map(([title, text]) => (
          <article className="card" key={title}>
            <div className="card-number">✓</div>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}