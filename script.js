var app = new function() {
  this.el = document.getElementById('atms');
  this.nominals = [50, 100, 500, 1000];
  this.banknotes = [1000, 1500, 500, 2000];
  this.Count = function(data) {
    var el   = document.getElementById('counter');
    var name = 'ATM';
    if (data) {
      if (data > 1) {
        name = 'ATMs';
      }
      el.innerHTML = data + ' ' + name ;
    } else {
      el.innerHTML = 'No ' + name;
    }
  };

  this.FetchAll = function() {
    var data = '';
    if (this.nominals.length > 0) {
        var sum = 0;
         for (j = 0; j < this.nominals.length; j++) {
     	   data += '<tr>';
           data += '<td>' + 'Номиналы:' + '</td>';
           data += '<td>' + this.nominals[j] + '</td>';
           data += '<td><button onclick="app.EditNom(' + j + ')">Поменять номинал</button></td>';
           data += '<td>' + 'Количество купюр:' + '</td>';
           data += '<td>' + this.banknotes[j] + '</td>';
           data += '<td><button onclick="app.EditBanknote(' + j + ')">Поменять кол-во</button></td>';
           data += '<td><button onclick="app.DeleteNom(' + j + ')">Удалить</button></td>';
		   data += '</tr>';
	       sum  += this.nominals[j] * this.banknotes[j];
         }
        data += '<tr>';
        data += '<td>' + 'Всего в банкомате: ' + sum + ' рублей' + '</td>';
        data += '</tr>';
        data += '<tr>' + '</tr>';
    }
    return this.el.innerHTML = data;
  };
  
    this.AddNom = function () {
     if (this.nominals.length < 4) { 	
	
       el = document.getElementById('add-nom');
       // получить значение
       var nom = el.value;
       if (nom) {
         // Добавить новое значение
         this.nominals.push(nom.trim());
	     this.banknotes.push(1000);
         // Сбросить новое значение
         el.value = '';
         // Обновить список
         this.FetchAll();
       }
	 }  
	 else {
	 alert('Количество кассет в банкомате не может быть больше 4');
	 }
  };

  this.EditNom = function (item) {
    var el = document.getElementById('edit');
    // Заполнить значение в поле Edit
    el.value = this.nominals[item];
    // Показать поле Edit
    document.getElementById('spoiler').style.display = 'block';
    self = this;
    document.getElementById('saveEdit').onsubmit = function() {
      // Получить новое значение
      var nom = el.value;
      if (nom) {
        // Править значение в списке номиналов
        self.nominals.splice(item, 1, nom.trim());
        // Отобразить новый список
        self.FetchAll();
        // Спрятать поле для редактирования
        CloseInput();
      }
    }
  };
  this.EditBanknote = function (item) {
    var el = document.getElementById('edit');
    // Заполнить значение в поле Edit
    el.value = this.banknotes[item];
    // Показать поле Edit
    document.getElementById('spoiler').style.display = 'block';
    self = this;
    document.getElementById('saveEdit').onsubmit = function() {
      // Получить новое значение
      var banknote = el.value;
      if (banknote) {
        // Править значение в списке номиналов
        self.banknotes.splice(item, 1, banknote.trim());
        // Отобразить новый список
        self.FetchAll();
        // Спрятать поле для редактирования
        CloseInput();
      }
    }
  };

  this.DeleteNom = function (item) {
    // Удалить текущую строку
    this.nominals.splice(item, 1);
    this.banknotes.splice(item, 1);
    // Обновить список
    this.FetchAll();
  };  
}
app.FetchAll();
function CloseInput() {
  document.getElementById('spoiler').style.display = 'none';
}