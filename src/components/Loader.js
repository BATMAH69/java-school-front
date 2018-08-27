/** Created by batmah on 19.10.16 */
import React, { Component } from 'react';

// import './style.css'

const styles = {
  loading: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
};

const Loader = () => (
  <div style={styles.loading}>
    <span>Loading...</span>
  </div>
);

export default Loader;