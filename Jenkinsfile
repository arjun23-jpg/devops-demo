pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "arjundok23/devops-demo:latest"
        CONTAINER_NAME = "devops-container"
    }

    stages {

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t %DOCKER_IMAGE% .'
            }
        }

        stage('Push to DockerHub') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-creds',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    bat 'echo %DOCKER_PASS% | docker login -u %DOCKER_USER% --password-stdin'
                    bat 'docker push %DOCKER_IMAGE%'
                }
            }
        }

        stage('Deploy Container') {
            steps {
                bat 'docker stop %CONTAINER_NAME% || exit 0'
                bat 'docker rm %CONTAINER_NAME% || exit 0'
                bat 'docker pull %DOCKER_IMAGE%'
                bat 'docker run -d -p 3000:3000 --name %CONTAINER_NAME% %DOCKER_IMAGE%'
            }
        }
    }
}