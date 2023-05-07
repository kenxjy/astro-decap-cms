import { defineConfig } from 'astro/config';
import NetlifyCMS from 'astro-netlify-cms';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [
		mdx(),
		sitemap(),
		NetlifyCMS({
			previewStyles: ['/src/styles/global.css'],
			config: {
				backend: {
					name: 'github',
					branch: 'master',
					repo: 'kenxjy/astro-decap-cms',
				},
				publish_mode: 'editorial_workflow',
				collections: [
					{
						name: "blog",
						label: "Blog",
						folder: "src/content/blog",
						create: true,
						slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
						fields: [
							{ label: "Title", name: "title", widget: "string" },
							{ label: "Description", name: "description", widget: "string" },
							{ label: "Publish Date", name: "pubDate", widget: "datetime" },
							{ label: "Updated Date", name: "updatedDate", widget: "datetime" },
							{ label: "Hero Image", name: "heroImage", widget: "image" },
							{ label: "Body", name: "body", widget: "markdown" }
						]
					}
				]
			}
		})
	],
});