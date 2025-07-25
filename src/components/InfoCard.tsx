import React from "react";
import styles from "./InfoCard.module.css";

import { ReactNode } from "react";
interface InfoCardProps {
  title?: string;
  content: string | ReactNode;
  icon?: React.ReactNode;
}

export default function InfoCard({ content, icon }: InfoCardProps) {
  let contentNode = content;
  if (
    React.isValidElement(content) &&
    content.props &&
    typeof (content.props as any).className === "string" &&
    ((content.props as any).className === "profileCardContent" ||
      (content.props as any).className === "aboutCardContent")
  ) {
    const className = `${styles[(content.props as any).className]} ${
      (content.props as any).className
    }`;
    contentNode = React.cloneElement(content, {
      className,
    } as any);
  }
  return (
    <div className={styles.card}>
      {icon && <span className="text-2xl text-primary">{icon}</span>}
      <div className={styles.cardContent}>{contentNode}</div>
    </div>
  );
}
