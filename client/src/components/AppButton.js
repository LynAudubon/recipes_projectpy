import React from 'react';
import { Button } from '@material-ui/core';

const AppButton = ({ onClick, children}) => {
    return (
        <Button onClick={onClick}variant='contained'> {children}</Button>
    )
   
}

export default AppButton;