function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    
    // Pega os dados do formulário
    var params = e.parameter;
    
    // Prepara a linha de dados
    var rowData = [
      new Date(),  // Timestamp
      params.name,
      params.phone,
      params.latitude,
      params.longitude,
      params.estado,
      params.cidade,
      params.bairro,
      params.logradouro
    ];
    
    // Adiciona os dados na planilha
    sheet.appendRow(rowData);
    
    return ContentService.createTextOutput("Sucesso!");
    
  } catch (error) {
    return ContentService.createTextOutput("Erro: " + error.toString());
  }
}