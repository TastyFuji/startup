document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // ป้องกันการส่งฟอร์มแบบปกติ

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    // แสดงข้อมูลที่กรอกใน Console (หรือส่งไปยัง Backend)
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);

    if (phone.length < 10) {
    alert("กรุณากรอกเบอร์โทรให้ถูกต้อง");
    return;
}
    // ปิด Modal
    const modal = bootstrap.Modal.getInstance(document.getElementById("contactModal"));
    modal.hide();

    // Reset Form
    document.getElementById("contactForm").reset();

    // แจ้งเตือนสำเร็จ (ตัวอย่าง)
    alert("Form submitted successfully!");
});
