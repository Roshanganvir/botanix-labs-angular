import { Component, HostListener, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../shared/reveal/reveal.directive';

interface Spec { label: string; value: string; }

// Naya category add karna ho to yaha bhi likho aur neeche groupMap me bhi.
// Groupmap me bhoologe to TypeScript error dega (machine gayab nahi hogi).
type Category =
  | 'Tube Filling'
  | 'Bottle Filling'
  | 'High Capacity'
  | 'Capping'
  | 'Labeling'
  | 'Cartoning'
  | 'Packaging'
  | 'Case Packing';

interface Machine {
  category: Category;
  title: string;
  image: string;
  highlights: string[];
  specs: Spec[];
}

@Component({
  selector: 'app-equipment',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './equipment.component.html',
  styleUrl: './equipment.component.css'
})
export class EquipmentComponent implements OnDestroy {
  selected: Machine | null = null;
  modalSpecs: Spec[] = [];
  private lastTrigger: HTMLElement | null = null;

  // Jin images ki file load nahi hui unka path yaha aa jata hai (placeholder dikhane ke liye)
  failed: Record<string, boolean> = {};

  // Ye 3 rows har machine ke table me neeche automatically judti hain
  commonSpecs: Spec[] = [
    { label: 'Product compatibility', value: 'Application and material dependent' },
    { label: 'Customization availability', value: 'Available on request; subject to feasibility' },
    { label: 'Final configuration', value: 'To be confirmed in technical offer' }
  ];

 machines: Machine[] = [
  // 1
  {
    category: 'Tube Filling',
    title: 'Plastic Tube Filling & Sealing',
    image: 'assets/equipment/plastic-tube.webp',
    highlights: ['5–250 mL', 'Up to 12,000 units/hr'],
    specs: [
      { label: 'Filling volume', value: '5–250 mL' },
      { label: 'Production speed', value: 'Model-dependent; up to 12,000 units/hour' },
      { label: 'Tube diameter', value: 'Model-dependent; 10–50 mm / 13–50 mm' },
      { label: 'Tube size', value: 'Model-dependent; 70–210 mm' },
      { label: 'Operational air pressure', value: '0.6–0.8 MPa' },
      { label: 'Power', value: '5–25 kW' },
      { label: 'Product compatibility', value: 'Application and material dependent' },
      { label: 'Customization availability', value: 'Available on request; subject to feasibility' },
      { label: 'Final configuration', value: 'To be confirmed in technical offer' }
    ]
  },
  // 2
  {
    category: 'Tube Filling',
    title: 'Metal Tube Filling & Sealing',
    image: 'assets/equipment/metal-tube.webp',
    highlights: ['1–200 mL', 'Up to 12,000 units/hr'],
    specs: [
      { label: 'Filling volume', value: '1–120 mL / 1–200 mL' },
      { label: 'Production speed', value: 'Model-dependent; up to 12,000 units/hour' },
      { label: 'Tube diameter', value: 'Model-dependent; 10–30 mm' },
      { label: 'Tube size', value: 'Model-dependent; 50–210 mm' },
      { label: 'Operational air pressure', value: '0.6–0.8 MPa' },
      { label: 'Power', value: '2–15 kW' },
      { label: 'Customization availability', value: 'Available on request; subject to feasibility' },
      { label: 'Final configuration', value: 'To be confirmed in technical offer' }
    ]
  },
  // 3
  {
    category: 'Bottle Filling',
    title: 'Spray Bottle Filling & Capping Machine',
    image: 'assets/equipment/spray-bottle.webp',
    highlights: ['3–150 mL', 'Filling + capping'],
    specs: [
      { label: 'Filling volume', value: 'Model-dependent; 3–100 mL / 3–150 mL' },
      { label: 'Production speed', value: 'Model-dependent; 25–150 BPM' },
      { label: 'Power supply', value: 'Model-dependent; 2–5 kW' },
      { label: 'Air consumption', value: '0.6–0.8 MPa' },
      { label: 'Product compatibility', value: 'Application and material dependent' },
      { label: 'Customization availability', value: 'Available on request; subject to feasibility' },
      { label: 'Final configuration', value: 'To be confirmed in technical offer' },
      
    ]
  },
  // 4
  {
    category: 'Bottle Filling',
    title: 'Perfume Filling & Pressing Machine',
    image: 'assets/equipment/perfume.webp',
    highlights: ['1–250 mL', '25–80 bottles/min'],
    specs: [
      { label: 'Filling volume', value: 'Model-dependent; 1–250 mL' },
      { label: 'Filling speed', value: 'Model-dependent; 25–80 bottles/min' },
      { label: 'Power supply', value: 'Model-dependent; 3–8 kW' },
      { label: 'Air consumption', value: '0.6–0.8 MPa' },
      { label: 'Product compatibility', value: 'Application and material dependent' },
      { label: 'Customization availability', value: 'Available on request; subject to feasibility' },
      { label: 'Final configuration', value: 'To be confirmed in technical offer' }
    ]
  },
  // 5
  {
    category: 'High Capacity',
    title: 'Large Capacity Filling Machine (Viscous Filling Machine)',
    image: 'assets/equipment/large-capacity.webp',
    highlights: ['4,500–12,000 BPH', '6.5–22.5 kW'],
    specs: [
      { label: 'Capacity', value: 'Model-dependent; 4,500–12,000 BPH' },
      { label: 'Power supply', value: 'Model-dependent; 6.5–22.5 kW' },
      { label: 'Air supply', value: '0.6–0.8 MPa' },
      { label: 'Product compatibility', value: 'Application and material dependent' },
      { label: 'Customization availability', value: 'Available on request; subject to feasibility' },
      { label: 'Final configuration', value: 'To be confirmed in technical offer' }
    ]
  },
  // 6
  {
    category: 'Bottle Filling',
    title: 'Bottle Filling Machines',
    image: 'assets/equipment/bottle-filling.webp',
    highlights: ['50–5,000 mL', '1,000–5,000 BPH'],
    specs: [
      { label: 'Filling volume', value: 'Model-dependent; 50–5,000 mL; 15–3,000 mL; 10–5,000 mL' },
      { label: 'Production capacity', value: 'Model-dependent; 1,000–5,000 BPH / cans' },
      { label: 'Bottle mouth size', value: 'Model-dependent; 15–18 mm' },
      { label: 'Filling heads', value: 'Multiple head configurations' },
      { label: 'Product compatibility', value: 'Application and material dependent' },
      { label: 'Customization availability', value: 'Available on request; subject to feasibility' },
      { label: 'Final configuration', value: 'To be confirmed in technical offer' }
    ]
  },
  // 7
  {
    category: 'Capping',
    title: 'Capping Machine: Automatic Rotary Pneumatic Grasp & Capping Machine',
    image: 'assets/equipment/capping.webp',
    highlights: ['20–6,000 BPH', '38–300 mm bottle height'],
    specs: [
      { label: 'Capacity', value: '20–6,000 BPH (Model-dependent)' },
      { label: 'Bottle height', value: 'Model-dependent; 38–300 mm' },
      { label: 'Applicable cap diameter', value: 'Model-dependent' },
      { label: 'Power supply', value: '1.5–8 kW' },
      { label: 'Product compatibility', value: 'Application and material dependent' },
      { label: 'Customization availability', value: 'Available on request; subject to feasibility' },
      { label: 'Final configuration', value: 'To be confirmed in technical offer' }
    ]
  },
  // 8
  {
    category: 'Labeling',
    title: 'Labeling Machines',
    image: 'assets/equipment/labeling.webp',
    highlights: ['20–120 bottles/min', '1,000–2,000 W'],
    specs: [
      { label: 'Labelling speed', value: 'Model-dependent; 20–120 bottles/min' },
      { label: 'Label length', value: '100–200 mm' },
      { label: 'Applicable inner & outer diameter of paper', value: '76 mm / 330 mm' },
      { label: 'Dimension', value: 'Model-dependent (2000 × 800 × 1600 mm)' },
      { label: 'Electrical consumption', value: '1,000–2,000 W' },
      { label: 'Product compatibility', value: 'Application and material dependent' },
      { label: 'Customization availability', value: 'Available on request; subject to feasibility' },
      { label: 'Final configuration', value: 'To be confirmed in technical offer' }
    ]
  },
  // 9
  {
    category: 'Cartoning',
    title: 'Multi-functional Automatic Cartoning Machine',
    image: 'assets/equipment/cartoning.webp',
    highlights: ['30–250 cartons/min', '1.1 kW'],
    specs: [
      { label: 'Capacity', value: '30–250 cartons/min (Model-dependent)' },
      { label: 'Air pressure', value: '0.6 MPa (Model-dependent)' },
      { label: 'Power range', value: '1.1 kW' },
      { label: 'Capacity', value: '30-250 case/min (Model-dependent)' },

      { label: 'Product compatibility', value: 'Application and material dependent' },
      { label: 'Customization availability', value: 'Available on request; subject to feasibility' },
      { label: 'Final configuration', value: 'To be confirmed in technical offer' }
    ]
  },
  // 10
  {
    category: 'Packaging',
    title: 'Film Packaging Machine',
    image: 'assets/equipment/film-packaging.webp',
    highlights: ['20–80 packs/min', '5–10 kW'],
    specs: [
      { label: 'Production', value: '20–80 packs/min (Model-dependent)' },
      { label: 'Electricity', value: '5–10 kW' },
      { label: 'Conveyor', value: '1500 × 400 × 800 mm (Model-dependent)' },
      { label: 'Product compatibility', value: 'Application and material dependent' },
      { label: 'Customization availability', value: 'Available on request; subject to feasibility' },
      { label: 'Final configuration', value: 'To be confirmed in technical offer' }
    ]
  },
  // 11
  {
    category: 'Packaging',
    title: 'Small Bag Packaging Machines',
    image: 'assets/equipment/small-bag.webp',
    highlights: ['10–20 lanes', '30–60 cuts/min'],
    specs: [
      { label: 'Number of columns', value: '10–20 lanes' },
      { label: 'Packaging speed', value: '30–60 cuts/min' },
      { label: 'Fill capacity', value: '0.5–50 g' },
      { label: 'Bag length', value: '45–180 mm' },
      { label: 'Bag Wide range', value: '18–60 mm' },
      { label: 'Total power', value: '27 kW' },
      { label: 'Air consumption', value: '0.8 MPa' },
      { label: 'Product compatibility', value: 'Application and material dependent' },
      { label: 'Customization availability', value: 'Available on request; subject to feasibility' },
      { label: 'Final configuration', value: 'To be confirmed in technical offer' }
    ]
  },
  // 12
  {
    category: 'Packaging',
    title: 'Horizontal Packaging Machine',
    image: 'assets/equipment/horizontal-packaging.webp',
    highlights: ['80–120 bags/min', 'Up to 100 mL'],
    specs: [
      { label: 'Size', value: 'Min 60 × 70 mm; Max 90 × 150 mm' },
      { label: 'Maximum volume', value: '100 mL' },
      { label: 'Air consumption', value: '0.6 MPa' },
      { label: 'Output', value: '80–120 bags/min' },
      { label: 'Electrical consumption', value: '8 kW' },
      { label: 'Product compatibility', value: 'Application and material dependent' },
      { label: 'Customization availability', value: 'Available on request; subject to feasibility' },
      { label: 'Final configuration', value: 'To be confirmed in technical offer' }
    ]
  },
  // 13
  {
    category: 'Case Packing',
    title: 'Back-end Case Packaging Machines',
    image: 'assets/equipment/case-packaging.webp',
    highlights: ['7.5 kW', 'AC 380 V, 3-phase'],
    specs: [
      { label: 'Case size', value: 'Min 300 × 250 × 200 mm; Max 600 × 400 × 400 mm' },
      { label: 'Power supply', value: 'AC 380 V, 3-phase, 50 Hz' },
      { label: 'Power', value: '7,500 W*' },
      { label: 'Air pressure & consumption', value: '≥ 0.6 MPa, < 1 m³/hr' },
      { label: 'Dimensions', value: '4,000 × 2,000 × 2,600 mm' },
      { label: 'Weight', value: '1,200 kg' },
      { label: 'Product compatibility', value: 'Application and material dependent' },
      { label: 'Customization availability', value: 'Available on request; subject to feasibility' },
      { label: 'Final configuration', value: 'To be confirmed in technical offer' }
    ]
  }
];

  // ---- Filter + Show more ----
  groups: string[] = ['All', 'Filling', 'Capping & Labeling', 'Packaging'];
  activeGroup = 'All';
  pageSize = 6;
  visibleCount = this.pageSize;

  // Har Category ka group yaha hona zaroori hai (nahi hoga to TypeScript error)
  private groupMap: Record<Category, string> = {
    'Tube Filling': 'Filling',
    'Bottle Filling': 'Filling',
    'High Capacity': 'Filling',
    'Capping': 'Capping & Labeling',
    'Labeling': 'Capping & Labeling',
    'Cartoning': 'Packaging',
    'Packaging': 'Packaging',
    'Case Packing': 'Packaging'
  };

  get filtered(): Machine[] {
    return this.activeGroup === 'All'
      ? this.machines
      : this.machines.filter(m => this.groupMap[m.category] === this.activeGroup);
  }

  get visible(): Machine[] {
    return this.filtered.slice(0, this.visibleCount);
  }

  // Catalogue number fixed rehta hai, filter badalne par 01 se restart nahi hota
  numberOf(m: Machine): number {
    return this.machines.indexOf(m) + 1;
  }

  setGroup(g: string) {
    this.activeGroup = g;
    this.visibleCount = this.pageSize;
  }

  showMore() {
    this.visibleCount = Math.min(this.visibleCount + this.pageSize, this.filtered.length);
  }

  showLess() {
    this.visibleCount = this.pageSize;
    // List chhoti hone se page chhota ho jata hai, isliye wapas section ke top par le jao
    this.scrollToSection();
  }

  private scrollToSection() {
    // setTimeout: pehle Angular cards hata de, phir scroll ho
    setTimeout(() => {
      document.getElementById('equipment')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  // ---- Image fallback ----
  onImgError(src: string) {
    this.failed[src] = true;
  }

  // ---- Modal ----
  open(m: Machine) {
    this.lastTrigger = document.activeElement as HTMLElement | null;
    this.selected = m;
    this.modalSpecs = [...m.specs, ...this.commonSpecs];
    this.lockScroll();
    // focus modal ke andar bhejo (keyboard / screen reader ke liye)
    setTimeout(() => document.getElementById('eq-modal-close')?.focus());
  }

  close() {
    this.selected = null;
    this.unlockScroll();
    // focus wapas usi button par jisse modal khola tha (page scroll kiye bina)
    this.lastTrigger?.focus({ preventScroll: true });
    this.lastTrigger = null;
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    if (this.selected) this.close();
  }

  private lockScroll() {
    // scrollbar ki width bachao, warna page side me khisak jata hai
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    if (scrollbar > 0) document.body.style.paddingRight = scrollbar + 'px';
  }

  private unlockScroll() {
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
  }

  ngOnDestroy() {
    // modal khula ho aur page change ho jaye to scroll lock na reh jaye
    if (this.selected) this.unlockScroll();
  }
}