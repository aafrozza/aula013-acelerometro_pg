/* Classe Geolocalizacao()
   Objetive: Possui as classes e métodos para usar Geolocalização
*/
function Geolocalizacao() {

   var coords;
   var timestamp;
   
   // Métodos set 
   this.setCoords = function (coords) {
      this.coords = coords;
   }
   this.setTimestamp = function (timestamp) {
      this.timestamp = timestamp;
   }

   // Métodos get
   this.getCoords = function () {
      return this.coords;
   }
   this.getTimestamp = function () {
      return this.Timestamp;
   }

   // Métodos do usuário
   this.getPosicaoAtual = function() {
      geolocation.getCurrentPosition(geolocationSuccess, geolocationError, [true]);
   }
   
   function geolocationSucess() {
      this.setCoords(position.coords);
      this.setTimestamp(position.timestamp);
      alert(position.timestamp);
   }
   
   function geolocationError() {
      return (error.message);
   }
   
   this.toString = function () {
      return   "Dispositivo: " + this.getModel() +
             "\nS.O.: " + this.getPlatform() +
             "\nVersão: " + this.getVersion() +
             "\nUUID: " + this.getUuid() +
             "\n** Nome modelo: " + this.getName() +
             "\nCordova: " + this.getCordova();
   }
}
