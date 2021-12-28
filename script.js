function display()
{
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  for(var i=0;i<names.length;i++){
     var z=names[i].charAt(0);
     var result= z.toLowerCase();
     if(result==='j'){
      byeSpeaker.speak(names[i]);
     }
     else{
      helloSpeaker.speak(names[i]);
     }
  }
}
display();