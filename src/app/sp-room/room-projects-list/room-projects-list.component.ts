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
  urlSubs: Subscription;

  displayedColumns: string[] = ['RUPCode', 'ProjectName', 'ContractStartDate', 'OrganizationUnit', 'RequestType'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.urlSubs = this.route.params.subscribe(param => {
      console.log(param.project);
    });
  }

  ngOnDestroy() {
    this.urlSubs.unsubscribe;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

export interface RequestElement {
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
