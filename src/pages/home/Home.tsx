/**
 * Home
 * @author vvkee
 * @date Fri Nov  9 19:43:48 CST 2018
 */
import * as React from 'react';
import Header from '../../components/common/Header'

const Home = (props: {
  toggleSidebar: () => void
}) => (
  <div>
    <Header onMenuClick={props.toggleSidebar} />
  </div>
)
export default Home;
