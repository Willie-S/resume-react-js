# resume-react-js

The frontend of my portfolio site provides some background on me as a professional software developer, offers insight into my coding style, and showcases my abilities in ReactJS and Material-UI.

---

## Overview

The name "resuME" is a play on the concatenation of the two words "resumé" and "me", so it should be pronounced as "resu-me" (but you probably pronounced it initially as "resume", right?).

This site is a basic, responsive, single-page application and was created to start building up my professional portfolio. All the past projects that I created or contributed to were for specific clients, which, of course, I cannot provide access to in order to protect their privacy and interests.

_Disclaimer: I have never done website designing before since I am a developer, not a designer. So, I spent quite some time searching for assets and free online tools to create the logo and edit my pictures._

## Technology Stack

### Frontend

As mentioned earlier, it's a very basic application, so the only technologies implemented here are React (v18) and Material-UI (v5). Of course, it goes without saying that HTML, CSS, and JS are used to some extent.

### Backend

At the time of creating this ReadMe file, there is no backend. All the information rendered on this site is static data stored in, and exported from, a constants JS file named 'appData.js'.

### Deployment

A CI/CD pipeline is set up in AWS for handling the deployment of this application in an automated manner. More specifically, a CodeBuild project is triggered via a webhook whenever changes to the 'main' branch are pushed. The resulting build files are synchronized to an S3 bucket, and the CloudFront distribution is invalidated. These steps are provided in the 'buildspec.yml' file.

## Enchancements

There are quite a few changes I would like to make in the near future:

-   A few styling enhancements and additions
-   Move all the static data into a database and create a CRUD API backend for fetching the data (I suppose it will only be an "R" API, though)
-   Add a contact form to send me an email
-   Duplicate this project for other frontend stacks (Angular with Bootstrap, TypeScript, FlutterFlow)

## Contributions

Improvements are welcome!

I absolutely appreciate constructive criticism, and I'm well aware that I'm not a seasoned expert yet. So, if you see something that does not adhere to best practices, or if there's a better, more efficient implementation than mine, please get in touch with me. Or better yet, create a PR with a suitable explanation of your improved implementation.

---

## License

This project is licensed under the MIT License.
