export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
        REGION: "us-east-1",
        BUCKET: "s-notes-3-27-serverless-stack"
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://z36bzr7co5.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_A7TeqkFfv",
        APP_CLIENT_ID: "22u4cde5rtppmudpp5kpnso90o",
        IDENTITY_POOL_ID: "us-east-1:ff7b928e-ab66-49d7-ae6b-247f5763bcce"
    }
};