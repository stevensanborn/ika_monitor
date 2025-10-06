CREATE TABLE "hello" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"is_public" boolean DEFAULT false
);
