const firstInfo = localStorage.getItem('first-info');
  const secondInfo = localStorage.getItem('second-info');
  const thirdInfo = localStorage.getItem('third-info');
  const fourInfo = localStorage.getItem('four-info');
  const fiveInfo = localStorage.getItem('five-info');
 
  
  
  document.getElementById('first-info').textContent = firstInfo;
  document.getElementById('second-info').textContent = secondInfo;
  document.getElementById('third-info').textContent = thirdInfo;
  document.getElementById('four-info').textContent = fourInfo;
  document.getElementById('five-info').textContent = fiveInfo;
  
  

month = ['01','02','03','04','05','06','07','08','09','10','11','12'];


date_data = new Date()

current_date = date_data.getDate()


document.getElementById('date').textContent = `${current_date}`

current_month = date_data.getMonth()

document.getElementById('month').textContent = `${month[current_month]}`

current_year = date_data.getFullYear()

document.getElementById('year').textContent = `${current_year}`

function formatNumber() {
    const input = document.querySelector('.number-input').value;
    const formattedNumber = addCommas(input);
    document.querySelector('.formatted-number').textContent = formattedNumber;
}

function addCommas(number) {
    if (!number) return '';

    number = number.replace(/[^0-9]/g, ''); // Remove any non-numeric characters

    const numStr = number.toString();
    const length = numStr.length;

    if (length <= 4) {
        return numStr;
    }

    if (length == 5) {
        return numStr.slice(0, 2) + ',' + numStr.slice(2);
    }

    if (length == 6) {
        return numStr.slice(0, 3) + ',' + numStr.slice(3);
    }

    const index = (length - 1) % 3 + 1;
    return numStr.slice(0, index) + ',' + numStr.slice(index).match(/.{1,3}/g).join(',');
}