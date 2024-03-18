let nameRequest = prompt(`Enter your name`);
while (!nameRequest || nameRequest === ``) {
    nameRequest = prompt(`Enter your name`)
}
if (nameRequest) nameRequest = nameRequest.trim();

let surnameRequest = prompt(`Enter your surname`);
while (!surnameRequest) {
    surnameRequest = prompt(`Enter your surname`)
};
if (surnameRequest) surnameRequest = surnameRequest.trim();

let emailRequest = prompt(`Enter your email`);
if (emailRequest) emailRequest = emailRequest.replaceAll(` `, ``).toLowerCase();
while (!emailRequest || !emailRequest.includes(`@`) || emailRequest.startsWith(`@`) || emailRequest.endsWith(`@`)) {
    emailRequest = prompt(`Enter your email`);
    if (emailRequest) emailRequest = emailRequest.replaceAll(` `, ``).toLowerCase();
};

let dateOfBirth = prompt(`Enter year of birth`);
if (dateOfBirth) dateOfBirth = dateOfBirth.replaceAll(` `, ``);
while (!dateOfBirth || isNaN(dateOfBirth)) {
    dateOfBirth = prompt(`Enter year of birth`);
    if (dateOfBirth) dateOfBirth = dateOfBirth.replaceAll(` `, ``);
}
let age = new Date().getFullYear() - dateOfBirth;

document.write(`<ul>
    <li>Full name: ${nameRequest} ${surnameRequest}</li>
    <li>Email: ${emailRequest}</li>
    <li>Age: ${age}</li>
</ul>`);