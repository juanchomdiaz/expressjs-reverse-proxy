const cors = require("cors");

const { config } = require("../config");

const handleCors = (app) => {
  const allowedOrigins = config.allowedOrigins;

  const corsOptions = {
    origin: (origin, callback) => {
      // Denny requests with no origin
      // (like mobile apps or curl requests)
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
