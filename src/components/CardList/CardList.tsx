import { FC, PropsWithChildren } from "react";

export type CardListProps = {
  title?: string;
};

export const CardList: FC<PropsWithChildren<CardListProps>> = ({ title, children, ...props }) => {
  return (
    <div {...props}>
      {title && (
        <p style={{ marginBottom: 0 }}>
          {title}
        </p>
      )}
      {children}
    </div>
  );
};
