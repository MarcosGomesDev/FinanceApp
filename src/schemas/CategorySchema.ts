import { Entry } from '@interfaces/index';
import { ObjectSchema } from 'realm';

interface Category {
  id: string;
  name: string;
  color: string;
  isDefault: boolean;
  isCredit: boolean;
  isDebit: boolean;
  order: number;
  entries: Entry[];
}

// Define a generic function to create ObjectSchema
function createObjectSchema<T>(
  name: string,
  primaryKey: keyof T,
  properties: { [key in keyof T]: any },
): ObjectSchema {
  return {
    name,
    primaryKey: primaryKey as string,
    properties: properties as any,
  };
}

const CategorySchema = createObjectSchema<Category>('Category', 'id', {
  id: { type: 'string' },
  name: { type: 'string' },
  color: { type: 'string', default: '#fff' },
  isDefault: { type: 'bool', default: false },
  isCredit: { type: 'bool', default: false },
  isDebit: { type: 'bool', default: false },
  order: { type: 'int', default: 0 },
  entries: 'Entry[]',
});

export default CategorySchema;
