
let contacts = [];

const form = document.getElementById("contact-form");

function addContact() {
  const name = document.getElementById("contact-name").value.trim();
  const phone = document.getElementById("contact-phone").value.trim();
  const email = document.getElementById("contact-email").value.trim();

  if (!name) {
    alert("Họ tên không được để trống!");
    return;
  }
  if (name.length < 2) {
    alert("Họ tên phải có ít nhất 2 ký tự!");
    return;
  }
  if (!phone) {
    alert("Số điện thoại không được để trống!");
    return;
  }
  if (!email) {
    alert("Email không được để trống!");
    return;
  }
  const isDuplicate = contacts.some(c => c.email === email);
  if (isDuplicate) {
    alert("Email đã tồn tại trong danh bạ!");
    return;
  }
  const contact = { name, phone, email };
  contacts.push(contact);

  alert("Thêm liên hệ thành công!");
  renderContacts();
}
function renderContacts() {
  const tbody = document.getElementById("contact-table");
  tbody.innerHTML = "";
  contacts.forEach((c, index) => {
    row += `
      <tr>
        <td>${index + 1}</td>
        <td>${c.name}</td>
        <td>${c.phone}</td>
        <td>${c.email}</td>
        <td>
        <div class="action-buttons">
          <button class="btn-edit"(${index})">Sửa</button>
          <button class="btn-delete(${index})">Xóa</button>
          </div>
        </td>
      </tr>
    `;
    tbody.innerHTML += row;
  });
}
function deleteContact(index) {
  if (confirm("Bạn có chắc muốn xóa?")) {
    contacts.splice(index, 1);
    renderContacts();
  }
}
renderContacts();