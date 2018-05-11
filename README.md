# openSEA Cloud Functions

Functions currently in production:

 * **onOrganisationAdded**: Responds to a newly created organisation. Adds user listed in `creator` field as the owner, then removes the `creator` field.
 * **onAccessChange**: Propagates changes to an organisation's access (`/organisation/{orgId}/users/{uid}`) to be reflected in the user (`/users/{uid}/organisations/{orgId}`) as well.
