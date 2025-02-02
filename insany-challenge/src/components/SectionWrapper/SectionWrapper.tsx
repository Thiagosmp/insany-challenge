import React from 'react';
import { SectionContent } from './styles';

interface SectionProps {
  children: React.ReactNode;
  background?: string; 
}

const SectionWrapper: React.FC<SectionProps> = ({ children, background }) => {
  return <SectionContent background={background}>{children}</SectionContent>;
};

export default SectionWrapper;