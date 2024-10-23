
To install virtualenv

```bash
pip install virtualenv
```

To create env

```bash
virtualenv <environment_name>
```

To check version of virtualenv

```bash
virtualenv --version
```

To activate virtualenv 

**for MAC/Linux**

```bash
source <environment_name>/bin/activate
```

**for Windows**

```bash
cd <environment_name>
Scripts\activate
```
or 

```bash
<environment_name>\Scripts\activate
```


To deactivate virtualenv

```bash
deactivate
```

To install any package in particular virtualenv

```bash
<environment_name> pip install <package_name>
```

To create `requirements.txt` file 

**Note: It is a file that contains a list of packages or libraries needed to work on a project that can all be installed with the file. It provides a consistent environment and makes collaboration easier.**

```bash
pip freeze > requirements.txt
```

To install all packages of `requirements.txt` file

```bash
pip install -r requirements.txt
```

Reactivate a virtual environment 
If you want to reactivate an existing virtual environment, follow the same instructions about activating a virtual environment. There’s no need to create a new virtual environment.

