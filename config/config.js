const nodemailer = require("nodemailer");
module.exports = {
  PORT: 5000,
  // mongoURL: 'mongodb://localhost:27017/BRVE_DATABASE',
  mongoURL: 'mongodb://127.0.0.1:27017/BRVE_DATABASE',
  transporter: nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: '',
      pass: ''
    }
  }),
  emailFrom: '',
  FRONTEND_URL: 'http://localhost:4200/',
  TOKEN_SECRET: 'BRVE',
  HASH_TAGS: [
    {
      "label": "#ConnectingStrangers",
      "value": "#ConnectingStrangers"
    },
    {
      "label": "#ConnectingFriends",
      "value": "#ConnectingFriends"
    },
    {
      "label": "#ConnectingFamily",
      "value": "#ConnectingFamily"
    },
    {
      "label": "#Leader",
      "value": "#Leader"
    },
    {
      "label": "#BetterTogether",
      "value": "#BetterTogether"
    },
    {
      "label": "#Inspiring",
      "value": "#Inspiring"
    },
    {
      "label": "#RandomActOfKindness",
      "value": "#RandomActOfKindness"
    },
    {
      "label": "#BigImpact",
      "value": "#BigImpact"
    },
    {
      "label": "#MentalHealth",
      "value": "#MentalHealth"
    },
    {
      "label": "#KindnessMatters",
      "value": "#KindnessMatters"
    },
    {
      "label": "#Gratitude",
      "value": "#Gratitude"
    },
    {
      "label": "#SupportLocal",
      "value": "#SupportLocal"
    },
    {
      "label": "#LoveWhereYouLive",
      "value": "#LoveWhereYouLive"
    }
  ]
};


