const random = require("../utils/random");
const createFiles = require("../file-system/createFile");
class compileService {
  constructor() {}
  async runCode(req) {
    try {
      const data = {
        src: req.body.src,
        stdin: req.body.stdin,
        lang: req.body.lang,
        filename: "Test" + random(10),
      };
      console.log(req.body.src);
      if (req.body.src && req.body.lang) {
        if (data) {
          const ans = await createFiles(data);
          console.log("Output --> " + JSON.stringify(ans));
          return ans;
        }
      } else {
        console.log("Invalid Request has been made");
        let result = {
          output: "Invalid Request",
          status: "Invalid Request",
        };
        return result;
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

module.exports = compileService;
