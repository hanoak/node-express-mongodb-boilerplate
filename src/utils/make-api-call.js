import axios from "axios";
import utils from "./index.js";
import config from "../config/index.js";

const makeApiCall = async ({
  url,
  method,
  headers,
  data,
  timeout = config.AXIOS_TIMEOUT,
}) => {
  try {
    const res = await axios({
      url,
      timeout,
      method,
      ...(!utils.isEmpty(headers) && { headers }),
      ...(["PUT", "POST", "DELETE", "PATCH"].includes(method) && {
        data,
      }),
    });

    return res?.data;
  } catch (e) {
    console.error(JSON.stringify(e));
    throw e;
  }
};

export default makeApiCall;
