import React from 'react';
import { SectionContent } from './styles';
import { ISectionProps } from '@/types';

const SectionWrapper: React.FC<ISectionProps> = ({ children, background }) => {
  return <SectionContent $background={background}>{children}</SectionContent>;
};

export default SectionWrapper;