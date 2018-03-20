import Crud as CrudCls from "/js/crud.js";
let cls = new CrudCls();

var app = new function() {
  this.el = document.getElementById('atms');
  this.nominals = [50, 100, 500, 1000];
  this.banknotes = [1000, 1500, 500, 2000];
  this.Count = function(data) {
    let el   = document.getElementById('counter');
    let name = 'Cassete';
    if (data) {
      if (data > 1) {
        name = 'Cassetes';
      }
      el.innerHTML = data + ' ' + name ;
    } else {
      el.innerHTML = 'No ' + name;
    }
  };
};



 get FetchAll() {
    let data = '';
    if (app.nominals.length > 0) {
        let sum = 0;
         for (j = 0; j < app.nominals.length; j++) {
     	   data += '<tr>';
           data += '<td>' + 'Номиналы:' + '</td>';
           data += '<td>' + app.nominals[j] + '</td>';
           data += '<td><button onclick="cls.editNom(' + j + ')">Поменять номинал</button></td>';
           data += '<td>' + 'Количество купюр:' + '</td>';
           data += '<td>' + app.banknotes[j] + '</td>';
           data += '<td><button onclick="cls.editBanknote(' + j + ')">Поменять кол-во</button></td>';
           data += '<td><button onclick="cls.deleteNom(' + j + ')">Удалить</button></td>';
		   data += '</tr>';
	       sum  += app.nominals[j] * app.banknotes[j];
         }
        data += '<tr>';
        data += '<td>' + 'Всего в банкомате: ' + sum + ' рублей' + '</td>';
        data += '</tr>';
        data += '<tr>' + '</tr>';
    }
    app.Count(app.nominals.length);
    return app.el.innerHTML = data;
  };
  

FetchAll();

function CloseInput() {
   document.getElementById('spoiler').style.display = 'none';
}

