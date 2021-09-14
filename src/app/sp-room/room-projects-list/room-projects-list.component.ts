import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-room-projects-list',
  templateUrl: './room-projects-list.component.html',
  styleUrls: ['./room-projects-list.component.css']
})
export class RoomProjectsListComponent implements OnInit, OnDestroy {
  parentUrlSub: Subscription;
  childUrlSub: Subscription;
  username: string;
  projectName: string;

  displayedColumns: string[] = [
    'RUPCode',
    'ProjectName',
    'ContractStartDate',
    'OrganizationUnit',
    'RequestType'
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.childUrlSub = this.route.paramMap.subscribe(param => {
      this.projectName = param.get('project');
    });

    this.parentUrlSub = this.route.parent.paramMap.subscribe(param => {
      this.username = param.get('username');
    });
  }

  ngOnDestroy() {
    this.parentUrlSub.unsubscribe;
    this.childUrlSub.unsubscribe;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  rowClicked(selectedRow: RequestElement) {
    console.log(selectedRow);
  }
}

export interface RequestElement {
  Id: string;
  RequestNumber: string;
  ProjectName: string;
  RUPCode: string;
  CeilingValue: number;
  HPS: number;
  ContractStartDate: Date;
  OrganizationUnit: string;
  RequestType: string;
}

const ELEMENT_DATA: RequestElement[] = [
  {
    Id: "ID-001",
    RequestNumber: 'RN-001',
    ProjectName: 'Test',
    RUPCode: 'RUP-001',
    CeilingValue: 200000000,
    HPS: 100000000,
    ContractStartDate: new Date(2021, 9, 14),
    OrganizationUnit: 'Sekretariat',
    RequestType: 'Barang'
  },
  {
    Id: "ID-002",
    RequestNumber: 'RN-002',
    ProjectName: 'Ahahahaha',
    RUPCode: 'RUP-002',
    CeilingValue: 250000000,
    HPS: 150000000,
    ContractStartDate: new Date(2021, 8, 1),
    OrganizationUnit: 'Sekretariat',
    RequestType: 'Jasa Lainnya'
  },
  {
    Id: "ID-003",
    RequestNumber: 'RN-003',
    ProjectName: 'Coba lagi',
    RUPCode: 'RUP-003',
    CeilingValue: 300000000,
    HPS: 200000000,
    ContractStartDate: new Date(2021, 1, 1),
    OrganizationUnit: 'Direktorat Perdata',
    RequestType: 'Pekerjaan Konstruksi'
  }
];
