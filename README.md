# Projeto Button Page

Este projeto é uma demonstração de uma página web simples que coleta informações do usuário, utiliza a geolocalização para obter a posição atual e faz a busca reversa do endereço usando a API do Nominatim (OpenStreetMap). Em seguida, os dados coletados são enviados para um endpoint do Google Apps Script, que os registra em uma planilha do Google.

## Estrutura do Projeto

- **button_page.html**  
  Página principal que exibe um botão e um modal para coleta de dados do usuário.  
  [button_page.html](/D:/Documents/00-DEV/VilaPet/Nova pasta (3)/button_page.html)

- **style.css**  
  Arquivo com estilos CSS para o modal e o conteúdo.  
  [style.css](/D:/Documents/00-DEV/VilaPet/Nova pasta (3)/style.css)

- **Code.gs**  
  Script do Google Apps Script que recebe os dados via POST e os armazena em uma planilha do Google.  
  [Code.gs](/D:/Documents/00-DEV/VilaPet/Nova pasta (3)/Code.gs)

## Como Funciona

1. **Interface e Coleta de Dados:**  
   Ao carregar a página, o usuário pode clicar no botão "Click Me". Isto abre um modal onde o usuário preenche os campos de nome e telefone.  
   O navegador solicita a geolocalização e, utilizando a função de busca reversa (`getAddressFromCoordinates`), o endereço completo é obtido.

2. **Envio dos Dados:**  
   Após o preenchimento, os dados (nome, telefone, latitude, longitude, estado, cidade, bairro e logradouro) são enviados via `POST` para o serviço do Google Apps Script.

3. **Processamento no Google Apps Script:**  
   O script em [Code.gs](Code.gs) processa a requisição e adiciona os dados em uma planilha do Google. Se ocorrer algum erro, uma mensagem de erro é retornada.

## Instruções de Uso

1. Faça o upload da página `button_page.html` e do arquivo `style.css` em um servidor de hospedagem ou use um ambiente local.
2. Configure o Google Apps Script com o arquivo [Code.gs](Code.gs) e publique-o como um serviço web para ser consumido pela página.
3. Acesse a página e teste a funcionalidade clicando no botão e preenchendo os dados no modal.

## Considerações

- Certifique-se de que as permissões de geolocalização estejam habilitadas no navegador.
- Verifique se a URL do endpoint no `fetch` dentro do HTML está correta e corresponde à URL publicada do Google Apps Script.
- Os dados sensíveis e as informações de localidade são manipulados de forma que o usuário é informado caso ocorram problemas durante o processo.
