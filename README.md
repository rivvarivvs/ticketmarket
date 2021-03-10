## Name and Description
**Ticketmarket**: a market-place to sell and buy second-hand tickets


## Project Purpose and Goal
The first motivation for the structure of this app was having a first shoot at a **microservices application**. Even though the size of this app probably doesn't justify this choice, I wanted to go through some of the technical problems of this sort of development. 

Also, one of the drives behind the **automated deployment with a cd/ci pipeline with integrated testing** was so I could have at least some experience dealing with this sort of environment.

#### Features:
- [x] Authentication
- [x] Expiration service to reserve the ticket for 10 minutes while its being bought 
- [x] Payment integration with Stripe API
- [x] Microservices architecture
- [x] Event bus with NATS
- [x] Cloud deployment with k8s and docker
- [x] MVP UI
- [x] CI/CD pipeline with Github Actions
- [x] Testing  
- [ ] Email service integration
- [ ] HTTPS protocol

## Web Stack and Explanation
![](https://img.shields.io/static/v1?label=Language&message=TypeScript&color=blue)
![](https://img.shields.io/badge/Database-MongoDB-lightgrey)
![](https://img.shields.io/badge/Virtualization-Docker-lightblue)
![](https://img.shields.io/badge/Test-Jest-dark%20yellow)
![](https://img.shields.io/badge/Containerization-Kubernetes-red)
![](https://img.shields.io/badge/CI%2FCD-Github%20Actions-red)
![](https://img.shields.io/badge/Cloud-Digital%20Ocean-blue)


I choose JavaScript/NodeJS/Express/Jest as the core of the project so I could have some comfort while I tried my hand at new technologies such as TypeScript. Coming from a JS-only background, I haven't had my try at a strongly typed language and very much appreciated what it offered to this project.
Digital Ocean was chosen because of its simplicity, compared to the big three.

## Problems and Thought Process

*Oh boy*. Comparing to my last project this one was a new step-up in ***complexity***. Managing to learn new technologies which are present throughout all the development process such as TypeScript.

I could list a whole lot of roadblocks but one of the major ones was ***sticking to the principles of the architecture I choose***. A lot of planning comes into building a microservices application and one of the bigger learnings was that when it comes to developing, **planning is probably the most important part of the project**. 

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

To reach me about this project, open an issue.


## Contributing

Any contributions should be made through PR. There are tests for every service inside the app and the code to run test is the standard ```npm run test```


## License

MIT License
Copyright (c) 2021 Riva Alves 
