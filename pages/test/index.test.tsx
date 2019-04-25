import * as React from 'react';
import {mount} from 'enzyme';
import Index from '../index';
import Board from '../components/Board';

describe('Pages', () => {
  describe('Index', () => {
    it('should render without throwing an error', function () {
      const wrap = mount(<Index/>)
      expect(wrap.find('h1').text()).toBe('Tic Tac Toe Next Generation')
    })

    it('should render a board', function () {
      const wrap = mount(<Index/>);
      expect(wrap.find(Board).length).toEqual(1);
    })


  })  
})

/*
- Index: Game (stateful and has the game logic)
    - Board: CSS Grid that contains cell components, just passes props and handles layout
    - Cell: Div or a Button depending on if it has a value, takes an onClick and a value, maybe it has an id as well
*/