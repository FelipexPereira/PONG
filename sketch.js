// variaveis bolinha
let xBolinha = 300;
let yBolinha = 180;
let diametroBolinha = 15;
let raioBolinha = diametroBolinha / 2
let velocidadeXBolinha = 5;
let velocidadeYBolinha = 5;

// variaveis raquete
let raqueteLargura = 15;
let raqueteAltura = 70;
// posicao raquete jogador
let xRaqueteJogador = 5;
let yRaqueteJogador = 150;

//let colidiu = false;

// posicao raquete adversario
let xRaqueteAdversario = 585;
let yRaqueteAdversario = 150;
// velocidade raquete oponente
let velocidadeYAdversario = 5;

// placares
let jogadorPontos = 0;
let adversarioPontos = 0;

// sons jogo
let raquetada;
let ponto;
let trilha;

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostrarBolinha();
  movimentoBolinha();
  verificaColicaoBorda();  
  mostrarRaquete(xRaqueteJogador, yRaqueteJogador);
  movimentoRaqueteJogador();
  verificaColisaoRaquete();
  mostrarRaquete(xRaqueteAdversario, yRaqueteAdversario);
  //colicaoRaqueteBiblioteca();
  movimentoRaqueteAdversario();
  incluiPlacar();
  marcarPonto();
  }

function mostrarBolinha(){
  circle(xBolinha,yBolinha,diametroBolinha);  
}

function movimentoBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColicaoBorda(){
  if (xBolinha+ raioBolinha > width ||
     xBolinha - raioBolinha< 0){
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raioBolinha > height
     || yBolinha - raioBolinha < 0){
    velocidadeYBolinha *= -1;
  }
}

function mostrarRaquete(x,y){
  rect(x, y, raqueteLargura, raqueteAltura)
}

function movimentoRaqueteJogador(){
  if (keyIsDown(UP_ARROW)){
    yRaqueteJogador -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaqueteJogador += 10;
  }
}

function movimentoRaqueteAdversario(){
 if (keyIsDown(87)){
    yRaqueteAdversario -= 10;
  }
  if (keyIsDown(83)){
    yRaqueteAdversario += 10;
  }
}

function verificaColisaoRaquete(){
  if (  xBolinha - raioBolinha < xRaqueteJogador + raqueteLargura
     && yBolinha - raioBolinha < yRaqueteJogador + raqueteAltura
     && yBolinha + raioBolinha > yRaqueteJogador){
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
  if (  xBolinha + raioBolinha > xRaqueteAdversario 
     && yBolinha + raioBolinha < yRaqueteAdversario + raqueteAltura
     && yBolinha - raioBolinha > yRaqueteAdversario    
     ){
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function incluiPlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 140, 0))
  rect(130, 5, 40, 30);
  fill(255);
  text(jogadorPontos, 150, 30);
  fill(color(255, 140, 0))
  rect(430, 5, 40, 30);
  fill(255);
  text(adversarioPontos, 450, 30);
}

function marcarPonto(){
  if (xBolinha < 10){
    adversarioPontos += 1
    ponto.play()
  }
  if (xBolinha > 590){
    jogadorPontos += 1
    ponto.play()
  }
}

/*function colicaoRaqueteBiblioteca(){
  colidiu =
    collideRectCircle(xRaqueteJogador, yRaqueteJogador, raqueteLargura, raqueteAltura, xBolinha, yBolinha, raioBolinha);
  if (colidiu){
    velocidadeXBolinha *= -1
  }  
}*/