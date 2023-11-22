const AwsRegion = 'ap-south-1'

const StealthAuthStack = {
  StealthUserPoolId: "ap-south-1_4UjU8vlQ7",
  StealthUserPoolClientId: "5631hejoilk08fgl4pslggivvu",
};

const awsmobile = {
  aws_project_region: AwsRegion,
//   aws_cognito_identity_pool_id:
//     "ap-south-1:a839914d-05c0-405d-b649-29dc7bc15cb2",
  aws_cognito_region: AwsRegion,
  aws_user_pools_id: StealthAuthStack.StealthUserPoolId,
  aws_user_pools_web_client_id: StealthAuthStack.StealthUserPoolClientId
};

export default awsmobile;
