import firstDb from "~~/server/datasources/first/client";

export default defineEventHandler(async (event) => {
    await firstDb.anyModel.findAll();

    return {
        default: {
            "foo": "bar"
        }
    }
});
