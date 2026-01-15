document.querySelector(".dob").addEventListener("input", function (e) {
  let dateText = e.target.value.replace(/\D/g, "");
  dateText = dateText.slice(0, 8);

  if (dateText.length >= 5) {
    dateText =
      dateText.slice(0, 2) +
      "/" +
      dateText.slice(2, 4) +
      "/" +
      dateText.slice(4);
  } else if (dateText.length >= 3) {
    dateText = dateText.slice(0, 2) + "/" + dateText.slice(2);
  }
  e.target.value = dateText;

  
  const dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/[0-9]{4}$/;

  if (!dateRegex.test(text)) {
    return;
  }
});

document.querySelector(".dob2").addEventListener("input", function (e) {
  console.log('value', e.target.value);
});



function checkDateFormat(date) {
  const dateRegex =
    /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(19[0-9]{2}|[2-9][0-9]{3})$/;
  if (!dateRegex.test(date)) {
    return false;
  }
  return true;

  // if (date.length !== 10 || date[2] !== '/' || date[5] !== '/') return false;

  // const parts = date.split('/');
  // if (parts.length !== 3) return false;

  // const [monthStr, dayStr, yearStr] = parts;
  // if (isNaN(dayStr) || isNaN(monthStr) || isNaN(yearStr)) return false;

  // const day = Number(dayStr);
  // const month = Number(monthStr);
  // const year = Number(yearStr);

  // if (day < 1 || day > 31) return false;
  // if (month < 1 || month > 12) return false;
  // if (year < 1000 || year > 9999) return false;

  // return true;
}
