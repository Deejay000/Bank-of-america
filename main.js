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













const amounts = document.querySelectorAll('.amount');
amounts.forEach((num) => {
  const formattedNum = num.textContent.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  num.textContent = formattedNum;
});
