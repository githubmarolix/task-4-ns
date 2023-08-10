const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http://54.163.86.60:9000',
  options: {
    'sonar.login': 'fb464caca0058c777645e903c868262699a2cbf1',
    'sonar.password': 'admin',
    'sonar.sources': './',
    'sonar.exclusions': 'node_modules/**,public/**,views/**,test/**',
    'sonar.login': 'your-sonarqube-login-token',
    'sonar.projectKey': 'nhs-app',
    'sonar.projectName': 'NHS App',
  },
}, () => {});
