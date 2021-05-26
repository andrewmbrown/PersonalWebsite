const randomWords = require('random-words')

const handler = async (event) => {
  try {
    const subject = event.queryStringParameters.name || randomWords()
    return {
      statusCode: 200,
      body: JSON.stringify(`${subject}`),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
