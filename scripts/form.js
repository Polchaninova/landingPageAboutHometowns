const applicantForm = document.getElementById(`mars-once`);
applicantForm.addEventListener(`submit`, handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  const formData = serializeForm(applicantForm);
  onSuccess(applicantForm, formData);
}
function serializeForm(formNode) {
  const { elements } = formNode;
  const data = Array.from(elements)
    .filter((item) => !!item.name)
    .map((element) => {
      const { name, value } = element;
      return { name, value };
    });
  return data;
}
function onSuccess(formNode, formData) {
  const name = formData.find((data) => data.name === "name").value;
  const text = `Thank you ${name}, our manager will call you back within an hour to select the day and the number of people!`;

  alert(text);
  formNode.classList.toggle("hidden");
  const afterResulet = document.querySelector("#after-submit");
  afterResulet.querySelector("span").textContent = name;
  afterResulet.hidden = false;
}
function validy(event) {
  const formNode = event.target.form;
  const isValid = formNode.checkValidity();
  formNode.querySelector(`button`).disabled = !isValid;
}
applicantForm.addEventListener(`input`, validy);
