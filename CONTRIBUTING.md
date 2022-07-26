# GENERAL GUIDE

There are two major folders:
	
	- frontend
	- backend

Frontend folder is reserved for the frontend developers while the backend folder for the backend developers.

Contributing to this project should be done by pull request. The title of your pull request should be contain the `issue` id in the title which your pull request solves. If your pull request is not related to an issue, then the title of your pull request should be well descriptive for easy review.
  
There are two major branches to this repo, the `master` and the `dev` branch.  The `main` branch would be used for production, therefore all pull request should be from the `dev` branch.

# BACKEND DEVELOPERS GUIDE


# Dependencies

This project uses the following tools:

- [black](https://black.readthedocs.io/en/stable/) : For code formatting 
- [postgres]() : As database manager
- [venv]() : As virtual environment manager


## Setup

Navigate to the folder containging the `requirements.txt` file for this project and activate your virtual environment by running the command
	```python3 -m venv venv```
Then run

	``` python3 -m pip install -r requirements.txt```

This would install all the required dependencies.

If you wish to install a package remember to add the package to the requirements.txt file using the command `pip freeze > requirements.txt`.  

## Code formatting

Before committing your changes to the repo, ensure that all your python files are black formatted. You can do this by installing and activating black extension on your favourite editor. If your editor does not have support for black, simply run the command
	
	``` black <path to file> ```

Once you are done editing. This would format your code structure.

## changelog.md

In the root folder of this project, there is a `changelog.md` file. We will use this to keep track of changes made, added functionalities and issues solved. Use the format

	## [version] - [date]

	### [added/fixed]
	- precise detail of what was fixed or added

Refer to the following guide:
- [Keeping a changelog](https://keepachangelog.com/en/1.0.0/)
- [semantic versioning]((https://semver.org/spec/v2.0.0.html))



## Models

If you are creating or working with models please ensure that the name of your models is in line with the database schema



# FRONTEND DEVELOPERS GUIDE


# CONTRIBUTORS.md
In the root folder of this project, there is a `CONTRIBUTORS.md` file. This is used as a list of everyone who has contributed to this project. Before making a pull request, update the CONTRIBUTORS.md file to reflect your name. The list is expected to be ordered alphabetically with your surname coming first. Use the format:

	- [<surname> <name>](github profile link) 

**replace surname and name with your full name (without the <>) and insert your github profile link in the parenthesis.**
