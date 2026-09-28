import { tickerItems } from "../data/projects.js";

export default function Ticker() {
  const items = [...tickerItems, ...tickerItems];
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {items.map((t, i) => (
          <span className="ticker-item" key={i}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
