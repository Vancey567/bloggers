import { Box, Typography, styled } from '@mui/material';
import { Delete, Edit, Share, Favorite} from '@mui/icons-material';

export const FavoriteIcon = styled(Favorite)`
    margin: 0 20px;
    color: #fff;
    stroke: red;
    stroke-width: 10;
`

export const ShareIcon = styled(Share)`
    margin: 0 20px;
    color: #1976D2;
`

export const Container = styled(Box)(({ theme }) => ({
    margin: '50px 100px',
    [theme.breakpoints.down('md')]: {
        margin: 0
    },
}));

export const Image = styled('img')({
    width: '100%',
    height: '50vh',
    objectFit: 'cover'
});

export const EditIcon = styled(Edit)`
    margin: 5px;
    padding: 5px;
    border: 1px solid #878787;
    border-radius: 10px;
`;

export const DeleteIcon = styled(Delete)`
    margin: 5px;
    padding: 5px;
    border: 1px solid #878787;
    border-radius: 10px;
`;

export const Heading = styled(Typography)`
    font-size: 38px;
    font-weight: 600;
    text-align: center;
    margin: 50px 0 10px 0;
`;

export const DetailHeader = styled(Box)`
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 30px 0 0px 0;
`;

export const Author = styled(Typography)(({ theme }) => ({
    color: '#878787',
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    },
}));


// "&:focus": {
    //     cursor: pointer;
    //     backgroundColor: "red"
    // }