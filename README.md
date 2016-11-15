# QuizMaster
## Prerequisites
- [Ruby](https://github.com/ruby/ruby)
- [Bundler](https://github.com/bundler/bundler)
- [Node.js](https://github.com/nodejs/node)
- [Yarn](https://github.com/yarnpkg/yarn)
- [PostgreSQL](https://www.postgresql.org/)

## Setup
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

## Test
```sh
# server
bin/rspec

# client
cd frontend/
yarn run test
```

## Sitemaps
'/' => Quiz mode
'/admin' => Manage questions

## TODOs
- OMG😱 `yarn run build`(build for production) doesn't work for now(Was it wrong to use DOMPurify on the client side..?)
- Containers/Components should be define React.PropTypes
- In most cases, the feature for administrator(/admin) is required authentication
- Send X-CSRF-Token from the client(https://www.djangoproject.com/weblog/2011/feb/08/security/)
- E2E test(using something like Capybara or WebdriverIO)
- eslint!!(I wonder why I didn't do this from the beginning..)
- deploy
