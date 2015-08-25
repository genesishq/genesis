import path from 'path';
import fs from 'fs';

export default function(publicPath, dest, filename) {
  filename = filename || 'rev-manifest.json';

  return () => {
    this.plugin('done', (stats) => {
      stats = stats.toJson();
      const chunks = stats.assetsByChunkName;
      const manifest = {};

      for (const key in chunks) {
        manifest[publicPath + key + '.js'] = publicPath + chunks[key];
      }

      fs.writeFileSync(
        path.join(process.cwd(), dest, filename),
        JSON.stringify(manifest)
      );
    });
  };
};
