import React from 'react';

export interface ISearchInputProps {
    placeholder?: string;
    icon?: React.ReactElement;
    disabled?: boolean;
    width?: number;
    type?: 1 | 2;
    height?: number;
    style?: string;
    className?: string;
    onChange?: (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
  }
