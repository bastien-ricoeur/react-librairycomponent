import { FaBasketballBall, FaSkiingNordic } from "react-icons/fa";

import useStyles from "./button-withicon.style";

export type ButtonWithIconProps = {
  children: React.ReactNode;
  iconName?: "BasketBall" | "Ski" | undefined;
  onClick?: () => void;
  color?: string;
  type?: string;
  disabled?: boolean;
  dataTestId?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonWithIcon = ({
  children,
  iconName = undefined,
  onClick = () => {},
  disabled = false,
  type = "submit",
  color = "",
  dataTestId = "button",
}: ButtonWithIconProps) => {
  const classes = useStyles({ color });

  const handleClick = () => {
    if (!disabled && onClick) onClick();
  };

  const RenderIcon = ({ icon }) => {
    switch (icon) {
      case "BasketBall":
        return <FaBasketballBall size={30} />;
      case "Ski":
        return <FaSkiingNordic size={30} />;
      default:
        return <FaSkiingNordic size={30} />;
    }
  };

  const rootProps = {
    className: classes.root,
    type,
    onClick: handleClick,
    disabled,
    "data-testid": dataTestId,
  };

  return (
    <button {...rootProps}>
      <RenderIcon icon={iconName} />
      <span className={classes.label}>{children}</span>
    </button>
  );
};

export default ButtonWithIcon;
