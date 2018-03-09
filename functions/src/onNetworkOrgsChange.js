const admin = require('firebase-admin');
const functions = require('firebase-functions');

const db = admin.firestore();

export default functions.firestore.document('organisations/{netId}/organisations/{orgId}').onWrite((event) => {
	const { netId, orgId } = event.params;
	return db.doc(`organisations/${orgId}`).update({ network: event.data.exists ? netId : admin.firestore.FieldValue.delete() });
});