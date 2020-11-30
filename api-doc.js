const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require("swagger-jsdoc");
// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "Document API",
            description: "Test Backend",
            contact: {
                name: "HaiHoang Developer"
            },
        }
    },
    // ['.routes/*.js']
    // apis: ["app.js"]
    apis: ['./src/packages/users/route.js','./src/routesBase.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = (app) => {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
}