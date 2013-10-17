/*!
 * Classe AGENDA
 *
 * Copyright 2013, Angelo Augusto Frozza
 *
 */

function Agenda() {
   var agenda;
   
   function create() {
      Self.agenda = new Array();
   }
   
   function addAtividade(ativ) {
      Self.agenda.add(ativ);
   }
}