import * as React from 'react';
import './App.css';

import { Box } from 'grid-styled'
import Ball, { Color } from './Ball';

interface ITableProps {
  horizontalFlip?: boolean;
  showCueBall?: boolean;
}

class BilliardTable extends React.Component<ITableProps> {
  public render() {
    const { horizontalFlip, showCueBall } = this.props;
    const classNames = `table${horizontalFlip ? ' hflip' : ''}`;
    
    return (
        <Box width={50} px={0} className={classNames}>
            <Ball x={5} y={10} color={Color.RED} />
            <Ball x={15} y={30} color={Color.YELLOW} />
            { showCueBall ? <Ball x={25} y={30} color={Color.WHITE} /> : undefined }
        </Box>
    );
  }
}

export default BilliardTable;
