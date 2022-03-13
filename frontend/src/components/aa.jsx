// import React from 'react';

// export const Test = () => {
//     return(
//         <>
//         <div className='MainContainer'>

//          <p>test</p>

//         </div>
//         </>
//     )
// }






import React from 'react';
import Avatar from '@mui/material/Avatar';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';


function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159),
];

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

export const MyPage = () => {
    const classes = useStyles();
    
    return(
        <>
        <div className='MainContainer'>


          {/* <Box
              className={classes.cardBox}
              sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  '& > :not(style)': {
                  margin: '0 auto',
                  width: 128,
                  height: 128,
                  },
              }}
          >
              <Paper className={classes.cardPaper}></Paper>
              <Paper className={classes.cardPaper}></Paper>
              <Paper className={classes.cardPaper}></Paper>
              <Paper className={classes.cardPaper}></Paper>
              <Paper className={classes.cardPaper}></Paper>
          </Box> */}






                
        <div>
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="caption table">
                <TableHead>
                <TableRow>
                    <TableCell>商品ページの閲覧履歴</TableCell>
                </TableRow>
                </TableHead>
            </Table>
            </TableContainer>
            <Card className={classes.root}>
            <CardHeader
                title="商品名"
                />
            <CardMedia
                className={classes.media}
                image="/static/images/cards/paella.jpg"
                title="item_picture"
                />
            </Card>
        </div>





        </div>
        </>
        )
    }





// import { makeStyles } from '@material-ui/core/styles';
// import ImageList from '@material-ui/core/ImageList';
// import ImageListItem from '@material-ui/core/ImageListItem';
// import ImageListItemBar from '@material-ui/core/ImageListItemBar';
// import IconButton from '@material-ui/core/IconButton';
// import StarBorderIcon from '@material-ui/icons/StarBorder';
// import itemData from './itemData';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//     overflow: 'hidden',
//     backgroundColor: theme.palette.background.paper,
//   },
//   imageList: {
//     flexWrap: 'nowrap',
//     // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
//     transform: 'translateZ(0)',
//   },
//   title: {
//     color: theme.palette.primary.light,
//   },
//   titleBar: {
//     background:
//       'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
//   },
// }));

// export default function SingleLineImageList() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <ImageList className={classes.imageList} cols={2.5}>
//         {itemData.map((item) => (
//           <ImageListItem key={item.img}>
//             <img src={item.img} alt={item.title} />
//             <ImageListItemBar
//               title={item.title}
//               classes={{
//                 root: classes.titleBar,
//                 title: classes.title,
//               }}
//               actionIcon={
//                 <IconButton aria-label={`star ${item.title}`}>
//                   <StarBorderIcon className={classes.title} />
//                 </IconButton>
//               }
//             />
//           </ImageListItem>
//         ))}
//       </ImageList>
//     </div>
//   );
// }