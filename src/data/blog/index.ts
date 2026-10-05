import type { BlogPost } from "./types";
import { mosaicMigration } from "./mosaic-migration";

export type { BlogPost, BlogBlock } from "./types";

// Ordered newest-first for the index page.
const all: BlogPost[] = [mosaicMigration];

/** Published posts only — drafts build nothing and link nowhere. */
export const posts: BlogPost[] = all.filter((p) => p.status === "published");

export function postBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

/** Career-log entry → its deep dive, when one exists. */
export function postForOrg(org: string): BlogPost | undefined {
  return posts.find((p) => p.org.toLowerCase() === org.toLowerCase());
}

/** Skill chip label → the post where that skill did its heaviest lifting. */
export function postForSkill(chip: string): BlogPost | undefined {
  return posts.find((p) => p.skills.includes(chip));
}
