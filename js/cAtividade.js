/*!
 * Classe ATIVIDADE
 *
 * Copyright 2013, Angelo Augusto Frozza
 *
 */

 
function Atividade() {
   var disciplina;
   var data;
   var atividade;

   function create() {
   }
   
   function setDisciplina(disc) {
      Self.disciplina = disc;
   }
   function getDisciplina() {
      return Self.Disciplina;
   }
   
   function setData(data) {
      Self.data = data;
   }
   function getData() {
      return Self.data;
   }
   
   function setAtividade(ativ) {
      Self.atividade = ativ;
   }
   function getAtividade(){
      return Self.atividade;
   }
}