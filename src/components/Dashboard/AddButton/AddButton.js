import React, {Component} from 'react';

// Material UI
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    fab: {
      position: 'fixed',
      margin: theme.spacing(2),
      bottom: theme.spacing(2),
      right: theme.spacing(1),
    },
  });

class AddButton extends Component {
    render() {

        const { classes, theme } = this.props;

        return (
            <div>
                    <Fab onClick={this.props.handleAdd} color="primary" aria-label="Add" color="secondary" className={classes.fab} size="large">
                        <AddIcon />
                    </Fab>
            </div>
        )
    }
}

AddButton.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles) (AddButton);