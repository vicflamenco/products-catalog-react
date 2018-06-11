import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import './Footer.css';

const styles = {
};

class Footer extends React.Component {
	state = {
		value: 0,
	};
  	render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
    <div className="footer-container">
	    <BottomNavigation value={value} showLabels className={classes.root}>
	        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
	        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
	        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
	    </BottomNavigation>
	</div>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer)