import * as React from 'react';
import './App.css';

interface IBallProps {
  x: number;
  y: number;
  color: Color;
}

interface IBallState {
  styles: { left: number, top: number, backgroundColor: string };
}

export enum Color {
  RED,
  YELLOW,
  WHITE,
}

class Ball extends React.Component<IBallProps, IBallState> {
  private setBallRef: React.RefObject<HTMLSpanElement>;

  constructor(props: IBallProps) {
    super(props);
    this.setBallRef = React.createRef();
    this.state = this.getInitialState();
  }

  public componentDidMount() {
    this.setState({
      styles: {
        backgroundColor: this.computeColor(this.setBallRef),
        left: this.computeLeftWith(this.setBallRef),
        top: this.computeTopWith(this.setBallRef),
      }
    })
  };

  public render() {
    return (
      <span className='ball' draggable={true} ref={this.setBallRef} style={this.state.styles} onDrag={this.onDrag}/>
    );
  }

  // private computeStyles: (left: number, top: number) => void = (left, top) => {
    
  // }

  private onDrag: (event: React.DragEvent) => void = event => {
    const { clientX, clientY } = event;
    const ref = this.setBallRef.current;
    const boundingRectangle: (ClientRect | DOMRect | null) =
      ref && ref.parentElement && ref.parentElement.getBoundingClientRect();
    if (boundingRectangle == null) {
      console.log('Bounding rect is null');
      return;
    }

    this.setState({
      styles: {
        ...this.state.styles,
        left: clientX - boundingRectangle.left,
        top: clientY - boundingRectangle.top,
      }
    });
    console.log(`ball dragging to: ${event.clientX}, ${event.clientY}`);
  }

  private getInitialState() {
    return {
      styles: {
        backgroundColor: 'white',
        left: 0,
        top: 0,
      }
    };
  };
      

  private computeLeftWith(child: React.RefObject<HTMLSpanElement>) {
    return this.props.x;
  }

  private computeColor(child: React.RefObject<HTMLSpanElement>) {
    switch(this.props.color) {
      case Color.WHITE:
        return 'white';
      case Color.RED:
        return 'red';
      case Color.YELLOW:
        return 'yellow';
      default:
        return 'white';
    }
  }


  private computeTopWith(child: React.RefObject<HTMLSpanElement>) {
    return this.props.y;
  }
}

export default Ball;
