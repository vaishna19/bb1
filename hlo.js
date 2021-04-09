const fs = require('fs');
fs.readFile('./temp.json', 'utf8', (err, data) => {
  let temp = JSON.parse(data);
  temp.push({
    name: "Antony",
    details: {
      study: {
        dept: '',
        city: ''
      },
      personal: {
        dob: '',
        city: '',
      }
    }
  });
  temp[1].details.study.city = 'Chennai';
  temp[5] = {
    details: {
      study: {
        city: 'Chennai',
      }
    }
  }
  console.log(temp[1].details.study.city === 'chennai');
  temp = temp.filter((i) => typeof i === 'number');
  fs.writeFile('./temp.json', JSON.stringify(temp), (err) => { })
});