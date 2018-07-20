import * as React from 'react';
import './App.css';

import BilliardTable from './Table';

interface ITableProjectionProps {
  table: React.ReactElement<BilliardTable>;
}

class TableProjection extends React.Component<ITableProjectionProps> {
  public render() {
    return (
      <div className="App">
        {this.createTable()}
      </div>
    );
  }

  private createTable = () => {
    return <BilliardTable />;
  }
}

export default TableProjection;
