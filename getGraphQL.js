require('dotenv').config();
const moment = require("moment");
const fetch = require("node-fetch");
const Timestamp = moment().utc().format();

const { getAuth } = require("./getAuth");
const {query} = require("./gqlQuery");
const {variables} = require("./gqlVariables");


// Method to fetch GraphQL Bulk Export from SkySlope
const getGQLBulkExport = async () => {
    try {
            const {Session} = await getAuth();
            console.log("Session: ", Session);
			const options = {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Session,
					Timestamp,
				},
				body: JSON.stringify({
					query: query,
					variables,
				}),
			};
            const url = `${process.env.GRAPHQL_URL}`;
			const values = await fetch(url, options);
			console.log("GraphQL status code: ",values.status);
			console.log("GraphQL status text: ",values.statusText);
			const toJSON = await values.json();
			return toJSON;
		} catch (error) {
        console.error(error);
    }
};

module.exports = {
    getGQLBulkExport
};


