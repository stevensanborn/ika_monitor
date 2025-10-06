import { pgTable, serial, text, timestamp, boolean } from 'drizzle-orm/pg-core';

export const recipes = pgTable('hello', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  isPublic: boolean('is_public').default(false),
});