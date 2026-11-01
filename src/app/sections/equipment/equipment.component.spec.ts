import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentComponent } from './equipment.component';

describe('EquipmentComponent', () => {
  let component: EquipmentComponent;
  let fixture: ComponentFixture<EquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquipmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shows only the first page of machines initially', () => {
    expect(component.visible.length).toBe(component.pageSize);
  });

  it('every machine belongs to some filter group (none disappears)', () => {
    const groups = component.groups.filter(g => g !== 'All');
    let total = 0;
    for (const g of groups) {
      component.setGroup(g);
      total += component.filtered.length;
    }
    expect(total).toBe(component.machines.length);
  });

  it('setGroup resets visibleCount to pageSize', () => {
    component.showMore();
    component.setGroup('Packaging');
    expect(component.visibleCount).toBe(component.pageSize);
  });

  it('showMore never goes past the list length', () => {
    component.showMore();
    component.showMore();
    component.showMore();
    expect(component.visibleCount).toBe(component.filtered.length);
  });

  it('showLess goes back to the first page', () => {
    component.showMore();
    component.showLess();
    expect(component.visibleCount).toBe(component.pageSize);
  });

  it('numberOf gives a fixed catalogue number regardless of filter', () => {
    const capping = component.machines.find(m => m.category === 'Capping')!;
    const before = component.numberOf(capping);
    component.setGroup('Capping & Labeling');
    expect(component.numberOf(capping)).toBe(before);
  });

  it('open locks scroll and builds modal specs; close unlocks', () => {
    const m = component.machines[0];
    component.open(m);
    expect(component.selected).toBe(m);
    expect(component.modalSpecs.length).toBe(m.specs.length + component.commonSpecs.length);
    expect(document.body.style.overflow).toBe('hidden');

    component.close();
    expect(component.selected).toBeNull();
    expect(document.body.style.overflow).toBe('');
  });

  it('Escape closes the modal', () => {
    component.open(component.machines[0]);
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    expect(component.selected).toBeNull();
  });

  it('ngOnDestroy releases scroll lock if modal is open', () => {
    component.open(component.machines[0]);
    component.ngOnDestroy();
    expect(document.body.style.overflow).toBe('');
  });

  it('onImgError marks an image as failed', () => {
    component.onImgError('assets/equipment/x.webp');
    expect(component.failed['assets/equipment/x.webp']).toBeTrue();
  });
});