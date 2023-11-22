import { StealthAuthStack } from "../cdk_backend/outputs.json";

const config = {
  // Backend config
  cognito: {
    REGION: "ap-south-1",
    USER_POOL_ID: "ap-south-1_4UjU8vlQ7",
    APP_CLIENT_ID: "5631hejoilk08fgl4pslggivvu",
  },
};

export default config;
