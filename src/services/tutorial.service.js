import http from "../http-common";
const getAll = () => {
  return http.get("/tutorials");
};
const get = id => {
  return http.get(`/tutorials/${id}`);
};
const create = data => {
  return http.post("/tutorials", data);
};
const update = (id, data) => {
  return http.put(`/tutorials/${id}`, data);
};
const remove = id => {
  return http.delete(`/tutorials/${id}`);
};
const removeAll = () => {
  return http.delete(`/tutorials`);
};
const findByTitle = title => {
  return http.get(`/tutorials?title=${title}`);
};
const TutorialService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};
export default TutorialService;


// original file before installing axios
// import http from "../http-common";

// class TutorialDataService {
//   getAll() {
//     return http.get("/tutorials");
//   }

//   get(id) {
//     return http.get(`/tutorials/${id}`);
//   }

//   create(data) {
//     return http.post("/tutorials", data);
//   }

//   update(id, data) {
//     return http.put(`/tutorials/${id}`, data);
//   }

//   delete(id) {
//     return http.delete(`/tutorials/${id}`);
//   }

//   deleteAll() {
//     return http.delete(`/tutorials`);
//   }

//   findByTitle(title) {
//     return http.get(`/tutorials?title=${title}`);
//   }
// }

// export default new TutorialDataService();