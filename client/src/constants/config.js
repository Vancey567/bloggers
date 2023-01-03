export const API_NOTIFICATION_MESSAGES = {
    loading: {
        title: "Loading...",
        message: "Loading Data. Please wait"
    },
    success: {
        title: "Success",
        message: "Data Loaded Successfully"
    },
    requestFailure: {
        title: "Error!",
        message: "Error while parsing request data"
    },
    responseFailure: {
        title: "Error!",
        message: "Error while fetching response from server. Please try again"
    },
    networkError: {
        title: "Error!",
        message: "Unable connecting to the server. Please check your internet connectivity and try again."
    }
}

export const SERVICE_URLS = {
    userLogin: { url: '/login', method: 'POST' },
    userSignup: { url: '/signup', method: 'POST' },
    getAllPosts: { url: '/posts', method: 'GET', params: true },
    getRefreshToken: { url: '/token', method: 'POST' },
    uploadFile: { url: 'file/upload', method: 'POST' },
    createPost: { url: 'create', method: 'POST' },
    deletePost: { url: 'delete', method: 'DELETE', query: true },
    getPostById: { url: 'post', method: 'GET', query: true },
    newComment: { url: '/comment/new', method: 'POST' },
    getAllComments: { url: 'comments', method: 'GET', query: true },
    deleteComment: { url: 'comment/delete', method: 'DELETE', query: true },
    updatePost: { url: 'update', method: 'PUT', query: true }
}