import { Button, Drawer } from "antd";
import React, { useEffect } from "react";
import { FaAngleRight } from "react-icons/fa";
import useDrawerStore from "../../store/ui/drawer";

interface CustomDrawerLayoutProps {
  open: boolean;
  onClose: () => void;
  modalHeader: any;
  children: React.ReactNode;
  width?: string;
  paddingBottom?: number;
  footer?: React.ReactNode | null;
  hideButton?: boolean;
}

const CustomDrawerLayout: React.FC<CustomDrawerLayoutProps> = ({
  open,
  onClose,
  modalHeader,
  children,
  width,
  hideButton = false,
  footer = null,
  paddingBottom = 50,
}) => {
  // Default width
  const { isClient, setIsClient, currentWidth, setCurrentWidth } =
    useDrawerStore();

  useEffect(() => {
    setIsClient(true);

    const updateWidth = () => {
      if (window.innerWidth <= 768) {
        setCurrentWidth("90%");
      } else {
        setCurrentWidth(width || "70%");
      }
    };

    // Run the width update once on mount
    updateWidth();

    // Add the resize event listener
    window.addEventListener("resize", updateWidth);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, [width, currentWidth, setCurrentWidth]);

  // Render the component only on the client side
  if (!isClient) return null;
  return (
    <div>
      <>
        {" "}
        {open && !hideButton && (
          <Button
            id="closeSidebarButton"
            className="bg-white text-lg text-grey-9 rounded-full border-none mr-8 hidden md:flex"
            icon={<FaAngleRight />}
            onClick={onClose}
            style={{
              display: window.innerWidth <= 768 ? "none" : "flex",
              position: "fixed",
              right: width,
              width: "50px",
              height: "50px",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 1001,
            }}
          />
        )}
      </>
      <Drawer
        title={modalHeader}
        width={width || currentWidth}
        closable={false}
        onClose={onClose}
        open={open}
        style={{ paddingBottom: paddingBottom }}
        footer={footer}
        styles={{
          footer: { borderTop: "none" },
        }}
      >
        {children}
      </Drawer>
    </div>
  );
};

export default CustomDrawerLayout;
