const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const path = require("path");
const fs = require("fs");

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;


const sendmail = async ({
  email,
  subject = "OTP verification",
  textMessage = "",
}) => {
  try {
    const oauth2Client = new google.auth.OAuth2(
      EMAIL_CLIENT_ID,
      EMAIL_CLIENT_SECRET,
      EMAIL_REDIREACT_URL
    );

    oauth2Client.setCredentials({
      refresh_token: EMAIL_REFRESH_TOKEN,
    });

    const accessToken = await new Promise((resolve, reject) => {
      oauth2Client.getAccessToken((err, token) => {
        if (err) {
          console.log(`Failed to create access token ${err}`);
          reject(err);
        }
        resolve(token);
      });
    });

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: EMAIL,
        accessToken,
        clientId: EMAIL_CLIENT_ID,
        clinetSecret: EMAIL_CLIENT_SECRET,
        refreshToken: EMAIL_REFRESH_TOKEN,
      },
    });

    const messageData = {
      from: EMAIL,
      to: email,
      subject: subject,
      text: textMessage,
    };
    return new Promise((resolve, reject) => {
      transport.sendMail(messageData, (err, info) => {
        if (err) {
          reject(err);
        }
        resolve(info);
      });
    });
  } catch (err) {
    console.log({ err });
  }
};

module.exports = { sendmail };
