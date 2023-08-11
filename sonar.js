const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http://3.87.239.204:9000',
  options: {
    'sonar.login': '5afcca0c3955fae6fd92a83eece58ae842071d1a',
    'sonar.sources': './',
    'sonar.exclusions': 'node_modules/**,public/**,views/**,test/**',
    'sonar.projectKey': 'nhs-app',
    'sonar.projectName': 'NHS App',
  },
}, () => {});
