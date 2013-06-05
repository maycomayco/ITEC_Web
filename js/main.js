
$(document).ready(function() {
   $('#tip').tooltip({placement:'bottom'});
   $("#vm").click(function(){$(".panel").load("vm.html").fadeIn("slow");});
   $("#homes").click(function(){$(".panel").load("subindex.html").fadeIn("slow");});
   $("#contacto").click(function(){$(".panel").load("contacto.html").fadeIn("slow");});
   $("#institucional").click(function(){$(".panel").load("institucional.html").fadeIn("slow");});
   $("#bolsa").click(function(){$(".panel").load("bolsa.html").fadeIn("slow");});
   $("#galeria").click(function(){$(".panel").load("galeria.html").fadeIn("slow");});
   $("#analista").click(function(){$(".panel").load("analista.html").fadeIn("slow");});
   $("#turismo").click(function(){$(".panel").load("turismo.html").fadeIn("slow");});
   $("#electro").click(function(){$(".panel").load("electro.html").fadeIn("slow");});
});
