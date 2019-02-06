import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import config from '../utils/config';
import './layout.css';

const IndexLayout = ({ children }) => (
  <div>
    <Helmet>
      <title>{config.siteName}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta description={config.description} />
    </Helmet>

    <div>{children}</div>
    {/* <Newsletter /> */}
  </div>
);

IndexLayout.propTypes = {
  children: PropTypes.array.isRequired,
};

export default IndexLayout;
