## CONTRIBUTOR's GUIDE

# Dependencies

This project uses the following tools:

- [black](https://black.readthedocs.io/en/stable/) : For code formatting 
- [postgres]() : As database manager
- [venv]() : As virtual environment manager

# FOR BACKEND DEVELOPERS

## Setup

Navigate to the folder containging the `requirements.txt` file for this project and activate your virtual environment by running the command
	```python3 -m venv venv```
Then run

	``` python3 -m pip install -r requirements.txt```

This would install all the required dependencies.

If you wish to install a package remember to add the package to the requirements.txt file using the command `pip freeze > requirements.txt`  

## Code formatting

Before committing your changes to the repo, ensure that all your python files are black formatted. You can do this by installing and activating black extension on your favourite editor. If your editor does not have support for black, simply run the command
	
	``` black <path to file> ```

Once you are done editing. This would format your code structure.

## changelog.md

In the root folder of this project, there is a `changelog.md` file. We will use this to keep track of changes made, added functionalities and issues solved. Use the format

##[version] - [date]

### [added/fixed]
- precise detail of what was fixed or added

Refer to the following guide:
- [Keeping a changelog](https://keepachangelog.com/en/1.0.0/)
- [semantic versioning]((https://semver.org/spec/v2.0.0.html))
## Models

If you are creating or working with models please ensure that the name of your models is in line with the database schema


# FOR FRONTEND DEVELOPERS
