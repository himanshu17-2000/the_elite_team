import * as React from 'react';
import { Card ,CardActions , CardMedia,CardContent ,Typography , Button} from '@material-ui/core';
import { Link } from 'react-router-dom';
import "./style.css";



const JoinedClasses = ({ classData }) => {
  return (
    <div className='outer_card'>
      <Card sx={{ maxWidth: 300 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="250"
          image="http://source.unsplash.com/random/?book"
        />
        <CardContent>
        <div className="joined__content">
            <Link className="joined__title" to={`/${classData.id}`}>
              <h2>{classData.className}</h2>
            </Link>
            <p className="joined__owner">{classData.owner}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
export default JoinedClasses;

