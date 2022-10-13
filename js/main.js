//Edición Experiencia
const agregarExperiencia = () => {
  document.getElementById('experiencia').insertRow(-1).innerHTML = '<div class="container-fluid"><div class="row"><div class="col-2">Logo</div><div class="col-8">texto</div><div class="col-2 editar"><ul><button class="btn btn-link"  onclick="agregarExperiencia()"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16"><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/></svg></button><button type="button" class="btn btn-link"onclick="eliminarExperiencia()"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg></button></div></div></div>'
}

const eliminarExperiencia = () => {
const table = document.getElementById('experiencia')
const rowCount = table.rows.length

if (rowCount <= 0)
  alert('Debe dejar al menos 1 referencia de Experiencia')
else
  table.deleteRow(rowCount -1)
}

//Edición Educación
const agregarEducacion = () => {
  document.getElementById('educacion').insertRow(-1).innerHTML = '<div class="container-fluid"><div class="row"><div class="col-2">Logo</div><div class="col-8">texto</div><div class="col-2 editar"><ul><button class="btn btn-link"  onclick="agregarEducacion()"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16"><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/></svg></button><button type="button" class="btn btn-link"onclick="eliminarEducacion()"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg></button></div></div></div>'
}

const eliminarEducacion = () => {
const table = document.getElementById('educacion')
const rowCount = table.rows.length

if (rowCount <= 0)
  alert('Debe dejar al menos 1 referencia de Educacion')
else
  table.deleteRow(rowCount -1)
}

//Edición Proyectos
const agregarProyecto = () => {
  document.getElementById('proyecto').insertRow(-1).innerHTML = '<div class="container-fluid"><div class="row"><div class="col-10">Ingrese Proyecto</div><div class="col-2 editar"><ul><button type="button" class="btn btn-link"onclick="eliminarProyecto()"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg></button></ul></div></div></div>'
}

const eliminarProyecto = () => {
const table = document.getElementById('proyecto')
const rowCount = table.rows.length
  
if (rowCount <= 0)
  alert('Debe dejar al menos 1 referencia de Proyecto')
else
  table.deleteRow(rowCount -1)
}




 

 