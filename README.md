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
* git remote add origin https://github.com/leone2016/adminpro-udemy.git
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

* git remote add origin https://github.com/leone2016/adminpro-udemy.git
* git remote -v
* git push origin nameOfBranch
* git push origin nameOfBranch -f

#### cone an existing repository from the command line gitHUB - bitBUCKET ###
* git clone https://github.com/leone2016/adminpro-udemy.git (este link esta en la parte superior)
### Tags anotadas Ejemplos###
* git tag -a v1.0.0 -m "mensaje con mayor informacion v0.8 el numero de 0.8 depende a numero de commits realizados" 

### subir tags a bitbucket Versiones estables##
* git push  v1.0.0
* git push --tags
 ### crear otra vesion estable para produccion## 
* git tag -a v1.1.0 -m "version Input, Output y View Child" 


## NOTAS del curso
### crear un componente y se cree en un module específico 
* ng g c pages/accountSettings -m="pages/pages.module.ts" --spec=false -is
### crea un servicio y lo registra un modulo en especifico
* ng g s services/settings -m="app.module.ts" --spec=false