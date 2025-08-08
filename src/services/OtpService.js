"use strict";
import chalk from "chalk";
import axios from "axios";
import APP_CONFIG from '../config/app.config.js';

let getWalletBalance = async function (authorization) {
  try {
    const response = await axios({
      url: "https://www.fast2sms.com/dev/wallet",
      method: 'GET',
      params: authorization,

    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

const sendMessage = async (props) => {
  const { data, headers } = generateDataAndHeadersForApi(props);
  const { showLogs } = props;
  try {
    const response = await axios.post(APP_CONFIG.FAST2SMS_API_URL, data, { headers: headers });
    if (showLogs) console.log(chalk.greenBright("Message sent successfully."));
    return response.data;
  } catch (error) {
    if (error.response.data.status_code === 412)
      if (props.showLogs)
        console.log(
          chalk.red("Can't send message. Authorization key missing or invalid.")
        );
    if (error.response.data.status_code === 402)
      if (props.showLogs)
        console.log(chalk.red("Can't send message. Message text is required."));
    if (error.response.data.status_code === 405)
      if (props.showLogs)
        console.log(
          chalk.red("Can't send message.Atleast one Number is required.")
        );
    return error.response.data;
  }
};

let generateDataAndHeadersForApi = function (props) {
  const {
    authorization = APP_CONFIG.FAST2SMS_API_KEY,
    // method = APP_CONFIG.FAST2SMS_METHOD,
    sender_id = APP_CONFIG.FAST2SMS_SENDER_ID,
    language = APP_CONFIG.FAST2SMS_SMS_LANGUAGE,
    route = APP_CONFIG.FAST2SMS_SMS_ROUTE,
    flash = 0,
    numbers,
    message = APP_CONFIG.FAST2SMS_SMS_TEMPLATE_ID,
    variables = APP_CONFIG.FAST2SMS_SMS_VARIABLE,
    variables_values
  } = props;

  let nums = numbers.join(",");
  let data = {
    sender_id: sender_id,
    message: message,
    language: language,
    route: route,
    flash: flash,
    numbers: nums,
    variables: variables,
    variables_values: variables_values,
  };
  let headers = {
    authorization: authorization,
  };

  return { data, headers };
};

export default {
  sendMessage,
  getWalletBalance
};