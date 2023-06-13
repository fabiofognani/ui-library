import React, { ComponentType, FC } from "react";
import styled, { css } from "styled-components";
import { IconButton, IconButtonProps } from "~components/IconButton";
import { mqUntil } from "~styles/media-queries";

type Props = {
  direction: "prev" | "next";
  onClick?: () => void;
};

const StyledIconButton = styled<ComponentType<IconButtonProps & Pick<Props, "direction">>>(
  IconButton
)`
  position: absolute;
  bottom: 28px;
  ${(props) => {
    const side = props.direction === "prev" ? "left" : "right";
    return css`
      ${side}: -50px;

      ${mqUntil(
        "md",
        css`
          ${side}: 0;
          bottom: -10px;
        `
      )}
      ${mqUntil(
        "sm",
        css`
          ${side}: -10px;
        `
      )}
    `;
  }}
`;

export const ControlButton: FC<Props> = (props) => {
  return (
    <StyledIconButton
      variant="primary"
      aria-label={props.direction}
      icon={props.direction === "prev" ? "arrow-left" : "arrow-right"}
      {...props}
    />
  );
};
