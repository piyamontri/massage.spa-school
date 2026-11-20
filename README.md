# เว็บไซต์โรงเรียนปิยะมนตรี

[เว็บไซต์โรงเรียน](https://piyamontri.github.io/massage.spa-school/) แสดงหลักสูตร ค่าเรียน และช่องทางสอบถามทาง [Facebook ของโรงเรียน](https://www.facebook.com/255983247591983/)

## แก้ไขและตรวจสอบเว็บ

- แก้ข้อความและลิงก์ใน `index.html` แก้ข้อมูลบนการ์ดหลักสูตรและตัววางแผนเวลาเรียนใน `app.js` และแก้รูปแบบใน `style.css`
- เปิด pull request เข้า `main` ตรวจค่าเรียน จำนวนชั่วโมง และปุ่มทัก Facebook บนมือถือก่อนรวมการแก้ไข ตรวจผลเผยแพร่ใน GitHub Actions แล้วเปิดหน้าเว็บจริงอีกครั้ง
- ก่อนแก้ที่อยู่หรือหมุดแผนที่ ให้ยืนยันสถานที่จริงกับโรงเรียนและใช้ข้อมูลเดียวกันบนหน้าเว็บ Google Business Profile และ Facebook

## ตั้งค่า Google หลังเผยแพร่

1. ให้ผู้ดูแลเพิ่มพร็อพเพอร์ตีแบบ URL-prefix สำหรับ `https://piyamontri.github.io/massage.spa-school/` ใน [Google Search Console](https://search.google.com/search-console/) และยืนยันสิทธิ์ด้วยไฟล์ HTML หรือแท็กที่ Google ออกให้
2. ส่ง `https://piyamontri.github.io/massage.spa-school/sitemap.xml` ใน Sitemaps และใช้ URL Inspection ตรวจหน้าแรกและขอให้ Google จัดทำดัชนี
3. ให้เจ้าของหมุด Google Maps เดิมเพิ่ม URL หน้าแรกในช่องเว็บไซต์ของ [Google Business Profile](https://www.google.com/business/)
4. ใช้รายงาน Performance ตรวจการแสดงผลและการคลิกของคำค้นชื่อโรงเรียน และให้เจ้าหน้าที่จดจำนวนคนที่ระบุว่าพบเว็บจาก Google เพื่อดูว่าการค้นหานำไปสู่การสอบถามมากน้อยเพียงใด
