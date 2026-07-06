// Single source of truth for page content.
// Edit values here to update the site; components read from this module.
// All numbers and text are drawn from the RoboVista paper
// ("RoboVista: Evaluating Vision Language Models for Diverse Robot Applications").

// Vite serves /public at the configured base path. Prefix asset URLs so they
// resolve both in dev ("/") and on GitHub Pages ("/robovista/").
const BASE = import.meta.env.BASE_URL
export const asset = (p) => `${BASE}${p.replace(/^\//, '')}`

export const paper = {
  title: 'RoboVista: Evaluating Vision-Language Models for Diverse Robot Applications',
  subtitle: 'Evaluating Vision-Language Models for Diverse Robot Applications',
  shortName: 'RoboVista',
  authors: [
    { name: 'Shuangyu Xie', url: null, affiliations: [1], equal: true },
    { name: 'Kaiyuan Chen', url: null, affiliations: [1], equal: true },
    { name: 'Ziyang Chen', url: null, affiliations: [1] },
    { name: 'Simeon Adebola', url: null, affiliations: [1] },
    { name: 'Yixuan Huang', url: null, affiliations: [2] },
    { name: 'Zehan Ma', url: null, affiliations: [1] },
    { name: 'Tianshuang Qiu', url: null, affiliations: [1] },
    { name: 'Wentao Yuan', url: null, affiliations: [3] },
    { name: 'Dhruv Shah', url: null, affiliations: [2, 3] },
    { name: 'Pannag R. Sanketi', url: null, affiliations: [3] },
    { name: 'Ken Goldberg', url: null, affiliations: [1] },
  ],
  affiliations: [
    { id: 1, name: 'University of California, Berkeley' },
    { id: 2, name: 'Princeton University' },
    { id: 3, name: 'Google DeepMind' },
  ],
  equalContribNote: 'Equal contribution.',
  venue: 'Accepted to RSS 2026',
}

// Set href to null to render a disabled/coming-soon button.
export const links = [
  { label: 'Paper', icon: 'paper', href: null },
  { label: 'arXiv', icon: 'arxiv', href: null },
  { label: 'Code', icon: 'github', href: 'https://github.com/KeplerC/rqa' },
  { label: 'Benchmark', icon: 'data', href: '#benchmark' },
  {
    label: 'Data',
    icon: 'data',
    href: 'https://huggingface.co/datasets/sy-xie/robovista',
  },
  { label: 'Leaderboard', icon: 'leaderboard', href: null },
]

export const tldr = {
  label: 'TL;DR',
  // Parts marked `hl: true` render in the default accent color. Set `hl` to a
  // named color string ('purple' | 'magenta' | 'blue' | 'teal' | 'green' |
  // 'amber' | 'red') to highlight that part in a specific color instead.
  parts: [
    { text: 'RoboVista', hl: 'purple' },
    {
      text:
        ' is an expert-annotated, robot-centric Visual Question Answering benchmark built with ',
    },
    { text: 'Robot Question Answering (RQA)', hl: 'blue' },
    {
      text:
        ' — a modular framework that turns real decision points from robot systems into grounded VQA. It contains ',
    },
    { text: '474 multiple-choice questions across 6 robot application domains and 39 task types', hl: 'purple' },
    {
      text:
        ', from agriculture and surgery to industrial automation and autonomous driving. State-of-the-art VLMs show ',
    },
    { text: 'substantial gaps', hl: 'blue' },
    {
      text:
        ' (best model only 56.5%), and physical robot experiments confirm that ',
    },
    { text: 'RoboVista performance strongly correlates with real-world task execution', hl: 'purple' },
    { text: '.' },
  ],
}

export const teaser = {
  image: asset('static/images/teaser-rqa.png'),
  alt: 'RoboVista overview: varied robot embodiments, deformable objects in cluttered scenes, and long-horizon contextual reasoning',
  caption: [
    { text: 'RoboVista Overview. ', strong: true },
    {
      text:
        'To support future robot applications, RoboVista presents fine-grained spatial understanding and embodied decision-making challenges for Vision–Language Models. Grounded in 6 robot application domains and 39 diverse tasks, it is an expert-annotated VQA dataset emphasizing variable robot embodiments (left), interactions with deformable objects in complex, cluttered scenes (middle), and long-horizon contextual understanding (right).',
    },
  ],
}

// RQA framework — placed near the top to mirror the paper, which introduces the
// modular abstraction in the Introduction (before the benchmark and evaluation).
export const rqa = {
  title: 'What is Robot Question Answering?',
  lead: [
    {
      text:
        'Many real-world robotic applications are fundamentally ',
    },
    { text: 'modular', hl: true },
    {
      text:
        ': complex behaviors are decomposed into well-defined functional tasks that are implemented and analyzed independently. ',
    },
    { text: 'Robot Question Answering (RQA)', hl: true },
    {
      text:
        ' mirrors this structure, decomposing robot behavior into four functional layers and unifying human expert annotation, algorithmic task execution, and automated question construction within a shared ',
    },
    { text: 'Robot-VQA interface', hl: true },
    {
      text:
        '. This captures the decision points that end-to-end, teleoperated benchmarks miss — and extends evaluation to domains where public data is scarce.',
    },
  ],
  modules: [
    {
      step: '01 · Perception',
      name: 'Scene Understanding',
      blurb:
        'Estimate task-relevant state from robot-centric observations — object geometry, spatial relationships, and physical interactions.',
    },
    {
      step: '02 · Decision',
      name: 'High-Level Planning',
      blurb:
        'Grounded task reasoning: select goals, sequence actions, and determine the appropriate next step under task constraints.',
    },
    {
      step: '03 · Motion',
      name: 'Action Awareness',
      blurb:
        'Judge whether candidate actions are physically feasible — reachability, collision avoidance, and closed-loop visual feedback.',
    },
    {
      step: '04 · Recovery',
      name: 'Robustness',
      blurb:
        'Detect execution failures from observed outcomes and infer corrective actions to close the loop across modules.',
    },
  ],
  // The module-level problem abstraction M = (E, X, U, C).
  tupleTitle: 'A module-level problem abstraction',
  tupleLead:
    'Any functional block in the pipeline is described by a tuple 𝓜 = (𝓔, 𝓧, 𝓤, 𝓒), mapped into a Robot-VQA instance (𝓥, q, a★, 𝓐, r) of visual input, question, answer, candidate set, and rationale.',
  tuple: [
    {
      sym: '𝓔',
      name: 'Embodiment Setup',
      body: 'The robot’s physical configuration and sensing: kinematic structure, actuation limits, and sensor modalities.',
    },
    {
      sym: '𝓧',
      name: 'State Space',
      body: 'Latent and observed variables of robot and environment — joint configurations, object poses, semantic attributes.',
    },
    {
      sym: '𝓤',
      name: 'Task Output Space',
      body: 'The decision or control manifold: discrete actions or motion parameters the module must produce.',
    },
    {
      sym: '𝓒',
      name: 'Constraints',
      body: 'Feasibility conditions — collision avoidance, joint limits — that restrict the valid output space.',
    },
  ],
}

export const benchmark = {
  title: 'The RoboVista Benchmark',
  intro:
    'RoboVista consists of 474 expert-annotated, multiple-choice Robot-VQA questions, each paired with 5 candidate answers and a detailed human reasoning explanation. Visual data is curated from six application domains and 39 distinct task types, drawn from 18 peer-reviewed publications and open robot datasets (DROID, Open X-Embodiment, AgiBot). All annotators are graduate-level and above, with more than half holding Ph.D. degrees in Robotics.',
  domains: [
    {
      name: 'Open Datasets',
      count: 150,
      color: '#f59e0b',
      blurb: 'DROID, Open X-Embodiment, and AgiBot trajectories, with questions based on the Robo2VLM framework.',
    },
    {
      name: 'Industrial',
      count: 144,
      color: '#64748b',
      blurb: '1D/3D deformable manipulation, assembly, bin picking, and defect scanning on factory lines.',
    },
    {
      name: 'Agriculture',
      count: 62,
      color: '#22c55e',
      blurb: 'Robot gardening, plant inspection, and weed removal under occlusion and extreme lighting.',
    },
    {
      name: 'Domestic',
      count: 52,
      color: '#eab308',
      blurb: 'Home tidying and garment manipulation in well-lit, human-scale, structured scenes.',
    },
    {
      name: 'Surgical',
      count: 46,
      color: '#ef4444',
      blurb: 'Long-horizon knot tying and debridement on the da Vinci Research Kit (dVRK).',
    },
    {
      name: 'Driving',
      count: 20,
      color: '#3b82f6',
      blurb: 'Self-driving decision points from the autonomous-driving challenge in Mcity.',
    },
  ],
  gallery: {
    image: asset('static/images/gallery.png'),
    alt: 'RoboVista gallery of representative visual observations across the six robot application domains',
    caption: [
      { text: 'RoboVista Gallery. ', strong: true },
      {
        text:
          'Representative visual observations and tasks across the six domains — agriculture, autonomous driving, domestic, industrial, surgical, and open robot datasets.',
      },
    ],
  },
  stats: [
    { value: '474', label: 'Expert-annotated VQA questions' },
    { value: '6', label: 'Robot application domains' },
    { value: '39', label: 'Distinct robot task types' },
    { value: '730', label: 'Robot-centric images' },
  ],
}

export const method = {
  title: 'Building RoboVista',
  intro:
    'RoboVista follows a three-stage data-curation pipeline designed to ensure task realism, visual grounding, and cross-domain consistency. Questions are decomposed and structured by domain experts familiar with the underlying robotic algorithms, answerable from the provided robot-centric context alone, and verified to admit a single, well-defined correct answer.',
  // The module-abstraction pipeline (paper Fig. "RQA-module1" / fig:task).
  pipeline: {
    image: asset('static/images/rqa-module.png'),
    alt: 'Module abstraction of diverse robot application pipelines: perception, high-level decision making, motion/action estimation, and failure recovery across varied application scenes and robot embodiments',
    caption: [
      { text: 'Module abstraction of diverse robot application pipelines. ', strong: true },
      {
        text:
          'RQA mirrors modular robot system design, spanning diverse application scenes and embodiments. Robot operation decomposes into four functional layers — perception (state estimation), high-level decision making (meta-policy selection), motion/action estimation, and failure recovery — which RQA maps into a shared Robot-VQA interface.',
      },
    ],
  },
  cards: [
    {
      title: 'Data Collection',
      body: 'Survey robotics datasets and peer-reviewed publications across industrial, agricultural, domestic, surgical, and driving domains; extract robot-centric single images and short sequences from onboard or robot-visible viewpoints and group them into candidate task episodes.',
    },
    {
      title: 'Question Construction',
      body: 'Domain experts (four postdoctoral researchers and three master’s students) manually author each question to correspond to a concrete decision point — grasp selection, next-action prediction, motion feasibility, or failure diagnosis — as five-option multiple choice with a natural-language rationale.',
    },
    {
      title: 'Quality Control',
      body: 'Every instance is independently verified by at least one additional robotics expert who checks visual grounding, answer correctness, and linguistic ambiguity. Questions that admit multiple answers, rely on non-visual cues, or lack task relevance are revised or discarded.',
    },
  ],
  caseStudies: {
    title: 'Case studies across domains',
    intro:
      'Despite differences in embodiment, contact dynamics, and task horizon, diverse pipelines decompose into the same functional modules. RQA was instantiated on two representative systems:',
    // Worked examples mapping each system to Robot-VQA (paper Fig. "RQA-exps").
    figure: {
      image: asset('static/images/rqa-examples.png'),
      alt: 'Two RQA case studies — ambidextrous bin picking with Dex-Net 4.0 (top) and surgical knot tying (bottom) — each decomposed into perception, high-level planning, motion awareness, and failure recovery columns',
      caption: [
        { text: 'RQA case studies across domains. ', strong: true },
        {
          text:
            'Two examples of how RQA maps continuous physical robot states into modular, discrete VQA pairs at critical decision points such as tool alignment and tension management. Top: ambidextrous bin picking with Dex-Net 4.0. Bottom: surgical knot tying. Each is decomposed into perception, high-level planning, motion awareness, and failure recovery.',
        },
      ],
    },
    items: [
      {
        name: 'Ambidextrous Bin Picking',
        body: 'Dex-Net 4.0 clears a cluttered bin with a suction and a parallel-jaw gripper, sampling candidate grasps and scoring robustness with a GQ-CNN. RQA exposes its grasp selection, feasibility, and recovery decisions as Robot-VQA.',
      },
      {
        name: 'Surgical Knot Tying',
        body: 'A long-horizon, contact-rich dVRK task is framed as a sequence of perception-grounded decision points — tool positioning, loop formation, tension management, and error detection.',
      },
    ],
  },
}

export const results = {
  title: 'Evaluating State-of-the-Art VLMs',
  intro:
    'We benchmark open-source (Qwen2.5-VL, Qwen3-VL), robotics-specialized (Robo2VLM-ER, RoboBrain 2.5), and closed-source (GPT-4o, GPT-5, Gemini 2.5 Pro) models. Even the strongest model reaches only 56.5% overall — RoboVista poses non-trivial challenges across every domain. Best per column in bold; the top closed and open models are highlighted.',
  tables: [
    {
      name: 'Zero-Shot Accuracy on RoboVista (%)',
      note: 'Overall and per-domain accuracy. Random baseline = 20%. A text-only model is included to show how much linguistic signal the answer choices leak.',
      columns: ['Model', 'All', 'Agri.', 'Driving', 'Home', 'Industry', 'Surgery', 'Open'],
      rows: [
        { group: 'Baselines' },
        { cells: ['Random', '20.0', '20.0', '20.0', '20.0', '20.0', '20.0', '20.0'] },
        { cells: ['Qwen3-8B (text-only)', '25.1', '27.4', '30.0', '30.8', '22.2', '26.1', '24.0'] },
        { group: 'Closed-source models' },
        { cells: ['GPT-4o', '49.6', '50.0', '50.0', '59.2', '32.5', '67.4', '53.5'] },
        { cells: ['GPT-5', '48.1', '38.7', '55.0', '46.1', '35.7', '63.0', '58.3'] },
        { cells: ['Gemini 2.5 Pro', '56.5', '48.4', '50.0', '63.2', '48.4', '76.1', '58.3'], bold: [1, 4, 5, 6], highlight: true },
        { group: 'Open-source models' },
        { cells: ['Qwen2.5-VL-72B', '44.3', '43.5', '35.0', '40.8', '31.7', '69.6', '50.7'] },
        { cells: ['Robo2VLM-ER', '42.6', '35.5', '40.0', '43.4', '32.5', '54.3', '50.7'] },
        { cells: ['RoboBrain 2.5-8B', '45.8', '37.1', '55.0', '51.3', '36.5', '56.5', '50.0'] },
        { cells: ['RoboBrain 2.5-8B-NV', '47.0', '27.4', '40.0', '56.6', '38.9', '65.2', '52.8'] },
        { cells: ['Qwen3-VL-32B', '49.2', '48.4', '55.0', '48.7', '35.7', '65.2', '55.6'] },
        { cells: ['Qwen3-235B-A22B', '51.3', '46.8', '60.0', '53.9', '37.3', '69.6', '56.9'], bold: [2, 3, 7], highlight: true },
      ],
    },
    {
      name: 'Chain-of-Thought: Perception vs. Planning (Δ vs. zero-shot)',
      note: 'CoT consistently hurts low-level perception (over-thinking interferes with fine-grained spatial processing) but often helps multi-step planning. Green = improvement, red = degradation.',
      columns: ['Model', 'Overall Δ', 'Perception Δ', 'Planning Δ'],
      deltaCols: [1, 2, 3],
      rows: [
        { cells: ['Qwen2.5-VL-3B', '-10.3', '-11.9', '-7.1'] },
        { cells: ['Qwen2.5-VL-7B', '-7.2', '-11.3', '+1.3'] },
        { cells: ['Qwen2.5-VL-72B', '-1.3', '-4.4', '+5.1'] },
        { cells: ['Robo2VLM-ER', '-5.1', '-8.8', '+2.6'] },
        { cells: ['Qwen3-VL-32B', '+1.7', '-1.6', '+8.3'] },
        { cells: ['GPT-5', '+0.2', '-0.3', '+1.3'] },
      ],
    },
    {
      name: 'In-Context Learning: Accuracy & Calibration (Δ vs. zero-shot)',
      note: 'Even same-domain in-context examples reduce accuracy (2.8–6.5%) and increase calibration error — encouraging confident but less reliable predictions. CE ↓ is better; green = improvement, red = degradation.',
      columns: ['Model', 'Accuracy Δ', 'Calibration Error Δ'],
      // Calibration error going up is bad, so invert its color sign.
      deltaCols: [1],
      deltaColsInverted: [2],
      rows: [
        { cells: ['Qwen2.5-VL-7B', '-4.0', '+4.4'] },
        { cells: ['Qwen2.5-VL-32B', '-2.8', '+3.7'] },
        { cells: ['RoboBrain-MT', '-6.5', '+9.7'] },
        { cells: ['RoboBrain-NV', '-4.6', '+8.8'] },
        { cells: ['Qwen3-VL-8B', '-5.0', '+5.6'] },
        { cells: ['Qwen3-VL-32B', '-1.7', '+3.1'] },
      ],
    },
  ],
  failure:
    'Failure analysis of model reasoning chains shows most errors originate from visual perception, not logic: misidentification is the single largest failure mode (30.2% on Qwen2.5-VL-7B). Scaling to 235B reduces misidentification (30.2% → 20.3%), but spatial and semantic errors persist — geometry-aware perception is not resolved by scale alone.',
}

export const physical = {
  title: 'Physical Robot Validation',
  intro:
    'Does RoboVista accuracy predict real-world performance? We integrate VLMs into two physical robot tasks and find a strong correlation between benchmark scores and task execution.',
  blocks: [
    {
      tag: 'Task A',
      name: 'Bimanual Gripper Alignment',
      body: 'Given a top-down main camera and two wrist views, the VLM estimates the distance between the left and right gripper tips and emits a sequence of symbolic motion commands to align them — evaluated across five geometric priors (kitchen objects, industrial parts, plants, and more).',
      figure: {
        image: asset('static/images/bimanual-setup.png'),
        alt: 'Two bimanual gripper-alignment setups seen from main and wrist cameras',
        caption: 'Two bimanual gripper-alignment setups. The VLM reasons over multi-camera views and spatial priors to plan a symbolic motion that touches the two gripper tips.',
      },
      correlations: [
        { value: 'r = −0.78', label: 'Position error (Pearson)' },
        { value: 'ρ = −0.93', label: 'Position error (Spearman)' },
        { value: 'r = −0.70', label: 'Distance error (Pearson)' },
      ],
      result:
        'Higher RoboVista scores consistently yield lower distance-estimation and final-alignment errors — a strong monotonic relationship between benchmark accuracy and real-world spatial grounding.',
    },
    {
      tag: 'Task B',
      name: 'Surgical Knot-Tying (dVRK)',
      body: 'In a shared-autonomy setting, the VLM is queried sequentially at critical decision points of a knot-tying procedure — tool positioning, loop formation, tension management, and error detection — and the operator proceeds on its guidance unless intervention is needed.',
      figure: {
        image: asset('static/images/knot-tie.png'),
        alt: 'Surgical knot-tying sequence on the da Vinci Research Kit, from tool positioning to the goal knot',
        caption: 'The knot-tying sequence on the dVRK, decomposed by RQA into perception-grounded decision points ending at the goal knot.',
      },
      table: {
        columns: ['Model', 'RoboVista-Surgery', 'w/o Intervention', 'w/ Intervention'],
        rows: [
          { cells: ['Qwen-2.5 32B', '58.7', '2/16', '9/16'] },
          { cells: ['ChatGPT-5.0', '63.0', '2/16', '9/16'] },
          { cells: ['Gemini 2.5 Pro', '76.1', '2/16', '15/16'], bold: [1, 3], highlight: true },
        ],
      },
      result:
        'Higher RoboVista-Surgery scores track greater shared-autonomy progress: Gemini 2.5 Pro completes 15/16 stages with up to three interventions. All models share a common failure at the pointing step, where minor execution errors compound across consecutive decisions.',
    },
  ],
}

export const findings = {
  title: 'Key Findings',
  items: [
    'RoboVista is hard: even the best model (Gemini 2.5 Pro) reaches only 56.5% overall, and every domain leaves a substantial gap for state-of-the-art VLMs.',
    'Domains differ sharply: domestic scenes (well-lit, human-scale) are easiest, while agriculture — fine-grained plant morphology, self-occlusion, deformable structures — is consistently the hardest, even for the largest models.',
    'Chain-of-Thought is a trade-off: it degrades low-level perception by up to 12% through over-thinking, yet often improves multi-step planning in surgical and agricultural tasks.',
    'In-context learning backfires: same-domain examples reduce accuracy by 2.8–6.5% and raise calibration error by up to 9.7%, amplifying confident hallucination.',
    'Perception is the bottleneck: misidentification is the dominant failure mode (30.2%); scale reduces it but does not resolve spatial and geometry-aware reasoning.',
    'The benchmark is predictive: RoboVista scores strongly correlate with real-world bimanual alignment (ρ = −0.93) and surgical knot-tying progress on physical robots.',
  ],
}

export const futureWork = {
  title: 'Limitations & Future Work',
  intro:
    'RQA translates diverse robot decision points into a unified, robot-centric VQA interface, and RoboVista instantiates it across six real-world domains. Reaching broader coverage opens several directions.',
  items: [
    {
      title: 'Expert annotation cost',
      body: 'Constructing high-quality Robot-VQA instances requires significant effort from human domain experts to ensure visual grounding, task relevance, and unambiguous answers.',
    },
    {
      title: 'Automated construction',
      body: 'While parts of the pipeline can be automated, future work will explore automated question generation and verification to scale the benchmark without sacrificing quality.',
    },
    {
      title: 'Broader tasks & embodiments',
      body: 'We aim to extend RoboVista to additional robot tasks, embodiments, and interaction types — covering more of the long tail of real-world robot applications.',
    },
  ],
}

export const citation = {
  label: 'BibTeX',
  bibtex: `@inproceedings{xie2026robovista,
  title     = {RoboVista: Evaluating Vision-Language Models for Diverse Robot Applications},
  author    = {Xie, Shuangyu and Chen, Kaiyuan and Chen, Ziyang and Adebola, Simeon and Huang, Yixuan and Ma, Zehan and Qiu, Tianshuang and Yuan, Wentao and Shah, Dhruv and Sanketi, Pannag R. and Goldberg, Ken},
  booktitle = {Robotics: Science and Systems (RSS)},
  year      = {2026},
}`,
}

export const footerNote =
  'Project page for RoboVista. Built with Vite + React; design adapted from a modern academic project-page template. You are free to reuse the source.'
