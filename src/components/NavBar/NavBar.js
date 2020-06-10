import React from './node_modules/react';
import AppBar from './node_modules/@material-ui/core/AppBar';
import Toolbar from './node_modules/@material-ui/core/Toolbar';
import Typography from './node_modules/@material-ui/core/Typography';

const navBar = props => {
    return (
        <div>
            <AppBar position="static" {...props}>
                <Toolbar>
                    <Typography variant="headline" color="inherit" align="center">
                        Simpsons Clicky Game
                </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default navBar;