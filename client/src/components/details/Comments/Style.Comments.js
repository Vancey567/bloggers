import { Box, TextareaAutosize, styled } from '@mui/material';

export const Container = styled(Box)`
    margin-top: 100px;
    display: flex;
`;

export const Image = styled('img')({
    width: 50,
    height: 50,
    borderRadius: '50%'
});

export const StyledTextArea = styled(TextareaAutosize)`
    height: 100px !important;
    width: 100%; 
    margin: 0 20px;
`;

export const initialValue = {
    name: '',
    postId: '',
    date: new Date(),
    comments: ''
}