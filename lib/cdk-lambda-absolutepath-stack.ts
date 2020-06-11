import cdk = require('@aws-cdk/core');
import lambda = require('@aws-cdk/aws-lambda');

export class CdkLambdaAbsolutepathStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    new lambda.Function(scope, `test`, {
      code: lambda.AssetCode.fromAsset('lib/test-code'),
      functionName: 'test',
      handler: 'code.handler',
      runtime: lambda.Runtime.NODEJS_12_X,
    })
  }
}
