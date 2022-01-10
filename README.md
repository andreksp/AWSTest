# Objective
Create a node.js application
Run on Lambda
Use AWS Code Pipeline
Use CloudFormation template to automatic deploy the environment.

# To remember
Create S3 Bucket with the same same it is in the cmd.
Create Stack 
Create Pipeline and attach to Stack
https://www.youtube.com/watch?v=UlX38mVvMy8&t=487s

# CloudFormation
aws cloudformation package --template-file template.yml --s3-bucket cf-templates-node-sa-east-1 --output-template-file outputtemplate.yml