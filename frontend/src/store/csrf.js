export const restoreCsrf = async () => {
    const response = await csrfFetch("/api/session");
    storeCSRFToken(response);
    return response;
};

export const storeCSRFToken = (response) => {
    const csrfToken = response.headers.get('X-CSRF-Token');
    if (csrfToken) sessionStorage.setItem('X-CSRF-Token', csrfToken);
};

const csrfFetch = async (url, options = {}) => {
    options.method = options.method || 'GET';
    options.headers = options.headers || {};

    if (options.method.toUpperCase() !== 'GET') {
        options.headers['Content-Type'] = options.headers['Content-Type'] || 'application/json';
        options.headers['X-CSRF-Token'] = sessionStorage.getItem('X-CSRF-Token');
    }

    const response = await fetch(url, options);

    if (response.state >= 400) throw response;

    return response;
};

export default csrfFetch;