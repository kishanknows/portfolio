import React from "react";
import styles from "./InfoCard.module.css";

import { ReactNode, ReactElement } from "react";
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
    typeof (content.props as ReactElement<any, any>).props.className ===
      "string" &&
    ((content.props as ReactElement<any, any>).props.className ===
      "profileCardContent" ||
      (content.props as ReactElement<any, any>).props.className ===
        "aboutCardContent")
  ) {
    const className = `${
      styles[(content.props as ReactElement<any, any>).props.className]
    } ${(content.props as ReactElement<any, any>).props.className}`;
    contentNode = React.cloneElement(content, {
      className,
    });
  }
  return (
    <div className={styles.card}>
      {icon && <span className="text-2xl text-primary">{icon}</span>}
      <div className={styles.cardContent}>{contentNode}</div>
    </div>
  );
}
