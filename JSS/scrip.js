var i = 0;
option = "option";
$(function () {
 
  $("#btn1").click(function (e) {});
  let tipo = ["1", "2", "3"];
  let valores = ["35000", "75000", "18000"];
  for (let i = 0; i < 3; i++) {
    llenarTable(tipo, valores);
  }

  $("#btnagregar").click(function (event) {
    agregar(1);
  });


});

function llenarTable(tipo, valores) {
  var row = $("<tr />");
  $("#table tbody").append(row);
  row.append($('<td id="btnagregar" class="icon-evil">' + "<button class='button-procesar'>Procesar</button>" + "</td>"));
  row.append($("<td>" + tipo[i] + "</td>"));
  row.append($("<td>" + valores[i] + "</td>"));
  row.append(
    $(
      "<td>" +
        '<select name="option" id="' +
        option +
        i +
        '">' +
        "<option ></option>" +
        '<option value="1">1</option>' +
        '<option value="2">2</option>' +
        '<option value="3">3</option>' +
        '<option value="4">4</option>' +
        '<option value="5">5</option>' +
        "</select>" +
        "</td>"
    )
  );
  i++;
}

function agregar(op) {
  // if(op == 1){
  //     $("#table").dblclick();
  // }
  $("#table").on("dblclick", "tbody tr", function (event) {
    let iva, cantidad, valor, total, tipo;
    var $row = $(this).closest("tr");
    var $tds = $row.find("td");
    // var vacio = $tds[0].innerText;
    tipo = $tds[1].innerText;
    valor = $tds[2].innerText;
    // var cantidad = $tds[3].innerText;
    // var cantidad = $("#option").val();  $(this).children("option:selected").val();
    // var selectedOption = this.options[select.selectedIndex];
    //necesito tamar el campor de cantidad que es
    //debugger;
    switch (tipo) {
      case "1":
       // alert("hola")
        cantidad = $("#option0").val();
        valor = (valor * cantidad).toString();
        iva = ((valor * 16) / 100).toString();
        total = (parseInt(iva) + parseInt(valor)).toString();
        break;
      case "2":
        cantidad = $("#option1").val();
        valor = (valor * cantidad).toString();
        iva = ((valor * 16) / 100).toString();
        total = (parseInt(iva) + parseInt(valor)).toString();

        break;
      case "3":
        cantidad = $("#option2").val();
        valor = (valor * cantidad).toString();
        iva = ((valor * 16) / 100).toString();
        total = (parseInt(iva) + parseInt(valor)).toString();

        break;
    }

    $("#valor").text(valor);
    $("#iva").text(iva);
    $("#total").text(total);
    console.log(tipo+" "+valor + " " + iva + " " + total + " " + cantidad);

  });
}