enchant();

/*var gs = {
  hight:320
    ,width:320
    ,fps:30}
};
var game;

var Timer = Class.create(Label,{
  initialize:function(){
    Label.call(this);
    this.text = "TIME:";
    game.currentScene.addChild(this);
  }
});
*/
window.onload = function(){
  game = new Core();

  game.onload = function(){
//    new Timer();
  };

  game.start();
};
