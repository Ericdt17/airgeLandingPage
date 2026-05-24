import WhatsAppIcon from "./WhatsAppIcon";

const Button = ({
  label,
  iconURL,
  iconClassName,
  iconAlt,
  iconWrapperClassName,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
  href,
  onClick,
  showWhatsAppIcon,
}) => {
  const className = `flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none transition-colors
    ${
      backgroundColor
        ? `${backgroundColor} ${textColor} ${borderColor}`
        : "bg-airge-primary text-airge-ink border-airge-primary hover:bg-airge-primary-hover"
    } rounded-full ${fullWidth ? "w-full sm:w-auto" : ""}`;

  const content = (
    <>
      {showWhatsAppIcon && (
        <WhatsAppIcon className="h-5 w-5 shrink-0" />
      )}
      {label}
      {iconURL && (
        <span className={iconWrapperClassName ?? ""}>
          <img
            src={iconURL}
            alt={iconAlt ?? "button icon"}
            className={iconClassName ?? "ml-2 rounded-full bg-airge-surface w-5 h-5"}
          />
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return <button type="button" onClick={onClick} className={className}>{content}</button>;
};

export default Button;
