import * as React from 'react';
import Card from 'material-ui/Card';
import CardActions from 'material-ui/Card/CardActions';
import CardContent from 'material-ui/Card/CardContent';
import CardMedia from 'material-ui/Card/CardMedia';
import { Link } from 'react-router-dom';
import "./style.css";
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

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
          <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
        <div className="joined__content">
            <Link className="joined__title" to={`/${classData.id}`}>
              <h2>{classData.className}</h2>
            </Link>
            <p className="joined__owner">{classData.owner}</p>
          </div>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}
export default JoinedClasses;


// import { Avatar } from "@material-ui/core";
// import { FolderOpen, PermContactCalendar } from "@material-ui/icons";
// import React from "react";
// import { Link } from "react-router-dom";
// import "./style.css";
// const JoinedClasses = ({ classData }) => {
//   return (
//     <li className="joined__list">
//       <div className="joined__wrapper">
//         <div className="joined__container">
//           <div className="joined__imgWrapper" />
//           <div className="joined__image" />
//           <div className="joined__content">
//             <Link className="joined__title" to={`/${classData.id}`}>
//               <h2>{classData.className}</h2>
//             </Link>
//             <p className="joined__owner">{classData.owner}</p>
//           </div>
//       </div>
//        <Avatar
//           className="joined__avatar"
//           src="https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/s75-c-fbw=1/photo.jpg"
//         />
//         </div>
//     <div className="joined__bottom">
//      <PermContactCalendar />
//   <FolderOpen />
//  </div>
//  </li>
//   );
// };

// export default JoinedClasses;
