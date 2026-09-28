import Icon from "./Icon.jsx";

export default function Button({
  children,
  variant = "primary",
  size,
  href,
  icon,
  iconEnd,
  external,
  className = "",
  ...rest
}) {
  const classes = ["btn", `btn-${variant}`, size === "sm" ? "btn-sm" : "", className]
    .filter(Boolean)
    .join(" ");

  const inner = (
    <>
      {icon && <Icon name={icon} size={17} />}
      <span>{children}</span>
      {iconEnd && <Icon name={iconEnd} size={17} className="arrow" />}
    </>
  );

  if (href) {
    return (
      <a
        className={classes}
        href={href}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        {...rest}
      >
        {inner}
      </a>
    );
  }

  return (
    <button className={classes} {...rest}>
      {inner}
    </button>
  );
}
