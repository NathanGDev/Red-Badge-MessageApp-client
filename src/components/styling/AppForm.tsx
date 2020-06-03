import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';
import Paper from './Paper';

const styles = (theme: any) => ({
  root: {
    display: 'flex',
    backgroundRepeat: 'no-repeat',
  },
  paper: {
    padding: theme.spacing(2, 1),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(2, 6),
    },
  },
});

function AppForm(props: any) {
  const { children, classes } = props;

  return (
    <div className={classes.root}>
{/* ======= */}
      <Container>
        {/* <Box mt={7} mb={12}> */}
          <Paper className={classes.paper}>{children}</Paper>
        {/* </Box> */}
{/* >>>>>>> f973feab36ae351b3ec22b273e34f92177b1e1b8 */}
      </Container>
    </div>
  );
}

AppForm.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppForm);