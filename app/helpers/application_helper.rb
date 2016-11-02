module ApplicationHelper
  def assets_path(path)
    return "http://localhost:8080/#{path}" if Rails.env.development?
    raise # TODO: for production
  end
end
