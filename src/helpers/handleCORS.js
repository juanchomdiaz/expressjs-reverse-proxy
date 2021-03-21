const cors = require("cors");

const { config } = require("../config");

const handleCors = (app) => {
  const allowedOrigins = config.allowedOrigins;

  //Workaround: in some cases, origin is undefined and host must be read
  app.use(function (req, res, next) {
    req.headers.origin = req.headers.origin || req.headers.host;
    console.log(req.headers.origin);

    next();
  });

  const corsOptions = {
    origin: (origin, callback) => {
      // Denny requests with no origin
      // (like mobile apps or curl requests)
      console.log(origin);

      if (!origin) return callback(null, false);

      if (!allowedOrigins.includes(origin)) {
        var msg =
          "The CORS policy for this site does not " +
          "allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }

      return callback(null, true);
    },
  };

  app.disable("x-powered-by");
  app.options("*", cors(corsOptions));
  app.use(cors(corsOptions));
};

module.exports = {
  handleCors,
};
