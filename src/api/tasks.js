const getTasks = (server) => () => server.get('/tasks');


export default (server) => ({
  getTasks: getTasks(server),
})
