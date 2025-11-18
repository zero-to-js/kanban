import styles from "../css/card.module.css";
import Avatar from "./Avatar";
import Label from "./Label";

interface CardProps {
  text: string;
  avatarSrc?: string;
  labelStatus: "To Do" | "In Progress" | "Review" | "Done";
}

export default function Card({
  text,
  avatarSrc,
  labelStatus = "To Do",
}: CardProps) {
  return (
    <div className={styles.card}>
      <p className={styles.text}>{text}</p>

      <div className={styles.footer}>
        <Avatar src={avatarSrc} />
        <Label status={labelStatus} />
      </div>
    </div>
  );
}
