import { Component, OnInit } from "@angular/core";
import { RoomDetails } from './tables.model';

@Component({
  selector: "app-tables",
  templateUrl: "tables.component.html"
})
export class TablesComponent implements OnInit {

  //Sample Room Details List
  roomList: Array<RoomDetails>;
  tableColumnHeaderDef: Array<string>;
  roomInfo: RoomDetails;

  constructor() {
    this.setup();
  }

  ngOnInit() {
    this.intializeColumnHeader();
    this.intializeSampleRoomDetails();
  }

  setup() {
    this.tableColumnHeaderDef = new Array<string>();
    this.roomList = new Array<RoomDetails>();
    this.roomInfo = new RoomDetails();
  }

  intializeColumnHeader() {
    this.tableColumnHeaderDef.push('Edit');
    this.tableColumnHeaderDef.push('Delete');
    this.tableColumnHeaderDef.push('Room Id');
    this.tableColumnHeaderDef.push('Room Type Code');
    this.tableColumnHeaderDef.push('Room Type Name');
  }

  intializeSampleRoomDetails() {
    this.roomList.push(this.roomDetails(100, 'ABC', 'Two Sharing'));
    this.roomList.push(this.roomDetails(101, 'DEF', 'Three Sharing'));
    this.roomList.push(this.roomDetails(102, 'GHI', 'Four Sharing'));
  }

  roomDetails(roomId: number, roomType: string, roomName: string): RoomDetails {
    let roomDetails = new RoomDetails();
    roomDetails.roomId = roomId;
    roomDetails.roomTypeCode = roomType;
    roomDetails.roomTypeName = roomName;
    return roomDetails;
  }

  saveRoomDetails() {
    let parent = this;
    let existRoom = this.roomList.filter(id => id.roomId == this.roomInfo.roomId);
    if (existRoom.length != 0) {
      existRoom.forEach(room => {
        room.roomTypeCode = parent.roomInfo.roomTypeCode;
        room.roomTypeName = parent.roomInfo.roomTypeName;
      });
    }
    else {
      this.roomList.push(JSON.parse(JSON.stringify(this.roomInfo)));
    }
    if (this.roomInfo.editableFlag) {
      alert("Room Modified Successfully");
    }
    else {
      alert("Room Added Successfully");
    }
    this.clearForm();
  }

  clearForm() {
    this.roomInfo = new RoomDetails();
  }

  removeRoomDetails(roomId) {
    if (confirm("Are you sure want to remove room id -  " + roomId))
      this.roomList = this.roomList.filter(id => id.roomId !== roomId);

  }

  editRoomDetails(roomDet: RoomDetails) {
    roomDet.editableFlag = true;
    this.roomInfo = roomDet;
  }

}
