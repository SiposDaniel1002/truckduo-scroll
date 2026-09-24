import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

// Vite rewrites a <link>'s href to the hashed build file but leaves imagesrcset alone. The hero
// preload in index.html needs the srcset, so the browser fetches the same width the <img> picks.
function rewriteImageSrcset(): Plugin {
  return {
    name: 'rewrite-imagesrcset',
    apply: 'build',
    transformIndexHtml: {
      order: 'post',
      handler(html, { bundle }) {
        const assets = Object.values(bundle ?? {}).filter((out) => out.type === 'asset')
        return html.replace(/imagesrcset="([^"]+)"/g, (_, srcset: string) => {
          const rewritten = srcset.replace(/\/(src\/assets\/[\w.-]+)/g, (path, file: string) => {
            const asset = assets.find((out) => out.originalFileNames.includes(file))
            if (!asset) throw new Error(`imagesrcset: ${path} is not in the bundle`)
            return `/${asset.fileName}`
          })
          return `imagesrcset="${rewritten}"`
        })
      },
    },
  }
}

export default defineConfig({
  plugins: [react(), rewriteImageSrcset()],
})
