let songs = [
  { id: 1, title: "Trả cho anh", artist: "Ca sĩ A" },
  { id: 2, title: "Lo người ướt áo", artist: "Ca sĩ B" },
  { id: 3, title: "Ngày này năm ấy", artist: "Đức Phúc" },
  { id: 4, title: "Như anh đã từng thấy em", artist: "Nguyễn Văn Chung" },
];

let editingId = null;

const saveSongs = () => {
  localStorage.setItem("songs", JSON.stringify(songs));
};

// thêm
const addSong = (title, artist) => {
  if (!title || !artist) {
    alert("Không được để trống!");
    return;
  }
  const id = songs.length ? songs[songs.length - 1].id + 1 : 1;
  songs.push({ id, title, artist });
  saveSongs();
  renderSongs();
};

// render
const renderSongs = (data = songs) => {
  const songList = document.getElementById("songTable");
  songList.innerHTML = "";
  data.forEach((song) => {
    songList.innerHTML += `
      <tr>
        <td>${song.id}</td>
        <td>${song.title}</td>
        <td>${song.artist}</td>
        <td>
          <button onclick="editSong(${song.id})">Sửa</button>
          <button onclick="deleteSong(${song.id})">Xóa</button>
        </td>
      </tr>
    `;
  });
};

// sửa
const editSong = () => {};

// xóa
const deleteSong = (id) => {
  if (confirm("Bạn có chắc muốn xóa?")) {
    songs = songs.filter((s) => s.id !== id);
    saveSongs();
    renderSongs();
  }
};

// tìm kiếm
const searchSong = () => {
  const keyword = document.getElementById("search").value;
  const filtered = songs.filter((s) =>
    s.title.toLowerCase().includes(keyword.toLowerCase()),
  );
  renderSongs(filtered);
};

const handleSubmit = () => {
  const title = document.getElementById("title").value.trim();
  const artist = document.getElementById("artist").value.trim();

  if (editingId) {
    
  } else {
    addSong(title, artist);
  }

  document.getElementById("title").value = "";
  document.getElementById("artist").value = "";
}

renderSongs();