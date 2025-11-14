// Data untuk setiap plat mobil dengan 4 nilai per plat
const dataPlatMobil = {
  platA: { data1: 1333, data2: 0.28, data3: 1330, data4: 0.38 },
  platB: { data1: 1335, data2: 0.25, data3: 1340, data4: 0.30 },
  platC: { data1: 1349, data2: 0.25, data3: 1331, data4: 0.25 },
  platD: { data1: 1579, data2: 0.32, data3: 1558, data4: 0.26 },
  platE: { data1: 1579, data2: 0.4, data3: 1555, data4: 0.4 },
  platF: { data1: 1428, data2: 0.25, data3: 1430, data4: 0.25 },
};

function tampilkanData() {
  const platMobil = document.getElementById("platMobil").value;

  // Jika plat dipilih, tampilkan data1, data2, data3, data4
  if (platMobil) {
    const data = dataPlatMobil[platMobil];
    document.getElementById(
      "data1Display"
    ).innerHTML = `<div style="padding-bottom: 13px; color:red;"> Tinggi K1 : ${data.data1} || Kepekaan : ${data.data2}</div>`;
    document.getElementById(
      "data2Display"
    ).innerHTML = `<div style="padding-bottom: 13px; color:red;">Tinggi K2 : ${data.data3} || Kepekaan : ${data.data4.toFixed(2)}</div>`;
  } else {
    // Reset display jika tidak ada plat yang dipilih
    document.getElementById("data1Display").innerHTML = "";
    document.getElementById("data2Display").innerHTML = "";
  }
  // Reset hasil saat plat berubah
  document.getElementById("resultInput1").innerHTML = "";
  document.getElementById("resultInput2").innerHTML = "";
  document.getElementById("totalResult").innerHTML = "";
}

function hitungVolume() {
  const platMobil = document.getElementById("platMobil").value;
  const input1 = parseFloat(document.getElementById("input1").value);
  const input2 = parseFloat(document.getElementById("input2").value);

  // Cek apakah plat dan input sudah dipilih dan diisi
  if (!platMobil || isNaN(input1) || isNaN(input2)) {
    alert(
      "Mohon pilih plat mobil dan masukkan nilai yang valid untuk kedua input."
    );
    return;
  }

  // Mendapatkan data berdasarkan plat yang dipilih
  const data = dataPlatMobil[platMobil];

  // Rumus untuk hasil Input 1: 8000 / data1 * input1 + data2
  const hasilInput1 = (input1 - data.data1) / data.data2 + 8000;
  document.getElementById(
    "resultInput1"
  ).innerHTML = `<div style="margin-top: -10px; margin-bottom: 10px; color:green;">Volume : ${hasilInput1.toFixed(0)} liter </div>`;

  // Rumus untuk hasil Input 2: 8000 / data3 * input2 + data4
  const hasilInput2 = (input2 - data.data3) / data.data4 + 8000;
  document.getElementById(
    "resultInput2"
  ).innerHTML = `<div style="margin-top: -10px; margin-bottom: 10px; color:green;">Volume : ${hasilInput2.toFixed(0)} liter</div>`;

  // Jumlahkan hasil dari input 1 dan input 2, tampilkan di bawah tombol
  const totalHasil = hasilInput1 + hasilInput2;
  document.getElementById(
    "totalResult"
  ).innerHTML = `Total Hasil: ${totalHasil.toFixed(0)} liter`;
}
