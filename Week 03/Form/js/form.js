let formData = new FormData();
formData.append('key1', 'value1');
formData.append('key2', 'value2');

// List key/value pairs
for(let [name, value] of formData) {
  alert(`${name} = ${value}`); // key1 = value1, then key2 = value2
}

formElem.onsubmit = async(e) => {
    e.preventDefault();

    let response = await fetch('/article/formdata/post/user', {
        method: 'POST',
        body: new FormData(formElem)
    })

    let result = await response.json();
    alert(result.message); 
}

document.addEventListener('DOMContentLoaded', () => {
    const formElem = document.getElementById('formElem');
    e.preventDefault();
    formElem.addEventListener(submit, (e) => {
        const formData = new FormData(formElem);
        formData.append('submitted', new Date());
        for (let key of formData.keys()) {
            console.log(key, formData.get(key))
        }
    });
});