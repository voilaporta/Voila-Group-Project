import React, {Component} from 'react';

import { withStyles } from '@material-ui/core/styles';
import { TextField, Dialog, DialogActions, DialogContent, DialogTitle, Button} from '@material-ui/core';
  
  const styles = theme => ({
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
      },
  });

  // stop tab key from closing the dialog box
  const stopPropagationForTab = (event) => {
    if (event.key === "Tab") {
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
                    <DialogTitle id="form-dialog-title" >Add New Vendor</DialogTitle>
                    </DialogContent>
                    <DialogContent>
                        <TextField
                        autoFocus
                        name="firstName"
                        label="First Name"
                        type="text"
                        fullWidth
                        className={classes.textField}
                        />
                        <TextField
                        autoFocus
                        margin="dense"
                        name="lastName"
                        label="Last Name"
                        type="text"
                        fullWidth
                        />
                        <TextField
                        autoFocus
                        name="companyName"
                        label="Company Name"
                        type="text"
                        fullWidth
                        className={classes.textField}
                        />
                        <TextField
                        autoFocus
                        margin="dense"
                        name="phoneNumber"
                        label="Phone Number"
                        type="text"
                        fullWidth
                        />
                        <TextField
                        autoFocus
                        margin="dense"
                        name="email"
                        label="Email Address"
                        type="email"
                        fullWidth
                        />
                        <TextField
                        autoFocus
                        margin="dense"
                        name="website"
                        label="Website"
                        type="text"
                        fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.props.handleClose} color="primary">
                        Cancel
                        </Button>
                        <Button onClick={this.props.handleClose} color="primary">
                        Add Vendor
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default withStyles(styles) (AddVendor);