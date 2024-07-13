export const getCustomersSmall = () => {
  return fetch("../../assets/demo/data/customers-large.json")
    .then((res) => res.json())
    .then((d) => d.data);
};

export const getCustomersMedium = () => {
  return fetch("data/customers-medium.json")
    .then((res) => res.json())
    .then((d) => d.data);
};

export const getCustomersLarge = () => {
  return fetch("data/customers-large.json")
    .then((res) => res.json())
    .then((d) => d.data);
};

export const getCustomersXLarge = () => {
  return fetch("data/customers-xlarge.json")
    .then((res) => res.json())
    .then((d) => d.data);
};

export const getCustomers = (params) => {
  const queryParams = Object.keys(params)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(params[k]))
    .join("&");
  return fetch("https://www.primefaces.org/data/customers?" + queryParams).then(
    (res) => res.json()
  );
};
