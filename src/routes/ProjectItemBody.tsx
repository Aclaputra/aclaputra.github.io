import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default function ProjectItemBody({ name, date, stacks }) {
  return (
    <>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">{name}</Typography>
        <Typography variant="body2" color="textSecondary" component="h5">{date}</Typography>
        <Typography variant="body2" color="textSecondary" component="h5">{stacks}</Typography>
      </CardContent>
    </>
  );
}
