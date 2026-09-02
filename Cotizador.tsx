import { useState } from "react";

const prices: Record<string, number> = {
  "Desarrollo Web": 1200,
  "Sistema Empresarial": 2500,
  "Diseño UI/UX": 900,
  "Mantenimiento": 500,
};

export default function Cotizador() {
  const [service, setService] = useState("Desarrollo Web");
  const [pages, setPages] = useState(1);
  const total = prices[service] + Math.max(0, pages - 1) * 150;

  return (
    <section id="cotizador" className="section">
      <div className="quote-box">
        <div>
          <span className="eyebrow">COTIZADOR</span>
          <h2>Calcula un precio referencial</h2>
          <p>Selecciona un servicio y la cantidad de páginas.</p>
        </div>
        <div className="quote-form">
          <label>
            Servicio
            <select value={service} onChange={(e) => setService(e.target.value)}>
              {Object.keys(prices).map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
          <label>
            Número de páginas
            <input
              type="number"
              min="1"
              value={pages}
              onChange={(e) => setPages(Math.max(1, Number(e.target.value)))}
            />
          </label>
          <div className="total">S/ {total.toLocaleString("es-PE")}</div>
        </div>
      </div>
    </section>
  );
}