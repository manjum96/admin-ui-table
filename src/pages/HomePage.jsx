import React from 'react';
import { InteractiveTable } from '../Components/table/index';

const HomePage = ({
  params,
}) => {

  return (
    <React.Fragment>
      <div className="col-12">
        <h2>Admin UI</h2>
      </div>
      <InteractiveTable />
    </React.Fragment>
  );
}

export default HomePage;
