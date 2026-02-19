import React from 'react';
import Container from './Container';

const SectionWrapper = ({ children, className = '', containerClassName = '' }) => {
  return (
    <section className={`py-20 lg:py-24 ${className}`}>
      <Container className={containerClassName}>
        {children}
      </Container>
    </section>
  );
};

export default React.memo(SectionWrapper);
