## Name
eTicket Market


## Description
This app was developed having in mind my learning process as an backend developer. As such, the client template exists so you can try all the present features of the app. 

Features:
- [x] Authentication
- [x] Expiration service to reserve the ticket for 10 minutes while its being bought 
- [x] Payment integration with Stripe API
- [x] Microservices architecture
- [x] Event bus
- [x] Cloud deployment with k8s and docker
- [x] MVP UI
- [x] CI/CD pipeline with Github Actions
- [x] Testing  

## Badges
![](https://img.shields.io/static/v1?label=Language&message=TypeScript&color=blue)
![](https://img.shields.io/badge/Database-MongoDB-lightgrey)
![](https://img.shields.io/badge/Eventbus-NATS-lightgreen)
![](https://img.shields.io/badge/Virtualization-Docker-lightblue)
![](https://img.shields.io/badge/Test-Jest-dark%20yellow)
![](https://img.shields.io/badge/Containerization-Kubernetes-red)
![](https://img.shields.io/badge/CI%2FCD-Github%20Actions-red)
![](https://img.shields.io/badge/Cloud-Digital%20Ocean-blue)


## Installation

To run this project in development mode, make sure to install skaffold and then run it:

Windows (requires chocolatey):
```
choco install -y skaffold
skaffold dev
```

MacOS:
```
curl -Lo skaffold https://storage.googleapis.com/skaffold/releases/latest/skaffold-darwin-amd64 && \
sudo install skaffold /usr/local/bin/
skaffold dev
```

Linux:
```
curl -Lo skaffold https://storage.googleapis.com/skaffold/releases/latest/skaffold-linux-amd64 && \
sudo install skaffold /usr/local/bin/
skaffold dev
```

## Support

To reach me about this project, send me an [email](rivvarivva@gmail.com) or message me on my [twitter account](https://twitter.com/rivva_a)


## Contributing

Any contributions should be made through PR. There are tests for every service inside the app and the code to run test is the standard ```npm run test```


## License

MIT License
Copyright (c) 2021 Riva Alves 


## Project status

The project is destined to stay a prototype.

## To-do

- [ ] Email service integration
- [ ] HTTPS protocol
