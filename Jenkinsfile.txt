pipeline {
    agent any

    environment {
        IMAGE_NAME = "devops-demo"
    }

    stages {

        stage('Clone') {
            steps {
                git 'https://github.com/yourusername/devops-demo.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${IMAGE_NAME}:latest")
                }
            }
        }
    }
}