
import { Box } from '@mui/system';
import { ReactComponent as LogoSVG } from '../images/abm-logo.svg';
export default function LogoIcon(props) {
    return (
        <Box sx={{ display: { xs: props.xs, md: props.md }, mr: 1 }} >
            <LogoSVG {...props} />
        </Box>



    )
}

