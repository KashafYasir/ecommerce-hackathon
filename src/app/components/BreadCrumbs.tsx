import React from 'react';
import '../styles/Breadcrumbs.css';

const Breadcrumb: React.FC = () => {
  return (
    <div className="breadcrumb">
      <span className="breadcrumb-item">Home</span>
      <img src="https://dashboard.codeparrot.ai/api/assets/Z1XBzowTRzcMVVtG" alt="arrow" className="breadcrumb-icon" />
      <span className="breadcrumb-item">Shop</span>
      <img src="https://dashboard.codeparrot.ai/api/assets/Z1XBzowTRzcMVVtH" alt="arrow" className="breadcrumb-icon" />
      <span className="breadcrumb-current">Asgaard sofa</span>
    </div>
  );
};

export default Breadcrumb;

