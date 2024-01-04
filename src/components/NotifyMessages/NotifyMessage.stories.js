import React from 'react';
import NotifyMessage from './NotifyMessage';

export default {
  title: 'Notify Messages',
  component: NotifyMessage,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};
export const Dark = () => (
  <NotifyMessage
    {...{
      messageHandler: () => {},
      type: '',
      message: 'Hello Notify Message',
      position: 'bottom-right',
      theme: 'dark',
    }}
  />
);
export const Light = () => (
  <NotifyMessage
    {...{
      messageHandler: () => {},
      type: '',
      message: 'Hello Notify Message',
      position: 'bottom-center',
    }}
  />
);
export const Success = () => (
  <NotifyMessage
    {...{
      messageHandler: () => {},
      type: 'success',
      message: 'Success',
      position: 'top-center',
    }}
  />
);
export const Error = () => (
  <NotifyMessage
    {...{
      messageHandler: () => {},
      type: 'error',
      message: 'Error',
      position: 'top-right',
    }}
  />
);
export const Warn = () => (
  <NotifyMessage
    {...{
      messageHandler: () => {},
      type: 'warn',
      message: 'Warn',
      position: 'top-left',
    }}
  />
);
export const Info = () => (
  <NotifyMessage
    {...{
      messageHandler: () => {},
      type: 'info',
      message: 'Info',
      position: 'bottom-left',
    }}
  />
);
export const ColoredSuccess = () => (
  <NotifyMessage
    {...{
      messageHandler: () => {},
      type: 'success',
      message: 'Success',
      position: 'bottom-left',
      theme: 'colored',
    }}
  />
);
