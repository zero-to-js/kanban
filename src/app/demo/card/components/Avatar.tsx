import Image from "next/image";
import { User } from "lucide-react";
import styles from "../css/avatar.module.css";

interface AvatarProps {
  src?: string;
  size?: number;
  alt?: string;
}

export default function Avatar({ src, size = 20, alt = "avatar" }: AvatarProps) {
  if (!src) return <User size={size} className={styles.avatar} />;

  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={styles.avatar}
    />
  );
}
