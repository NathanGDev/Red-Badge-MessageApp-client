import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import MuiPaper from '@material-ui/core/Paper';
import { capitalize } from '@material-ui/core/utils';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme: any) => ({
  backgroundLight: {
    backgroundColor: theme.palette.secondary.light,
  },
  backgroundMain: {
    backgroundColor: theme.palette.secondary.main,
  },
  backgroundDark: {
    backgroundColor: theme.palette.secondary.dark,
  },
<<<<<<< HEAD
  // padding: {
  //   padding: theme.spacing(1),
  // },
=======
  padding: {
    padding: theme.spacing(1),
  },
>>>>>>> c8a4a63265a23410ba70fdb829cd2c84f79bbf00
});

function Paper(props: any) {
  const { background = 'light', classes, className, padding = false, ...other } = props;
  return (
    <MuiPaper
      elevation={0}
      square
      className={clsx(
        classes[`background${capitalize(background)}`],
<<<<<<< HEAD
        // {
        //   [classes.padding]: padding,
        // },
=======
        {
          [classes.padding]: padding,
        },
>>>>>>> c8a4a63265a23410ba70fdb829cd2c84f79bbf00
        className,
      )}
      {...other}
    />
  );
}

Paper.propTypes = {
  background: PropTypes.oneOf(['light', 'main', 'dark']),
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
<<<<<<< HEAD
  // padding: PropTypes.bool,
=======
  padding: PropTypes.bool,
>>>>>>> c8a4a63265a23410ba70fdb829cd2c84f79bbf00
};

export default withStyles(styles)(Paper);