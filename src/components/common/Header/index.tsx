/**
 * Header Component
 * @author zongqi wei
 */
import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';

interface IProps {
  onMenuClick: () => void
}

const Header = (props: IProps) => (
  <>
    <AppBar>
      <Toolbar>
        <IconButton color="inherit" aria-label="Menu" onClick={props.onMenuClick}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit">
          SearchDealer
        </Typography>
      </Toolbar>
    </AppBar>
  </>
);

export default Header;
