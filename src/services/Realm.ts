import CategorySchema from '@schemas/CategorySchema';
import EntrySchema from '@schemas/EntrySchema';
import Realm from 'realm';

export const getRealm = async () => {
  const realm = await Realm.open({
    schema: [CategorySchema, EntrySchema],
    schemaVersion: 1,
  });

  return realm;
};
