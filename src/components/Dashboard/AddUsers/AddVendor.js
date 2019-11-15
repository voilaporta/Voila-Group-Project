import React, {Component} from 'react';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import { TextField, Dialog, DialogActions, DialogContent, DialogTitle, Button} from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';

import Swal from 'sweetalert2';
  
  const styles = theme => ({
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    dialogTitle: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'left',
        height: '1vh',
    },
    leftIcon: {
        marginRight: theme.spacing.unit,
    },
  });

  // stop tab key from closing the dialog box
  const stopPropagationForTab = (event) => {
    if (event.key === "Tab") {
      event.stopPropagation();
    }
    if (event.key == 'a') {
        event.stopPropagation();
    }
  };

class AddVendor extends Component {
      
    render() {

        const { classes } = this.props;
        
        return (
            <div>
                <Dialog
                    open={this.props.state.open}
                    onClose={this.props.handleClose}
                    aria-labelledby="form-dialog-title"
                    onKeyDown={stopPropagationForTab}
                >
                    <DialogContent dividers>
                        <DialogTitle className={classes.dialogTitle}>Add New Vendor</DialogTitle>
                    </DialogContent>
                    <DialogContent>
                        <TextField
                            autoFocus
                            label="First Name"
                            type="text"
                            fullWidth
                            className={classes.textField}
                        />
                        <TextField
                            autoFocus
                            name="lastName"
                            label="Last Name"
                            type="text"
                            fullWidth
                        />
                        <TextField
                            autoFocus
                            label="Company Name"
                            type="text"
                            fullWidth
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Phone Number"
                            type="text"
                            fullWidth
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Email Address"
                            type="email"
                            fullWidth
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Website"
                            type="text"
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.props.handleClose} color="secondary" variant="outlined">
                            Cancel
                        </Button>
                        <Button onClick={this.props.handleClose} color="secondary" variant="contained">
                            <SaveIcon className={classes.leftIcon} />
                            Add Vendor
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user,
});

export default withStyles(styles) (connect(mapStateToProps)(AddVendor));