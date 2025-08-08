const HTML_TEMPLATE = (text) => {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Welcome KGP EXPRESS</title>
      <style type="text/css">
        body {
          margin: 0;
          background-color: #eceff1;
          font-family: sans-serif;
        }
        table {
          border-spacing: 0;
        }
        td {
          padding: 0;
        }
        img {
          border: 0;
        }
        .wrapper {
          width: 100%;
          table-layout: fixed;
          background-color: #eceff1;
          padding-bottom: 60px;
        }
        .main {
          background-color: #ffffff;
          margin: 0px auto;
          width: 600px;
          border-spacing: 0;
          color: #000000;
          border-radius: 10px;
          border-color: #ebebeb;
          border-width: 1px;
          border-style: solid;
          padding: 50px;
          line-height: 20px;
        }
        .button {
          background-color: #000000;
          color: #ffffff;
          text-decoration: none;
          padding: 12px 20px;
          font-weight: bold;
          border-radius: 5px;
        }
        .logo {
          width: 600px;
          margin: 0px auto;
        }
        .link {
          color: #535353;
          text-decoration-color: #535353;
        }
        .footer {
          margin-top: 20px auto;
          width: 600px;
        }
        .content {
          line-height: 25px;
        }
      </style>
    </head>
    <body>
      <center class="wrapper">
        <table class="logo" width="100%">
          <tr>
            <td style="text-align: center">
              <a href="#"
                ><img
                  src="https://expressapi.kisangoodsprice.com/logo.png"
                  width="130"
                  style="max-width: 100%"
                  alt="Logo"
              /></a>
            </td>
          </tr>
        </table>
        <table class="main" width="100%">
          <tr>
            <td style="text-align: center">
              <p style="font-size: 30px">Hi <strong>${text} !</strong></p>
            </td>
          </tr>
          <tr>
            <td style="text-align: center">
              <img src="https://expressapi.kisangoodsprice.com/waving-hand.png" alt="Waving Hand" />
            </td>
          </tr>
          <tr>
            <td
              style="font-size: 16px;
                text-align: center;
                width: 100%;
                padding: 30px 5px;">
              <p class="content">
                Thank you for signing up for KGP EXPRESS. Please take a sec to confirm
                your email.
              </p>
            </td>
          </tr>
          <tr style="text-align: center">
            <td>
              <a target="__blank" href="#" class="button">YEP! CONFIRMED</a>
            </td>
          </tr>
        </table>
  
        <!-- Footer -->
        <table class="footer">
          <tr>
            <td style="text-align: center; color: #858585">
              <p>© Nesting Probe | Bhootnath Road, Vijay Nager, Patna-800026</p>
              <a href="https://nestingprobe.com/terms-condition.php" class="link">Terms of Use</a>
              <a href="https://nestingprobe.com/privacy-policy.php" class="link" style="padding-left: 15px">Privacy Policy</a>
            </td>
          </tr>
          <tr>
            <td style="text-align: center; padding: 15px; color: #858585">
              <p>Powered by <a href="https://nestingprobe.com/" class="link">Nesting probe</a></p>
            </td>
          </tr>
          <tr>
            <td style="text-align: center">
              <a href="#">
                <img
                  src="https://expressapi.kisangoodsprice.com/circle-facebook.png"
                  alt="Logo"
                  width="30"
                  title="Logo"
              /></a>
              <a href="#">
                <img
                  src="https://expressapi.kisangoodsprice.com/circle-twitter.png"
                  alt="Logo"
                  width="30"
                  title="Logo"
              /></a>
              <a href="#">
                <img
                  src="https://expressapi.kisangoodsprice.com/circle-youtube.png"
                  alt="Logo"
                  width="30"
                  title="Logo"
              /></a>
              <a href="#">
                <img
                  src="https://expressapi.kisangoodsprice.com/circle-linkedin.png"
                  alt="Logo"
                  width="30"
                  title="Logo"
              /></a>
              <a href="#">
                <img
                  src="https://expressapi.kisangoodsprice.com/circle-instagram.png"
                  alt="Logo"
                  width="30"
                  title="Logo"
              /></a>
            </td>
          </tr>
        </table>
      </center>
    </body>
  </html>  
    `;
};

export default HTML_TEMPLATE;
