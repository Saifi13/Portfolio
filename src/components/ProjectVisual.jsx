export default function ProjectVisual({ image, alt, url }) {
  return (
    <div className="pv-inner">
      <div className="pv-bar">
        <i />
        <i />
        <i />
        <span className="pv-url">{url}</span>
      </div>
      <div className="pv-frame">
        <img className="pv-img" src={image} alt={alt} />
      </div>
    </div>
  );
}
