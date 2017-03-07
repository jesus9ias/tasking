
function OK(data) {
  return {
    code: 200,
    data: data
  };
}

function ERROR(data) {
  return {
    code: 501,
    data: data
  };
}

function NOT_FOUND(data) {
  return {
    code: 404,
    data: data
  };
}

function NEED_LOGIN(data) {
  return {
    code: 401,
    data: data
  };
}

function NEED_PERMISSION(data) {
  return {
    code: 403,
    data: data
  };
}

function METHOD_NOT_FOUND(data) {
  return {
    code: 403,
    data: data
  };
}

module.exports = {
  OK,
  ERROR,
  NOT_FOUND,
  NEED_LOGIN,
  NEED_PERMISSION,
  METHOD_NOT_FOUND
};
