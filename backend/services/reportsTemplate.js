module.exports = ({
  startDate,
  endDate,
  totalSales,
  users,
  managers,
  posts,
  templates,
  teams,
}) => {
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>

    <style>
      body {
        padding: 60px;
        margin: 0;
        background: "white";
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p {
        margin: 0;
      }
    </style>
  </head>
  <body>
    <h2 style="margin-bottom: 40px; font-size: 30px">Reporting and Analytics</h2>

    <div>
      <h4 style="margin-bottom: 10px">Report Date</h4>
      <div style="display: flex; align-items: center; gap: 15px">
        <p>${startDate}</p>
        <span>-</span>
        <p>${endDate}</p>
      </div>
    </div>

    <div>
      <h4 style="margin-top: 40px; margin-bottom: 25px">Reports:</h4>

      <div>
        <div
          style="
            border-bottom: 1px solid #ddd;
            padding: 10px 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
          "
        >
          <span style="width: 30%">Total Sales:</span>
          <span style="width: 70%">$${totalSales}</span>
        </div>
        <div
          style="
            border-bottom: 1px solid #ddd;
            padding: 10px 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
          "
        >
          <span style="width: 30%">Total Users:</span>
          <span style="width: 70%">${users} Users</span>
        </div>
        <div
          style="
            border-bottom: 1px solid #ddd;
            padding: 10px 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
          "
        >
          <span style="width: 30%">Total Managers:</span>
          <span style="width: 70%">${managers} Managers</span>
        </div>
        <div
          style="
            border-bottom: 1px solid #ddd;
            padding: 10px 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
          "
        >
          <span style="width: 30%">Total Posts:</span>
          <span style="width: 70%">${posts} Posts</span>
        </div>
        <div
          style="
            border-bottom: 1px solid #ddd;
            padding: 10px 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
          "
        >
          <span style="width: 30%">Total Templates:</span>
          <span style="width: 70%">${templates} Templates</span>
        </div>
        <div
          style="
            border-bottom: 1px solid #ddd;
            padding: 10px 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
          "
        >
          <span style="width: 30%">Total Teams:</span>
          <span style="width: 70%">${teams} Teams</span>
        </div>
      </div>
    </div>
  </body>
</html>

`;
};
