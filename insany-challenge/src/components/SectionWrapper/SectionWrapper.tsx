import React from 'react';
import { SectionContent } from './styles';
import { SectionProps } from '@/types';

const SectionWrapper: React.FC<SectionProps> = ({ children, background }) => {
  return <SectionContent $background={background}>{children}</SectionContent>;
};

export default SectionWrapper;