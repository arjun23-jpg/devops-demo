pipeline {
    agent any

    environment {
        IMAGE_NAME = "devops-demo"
    }

    stages {

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${IMAGE_NAME}:latest")
                }
            }
        }

    }
}