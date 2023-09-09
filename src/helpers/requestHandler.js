export const requestHandler = {
  async async_fetch(url, options = {}) {
    let response = await fetch(url, options);
    if (response.ok) return await response.json();
    if (!response.ok) {
      if ([401, 403, 422].indexOf(response.status) !== -1) {
        console.log(response.status);
        // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
        //authenticationService.logout();
        //location.reload();
      }
      return response;
    }
  },
  async async_fetch_text_response(url, options = {}) {
    let response = await fetch(url, options);
    if (response.ok) return await response.text();
    if (!response.ok) {
      if ([401, 403, 422].indexOf(response.status) !== -1) {
        console.log(response.status);
        // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
        //authenticationService.logout();
        //location.reload();
      }
      return response;
    }
  }
};
