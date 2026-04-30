const getIndexPage = (req, res) => {
  res.json({
    status: 'success',
    messaging: 'Home request done',
  });
};

export { getIndexPage };
