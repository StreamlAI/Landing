import { useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import {
  ReactFlow,
  Background,
  Handle,
  type Node,
  type Edge,
  Position,
  BackgroundVariant,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

// ─── Custom Node Components ───────────────────────────────────────
const handleStyle = { background: "transparent", border: "none", width: 1, height: 1 };

function LogoNode({ data }: { data: { logo: string; label: string } }) {
  return (
    <div className="flex flex-col items-center gap-1.5 relative">
      <Handle type="source" position={Position.Right} style={handleStyle} />
      <Handle type="target" position={Position.Left} style={handleStyle} />
      <Handle type="target" position={Position.Top} id="top" style={handleStyle} />
      <div className="w-14 h-14 bg-white border-2 border-[#1A1A1A] flex items-center justify-center shadow-[2px_2px_0_#1A1A1A] hover:shadow-[3px_3px_0_#E63946] hover:border-[#E63946] transition-all">
        <img
          src={`/logos/${data.logo}.svg`}
          alt={data.label}
          className="w-8 h-8 object-contain"
        />
      </div>
      <span className="text-[10px] font-mono font-bold text-[#4A4A4A] whitespace-nowrap">
        {data.label}
      </span>
    </div>
  );
}

function HubNode() {
  return (
    <div className="relative bg-[#1D3557] border-2 border-[#1A1A1A] shadow-[6px_6px_0_#1A1A1A] px-10 py-6 text-center">
      <Handle type="target" position={Position.Left} style={handleStyle} />
      <Handle type="source" position={Position.Right} style={handleStyle} />
      <Handle type="source" position={Position.Bottom} id="bottom" style={handleStyle} />
      <div className="absolute -inset-3 border-2 border-[#1D3557]/20 animate-pulse pointer-events-none" />
      <div className="flex items-center justify-center gap-2 mb-3">
        <Zap className="w-4 h-4 text-[#FFB703]" />
        <span className="text-xs font-mono font-bold tracking-wider text-white/60">
          STREAML
        </span>
      </div>
      <h3 className="text-xl font-bold text-white tracking-tight mb-4">
        Agent Engine
      </h3>
      <div className="flex items-center justify-center gap-4">
        {[
          { logo: "openai", label: "OpenAI" },
          { logo: "anthropic", label: "Anthropic" },
        ].map((ai) => (
          <div key={ai.logo} className="flex flex-col items-center gap-1">
            <div className="w-11 h-11 bg-white/10 border border-white/20 flex items-center justify-center">
              <img
                src={`/logos/${ai.logo}.svg`}
                alt={ai.label}
                className="w-7 h-7 object-contain brightness-0 invert"
              />
            </div>
            <span className="text-[9px] font-mono text-white/50">
              {ai.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function LabelNode({ data }: { data: { label: string; color: string } }) {
  return (
    <span
      className="text-[11px] font-mono font-bold tracking-wider"
      style={{ color: data.color }}
    >
      {data.label}
    </span>
  );
}

const nodeTypes = {
  logo: LogoNode,
  hub: HubNode,
  label: LabelNode,
};

// ─── Data ─────────────────────────────────────────────────────────
const sources = [
  { logo: "salesforce", label: "Salesforce" },
  { logo: "hubspot", label: "HubSpot" },
  { logo: "snowflake", label: "Snowflake" },
  { logo: "googlesheets", label: "Sheets" },
  { logo: "airtable", label: "Airtable" },
  { logo: "notion", label: "Notion" },
  { logo: "zendesk", label: "Zendesk" },
  { logo: "intercom", label: "Intercom" },
];

const destinations = [
  { logo: "slack", label: "Slack" },
  { logo: "gmail", label: "Gmail" },
  { logo: "linkedin", label: "LinkedIn" },
  { logo: "outlook", label: "Outlook" },
  { logo: "github", label: "GitHub" },
  { logo: "jira", label: "Jira" },
  { logo: "confluence", label: "Confluence" },
  { logo: "zapier", label: "Zapier" },
];

const infra = [
  { logo: "googledrive", label: "Drive" },
  { logo: "onedrive", label: "OneDrive" },
  { logo: "sharepoint", label: "SharePoint" },
  { logo: "dropbox", label: "Dropbox" },
  { logo: "aws", label: "AWS" },
  { logo: "azure", label: "Azure" },
];

// ─── Layout Positions ─────────────────────────────────────────────
const COL_GAP = 160;
const ROW_GAP = 115;
const SRC_X1 = 0;
const SRC_X2 = COL_GAP;
const DST_X1 = 900;
const DST_X2 = 900 + COL_GAP;
const HUB_X = 430;
const HUB_Y = 200;
const INFRA_Y = 520;
const INFRA_START_X = 130;
const INFRA_GAP = 155;

function buildNodes(): Node[] {
  const nodes: Node[] = [];

  // Labels
  nodes.push({
    id: "label-src",
    type: "label",
    position: { x: SRC_X1, y: -40 },
    data: { label: "DATA SOURCES", color: "#1D3557" },
    draggable: false,
    selectable: false,
  });
  nodes.push({
    id: "label-dst",
    type: "label",
    position: { x: DST_X1, y: -40 },
    data: { label: "ACTIONS", color: "#E63946" },
    draggable: false,
    selectable: false,
  });
  nodes.push({
    id: "label-infra",
    type: "label",
    position: { x: HUB_X - 20, y: INFRA_Y - 40 },
    data: { label: "STORAGE & INFRASTRUCTURE", color: "#FFB703" },
    draggable: false,
    selectable: false,
  });

  // Source nodes (2 cols × 4 rows)
  sources.forEach((s, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    nodes.push({
      id: `src-${s.logo}`,
      type: "logo",
      position: { x: col === 0 ? SRC_X1 : SRC_X2, y: row * ROW_GAP },
      data: s,
      sourcePosition: Position.Right,
      draggable: false,
      selectable: false,
    });
  });

  // Hub
  nodes.push({
    id: "hub",
    type: "hub",
    position: { x: HUB_X, y: HUB_Y },
    data: {},
    draggable: false,
    selectable: false,
  });

  // Destination nodes (2 cols × 4 rows)
  destinations.forEach((d, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    nodes.push({
      id: `dst-${d.logo}`,
      type: "logo",
      position: { x: col === 0 ? DST_X1 : DST_X2, y: row * ROW_GAP },
      data: d,
      targetPosition: Position.Left,
      draggable: false,
      selectable: false,
    });
  });

  // Infrastructure nodes (single row)
  infra.forEach((n, i) => {
    nodes.push({
      id: `inf-${n.logo}`,
      type: "logo",
      position: { x: INFRA_START_X + i * INFRA_GAP, y: INFRA_Y },
      data: n,
      targetPosition: Position.Top,
      draggable: false,
      selectable: false,
    });
  });

  return nodes;
}

function buildEdges(): Edge[] {
  const edges: Edge[] = [];

  // Sources → Hub
  sources.forEach((s) => {
    edges.push({
      id: `e-src-${s.logo}`,
      source: `src-${s.logo}`,
      target: "hub",
      sourceHandle: null,
      targetHandle: null,
      type: "default",
      animated: true,
      style: { stroke: "#1D3557", strokeWidth: 1.5, opacity: 0.3 },
    });
  });

  // Hub → Destinations
  destinations.forEach((d) => {
    edges.push({
      id: `e-dst-${d.logo}`,
      source: "hub",
      target: `dst-${d.logo}`,
      type: "default",
      animated: true,
      style: { stroke: "#E63946", strokeWidth: 1.5, opacity: 0.3 },
    });
  });

  // Hub → Infrastructure
  infra.forEach((n) => {
    edges.push({
      id: `e-inf-${n.logo}`,
      source: "hub",
      sourceHandle: "bottom",
      target: `inf-${n.logo}`,
      targetHandle: "top",
      type: "default",
      animated: true,
      style: { stroke: "#FFB703", strokeWidth: 1.5, opacity: 0.3 },
    });
  });

  return edges;
}

// ─── Mobile Layout ────────────────────────────────────────────────
function MobileGroup({
  title,
  items,
  color,
}: {
  title: string;
  items: { logo: string; label: string }[];
  color: string;
}) {
  return (
    <div className="mb-4">
      <span
        className="text-[10px] font-mono font-bold tracking-wider mb-2 block"
        style={{ color }}
      >
        {title}
      </span>
      <div className="grid grid-cols-4 gap-3">
        {items.map((item, i) => (
          <motion.div
            key={item.logo}
            className="flex flex-col items-center gap-1"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
          >
            <div className="w-11 h-11 bg-white border-2 border-[#1A1A1A] flex items-center justify-center shadow-[2px_2px_0_#1A1A1A]">
              <img
                src={`/logos/${item.logo}.svg`}
                alt={item.label}
                className="w-6 h-6 object-contain"
              />
            </div>
            <span className="text-[8px] font-mono font-bold text-[#4A4A4A]">
              {item.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────
export default function IntegrationWorkflow() {
  const nodes = useMemo(() => buildNodes(), []);
  const edges = useMemo(() => buildEdges(), []);

  const proOptions = useMemo(() => ({ hideAttribution: true }), []);

  const onInit = useCallback((instance: { fitView: () => void }) => {
    instance.fitView();
  }, []);

  return (
    <section
      id="integrations"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ borderTop: "4px solid #1A1A1A", backgroundColor: "#FAFAFA" }}
    >
      <div className="absolute inset-0 neo-grid opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-12 md:mb-16 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 mb-4 text-xs font-mono font-bold tracking-wider uppercase border-2 border-[#1A1A1A]"
          >
            /// INTEGRATION ECOSYSTEM
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
          >
            CONNECTED <span className="text-[#1D3557]">WORKFLOW</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#4A4A4A] max-w-2xl mx-auto mt-4"
          >
            Agents orchestrate actions across your entire tool stack — from data
            ingestion to multi-channel execution.
          </motion.p>
        </div>

        {/* Desktop: React Flow */}
        <div className="hidden lg:block">
          <div
            className="mx-auto border-2 border-[#E5E5E5] bg-white/50"
            style={{ height: 680, maxWidth: 1200 }}
          >
            <ReactFlow
              nodes={nodes}
              edges={edges}
              nodeTypes={nodeTypes}
              onInit={onInit}
              fitView
              panOnDrag={false}
              panOnScroll={false}
              zoomOnScroll={false}
              zoomOnPinch={false}
              zoomOnDoubleClick={false}
              preventScrolling={false}
              nodesDraggable={false}
              nodesConnectable={false}
              elementsSelectable={false}
              proOptions={proOptions}
              minZoom={0.5}
              maxZoom={1}
            >
              <Background
                variant={BackgroundVariant.Dots}
                gap={24}
                size={1.5}
                color="#ccc"
              />
            </ReactFlow>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="lg:hidden">
          <MobileGroup title="DATA SOURCES" items={sources} color="#1D3557" />
          <div className="flex justify-center my-3">
            <div className="w-[2px] h-6 bg-[#1D3557]" />
          </div>
          <motion.div
            className="bg-[#1D3557] border-2 border-[#1A1A1A] shadow-[4px_4px_0_#1A1A1A] p-5 text-center mb-3"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <Zap className="w-4 h-4 text-[#FFB703]" />
              <span className="text-sm font-bold text-white tracking-tight">
                Streaml Agent Engine
              </span>
            </div>
            <div className="flex items-center justify-center gap-3">
              {[
                { logo: "openai", label: "OpenAI" },
                { logo: "anthropic", label: "Anthropic" },
              ].map((ai) => (
                <div
                  key={ai.logo}
                  className="w-9 h-9 bg-white/10 border border-white/20 flex items-center justify-center"
                >
                  <img
                    src={`/logos/${ai.logo}.svg`}
                    alt={ai.label}
                    className="w-5 h-5 object-contain brightness-0 invert"
                  />
                </div>
              ))}
            </div>
          </motion.div>
          <div className="flex justify-center my-3">
            <div className="w-[2px] h-6 bg-[#E63946]" />
          </div>
          <MobileGroup title="ACTIONS" items={destinations} color="#E63946" />
          <div className="flex justify-center my-3">
            <div className="w-[2px] h-6 bg-[#FFB703]" />
          </div>
          <MobileGroup
            title="STORAGE & INFRASTRUCTURE"
            items={infra}
            color="#FFB703"
          />
        </div>
      </div>
    </section>
  );
}
