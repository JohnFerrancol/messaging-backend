const getRoutePage = (req, res) => {
  res.json({
    status: 'success',
    messaging: 'API request done',
  });
};

export { getRoutePage };
