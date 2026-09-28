import Icon from "./Icon.jsx";

const nodes = [
  { label: "React", icon: "layers", style: { top: "4%", left: "50%", transform: "translateX(-50%)" }, delay: "0s" },
  { label: "Node.js", icon: "server", style: { top: "30%", right: "-2%" }, delay: "0.6s" },
  { label: "API", icon: "globe", style: { bottom: "26%", right: "2%" }, delay: "1.2s" },
  { label: "Database", icon: "database", style: { bottom: "2%", left: "50%", transform: "translateX(-50%)" }, delay: "1.8s" },
  { label: "AI", icon: "spark", style: { bottom: "26%", left: "2%" }, delay: "2.4s" },
  { label: "Frontend", icon: "layout", style: { top: "30%", left: "-2%" }, delay: "3s" },
];

export default function HeroVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="orbit" />
      <div className="orbit o2" />
      <div className="orbit o3" />

      <div className="hero-core">
        <span className="mono">&lt;/&gt;</span>
        <span className="glyph">S</span>
        <span className="mono">FULL-STACK</span>
      </div>

      {nodes.map((n) => (
        <div
          key={n.label}
          className="chip-node"
          style={{ ...n.style, animationDelay: n.delay }}
        >
          <span className="cdot" />
          <Icon name={n.icon} size={15} />
          {n.label}
        </div>
      ))}
    </div>
  );
}
