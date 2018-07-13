/**
 * Test React Native App
 * Tahmid Rahman
 */

import React, { Component } from 'react';
import MainRoute from './src/router';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <MainRoute />
    );
  }
}
