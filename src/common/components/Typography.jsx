import React from 'react'

// Mui
import MuiTypography from '@mui/material/Typography';

const Typography = ({ variant, children, bold, mt, mb, ml, mr, sx, ...rest }) => {
    return (
        <MuiTypography
            variant={variant}
            sx={{
                ...(mt && {
                    my: 0,
                    mt: 2
                }),
                ...(mb && {
                    my: 0,
                    mb: 2
                }),
                ...(ml && {
                    my: 0,
                    ml: 2
                }),
                ...(mr && {
                    my: 0,
                    mr: 2
                }),
                ...(bold && {
                    fontWeight: 700
                }),
                ...sx
            }}
            {...rest}
        >
            {children}
        </MuiTypography>
    )
}

export default Typography