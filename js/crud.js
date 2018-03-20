	Class Crud = {

  get addNom() {

  
     if (app.nominals.length < 4) { 	
	
       el = document.getElementById('add-nom');
       // получить значение
       let nom = el.value;
       if (nom) {
         // Добавить новое значение
         app.nominals.push(nom.trim());
	       app.banknotes.push(1000);
         // Сбросить новое значение
         el.value = '';
         // Обновить список
         FetchAll();
       }
	 }  
	 else {
	 alert('Количество кассет в банкомате не может быть больше 4');
	 }
     };
  };

  get editNom(item) {
    let el = document.getElementById('edit');
    // Заполнить значение в поле Edit
    el.value = app.nominals[item];
    // Показать поле Edit
    document.getElementById('spoiler').style.display = 'block';
    //self = this;
    document.getElementById('saveEdit').onsubmit = function() {
      // Получить новое значение
      let nom = el.value;
      if (nom) {
        // Править значение в списке номиналов
        app.nominals.splice(item, 1, nom.trim());
        // Отобразить новый список
        FetchAll();
        // Спрятать поле для редактирования
        CloseInput();
      }
    }
  };

  get editBanknote(item) {
    let el = document.getElementById('edit');
    // Заполнить значение в поле Edit
    el.value = app.banknotes[item];
    // Показать поле Edit
    document.getElementById('spoiler').style.display = 'block';
    //self = this;
    document.getElementById('saveEdit').onsubmit = function() {
      // Получить новое значение
      var banknote = el.value;
      if (banknote) {
        // Править значение в списке номиналов
        app.banknotes.splice(item, 1, banknote.trim());
        // Отобразить новый список
        FetchAll();
        // Спрятать поле для редактирования
        CloseInput();
      }
    }
  };

 get deleteNom(item) {
    // Удалить текущую строку
    app.nominals.splice(item, 1);
    app.banknotes.splice(item, 1);
    // Обновить список
    FetchAll();
  };  

};

