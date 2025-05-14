pipeline {
  agent any

  tools {
    nodejs "node-18" // O mesmo nome configurado em Global Tools
  }

  environment {
    CI = 'true'
  }

  stages {
    stage('Checkout') {
      steps {
        git 'https://github.com/IgorConstant/AngularNew.git'
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm install'
        dir('frontend') { // se você separa frontend/backend
          sh 'npm install'
        }
      }
    }

    stage('Build Angular') {
      steps {
        dir('frontend') {
          sh 'npm run build' // ou ng build se usar o Angular CLI
        }
      }
    }

    stage('Run Tests') {
      steps {
        dir('frontend') {
          sh 'npm test -- --watch=false --browsers=ChromeHeadless'
        }
      }
    }

    // Opcional
    stage('Deploy') {
      when {
        branch 'main'
      }
      steps {
        echo 'Fazer deploy aqui via SSH, Docker, Firebase, etc.'
      }
    }
  }

  post {
    always {
      junit '**/coverage/**/TESTS-*.xml'
    }
  }
}
