#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { CdkLambdaAbsolutepathStack } from '../lib/cdk-lambda-absolutepath-stack';

const app = new cdk.App();
new CdkLambdaAbsolutepathStack(app, 'CdkLambdaAbsolutepathStack');
