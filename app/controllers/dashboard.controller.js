module.exports = {
  showDashboard: showDashboard
};

function showDashboard(req, res) {
  res.send('i am the dashboard');
}