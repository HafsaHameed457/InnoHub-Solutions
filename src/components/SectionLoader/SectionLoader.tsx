import React from 'react';
import { ClipLoader } from 'react-spinners';
import { StyledSectionLoader } from './SectionLoader.styled';

export interface Props {
  color: string;
  loading: boolean;
  size: number;
}

const SectionLoader: React.FC<Props> = ({ color, loading, size }) => {
  return (
    <StyledSectionLoader>
      <ClipLoader color={color} loading={loading} size={size} />
    </StyledSectionLoader>
  );
};

export default SectionLoader;
