// Salt used for randomnesss generation. Change this in your application.
export const salt = 'YOUR_RANDOM_SALT'

// Credentials for google services. Replace with you own credentials.
export const googleApiKey = 'YOUR_GOOGLE_API_KEY'

// Credentials for google pub/sub service account, retrieved from JSON. Service account must be limited to a role with the following permissions:
// pubsub.subscriptions.consume
// pubsub.subscriptions.create
// pubsub.topics.attachSubscription
// pubsub.topics.publish
// googlePubSubKey must be a valid private key
export const googlePubSubKey = '-----BEGIN PRIVATE KEY-----\n' +
		'YOUR_GOOGLE_PUBSUB_SERVICE_ACCOUNT_KEY' +
		'\n-----END PRIVATE KEY-----\n'
export const googlePubSubEmail = 'YOUR_GOOGLE_PUBSUB_EMAIL'
