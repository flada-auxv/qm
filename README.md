# QuizMaster
## Prerequisites
- [Ruby](https://github.com/ruby/ruby)
- [Bundler](https://github.com/bundler/bundler)
- [Node.js](https://github.com/nodejs/node)
- [Yarn](https://github.com/yarnpkg/yarn)
- [PostgreSQL](https://www.postgresql.org/)

## Setup
### development
```
bundler install
cd frontend && yarn install

bin/rake db:setup

# only production
createuser --createdb --pwprompt quiz_master
RAILS_ENV=production bin/rake db:setup
```

## Run
### development
```sh
cd frontend/ && yarn run development

# open another terminal window, then
bin/rails s
```

### production
```sh
cd frontend/
yarn run build

cd -
SECRET_KEY_BASE=$(bin/rake secret) QUIZ_MASTER_DATABASE_PASSWORD=password RAILS_SERVE_STATIC_FILES=true RAILS_ENV=production bin/rails s
```

## Sitemaps
'/' => Quiz mode
'/admin' => Manage questions
