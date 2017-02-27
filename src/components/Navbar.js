import React from 'react';
import styles from './Navbar.css';
import { NavBar } from 'antd-mobile';

function Navbar({ title, showBack }, { router }) {
  const rightContent = <span onClick={() => location.reload()}>刷新</span>;
  return (
    <NavBar
      mode="light"
      leftContent={showBack ? <span>&lt;</span> : null}
      onLeftClick={() => router.goBack()}
      className={styles.navBar}
      rightContent={rightContent}>{title}</NavBar>
  );
}
NavBar.propTypes = {
  title: React.PropTypes.string,
  showBack: React.PropTypes.bool
};

Navbar.defaultProps = {
  showBack: true
};

Navbar.contextTypes = {
  router: React.PropTypes.object.isRequired,
};
export default Navbar;
