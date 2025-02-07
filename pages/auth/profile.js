import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';
import Container from '@mui/material/Container'
import { Divider, Stack, Grid, Box, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Title from '@/components/Dashboard/Title';

export default function mainListItemw({user}) {
    
    return (
      <Container sx={{alignContent: 'right', display: 'flex'}}>
        <Card sx={{ maxWidth: 230 }}>
            <PersonIcon sx={{fontSize: 200, flexDirection: 'column'}} />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                Name: {user?.first_name}
            </Typography>
            <Typography variant="body1" color="text.secondary">
                Email: {user?.email}
            </Typography>
            <Typography variant="body1" color="text.secondary">
                Company: {user?.company}
            </Typography>
            <Typography variant="body1" color="text.secondary">
                Status: {user?.status}
            </Typography>
            </CardContent>
            <CardActions>
            <Button size="small" href='/user/' >Go to Dashboard</Button>
            </CardActions>
        </Card>
        <Grid width='100%'>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div alignContent='centre'>
    <Title alignContent='centre'>Edit Profile</Title>
      <TextField
          id="username"
          label="Username"
          type="username"
          autoComplete="current-username"
        />
        <TextField
          id="first_name"
          label="First Name"
          type="text"
          autoComplete="current-first_name"
        />
        <TextField
          id="last_name"
          label="Last Name"
          type="text"
          autoComplete="current-last_name"
        />
        <TextField
          id="email"
          label="Email"
          type="email"
          autoComplete="current-email"
        />
        <TextField
          id="location"
          label="Location"
          type="text"
          autoComplete="current-location"
        />
        <TextField
          id="locale"
          label="Preffered Locale"
          type="text"
          autoComplete="current-locale"
        />
        <Divider />
        
      </div>
    </Box>
    <Box>
    <Stack direction="row" spacing={10}  marginLeft={10} >
        <Button variant="contained"  endIcon={<SendIcon size='small' />}>Submit</Button>
        <Button variant="contained" href="" color='error'>
            Cancel
        </Button>
        </Stack>
    </Box>
        </Grid>
      </Container>  
    );
  }