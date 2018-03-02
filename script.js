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
           data += '<td>' + '��������:' + '</td>';
           data += '<td>' + this.nominals[j] + '</td>';
           data += '<td><button onclick="app.EditNom(' + j + ')">�������� �������</button></td>';
           data += '<td>' + '���������� �����:' + '</td>';
           data += '<td>' + this.banknotes[j] + '</td>';
           data += '<td><button onclick="app.EditBanknote(' + j + ')">�������� ���-��</button></td>';
           data += '<td><button onclick="app.DeleteNom(' + j + ')">�������</button></td>';
		   data += '</tr>';
	       sum  += this.nominals[j] * this.banknotes[j];
         }
        data += '<tr>';
        data += '<td>' + '����� � ���������: ' + sum + ' ������' + '</td>';
        data += '</tr>';
        data += '<tr>' + '</tr>';
    }
    return this.el.innerHTML = data;
  };
  
    this.AddNom = function () {
     if (this.nominals.length < 4) { 	
	
       el = document.getElementById('add-nom');
       // �������� ��������
       var nom = el.value;
       if (nom) {
         // �������� ����� ��������
         this.nominals.push(nom.trim());
	     this.banknotes.push(1000);
         // �������� ����� ��������
         el.value = '';
         // �������� ������
         this.FetchAll();
       }
	 }  
	 else {
	 alert('���������� ������ � ��������� �� ����� ���� ������ 4');
	 }
  };

  this.EditNom = function (item) {
    var el = document.getElementById('edit');
    // ��������� �������� � ���� Edit
    el.value = this.nominals[item];
    // �������� ���� Edit
    document.getElementById('spoiler').style.display = 'block';
    self = this;
    document.getElementById('saveEdit').onsubmit = function() {
      // �������� ����� ��������
      var nom = el.value;
      if (nom) {
        // ������� �������� � ������ ���������
        self.nominals.splice(item, 1, nom.trim());
        // ���������� ����� ������
        self.FetchAll();
        // �������� ���� ��� ��������������
        CloseInput();
      }
    }
  };
  this.EditBanknote = function (item) {
    var el = document.getElementById('edit');
    // ��������� �������� � ���� Edit
    el.value = this.banknotes[item];
    // �������� ���� Edit
    document.getElementById('spoiler').style.display = 'block';
    self = this;
    document.getElementById('saveEdit').onsubmit = function() {
      // �������� ����� ��������
      var banknote = el.value;
      if (banknote) {
        // ������� �������� � ������ ���������
        self.banknotes.splice(item, 1, banknote.trim());
        // ���������� ����� ������
        self.FetchAll();
        // �������� ���� ��� ��������������
        CloseInput();
      }
    }
  };

  this.DeleteNom = function (item) {
    // ������� ������� ������
    this.nominals.splice(item, 1);
    this.banknotes.splice(item, 1);
    // �������� ������
    this.FetchAll();
  };  
}
app.FetchAll();
function CloseInput() {
  document.getElementById('spoiler').style.display = 'none';
}