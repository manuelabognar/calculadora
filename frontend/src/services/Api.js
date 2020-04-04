const ApiService = {

  ListaAlunos: () => {
    return fetch('http://localhost:8000/api/alunos')
      .then(res => ApiService.TrataErros(res))
      .then(res => res.json());

  },

  CriaAluno: aluno => {
    return fetch('http://localhost:8000/api/alunos', { 
      method:'POST', 
      headers: { 'content-type': 'application/json' }, 
      body: aluno })
      
      .then(res => ApiService.TrataErros(res))
      .then(res => res.json());
  },
  
  RemoveAluno: id => {
    return fetch(`http://localhost:8000/api/alunos/${id}`, { 
      method:'DELETE', 
      headers: { 'content-type': 'application/json' } })
      
      .then(res => ApiService.TrataErros(res))
      .then(res => res.json());
  },

  TrataErros: res => {
    if (!res.ok) {
      throw Error (res.responseText);
    } 
    return res;
  }

}

export default ApiService;