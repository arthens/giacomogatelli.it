## giacomogatelli.it

Public repo for my personal website.

## Build

Run the compilation and copy steps using `npm run build-prod`.

### Deployment

Install [s3_website](https://github.com/laurilehmijoki/s3_website) using `gem install s3_website`.

Set the following environment variables: `S3_KEY` and `S3_SECRET`.

Deploy using `s3_website push`.
