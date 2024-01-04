import React from 'react';
import CustomButton from './CustomButton';
import { SendOutlined } from '@ant-design/icons';
export default {
  title: 'Buttons',
  component: CustomButton,
  tags: ['autodocs'],
};

export const General = () => (
  <CustomButton
    {...{
      buttonProps: {
        name: 'Submit',
        color: 'white',
        backgroundColor: '#4096f',
        type: 'primary',
      },
      buttonHandler: () => {
        console.log('clicked');
      },
    }}
  />
);
export const Default = () => (
  <CustomButton
    {...{
      buttonProps: {
        name: 'Cancel',
        color: 'black',
        type: 'default',
      },
      buttonHandler: () => {
        console.log('clicked');
      },
    }}
  />
);
export const WithIcon = () => (
  <CustomButton
    {...{
      buttonProps: {
        name: 'Submit',
        color: 'white',
        backgroundColor: '#4096f',
        type: 'primary',
      },
      buttonHandler: () => {
        console.log('clicked');
      },
      icon: <SendOutlined />,
    }}
  />
);

export const Link = () => (
  <CustomButton
    {...{
      buttonProps: {
        name: 'Link',
        color: '#4096f',

        type: 'link',
      },
      buttonHandler: () => {
        console.log('clicked');
      },
    }}
  />
);
export const DashButton = () => (
  <CustomButton
    {...{
      buttonProps: {
        name: 'Dashed',
        color: 'black',
        type: 'dashed',
      },
      buttonHandler: () => {
        console.log('clicked');
      },
    }}
  />
);
export const ButtonIcon = () => (
  <CustomButton
    {...{
      buttonProps: {
        type: 'primary',
      },
      buttonHandler: () => {
        console.log('clicked');
      },
      icon: <SendOutlined />,
    }}
  />
);
