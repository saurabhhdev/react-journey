const sizes = {
  sm: "nexhub-logo-sm",
  md: "nexhub-logo-md",
  lg: "nexhub-logo-lg",
};

function NexhubLogo({ size = "md", animated = false, glow = false, className = "", title = "Nexhub" }) {
  const classes = [
    "brand-mark",
    sizes[size] || sizes.md,
    animated && "brand-mark-animated",
    glow && "brand-mark-glow",
    className,
  ].filter(Boolean).join(" ");

  return (
    <svg className={classes} viewBox="0 0 32 32" role="img" aria-label={title} xmlns="http://www.w3.org/2000/svg">
      <path className="brand-mark-route" d="M7 25V7h2l7 8" />
      <path className="brand-mark-route" d="m17 17 8 8V7" />
      <path className="brand-mark-draw" d="M7 25V7h2l14 18V7" />
      <path className="brand-mark-node" d="m16 13.5 3 3-3 3-3-3z" />
      <path className="brand-mark-sweep" d="M7 25V7h2l14 18V7" />
    </svg>
  );
}

export default NexhubLogo;
