import ControlPanel from "../images/controlpanel.png";
import IndWire from "../images/indwire.png";
import Load from "../images/load.png";
import PLC from "../images/plc.png";
import Power from "../images/powQua.png";
import EnergyOp from "../images/engOpt.png";

const ServiceData = [
  {
    id: 1,
    title: "Control Panel Design",
    desc: [
      "Custom-built panels for safe and efficient operations.",
      "Designed to meet your industrial requirements.",
      "End-to-end panel design and setup.",
    ],
    url:ControlPanel
  },
  {
    id: 2,
    title: "Industrial Wiring & Maintenance",
    desc: [
      "Reliable wiring for heavy-duty environments.",
      "Safe installations and routine upkeep.",
      "Minimize risks and downtime.",
    ],
    url:IndWire
  },
  {
    id: 3,
    title: "Load Management System",
    desc: [
      "Monitor and balance power usage to avoid overloads and reduce energy costs.",
    ],
    url:Load
  },
  {
    id: 4,
    title: "PLC & SCADA Integration",
    desc: [
      "Smart automation with real-time control.",
      "Remote monitoring and data access.",
      "Boost efficiency through integration.",
    ],
    url:PLC
  },
  {
    id: 5,
    title: "Power Quality Analysis",
    desc: [
      "Detect and resolve voltage, current, and frequency issues for stable operations.",
    ],
    url:Power
  },
  {
    id: 6,
    title: "Energy Optimization",
    desc: [
      "Improve energy efficiency through smart controls and system fine-tuning.",
    ],
    url:EnergyOp
  },
];

export default ServiceData;
