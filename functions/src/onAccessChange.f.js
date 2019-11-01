const admin = require('firebase-admin');
const functions = require('firebase-functions');

const db = admin.firestore();

exports.myFunction = functions.firestore.document('organisations/{orgId}/users/{uid}').onWrite((change, context) => {
	const { orgId, uid } = context.params;
	const ref = db.doc(`users/${uid}/organisations/${orgId}`);
	return change.after.exists ? ref.set(change.after.data()) : ref.delete();
});