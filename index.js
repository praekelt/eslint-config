const yaml = require('js-yaml'),
    fs = require('fs');

const _CONFIG = yaml.safeLoad(fs.readFileSync('./.eslintrc.yml', 'utf-8'));

module.exports = _CONFIG;
