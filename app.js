const courses=[
['นวดไทยเพื่อสุขภาพ','THAI MASSAGE FOR HEALTH','photo-1519823551278-64ac92734fb1.jpg','สำหรับผู้ที่อยากเริ่มอาชีพด้านนวดไทย เน้นฝึกท่าทาง การวางมือ และการใช้น้ำหนักอย่างเหมาะสม',150],
['นวดฝ่าเท้าเพื่อสุขภาพ','FOOT MASSAGE FOR HEALTH','photo-1540555700478-4be289fbecef.jpg','สำหรับผู้ที่สนใจบริการนวดฝ่าเท้าเพื่อสุขภาพ หรือต้องการเพิ่มทักษะสำหรับร้านนวดและสปา',60],
['นวดน้ำมันหอมระเหย','AROMATHERAPY MASSAGE','photo-1544161515-4ab6ce6db874.jpg','สำหรับผู้ที่สนใจงานสปาและการนวดผ่อนคลายด้วยน้ำมัน ฝึกการเคลื่อนไหวมือและจังหวะการนวด',150]];
const modal=document.querySelector('dialog');
const course = document.querySelector('#course');
courses.forEach(([name,en,img,description,duration])=>{
course.add(new Option(name + ' (' + duration + ' ชั่วโมง)', String(duration)));
const card=document.createElement('article');
card.innerHTML='<img alt="ภาพประกอบการนวดและสปา" loading="lazy" src="'+img+'"><div><small>'+en+'</small><h3>'+name+'</h3><p>'+duration+' ชั่วโมง · 6,500 บาท</p><button>ดูรายละเอียดหลักสูตร</button></div>';
card.querySelector('button').onclick=()=>{document.querySelector('#title').textContent=name;document.querySelector('#desc').textContent=description;document.querySelector('#course-fee').textContent=duration+' ชั่วโมง · 6,500 บาทต่อคน';modal.showModal()};
document.querySelector('#cards').append(card)});
document.querySelector('#close').onclick=()=>modal.close();

const courseQuestions = [
  'ถ้าอยากทำงานร้านนวดไทย ลองถามโรงเรียนว่าภาคฝึกแบ่งเวลาอย่างไร ผู้เรียนได้ฝึกกับคู่ฝึกช่วงไหน และผู้สอนให้คำแนะนำท่าทางเป็นรายคนอย่างไร',
  'ถ้าอยากเพิ่มบริการนวดฝ่าเท้าเพื่อสุขภาพให้ร้านเดิม ลองจดลักษณะพื้นที่นั่งของลูกค้าและอุปกรณ์ที่มีไปคุยกับโรงเรียน เพื่อสอบถามว่าควรเตรียมอะไรเพิ่มสำหรับช่วงฝึก',
  'ถ้าสนใจสมัครงานในสปา ลองสอบถามเรื่องการเตรียมพื้นที่บริการ ผ้าที่ใช้ระหว่างฝึก และอุปกรณ์หรือน้ำมันที่รวมอยู่ในค่าเรียน'
];
document.querySelectorAll('#cards article').forEach((card, index) => {
  const paragraph = document.createElement('p');
  paragraph.className = 'course-note';
  paragraph.textContent = courses[index][3];
  card.querySelector('button').before(paragraph);
  card.querySelector('button').addEventListener('click', () => {
    document.querySelector('#desc').textContent = courseQuestions[index];
  });
});

const hours = document.querySelector('#hours');
function updateWeeks() {
  const weeks = Math.ceil(Number(course.value) / Number(hours.value));
  document.querySelector('#weeks').textContent = 'ประมาณ ' + weeks + ' สัปดาห์';
}
course.addEventListener('change', updateWeeks);
hours.addEventListener('change', updateWeeks);
updateWeeks();
