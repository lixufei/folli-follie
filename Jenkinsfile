pipeline {
    agent any
    triggers {
        pollSCM '* * * * *'
    }
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
            }
        }
    }
}
