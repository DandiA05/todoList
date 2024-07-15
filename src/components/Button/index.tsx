type Props = Omit<React.HTMLProps<HTMLButtonElement>, "type"> & {
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
};

export default function Button({
  children,
  className,
  type = "button",
  ...props
}: Props) {
  return (
    <button
      {...props}
      type={type}
      className={
        `rounded bg-black py-2 px-4 text-white hover:bg-black/80 focus:bg-black/90` +
        className
      }
    >
      {children}
    </button>
  );
}
