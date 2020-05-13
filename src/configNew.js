const dev = {
    STRIPE_KEY: "pk_live_HaROJLBtlNmqZEPDVV2w1I5H",
    s3: {
        REGION: "us-east-1",
        BUCKET: "notes-app-2-api-dev-attachmentsbucket-1fa2folrl57u7"
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://api.rewards20.com/dev'"
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_N3A51uig1",
        APP_CLIENT_ID: "7oh4i1j0ee8gblsjqe61ngmi97",
        IDENTITY_POOL_ID: "us-east-1:5ad98751-006b-4a01-aeea-8140322f8f10"
    }
};

const prod = {
    STRIPE_KEY: "pk_live_HaROJLBtlNmqZEPDVV2w1I5H",
    s3: {
        REGION: "us-east-1",
        BUCKET: "notes-app-2-api-prod-attachmentsbucket-o179ucm1o346"
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://api.rewards20.com/prod"
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_8kGaW5Wp2",
        APP_CLIENT_ID: "3p0k2t8t9s1coj7p50fiq89kju",
        IDENTITY_POOL_ID: "us-east-1:530e3835-dd8a-4a02-a257-ad73670ba8b6"
    }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
    ? prod
    : dev;

export default {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 5000000,
    ...config
};