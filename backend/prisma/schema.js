import { pgTable, integer, serial, text, timestamp } from "drizzle-orm/pg-core";

export const favoritesTable = {
    id: serial("id").primaryKey(),
    userID: integer("userID").notNull(),
    recipeID: integer("recipeID").notNull(),
    title: text("title").notNull(),
    image: text("image"),
    cookTime: integer("cookTime"),
    servings: integer("servings"),
    createdAt: timestamp("createdAt").defaultNow(),
};