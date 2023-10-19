let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

window.onscroll = () => {
    menuIcon.classList.remove('remove')
    navbar.classList.remove('active')
}





const city = 1222;
const date = new Date();
const dd = String(date.getDate()).padStart(2,'0');  //2 itu maksimal digitnya
const mm = String(date.getMonth()+1).padStart(2, '0'); //tambahin angka 1 krn di format API nya januari itu 1, sedangkan di js itu harusnya januari 0
const yyy = date.getFullYear();
const now = yyy + '-' + mm + '-' + dd;
const sekarang = yyy +"-" + mm + "-" + dd;

const jadwalApi = `https://api.myquran.com/v1/sholat/jadwal/${city}/${yyy}/${mm}`;

fetch(jadwalApi)
.then(function(response) {
    if (!response.ok) {
        throw new Error("ada yang salah bro")
    } return response.json();
})

    .then((data) => { 
        const jadwal = data.data;
        const list = jadwal.jadwal;

        const listJadwal = document.getElementById("list-jadwal");
        const kota = document.getElementById("city");
        const prov = document.getElementById("prov");

        kota.innerHTML = jadwal.lokasi;
        prov.innerHTML = jadwal.daerah;

        list.forEach((el) => {
            const tr = document.createElement("tr");

            if (el.date === sekarang) {
                tr.classList.add("table-primary")
            }

            const dd = document.createElement("td");
            dd.innerText = el.tanggal;

            const imsak = document.createElement("td");
            imsak.innerText = el.imsak;

            const shubuh = document.createElement("td");
            shubuh.innerText = el.subuh;

            const terbit = document.createElement("td")
            terbit.innerText = el.terbit;

            const dzuhur = document.createElement("td");
            dzuhur.innerText = el.dzuhur;

            const ashar = document.createElement("td");
            ashar.innerText = el.ashar;

            const maghrib = document.createElement("td");
            maghrib.innerText = el.maghrib;

            const isya = document.createElement("td");
            isya.innerText = el.isya;

            // listJadwal.appendChild(tr);
            // listJadwal.appendChild(dd);
            // listJadwal.appendChild(imsak);
            // listJadwal.appendChild(shubuh);
            // listJadwal.appendChild(dzuhur);
            // listJadwal.appendChild(ashar);
            // listJadwal.appendChild(maghrib);
            // listJadwal.appendChild(isya);
            listJadwal.appendChild(tr)
            tr.appendChild(dd);
            tr.appendChild(imsak);
            tr.appendChild(shubuh);
            tr.appendChild(terbit);
            tr.appendChild(dzuhur);
            tr.appendChild(ashar);
            tr.appendChild(maghrib);
            tr.appendChild(isya);
        })
    })