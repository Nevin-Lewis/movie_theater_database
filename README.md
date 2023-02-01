# Movie Time! Excellent!
## Description

This is a functional movie theater database where the user can view current movies and leave reviews or comments on the movies. The user is able to see a list of trending movies and sort them by genre. From there, they are able to choose a movie and view the runtime, director, and description of the movie. They can then scroll down and see a list of comments by other users. This application includes a login system to display the user's past comments and any movie recommendations as well. 

## Contributers

Nevin Lewis @Nevin-Lewis
Shawn Smith @shwnsmith12
Brett Glerum @BrettGlerum
Jake Waller @jakewaller777


## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Questions](#questions)
  * [License](#license)
    
## Installation
To install necessary depnedencies, run the follow commands in the terminal of your desired folder:

```
git clone https://github.com/Nevin-Lewis/movie_theater_database.git
```
Then navigate into the cloned folder and run:

```
npm i
```
Then add delete the .example from the .env file and add your MYSQL passwored to the DB_PASSWORD. 
      
## Usage
To start this program from the movie_theater_database folder terminal run

```
mysql -u root -p
```
Enter your password as prompted then run

```
source db/schema.sql
```

```
quit
```

Then run the following code in the terminal

```
npm run seed
```

```
npm start
```
Open http://localhost:3001/ or visit https://damp-ocean-89555.herokuapp.com/ 

## Contributing
Feel free to copy, or fork this repo. Make any changes that you would like and use it freely. 

## Test
To run test, run the following command:

```
N/A
```    
    
## License

<details>

<summary> MIT License </summary>

Copyright (c) 2022 Wyld-Stallyns

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE

</details>

## Questions
If you have any quetsions about the repo, open an issue or contact me directly at github.com/nevin-lewis
