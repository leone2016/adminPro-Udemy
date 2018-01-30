## NOTAS EN RUTAS
* RouterModule.forRoot ()app.router)por ser una ruta principal (ForRoot)
* RouterModule -> SIEMPRE SE LO INGRESA EL EL IMPORT DE APP.MODULE.TS porque ahi se ingresan todos los modulos
## NOTAS GIT
### Config a Git ###

* git config --global user.name "write a Name Account"
* git config --global user.email "write a email"
* git config --global color.ui true
* git config --global --list

#### Create a new repository on the command line ###

* git init
* git add -am "message of commit"       
* git add nameOfFile                    
* git add -A                            
* git commit -m "first commit"
* git commit --amend -m "Edit the message of the last change uploaded"
* git remote add origin git@github.com:leone2016/makipura.git
* git push -u origin master 

### Create new Branchs  ##
* git checkout  - b nameOfBranch         
* git branch nameOfBranch                
* git checkout nameOfBranch      

### Moverse a travez de los commits (versionamiento) ###

* git log
* git checkout [copiar el codigo commit]
* git checkout [nombre de la rama]
* git help [atributo que se desea tener documentacion]        

#### push an existing repository from the command line gitHUB - bitBUCKET ###

* git remote add origin git@github.com:leone2016/makipura.git
* git remote -v
* git push origin nameOfBranch
* git push origin nameOfBranch -f

#### cone an existing repository from the command line gitHUB - bitBUCKET ###
* git clone https://leone2015@bitbucket.org/leone2015/tesis40.git (este link esta en la parte superior)
### Tags anotadas Ejemplos###
* git tag -a v0.8 -m "mensaje con mayor informacion v0.8 el numero de 0.8 depende a numero de commits realizados" 
* git tag -a v0.1 -m "mensaje a la primera subida"

### subir tags a bitbucket ##
* git push origin v0.8
* git push origin --tags 