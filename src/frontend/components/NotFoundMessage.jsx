import React from 'react';
import '../assets/styles/components/NotFound.scss';

const NotFoundMessage = () => {
  return (
    <section className='error'>
      <div className='error__main'>
        <h1 className='animated pulse'>404</h1>

        <h2>Page not found</h2>
      </div>
    </section>
  );
};
export default NotFoundMessage;
