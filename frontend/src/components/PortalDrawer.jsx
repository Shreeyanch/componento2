import { useMemo, useCallback } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

const PortalDrawer = ({
  children,
  overlayColor,
  placement = "Left",
  onOutsideClick,
  zIndex = 100,
}) => {
  const drawerStyle = useMemo(() => {
    const style = {};
    style.zIndex = zIndex;

    if (overlayColor) {
      style.backgroundColor = overlayColor;
    }

    switch (placement) {
      case "Left":
        style.alignItems = "flex-start";
        break;
      case "Right":
        style.alignItems = "flex-end";
        break;
      case "Top":
        style.alignItems = "center";
        break;
      case "Bottom":
        style.alignItems = "center";
        style.justifyContent = "flex-end";
        style.margin = 0; // Remove margin
        style.padding = 0; // Remove padding
        style.bottom = 0; // Ensure it touches the bottom
        break;
    }

    return style;
  }, [placement, overlayColor, zIndex]);

  const onOverlayClick = useCallback(
    (e) => {
      if (onOutsideClick && e.target.classList.contains("portalPopupOverlay")) {
        onOutsideClick();
      }
      e.stopPropagation();
    },
    [onOutsideClick]
  );

  return (
    <DrawerContainer>
      <div
        className="flex flex-col fixed inset-0 portalPopupOverlay"
        style={drawerStyle}
        onClick={onOverlayClick}
      >
        {children}
      </div>
    </DrawerContainer>
  );
};

export const DrawerContainer = ({ children, containerId = "portals" }) => {
  let portalsDiv = document.getElementById(containerId);
  if (!portalsDiv) {
    portalsDiv = document.createElement("div");
    portalsDiv.setAttribute("id", containerId);
    document.body.appendChild(portalsDiv);
  }

  return createPortal(children, portalsDiv);
};

PortalDrawer.propTypes = {
  overlayColor: PropTypes.string,
  placement: PropTypes.oneOf(["Left", "Right", "Top", "Bottom"]),
  onOutsideClick: PropTypes.func,
  zIndex: PropTypes.number,
  children: PropTypes.node.isRequired,
};

export default PortalDrawer;
