const admin = require('firebase-admin');
const functions = require('firebase-functions');

const db = admin.firestore();

export default functions.firestore.document('organisations/{orgId}').onCreate(async (event) => {
	const { orgId } = event.params;
	const data = event.data.data();
	const createdBy = data.createdBy;

	await db.doc(`organisations/${orgId}/users/${createdBy}`).set({ access: 100, added: new Date() });
	return db.doc(`organisations/${orgId}`).update({ createdBy: admin.firestore.FieldValue.delete() });
});
