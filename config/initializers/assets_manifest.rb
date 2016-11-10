Rails.application.config.assets_manifest = JSON.parse(File.read(Rails.root.join('public', 'assets', 'manifest.json')))
