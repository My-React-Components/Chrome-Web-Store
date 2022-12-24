# execute this powershell script
function gitPush($message){

  # it will build our project
  
 git add . 
 git commit -m $message 
 git push origin  (git branch --show-current )
}
  gitPush -message $args[0]
  