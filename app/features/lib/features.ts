import fs from 'fs';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'app/content');

export function getFeatureSlugs() {
    return fs.readdirSync(postsDirectory);
}

export async function getFeatureBySlug(slug: string) {
    const realSlug = slug.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, `${realSlug}.md`);
    const { attributes, react: Content } = await import(`../../content/${realSlug}.md`);
    //const { attributes, react: Content } = require(`../content/${realSlug}.md`);

    return { slug: realSlug, frontmatter: attributes, Content };
}

export function getAllFeatures() {
    const slugs = getFeatureSlugs();
    const features = slugs.map((slug) => getFeatureBySlug(slug));
    return Promise.all(features);
}