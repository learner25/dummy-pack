# dummy-pack

#installation
1.Clone the repository or download the zip

2.Write command ```$ cd to_your_directory```

3.Write the command ```$ npm install```.It will install all the dependencies(babel-loaders,webpack,webpack-dev-server,lodash etc)


#Run the application

1.After installation again type ```npm start```

2.Run the project via [localhost:3333](http://localhost:3333)

#Basic configuration

##Specifying the port
  * Open package.json
  * Search the line ``"build": "webpack -d && cp src/index.html dist/index.html && webpack-dev-server --content-base src/ --inline --hot --port 3333"``
  * Put any port no. instead of 3333

##**[Enjoy](http://localhost:3333)**
