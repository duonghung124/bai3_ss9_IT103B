const rooms = [
  {
    roomId: "P101",
    roomType: "Deluxe",
    pricePerNight: 1500000,
    status: "VACANT"
  },
  {
    roomId: "P102",
    roomType: "Standard",
    pricePerNight: 1000000,
    status: "VACANT"
  },
  {
    roomId: "P103",
    roomType: "Suite",
    pricePerNight: 2500000,
    status: "VACANT"
  }
];

console.log("--- DANH SÁCH PHÒNG BAN ĐẦU ---");

for (let i = 0; i < rooms.length; i++) {
  console.log(
    rooms[i].roomId + " | " +
    rooms[i].roomType + " | " +
    rooms[i].pricePerNight + " VNĐ | " +
    rooms[i].status
  );
}

console.log("--- CREATE: THÊM PHÒNG P104 ---");

const newRoom = {
  roomId: "P104",
  roomType: "VIP Suite",
  pricePerNight: 3500000,
  status: "VACANT"
};

rooms.push(newRoom);

for (let i = 0; i < rooms.length; i++) {
  console.log(
    rooms[i].roomId + " | " +
    rooms[i].roomType + " | " +
    rooms[i].pricePerNight + " VNĐ | " +
    rooms[i].status
  );
}

console.log("--- UPDATE: CHECK-IN PHÒNG P101 ---");

const updateIndex = rooms.findIndex(function(room) {
  return room.roomId === "P101";
});

if (updateIndex !== -1) {
  rooms[updateIndex].status = "OCCUPIED";
}

for (let i = 0; i < rooms.length; i++) {
  console.log(
    rooms[i].roomId + " | " +
    rooms[i].roomType + " | " +
    rooms[i].pricePerNight + " VNĐ | " +
    rooms[i].status
  );
}

console.log("--- DELETE: XÓA PHÒNG P103 ---");

const deleteIndex = rooms.findIndex(function(room) {
  return room.roomId === "P103";
});

if (deleteIndex !== -1) {
  rooms.splice(deleteIndex, 1);
}

for (let i = 0; i < rooms.length; i++) {
  console.log(
    rooms[i].roomId + " | " +
    rooms[i].roomType + " | " +
    rooms[i].pricePerNight + " VNĐ | " +
    rooms[i].status
  );
}