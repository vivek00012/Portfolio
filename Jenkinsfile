@Library("shared_lib") _
pipeline {
    agent {label "jenagent1"}

    stages {
        stage('Code') {
            steps {
                script{
                    code_checkout("https://github.com/vivek00012/Portfolio.git")
                }
            }
        }
          stage('Clean') {
            steps {
                script{
                    docker_clean("portfolio-vivek","latest","vivek594")
                }
            }
        }
         stage('Build') {
            steps {
                script{
                    docker_build("portfolio-vivek","latest","vivek594")
                }
            }
        }
        stage('Pushing to dockerhub'){
            steps{
               script{
                 docker_push("portfolio-vivek","latest","vivek594")   
               }
            }
        }
        stage('Deploy') {
            steps {
                echo "deploying project"
                sh "docker compose down && docker compose up -d"
            }
        }
    }
}