
 # pip is the package installer and package manager for Python

 **Basic commands**

 - To install any package 

```bash
pip install <package_name>
```


- To uninstall any package

```bash
pip uninstall <package_name>
```


- To help

```bash
pip --help
```
 or 

```bash 
pip -h
```


- To see the list of all installed packages

```bash
pip list
```

- To see the all version of installed packages

```bash
pip list --outdated
```
or 

```bash
pip list -o
```

- To upgrade single package

```bash
pip install --upgrade <package_name>
```
or

```bash
pip install -U <package_name>
```

- To upgrade all packages

```bash
pip install --upgrade *
```


- To installed packages in requirements format.

Step 1.
```bash
pip freeze
```

- This is to be used when someone requires package to run projects

Step 2.
```bash 
pip freeze > requirements.txt
```

- To install from the given requirements file. This option can be used multiple times.

```bash
pip install -r <file_name>
```
or

```bash
pip install --requirement <file_name>
```