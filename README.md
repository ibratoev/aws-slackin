# AWS Slackin
This is project for creating a simple Slack auto invite page that will be hosted in AWS. The project is a fork of:
* https://github.com/rauchg/slackin
* https://github.com/acemod/slackin-python

## How to use
The project contains two parts - a web page intended for hosing in AWS S3 and a python lambda function for sending the invites.

For the website you need to do the following:
1. Copy all *.template file in the web directory removing the .template suffix and edit them accordingly.
2. Upload the result to and S3 bucket.
3. (Optionally) You can server that static content from CloudFront.

For the lambda function you need to do the following:
1. Copy the run.py.template file to a new file with name run.py and edit accordingly.
2. Install pip requirements from the requirements.txt file and prepare and upload a AWS Lambda Function.
3. Create a AWS API Gateway with a single POST method to call the Lambda function.
