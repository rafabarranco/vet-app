import React from 'react';
import PropTypes from 'prop-types';

const HeaderComponent = ({title}) => (
    <header>
        <h1 className='text-center'>{title}</h1>
    </header>
);

HeaderComponent.propTypes = {
    title: PropTypes.string.isRequired,
};

export default HeaderComponent;