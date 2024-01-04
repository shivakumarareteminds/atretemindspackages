import React from 'react';
import { Button } from 'antd';
const CustomButton = ({
  buttonProps = {},
  buttonHandler = () => {},
  isCallbackData = undefined,
  icon = undefined,
}) => {
  return (
    <Button
      type={buttonProps.type}
      htmlType="submit"
      className="center"
      onClick={() => {
        if (!!isCallbackData) {
          buttonHandler(isCallbackData);
        } else {
          buttonHandler();
        }
      }}
      style={{
        color: buttonProps.color,
        backgroundColor: buttonProps.backgroundColor,
        width: buttonProps.width,
        height: buttonProps.height,
      }}
      icon={icon != undefined ? icon : ''}
    >
      {buttonProps.name}
    </Button>
  );
};
export default CustomButton;
