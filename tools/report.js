const report = require('cucumber-html-report');
const options = {
  source: './cucumber_report.json',
  dest: './reports',
  title: 'Cucumber Report',
};
report.create(options);

