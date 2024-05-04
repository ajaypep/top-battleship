import { ShipSegmentType } from '../../models/gameboard';
import './style.css';

const createCell = (shipInfo = null) => {
  const view = document.createElement('div');
  view.classList.add('cell');
  if (shipInfo) {
    view.classList.add('ship');
    if (shipInfo.type !== ShipSegmentType.STAND_ALONE) {
      view.classList.add(shipInfo.isVertical ? 'vertical' : 'horizontal');
    }
    switch (shipInfo.type) {
      case ShipSegmentType.HEAD: {
        view.classList.add('head');
        break;
      }
      case ShipSegmentType.TAIL: {
        view.classList.add('tail');
        break;
      }
      case ShipSegmentType.MIDDLE: {
        view.classList.add('middle');
        break;
      }
      default: {
        view.classList.add('stand-alone');
        break;
      }
    }
  }
  return view;
};
const createGameboardView = (gameboard) => {
  const view = document.createElement('div');
  view.classList.add('gameboard');
  const [row, col] = gameboard.getSize();
  for (let i = 0; i < row; ++i) {
    for (let j = 0; j < col; ++j) {
      if (gameboard.grid[i][j] === null) view.appendChild(createCell());
      else {
        const shipInfo = gameboard.grid[i][j][1];
        view.appendChild(createCell(shipInfo));
      }
    }
  }
  return view;
};

export default createGameboardView;
