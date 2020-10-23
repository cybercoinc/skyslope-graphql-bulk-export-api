const query = `
    query GetBulkExport(
        $createdAfter: DateTime, 
        $createdBefore: DateTime,
        $modifiedAfter: DateTime,
        $modifiedBefore: DateTime,
    ) {
        listings(
            createdAfter: $createdAfter, 
            createdBefore: $createdBefore,
            modifiedAfter: $modifiedAfter,
            modifiedBefore: $modifiedBefore,
        ) {
            id
            objectType
            status
            createdOn
            modifiedOn
            email
        }
    }
`;

module.exports = {
    query
}