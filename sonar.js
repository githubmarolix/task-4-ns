const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http://3.92.226.222:9000',
  options: {
    'sonar.login': '7392f138f6147df73bf29156af0041a5e45993cb',
    'sonar.sources': './',
    'sonar.exclusions': 'node_modules/**,public/**,views/**,test/**',
    'sonar.projectKey': 'nhs-app',
    'sonar.projectName': 'NHS App',
  },
}, () => {});
