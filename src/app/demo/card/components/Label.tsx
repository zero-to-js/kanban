import styles from "../css/label.module.css";

export default function Label({ status }: { status: string }) {
  const colors: Record<string, string> = {
    "To Do": "#59B4D1",
    "In Progress": "#D0935A",
    Review: "#945AD1",
    Done: "#59D090",
  };

  const color = colors[status] || "#999";

  return (
    <span className={styles.label} style={{ backgroundColor: color }}>
      {status}
    </span>
  );
}
