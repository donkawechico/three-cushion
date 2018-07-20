import * as React from 'react';
import './App.css';

import { Flex } from 'grid-styled'

import BilliardTable from './Table';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        {this.createTable()}
      </div>
    );
  }

  private createTable = () => {
    const tableRows: JSX.Element[] = [];
    
    for (let i = 0; i < 5; i++) {
      tableRows[i] = this.getRowOfTables(i%2 === 1, i === 2);
    }

    return tableRows;
  }

  private getTable(horizontalFlip: boolean, showCueBall: boolean) {
    return <BilliardTable horizontalFlip={horizontalFlip} showCueBall={showCueBall} />;
  }

  private getRowOfTables: (verticalFlip: boolean, showCueBall: boolean) => JSX.Element = 
    (verticalFlip, showCueBall) => {
    const tableRow: JSX.Element[] = [];
    for (let j = 0; j < 5; j++) {
      const table = this.getTable(j%2 === 1, showCueBall && j === 2);
      tableRow[j] = table;
    }
    const className = verticalFlip ? 'vflip' : undefined;

    return (
      <Flex justifyContent='center' alignItems='center' className={className}>
        {tableRow}
      </Flex>
    );
  }
}

export default App;
