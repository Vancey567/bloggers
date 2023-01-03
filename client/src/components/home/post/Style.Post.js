import { styled, Box, Typography } from '@mui/material';

export const Container = styled(Box)`
    border: 1px solid #d3cede;
    border-radius: 10px;
    margin: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 350px;
    & > img, & > p {
        padding: 0 5px 5px 5px;
    }
`;

export const Image = styled('img')({
    width: '100%',
    objectFit: 'cover',
    borderRadius: '10px 10px 0 0',
    height: 150
});

export const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
    background-color: "pink";
`;

export const Heading = styled(Typography)`
    font-size: 18px;
    font-weight: 600;
    margin: 0 10px;
`;

export const Details = styled(Typography)`
    font-size: 14px;
    word-break: break-word;
    margin: 0 10px;
`;

export const Category = styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
    & > div {
        margin: 0 20px 0 20px;
    }
`;