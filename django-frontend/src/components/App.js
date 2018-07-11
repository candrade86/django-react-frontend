import React, { Component } from 'react';
import { AppWrapper } from './primitives/Primitives';

export default ({ children }) => {
  return (
    <AppWrapper>
      {children}
    </AppWrapper>
  );
};

