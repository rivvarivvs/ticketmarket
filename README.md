## Name
eTicket Market


## Description
This app was developed having in mind my learning process as an backend developer. As such, I provide all the APIs endpoints to all of the microservices with their internal logic to process a full-on market for every kind of tickets. It has a payment system integrated. All the microservices communicate with each other through an event bus. The app also has configuration to be deployed in local k8s clusters.


## Badges
![](https://img.shields.io/static/v1?label=Language&message=TypeScript&color=blue)
![](https://img.shields.io/badge/Database-MongoDB-lightgrey)
![](https://img.shields.io/badge/Database-Redis-lightgrey)
![](https://img.shields.io/badge/Eventbus-NATS-lightgreen)
![](https://img.shields.io/badge/Virtualization-Docker-lightblue)
![](https://img.shields.io/badge/Test-Jest-dark%20yellow)
![](https://img.shields.io/badge/Containerization-Kubernetes-red)
![](https://img.shields.io/badge/CI%2FCD-Github%20Actions-red)
![](https://img.shields.io/badge/Cloud-Digital%20Ocean-blue)


## Installation

To run this project in development mode, make sure to install skaffold and then run it:

Windows:
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

At the moment, I'm still in development mode, working on it full-time so I can deliver it as soon as possible. The project is destined to stay a prototype.
