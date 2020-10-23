require("dotenv").config();
const { getGQLBulkExport } = require("./getGraphQL");

const gqlBulkExport = async () => {
    const {data} = await getGQLBulkExport();
    console.log("BulkExport ====>", data);
    return data;
};

gqlBulkExport();