# resume-react-js

The frontend of my portfolio site to provide some background on me as a professional software developer, as well as provide insight on my coding style and to showcase abilities in ReactJS & Material-UI.

---

## Overview

The name "resuME" is a play on the concatenation of the two words "resumé" and "me", so it should be pronounced as "resu-me" (but you probably pronounced it initially as "resume", right?).

This site is a basic, responsive, single-page application and was created to start building up my professional portfolio. All the past projects that I created or contributed to was for specific clients, which of course I cannot provide access to in order to protect their privacy and interests.

_Disclaimer: I have never done website designing before since I'm a developer, not a designer. So I spent quite some time searching for the assets and free online tools to create the logo and edit my pictures._

## Technology Stack

### Frontend

As mentioned earlier, it's a very basic application, so the only technologies implemented here are React (v18) and Material-UI (v5). Of course it goes without saying that HTML, CSS & JS are used to some extent.

### Backend

At the time of creating this ReadMe file, there is no backend. All the information rendered in this site is static data stored in, and exported from, a constants JS file "appData.js".

### Deployment

A CI/CD pipeline is setup in AWS for handling the deployment of this application in an automated manner. More specifically, a CodeBuild project is triggered via a webhook whenever changes to the "main" branch are pushed. The resulting build files are synchronized to an S3 Bucket, and the CloudFront distribution is invalidated. These steps are provided in the buildspec.yml file.

## Enchancements

There are quite a few changes I would like to make in the near future.

-   A few styling enhancements and additions
-   Move all the static data into a database and create a CRUD API backend for fetching the data (I suppose it will only be an "R" API, though)
-   Contact form to send me an email
-   Duplicate this project for other frontend stacks (Angular with Bootstrap; Typescript; FlutterFlow)

## Contributions

Improvements are wellcome!

I absolutely appreciate positive criticism and I'm well aware that I'm not a seasoned expert yet. So, if you see something that does not adhere to best practices, or if there's a better, efficient implementation than mine, then please get in touch with me. Or better yet, create a PR with a suitable explanation of your improved implementation.

---

## License

This project is licensed under the MIT License.
