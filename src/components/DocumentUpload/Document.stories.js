import React, { useState } from 'react';
import Document from './Document';
export default {
  title: 'Document Upload',
  component: Document,
  tags: ['autodocs'],
};

export const AllDocument = () => {
  const [fileSystem, setFileSystem] = useState([]);
  return (
    <Document
      {...{
        setFile: setFileSystem,
        numberOfImage: 2,
        fileSize: 1,
        url: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
      }}
    />
  );
};
