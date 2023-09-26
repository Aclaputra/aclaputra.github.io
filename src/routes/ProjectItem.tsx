import ProjectItemImage from './ProjectItemImage';
import ProjectItemBody from './ProjectItemBody';
import ProjectItemButton from './ProjectItemButton';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import { makeStyles } from '@material-ui/core/styles';
import '../styles/Projects.css';
import '../styles/responsive.css';

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
});

export default function ProjectItem({ name, date, stacks, imageUri, title, alt, linkWeb, linkGithub }) {
  const classes = useStyles();

  return(
    <div className="list__project">
      <Card className={classes.root}>
        <CardActionArea>
          <ProjectItemImage imageUri={imageUri} title={title} alt={alt}/>
          <ProjectItemBody name={name} date={date} stacks={stacks} />
        </CardActionArea>
        <CardActions>
          <ProjectItemButton linkWeb={linkWeb} linkGithub={linkGithub}/>
        </CardActions>
      </Card>
    </div>
  );
}
