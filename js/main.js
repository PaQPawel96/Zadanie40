
function takeData()
{
    let a = document.getElementById('fname').value;
    let b = document.getElementById('lname').value;
    let c = document.getElementById('telephone').value;
    document.getElementById('name').textContent = a;
    document.getElementById('surname').textContent = b;
    document.getElementById('phone').textContent = c;
}