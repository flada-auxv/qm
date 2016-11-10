module ApplicationHelper
  def assets_path(path)
    return "http://localhost:8080/#{path}" if Rails.env.development?

    "/assets/#{Rails.application.config.assets_manifest[path]}"
  end
end
