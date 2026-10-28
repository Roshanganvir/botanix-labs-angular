import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../shared/reveal/reveal.directive';

interface Spec { label: string; value: string; }

interface Machine {
  category: string;
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
export class EquipmentComponent {
  selected: Machine | null = null;

  commonSpecs: Spec[] = [
    { label: 'Product compatibility', value: 'Application and material dependent' },
    { label: 'Customization', value: 'Available on request; subject to feasibility' },
    { label: 'Final configuration', value: 'To be confirmed in technical offer' }
  ];

  machines: Machine[] = [
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
        { label: 'Power', value: '5–25 kW' }
      ]
    },
    {
      category: 'Tube Filling',
      title: 'Metal Tube Filling & Sealing',
      image: 'assets/equipment/metal-tube.webp',
      highlights: ['1–200 mL', 'Up to 12,000 units/hr'],
      specs: [
        { label: 'Filling volume', value: '1–120 mL / 1–200 mL' },
        { label: 'Production speed', value: 'Model-dependent; up to 12,000 units/hour' },
        { label: 'Tube diameter', value: 'Model-dependent; 10–30 mm' },
        { label: 'Tube size', value: 'Model-dependent; 50–210 mm' }
      ]
    },
    {
      category: 'Bottle Filling',
      title: 'Spray Bottle Filling & Capping Machine',
      image: 'assets/equipment/spray-bottle.webp',
      highlights: ['3–150 mL', 'Filling + capping'],
      specs: [
        { label: 'Filling volume', value: 'Model-dependent; 3–100 mL / 3–150 mL' }
      ]
    },
    {
      category: 'Bottle Filling',
      title: 'Perfume Filling & Pressing Machine',
      image: 'assets/equipment/perfume.webp',
      highlights: ['1–250 mL', '25–80 bottles/min'],
      specs: [
        { label: 'Filling volume', value: 'Model-dependent; 1–250 mL' },
        { label: 'Filling speed', value: 'Model-dependent; 25–80 bottles/min' },
        { label: 'Power supply', value: '3–8 kW' },
        { label: 'Air consumption', value: '0.6–0.8 MPa' }
      ]
    },
    {
      category: 'High Capacity',
      title: 'Large Capacity Filling Machine',
      image: 'assets/equipment/large-capacity.webp',
      highlights: ['4,500–12,000 BPH', '6.5–22.5 kW'],
      specs: [
        { label: 'Capacity', value: 'Model-dependent; 4,500–12,000 BPH' },
        { label: 'Power supply', value: 'Model-dependent; 6.5–22.5 kW' },
        { label: 'Air supply', value: '0.6–0.8 MPa' }
      ]
    },
    {
      category: 'Bottle Filling',
      title: 'Bottle Filling Machines',
      image: 'assets/equipment/bottle-filling.webp',
      highlights: ['50–5,000 mL', '1,000–5,000 BPH'],
      specs: [
        { label: 'Filling volume', value: 'Model-dependent; 50–5,000 mL / 15–3,000 mL / 10–5,000 mL' },
        { label: 'Production capacity', value: 'Model-dependent; 1,000–5,000 BPH / cans' },
        { label: 'Bottle mouth size', value: 'Model-dependent; 15–18 mm' },
        { label: 'Filling heads', value: 'Multiple head configurations' }
      ]
    },
    {
      category: 'Capping',
      title: 'Automatic Rotary Pneumatic Grasp & Capping Machine',
      image: 'assets/equipment/capping.webp',
      highlights: ['20–6,000 BPH', '38–300 mm bottle height'],
      specs: [
        { label: 'Capacity', value: 'Model-dependent; 20–6,000 BPH' },
        { label: 'Bottle height', value: 'Model-dependent; 38–300 mm' }
      ]
    },
    {
      category: 'Labeling',
      title: 'Labeling Machines',
      image: 'assets/equipment/labeling.webp',
      highlights: ['20–120 bottles/min', '1,000–2,000 W'],
      specs: [
        { label: 'Labelling speed', value: 'Model-dependent; 20–120 bottles/min' },
        { label: 'Label length', value: '100–200 mm' },
        { label: 'Paper inner & outer diameter', value: '76 mm / 330 mm' },
        { label: 'Dimension', value: 'Model-dependent (2000 × 800 × 1600 mm)' },
        { label: 'Electrical consumption', value: '1,000–2,000 W' }
      ]
    },
    {
      category: 'Cartoning',
      title: 'Multi-functional Automatic Cartoning Machine',
      image: 'assets/equipment/cartoning.webp',
      highlights: ['30–250 cartons/min', '1.1 kW'],
      specs: [
        { label: 'Capacity', value: 'Model-dependent; 30–250 cartons/min' },
        { label: 'Power range', value: '1.1 kW' },
        { label: 'Air pressure', value: '0.6 MPa (model-dependent)' }
      ]
    },
    {
      category: 'Packaging',
      title: 'Film Packaging Machine',
      image: 'assets/equipment/film-packaging.webp',
      highlights: ['20–80 packs/min', '5–10 kW'],
      specs: [
        { label: 'Production', value: '20–80 packs/min' },
        { label: 'Electricity', value: '5–10 kW' },
        { label: 'Conveyor', value: '1500 × 400 × 800 mm (model-dependent)' }
      ]
    },
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
        { label: 'Bag width', value: '18–60 mm' },
        { label: 'Total power', value: '27 kW' }
      ]
    },
    {
      category: 'Packaging',
      title: 'Horizontal Packaging Machine',
      image: 'assets/equipment/horizontal-packaging.webp',
      highlights: ['80–120 bags/min', 'Up to 100 mL'],
      specs: [
        { label: 'Bag size', value: 'Min 60 × 70 mm; Max 90 × 150 mm' },
        { label: 'Maximum volume', value: '100 mL' },
        { label: 'Output', value: '80–120 bags/min' },
        { label: 'Air consumption', value: '0.6 MPa' },
        { label: 'Electrical consumption', value: '8 kW' }
      ]
    },
    {
      category: 'Case Packing',
      title: 'Back-end Case Packaging Machines',
      image: 'assets/equipment/case-packaging.webp',
      highlights: ['7.5 kW', 'AC 380 V, 3-phase'],
      specs: [
        { label: 'Case size', value: 'Min 300 × 250 × 200 mm; Max 600 × 400 × 400 mm' },
        { label: 'Power supply', value: 'AC 380 V, 3-phase, 50 Hz' },
        { label: 'Power', value: '7,500 W' },
        { label: 'Air pressure & consumption', value: '≥ 0.6 MPa, < 1 m³/hr' },
        { label: 'Dimensions', value: '4,000 × 2,000 × 2,600 mm' },
        { label: 'Weight', value: '1,200 kg' }
      ]
    }
  ];

  // ---- Filter + Show more ----
  groups: string[] = ['All', 'Filling', 'Capping & Labeling', 'Packaging'];
  activeGroup = 'All';
  pageSize = 6;
  visibleCount = 6;

  // Naya category add karo to yaha uska group bhi likh do
  private groupMap: Record<string, string> = {
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

  setGroup(g: string) {
    this.activeGroup = g;
    this.visibleCount = this.pageSize;
  }

  showMore() { this.visibleCount += this.pageSize; }
  showLess() { this.visibleCount = this.pageSize; }

  open(m: Machine) {
    this.selected = m;
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.selected = null;
    document.body.style.overflow = '';
  }
}