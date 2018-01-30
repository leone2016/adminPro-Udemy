## NOTAS EN RUTAS
RouterModule.forRoot ()app.router)por ser una ruta principal (ForRoot)
RouterModule -> SIEMPRE SE LO INGRESA EL EL IMPORT DE APP.MODULE.TS porque ahi se ingresan todos los modulos
## NOTAS GIT
### Config a Git ###
#test#
* git config --global user.name "write a Name Account"
* git config --global user.email "write a email"
* git config --global color.ui true
* git config --global --list

#### Create a new repository on the command line ###

* git init
* git add -am "message of commit"        => twice steps in one
* git add nameOfFile                     =>Upload only a specific file
* git add -A                             =>Upload all files and folders
* git commit -m "first commit"
* git remote add origin git@github.com:leone2016/makipura.git
* git push -u origin master 

### Create new Branchs  ##
* git checkout  - b nameOfBranch         =>create and move to the new branch
* git branch nameOfBranch                =>create a new branch
* git checkout nameOfBranch              =>move to the new branch


#### push an existing repository from the command line ###

git remote add origin git@github.com:leone2016/makipura.git
git push -u origin master 

## Git 
# Git tag
git tag -a v1.0.0 -m "mensaje referente a la version que se encuentra estable (PRODUCCION)"
git tag         => muesta todos los tag creados en el repositorio
git push --tag  => carga los tags a gitHub

git push        => carga todo al repositorio github no es necesario colocar git push origin master 
