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
}) => {
  const className = `flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
    ${
      backgroundColor
        ? `${backgroundColor} ${textColor} ${borderColor}`
        : "bg-coral-red text-white border-coral-red"
    } rounded-full ${fullWidth ? "w-full sm:w-auto" : ""}`;

  const content = (
    <>
      {label}
      {iconURL && (
        <span className={iconWrapperClassName ?? ""}>
          <img
            src={iconURL}
            alt={iconAlt ?? "button icon"}
            className={iconClassName ?? "ml-2 rounded-full bg-white w-5 h-5"}
          />
        </span>
      )}
    </>
  );

  if (href) {
    return <a href={href} className={className}>{content}</a>;
  }

  return <button type="button" onClick={onClick} className={className}>{content}</button>;
};

export default Button;
