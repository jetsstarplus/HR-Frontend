import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import theme from '../../src/theme'

function Copyright(props) {
    return (
        <Box sx= {{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            backgroundColor: theme.palette.secondary.main,
            py: 2,
            marginTop: 10,
            marginBottom: 0,
        }}>

        <Typography variant="body2" color="text.secondary" align="center">
            CONTACT: {props.contact}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            NUMBER: {props.number}
        </Typography>
        </Box>
    );
  }

export default Copyright
  