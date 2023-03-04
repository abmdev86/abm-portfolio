import {
    Button,
    Card,

    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Typography,
} from '@mui/material';

export default function ProjectView({ project }) {
    return (
        <Grid item xs={6}>
            <Card variant='outlined' sx={{ width: '100%' }}>

                <CardMedia sx={{ height: 140 }} image={project.imageSRC} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph >
                        {project.description}
                    </Typography>
                </CardContent>


                <CardActions >
                    <Button
                        variant="outlined"
                        size="small"
                        component="a"
                        href={project.projectUrl}
                    >
                        LAUNCH
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
}
