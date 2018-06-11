const yaml = require('js-yaml'),
    fs = require('fs');

const _CONFIG = yaml.safeLoad(fs.readFileSync(`${__dirname}/.eslintrc.yml`, 'utf-8'));

module.exports = _CONFIG;
