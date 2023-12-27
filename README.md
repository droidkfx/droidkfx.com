# droidkfx.com

The portfolio site for Kyle Brown

## TODO

- [ ] s3 [proxy for api](https://repost.aws/knowledge-center/api-gateway-s3-website-proxy)

## Deployment

Deployment is handled in different ways depending on what you are deploying.

### Frontend

The front end is deployed simply by synchronizing s3 with the front end directory. This can be done with the following
command:

```bash
aws s3 sync ./site s3://www.droidkfx.com --delete
```

### Infrastructure

This application infrastructure is deployed using AWS Cloudformation. The template is located in the `cf` directory.
Check out what deployment would do by running the following command:

```bash 
aws cloudformation deploy --template-file cf/droidkfx.com.yaml --stack-name droidkfx-com --capabilities CAPABILITY_IAM --no-execute-changeset
```

This creates a change set that can be reviewed before applying anything. You can see what changes would be made by
running the command it displays after running the above. It will be something like:

```bash
aws cloudformation describe-change-set --change-set-name $arn
```

If you are happy with the changes you can use:

```bash
aws cloudformation execute-change-set --change-set-name $arn
```

If you are unhappy with them or if you no longer need the change set you can use the following command to delete the
change set:

```bash
aws cloudformation delete-change-set --change-set-name $arn
```