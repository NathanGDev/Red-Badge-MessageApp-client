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
// <<<<<<< HEAD
    padding: theme.spacing(4, 3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(8, 6),
// =======
    padding: theme.spacing(2, 1),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(2, 6),
// >>>>>>> 529503cabfc34113de4d97c9a83a5c9476037dc7
    },
  },
});

function AppForm(props: any) {
  const { children, classes } = props;

  return (
    <div className={classes.root}>
{/* <<<<<<< HEAD */}
      <Container>
        {/* <Box mt={7} mb={12}> */}
          <Paper className={classes.paper}>{children}</Paper>
        {/* </Box> */}
      <Container maxWidth="sm">
        <Box mt={7} mb={12}>
          <Paper className={classes.paper}>{children}</Paper>
        </Box>
{/* =======
>>>>>>> 529503cabfc34113de4d97c9a83a5c9476037dc7 */}
      </Container>
    </div>
  );
}

AppForm.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppForm);