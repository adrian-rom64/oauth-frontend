export const createPopup = (provider, callback) => {
  const url = `/auth?provider=${provider}`;

  let windowObjectReference = null;
  let previousUrl = null;
  window.removeEventListener('message', callback);

  const width = 400;
  const height = 600;
  const y = (window.top.outerHeight) / 2 + window.top.screenY - (height / 2);
  const x = (window.top.outerWidth) / 2 + window.top.screenX - (width / 2);

  const strWindowFeatures = `toolbar=no, menubar=no, width=${width}, height=${height}, top=${y}, left=${x}`;

  if (windowObjectReference === null || windowObjectReference.closed) {
    windowObjectReference = window.open(url, 'Authorization', strWindowFeatures);
  } else if (previousUrl !== url) {
    windowObjectReference = window.open(url, 'Authorization', strWindowFeatures);
    windowObjectReference.focus();
  } else {
    windowObjectReference.focus();
  }
  windowObjectReference.providerUrl = 'helloman';
  window.addEventListener('message', (event) => callback(event.data), false);
  previousUrl = url;
};

export const urlQuery = (params) => {
  let query = '';
  Object.keys(params).forEach((key) => {
    query += `${key}=${params[key]}&`;
  });
  return query;
};
