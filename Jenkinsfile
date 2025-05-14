pipeline {
  agent any

  environment {
    BACKEND_DIR = 'backend'
    FRONTEND_DIR = 'frontend'
    NODE_ENV = 'production'
  }

  tools {
    nodejs 'NodeJS_20' // ou o nome que deu ao configurar
  }

  stages {
    stage('Checkout') {
      steps {
        git 'https://github.com/IgorConstant/AngularNews.git'
      }
    }

    stage('Install Backend') {
      steps {
        dir("${env.BACKEND_DIR}") {
          sh 'npm install'
        }
      }
    }

    stage('Install Frontend') {
      steps {
        dir("${env.FRONTEND_DIR}") {
          sh 'npm install'
        }
      }
    }

    stage('Lint & Test Frontend') {
      steps {
        dir("${env.FRONTEND_DIR}") {
          sh 'npm run lint || true' // opcional
          sh 'npm run test -- --watch=false --browsers=ChromeHeadless'
        }
      }
    }

    stage('Test Backend') {
      steps {
        dir("${env.BACKEND_DIR}") {
          sh 'npm test || true' // se tiver testes
        }
      }
    }

    stage('Build Frontend') {
      steps {
        dir("${env.FRONTEND_DIR}") {
          sh 'npm run build'
        }
      }
    }
  }

  post {
    failure {
      echo 'Pipeline falhou!'
    }
    success {
      echo 'Pipeline concluída com sucesso!'
    }
  }
}
