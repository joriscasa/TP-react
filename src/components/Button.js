export default function Button({
  title,
  backgroundColor = "blue",
  color = "red",
  rounded = false,
  onClick,
  ...rest
}) {
  if (!onClick) {
    throw new Error("no onClick function provided");
  }
  const styles = {
    backgroundColor,
    color,
  };
  if (rounded) {
    styles.borderRadius = "50%";
  }

  return (
    <button style={styles} onClick={onClick} {...rest}>
      {title}
    </button>
  );
}
