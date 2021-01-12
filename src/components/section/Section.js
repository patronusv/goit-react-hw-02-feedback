import React from 'react';
import PropTypes from 'prop-types';
import SectionStyled from './SectionStyled';
const Section = ({ title, children }) => {
  return (
    <SectionStyled>
      <h2 className="section-title">{title}</h2>
      {children}
    </SectionStyled>
  );
};

export default Section;
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};
