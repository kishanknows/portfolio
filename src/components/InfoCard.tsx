import React from "react";
import styles from "./InfoCard.module.css";

import { ReactNode, ReactElement } from "react";
interface InfoCardProps {
  title?: string;
  content: string | ReactNode;
  icon?: React.ReactNode;
}

type ContentElement = ReactElement<{ className?: string }>;

export default function InfoCard({ content, icon }: InfoCardProps) {
  let contentNode = content;
  if (
    React.isValidElement(content) &&
    content.props &&
    typeof (content as ContentElement).props.className === "string" &&
    ((content as ContentElement).props.className === "profileCardContent" ||
      (content as ContentElement).props.className === "aboutCardContent")
  ) {
    const className = `${
      styles[(content as ContentElement).props.className!]
    } ${(content as ContentElement).props.className}`;
    contentNode = React.cloneElement(content as ContentElement, {
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
