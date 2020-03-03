import React from 'react';

type BrickBgProps = {
  children: React.ReactChild;
};

const BrickBg = ({ children }: BrickBgProps) => {
  return (
    <div
      className="bg-frost-blue py-10"
      style={{
        backgroundColor: '#2c74ac',
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='42' height='44' viewBox='0 0 42 44' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Page-1' fill='none' fill-rule='evenodd'%3E%3Cg id='brick-wall' fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M0 0h42v44H0V0zm1 1h40v20H1V1zM0 23h20v20H0V23zm22 0h20v20H22V23z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}
    >
      {children}
    </div>
  );
};

export default BrickBg;
