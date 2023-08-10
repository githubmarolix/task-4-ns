const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http://54.163.86.60:9000',
  options: {
    'sonar.sources': './',
    'sonar.exclusions': 'node_modules/**,public/**,views/**,test/**',
    'sonar.login': 'your-sonarqube-login-token',
    'sonar.projectKey': 'nhs-app',
    'sonar.projectName': 'NHS App',
  },
}, () => {});
