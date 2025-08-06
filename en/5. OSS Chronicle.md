---
title: OSS Chronicle
tags: [2024 China Open Source Report]
---

# Open Source Chronicle

## Preface 

> Translator: Biaowei Zhuang, Reviewer: Ted Liu

In compiling this year’s Open Source Chronicle, we are profoundly reminded **that open source and AI, as dual engines of innovation in the digital era, are reshaping the global technological landscape at an unprecedented pace**. The 2024 Chronicle not only documents the rise of China’s open source influence but also highlights seismic shifts in the global open source ecosystem—where every breakthrough in technology, every paradigm shift in governance, and every geopolitical maneuver are inextricably linked to the future of open source communities worldwide. 

Due to the restructuring of chapters, our open-source chronicle for this year primarily focuses on significant events outside the development of artificial intelligence technology. Beyond AI, the open-source world in 2024 is equally fascinating, and we have summarized the following characteristics:

- **Open Source Technology Leaps Forward** The proliferation of domestic programming languages, groundbreaking progress in homegrown AI and big data ecosystems, and the large-scale adoption of RISC-V chips underscore how open source continues to define the cutting edge of technology. 
- **Security Risks Reach Grave Proportions** The discovery of the XZ backdoor that lurked undetected for three years, coupled with state-sponsored supply chain attacks, has subjected open source defenses to their most severe test yet. 
- **Community Upheavals Intensify** Controversies such as the expulsion of Russian contributors from the Linux kernel project and the licensing shift of Redis that spurred the Valkey fork reveal deepening fractures in the collaborative foundations of open source. 
- **Geopolitical Tensions Escalate** The U.S. tightened AI chip export controls, while the EU advanced open source compliance legislation, accelerating the global battle for technological sovereignty.
- **Governance Paradigms Evolve** China’s Supreme Court issued a landmark ruling affirming the enforceability of GPL licenses, and the rise of Valkey as a Redis fork signaled a pivotal moment in redefining open source governance frameworks.
- **Education Initiatives Flourish** Over 100 universities launched dedicated open source courses, and collaborative projects involving tens of millions of lines of code have catalyzed a new era of talent cultivation.
- **Policy Shifts Reshape the Landscape** National and regional open source policies took effect across China, even as global compliance frameworks clashed, cementing open source as a strategic battleground in the digital economy.

This report transcends mere documentation; it seeks to illuminate critical trends. As AI begins authoring code, as geopolitical divides fracture technical ecosystems, and as legal precedents redefine open source boundaries, we stand at a historic inflection point. We hope this Chronicle — a tapestry of technological breakthroughs, security warnings, commercial experiments, and policy debates — will serve as a navigational beacon for China’s open source community through turbulent transformations. For the rules governing tomorrow’s open source world are being written today, by the hands of its practitioners.

## 1. Open Source Technologies

> Translator: Yi (RollRoll) Yuan, Reviewer: Yi (RollRoll) Yuan

### 1.1 Operating Systems and Programming Languages

- **Linux Kernel 6.7 Release Announcement**  
    The stable release of Linux Kernel 6.7 has been announced, featuring over 17,000 non-merged commits and more than 1,000 merged commits, making it one of the largest kernel versions to date.  

- **Real-Time Linux Patch Merged in Mainline Kernel**
    At the European Open Source Summit in September 2024, Linus Torvalds announced the acceptance of the 'PREEMPT_RT' (Real-Time Linux) patch into the Linux mainline kernel. Starting from Linux 6.12, all distributions will include real-time Linux code, allowing Linux to operate on more mission-critical devices and industrial hardware.  

- **StarryOS Open Source Initiative**
    Zhongguancun Laboratory, Ant Group, Peking University, Southern University of Science and Technology, among others, jointly released the open-source system software stack "StarryOS," providing a secure and reliable technology foundation to global developers.  

- **MoonBit Programming Language Build System Released**
    The build system "moon" for the MoonBit programming language has been officially released as open source, providing functionalities for compilation, automated testing, coverage testing, and package management. It also offers comprehensive project structure and dependency information for IDEs to ensure a smooth user experience in highly interactive development environments.  

- **ByteDance's Linux Kernel Network Packet Capture Tool netcap**
    ByteDance's STE team has released the Linux kernel network packet capture tool "netcap," which can track nearly the entire kernel network protocol stack, helping developers enhance the efficiency of identifying network packet loss issues.  

- **Python Surpasses JavaScript as Most Popular Language on GitHub**
    According to the GitHub Octoverse 2024 report, Python has surpassed JavaScript to become the most popular language on GitHub, primarily due to its dominant position in data science, machine learning, and scientific computing. The report highlights significant growth in the global developer community, especially in India, Nigeria, and Brazil, with open source remaining a cornerstone of innovation on GitHub.  

- **Huawei's Self-Developed Programming Language 「Cangjie」**
    Huawei officially announced its self-developed programming language "Cangjie" at the HDC 2024 conference. This language is designed for all-scenario application development, offering efficient programming, safety, reliability, ease of concurrency, exceptional performance, and agile scalability. It supports declarative UI and one-time development for multiple platforms.  

- **Progress on C++ and Rust Interoperability**
    The Rust Foundation released a statement on "C++/Rust interoperability issues," outlining future work plans to provide transparency and encourage collaboration to overcome interoperability challenges.  

- **Java 23 Launch Announcement**
    Java 23 is now fully launched as a non-LTS (Long-Term Support) version, with Oracle providing support for six months. This version includes 12 JEPs (Java Enhancement Proposals), featuring changes such as switching ZGC to a generational mode.  

- **Major Updates for Go+**
    Developed by a Chinese team, Go+ is a static programming language based on Go, designed for engineering, STEM education, and data science. In 2024, Go+ introduced significant new capabilities, including support for the Go+ Mini Spec and the ability to import C and Python libraries.  

- **Didi's Flutter Hybrid Development Framework Unify Open Sourced**
    Didi's international takeaway team has officially open-sourced its hybrid development framework "Unify," which addresses communication challenges between Flutter and native modules in large-scale cross-end scenarios.  

- **Microsoft Releases MS-DOS 4.00 Source Code**
    In collaboration with IBM, Microsoft has released the source code for MS-DOS 4.00 under the MIT license, stemming from the discovery of an unpublished version of the DOS 4.0 beta binary file.  

- **Kylin Software Releases Cross-Platfor Universal Linux Component Klink**
    Kylin Software has launched the cross-platform universal Linux interconnect component "Klink," supporting the discovery, connection, networking, authentication, and secure data transmission between devices on Linux.  

- **Tongji University's Safe Computing Operating System Open Source**
    Tongji University has developed a computational middleware called XuWare for mission-critical systems, which prioritizes real-time performance, security, and reliability. The core implementation code has been open-sourced to the OpenAtom openEuler community.  

- **Mojo Programming Language Open Sources Standard Library**
    The AI programming language Mojo has announced the open-source release of its core standard library, which includes functionalities for optimizing AI hyperparameters that determine how neural networks process data. Mojo aims to combine the usability of Python with the portability and performance of C, targeting AI research and production.

- Wa Programming Language Completes All Features  

Wa is an opensource project maintained by Wuhan WaYuYan Technology Co., Ltd., its goal is
to provide a clean, reliable, easy-to-use, strongly typed, compiled general-purpose programming
language for high-performance web applications, Wa is currently in the engineering trial phase.

- BLUE BOOK ON PROGRAMMING LANGUAGES IN CHINA - 2024  

The Blue Book is a collaborative publication jointly compiled by the Programming Language Open Community (PLOC) and the Hubei Software Industry Association (HBSIA), with technical support provided by GitCode. This volume features 20 domestic programming language projects spanning diverse application areas, including AI-native development, embedded systems, computational mathematics, front-end development, databases, low-code platforms, and cloud-native solutions. The Blue Book aims toT present an overarching view of the local programming language ecosystem. It is designed to offer valuable insights for policy-making, language selection in software development, and broader community engagement.


### 1.2 Data Infra

* **The Decline of HBase, the Database Giant**  
    Pinterest's engineering team has announced plans to phase out its HBase clusters and transition to database technologies such as Druid/StarRocks, Goku, KVStore, and TiDB. Pinterest once operated the largest HBase deployment globally, but due to high maintenance costs, a shortage of skilled professionals, and functional limitations, the company has decided to gradually retire HBase. This decision has sparked widespread discussion within the tech community about HBase's future prospects.

* **Chinese Open-Source Time-Series Database IoTDB Tops TPCx-IoT**  
    Originating from Tsinghua University, the open-source time-series database IoTDB has claimed the top spot on the internationally authoritative TPCx-IoT ranking, setting new world records for both performance and cost-effectiveness. IoTDB is designed to meet the stringent demands of large-scale IoT and industrial IoT applications.

* **PostgreSQL 17 Released**  
    PostgreSQL 17, the latest version of what is often referred to as the world's most advanced open-source database, has been officially released. The new version includes improvements for large-scale database operations and enhancements to the developer experience.

* **Huawei Officially Open-Sources openUBMC**  
    As the management hub for computing power devices, the Baseboard Management Controller (BMC) is central to the intelligent management of computing nodes. Based on Huawei's BMC, openUBMC facilitates a community-driven ecosystem that minimizes redundant development costs and achieves plug-and-play adaptability between hardware (southbound) and network management (northbound). Leveraging openUBMC's advanced micro-component architecture and one-stop development capabilities via BMC Studio, partners and developers can efficiently adapt hardware, quickly develop app components, flexibly customize northbound interfaces, and rapidly develop proprietary features to build differentiated competitive advantages.

* **Microsoft Announces Open-Sourcing of Data Processing System Drasi**  
    Microsoft has announced the open-sourcing of a new data processing system called Drasi, which can detect and respond to changes in complex systems, simplifying the detection and response to critical events. The project has been submitted to the Cloud Native Computing Foundation (CNCF).

* **Tencent Open-Sources High-Performance Logging System BqLog**  
    Tencent has open-sourced its high-performance logging system BqLog, a lightweight, cross-platform, and high-performance logging component originally developed for *Honor of Kings* (international version). Implemented in C++, it also supports Java and C# calls. BqLog can be used with game engines such as Unreal and Unity, as well as in Android and iOS app environments.

* **Kubernetes 10th Anniversary Celebration Reflects on Its History and Open-Source Contributions**  
    At the Kubernetes 10th anniversary celebration held at Google's headquarters, Kelsey Hightower and Solomon Hykes reflected on the evolution of container technology and its impact on the tech industry. Early competition between Docker and Kubernetes was intense, with Docker's user-friendly interface challenging Google's cloud computing strategy. Despite initial conflicts, collaboration among open-source projects eventually unified the container community.

* **CockroachDB Adjusts Open-Source License to Encourage Enterprise Payments**  
    Cockroach Labs, the commercial developer behind the distributed SQL database CockroachDB, announced a change in its licensing strategy. Five years after abandoning the open-source model, the company has decided to unify its self-hosted product under a single enterprise license. The goal is to incentivize large enterprises to pay for the features they truly need. Meanwhile, startups below a certain revenue threshold can use the same enterprise edition for free, with the hope that they will grow to a point where they require and can afford these advanced features.

* **Canonical Announces Long-Term Support for "Distro-Less" Containerized Applications on K8s**  
    Canonical has extended its long-term support (LTS) services from the Ubuntu Linux distribution to open-source software packaged as Docker containers, providing up to 12 years of security support. The focus is on maximizing efficiency in Kubernetes environments. These LTS containers are certified to run on Canonical's MicroK8s and Charmed Kubernetes platforms, as well as other major Kubernetes environments such as Red Hat OpenShift and VMware Tanzu.

* **OSSummit Highlights: The DevOps Era Is Not Over, but It’s Not Thriving Either**  
    The DevOps era is not over, but its vitality appears less robust than expected. At cdCon, held during the North American Open Source Summit (OSSummit), the Continuous Delivery Foundation (CDF) released its fifth annual CI/CD State of the Union report. The report highlighted significant challenges in DevOps deployment metrics. While 83% of developers engage in DevOps work, only 14% can deploy code within a day—a figure unchanged since 2020. The frequency of multiple daily deployments has dropped from 11% in 2020 to 9%, and only 11% of respondents can restore services within less than an hour.

* **Elastic Announces Open-Source Licensing for Elasticsearch and Kibana**  
    Elastic has announced the adoption of the GNU Affero General Public License v3 (AGPL) for portions of the source code of Elasticsearch and Kibana. This move aims to enhance open-source participation and adoption, allowing users and developers to freely use, modify, redistribute, and collaborate on the software. The transition to AGPL will not affect existing SSPL 1.0 or Elastic License 2.0 users, nor will it alter Elastic's binary distributions. This license update underscores the company's commitment to open-source transparency and community collaboration.

* **IBM May Revert Terraform's BSL License to Open-Source**  
    Amid IBM's impending acquisition of HashiCorp, discussions have arisen about the potential shift of Terraform's BSL (Business Source License) back to a more permissive MPL (Mozilla Public License). IBM's longstanding commitment to open source—particularly its contributions to Linux and its stance on GPL (General Public License) protections—provides clues that Terraform might return to a more open-source-friendly licensing model.

* **Databricks Acquires Tabular to Embrace Open Source**  
    Following its acquisition of Tabular, Databricks has merged the Apache Iceberg and Delta Lake formats, unifying the field. This move aims to standardize data lakehouse environments and enhance functionality by leveraging the features of both formats. Despite differences between Delta Lake and Iceberg, Databricks seeks compatibility through its open-source format, Delta Lake UniForm.

* **Ant Group Open-Sources Cloud-Based Next-Generation Version Control System HugeSCM**  
    Ant Group has open-sourced its cloud-based next-generation version control system, HugeSCM, designed to address repository scalability challenges in the development process. It can handle the challenges of both extremely large single repositories and massive single files. Compared to traditional centralized version control systems (e.g., Subversion) and distributed version control systems (e.g., Git), HugeSCM is not constrained by storage architecture or transmission protocols.

### 1.3 AI & AI Apps

* **Elon Musk Announces Open-Sourcing of Grok Model Weights and Network Architecture**  
    Elon Musk's xAI has officially announced the open-sourcing of the foundational model weights and network architecture of the large language model Grok-1 under the Apache 2.0 license. The model has 314 billion parameters, far surpassing Meta's Llama 2 (70 billion), Mistral 8x7B (120 billion), and OpenAI's GPT-3.5 (175 billion), making it the largest open-source large language model to date.

* **Meta Releases Llama 3 and Other Open-Source Models to Enhance Performance and Applications**  
    Meta has launched the latest in its Llama series, the Llama 3 AI models, available in two versions: Llama 3 8B and Llama 3 70B, with 8 billion and 70 billion parameters, respectively. Both models have demonstrated superior performance in multiple AI benchmarks, outperforming similar competitors. Meta claims significant improvements in dataset size, diversity, and performance, particularly in code generation, history, and STEM-related question answering.

* **Mistral AI Open-Sources Large Model Mistral 8x22B**  
    Mistral AI has open-sourced a large model called Mistral 8x22B, with a file size of 281.24 GB. This model is a "super-sized" version of last year's open-source "mixtral-8x7b," featuring three times the parameters and consisting of an expert network with 8 experts, each with 22 billion parameters (8×22B).

* **BAAI Open-Sources General Operator Library FlagGems for Large Models**  
    FlagGems has become the world's largest general-purpose operator library for AI based on Triton, featuring over 130 operators frequently used in large models. It outperforms CUDA in average operator performance on NVIDIA hardware. Currently, FlagGems supports multiple AI chips from seven manufacturers, including NVIDIA, aiming to provide an open-source, unified, and efficient operator layer ecosystem for diverse AI chips.

* **Alibaba Open-Sources Tongyi Qianwen Qwen2 Large Models**  
    Alibaba's Tongyi Qianwen Qwen2 large models are now available on Hugging Face and ModelScope. The Qwen2 models use different licenses: while Qwen2-72B retains the previous Qianwen License, other models, including Qwen2-0.5B, Qwen2-1.5B, Qwen2-7B, and Qwen2-57B-A14B, are licensed under Apache 2.0.

* **Inspur Information Releases "Yuan 2.0-M32" Open-Source Large Model**  
    Built on the existing Yuan 2.0 series, "Yuan 2.0-M32" introduces and utilizes "gated networks based on attention mechanisms" to construct a mixture-of-experts (MoE) model with 32 experts. This approach enhances computational efficiency, with 3.7 billion parameters activated during runtime.

* **ByteDance Doubao Team Open-Sources FullStack Bench**  
    FullStack Bench is a dataset focused on full-stack and multi-language programming code evaluation. It is the first in the industry to include over 11 real-world scenarios in full-stack programming, covering 16 programming languages and 3,374 problems. Compared to previous benchmarks, it more effectively evaluates large models' real-world coding capabilities. Additionally, the team has open-sourced SandboxFusion, an efficient code sandbox execution tool for evaluating programming tasks across different languages.

* **Stanford University Team Open-Sources Edge Device Model Octopusv2**  
    Stanford researchers have introduced a new open-source edge device model, Octopusv2, with 2 billion parameters. It is specifically designed for Android devices but is also suitable for cars, personal computers, and other edge devices. The model outperforms GPT-4 in accuracy and latency while reducing context length by 95%.

* **DeepSeek Open-Sources DeepSeek-V3**  
    The first version of the new DeepSeek-V3 series has been released and open-sourced. DeepSeek-V3 is a self-developed MoE model with 671 billion parameters, activating 37 billion during runtime. Pretrained on 14.8 trillion tokens, the team reports that DeepSeek-V3 outperforms other open-source models like Qwen2.5-72B and Llama-3.1-405B, achieving performance comparable to top proprietary models such as GPT-4o and Claude-3.5-Sonnet.

* **Ant Group & Zhejiang University Open-Source Knowledge Extraction Framework OneKE**  
    Ant Group and Zhejiang University have jointly developed and open-sourced the knowledge extraction framework OneKE, supporting both Chinese and English. Based on full-parameter fine-tuning of LLaMA2, evaluations show its strong performance in multiple tasks involving entity, relation, and event extraction.

* **Apple Releases OpenELM AI Models to Enhance On-Device AI for iPhones**  
    Apple has unveiled a series of AI language models called OpenELM, designed to improve the efficiency of AI applications on devices like iPhones. The series includes four models with parameter sizes of 270 million, 450 million, 1.1 billion, and 3 billion. These lightweight models are optimized for devices such as smartphones and laptops. OpenELM is open-source, enabling developers to use them immediately for text-related tasks, such as drafting emails.

* **Databricks Announces Open-Source AI Model DBRX**  
    DBRX uses a transformer architecture with 132 billion parameters, comprising 16 expert networks, of which 4 are activated during inference, totaling 36 billion parameters. In areas such as language understanding, programming, mathematics, and logic, DBRX outperforms leading open-source models like Meta's Llama 2-70B, Mistral's Mixtral, and xAI's Grok-1.

* **Amazon CTO Develops Open-Source Meeting Summary App**  
    Amazon CTO Werner Vogels and his team have developed an open-source app called Distill for transcribing and summarizing meeting content. The app leverages multiple Amazon services, including AWS Transcribe for voice transcription, Amazon S3 for storage, and the Bedrock platform for summarization. Distill can convert meeting content into text and to-do lists, with integration options for platforms like Slack. While Distill allows users to select different AI models for summaries, manual adjustments may still be required, emphasizing the limitations of AI and the importance of critical thinking.

* **Meta Open-Sources MEGALODON for Efficient Long-Sequence Modeling**  
    Researchers from Meta, in collaboration with the University of Southern California, Carnegie Mellon University, and the University of California, San Diego, have open-sourced a new large language model called MEGALODON. The model features infinite context length with linear computational complexity. At comparable scales, it outperforms the Llama 2 model in multiple benchmarks.

* **End-to-End RAG Solution RAGFlow Officially Open-Sourced**  
    RAGFlow is a complete RAG (retrieval-augmented generation) solution allowing users to upload and manage their own documents, supporting various document types. It enables users to query documents using large models.

* **DAMO Academy Open-Sources Document Processing Model mPLUG-DocOwl1.5**  
    Alibaba DAMO Academy, in collaboration with Renmin University of China, has open-sourced the mPLUG-DocOwl1.5 document processing model. This model can understand document content without OCR and has achieved leading performance in multiple visual document understanding benchmarks. mPLUG-DocOwl1.5 emphasizes the importance of structural information and is now available on GitHub.

* **Meta Open-Sources New Multi-Label Predictive Language Models**  
    Meta has released a series of innovative language models with multi-label predictive capabilities. These models aim to predict multiple tokens simultaneously, providing faster and more efficient language processing compared to traditional single-token prediction models. Designed for applications such as chatbots, translation services, and other AI-driven communication tools, the models generate more coherent and contextually appropriate responses, improving the overall user experience.

* **Qdrant Introduces Pure Vector Hybrid Search for More Accurate AI Data Retrieval**  
    Qdrant, a high-performance open-source vector database, has announced BM42, a new pure vector-based hybrid search method designed for modern AI and augmented retrieval generation applications. This new algorithm marks a new era in text-based keyword search capabilities, suitable for RAG and AI applications, allowing enterprise clients to seamlessly integrate the strengths of both approaches.

* **Google Releases and Open-Sources Gemma 2 Language Model with 27 Billion Parameters**  
    Google DeepMind has open-sourced Gemma 2, part of its new generation of small language models. Google has made several improvements to the Gemma architecture and employed knowledge distillation techniques, giving the models state-of-the-art performance. Gemma 2 outperforms comparable models of similar size and rivals those twice its size.

* **NIST Releases Open-Source AI Model Risk Testing Tool**  
    The U.S. National Institute of Standards and Technology (NIST) has reintroduced a tool called Dioptra, designed to measure the impact of malicious attacks—especially those that "poison" AI training data—on AI system performance. Dioptra is an open-source, modular, web-based tool first released in 2022. It helps companies training AI models assess, analyze, and track AI risks. NIST states that Dioptra can be used for benchmarking and research and provides a common platform for testing models in simulated "red team" threat environments.

* **Meta Open-Sources DCPerf for Benchmarking Large-Scale Workloads**  
    Meta, formerly Facebook, has developed its own performance testing tool, DCPerf, to measure the performance demands of its massive-scale applications, which require extensive server usage. The company has released this benchmarking suite on GitHub under the MIT open-source license for use by academia, the hardware industry, and other internet companies. DCPerf is designed to evaluate large-scale computing workloads, offering a range of benchmark models based on Meta's large-scale applications.

* **Shanghai AI Lab Open-Sources PDF Extraction Tool MinerU**  
    MinerU is a tool that converts PDFs into machine-readable formats, facilitating extraction into any format. The project aims to address symbol conversion issues in scientific literature, contributing to technological advancement.

### 1.4 IoT and Open Source Hardware

* **Shanghai Releases "ChainWeaver," an Open-Source Technology Platform for City-Level Blockchain Infrastructure**  
   The Shanghai Future Internet Technology Research Institute has launched "ChainWeaver," a next-generation Web 3.0 foundational open-source technology platform. This platform will support the construction of Shanghai's city-level blockchain infrastructure.

* **Great Wall Motors Unveils China's First Automotive-Grade MCU Chip Based on Open-Source RISC-V Core**  
   Great Wall Motors has officially announced the completion and successful activation of its jointly developed RISC-V automotive-grade MCU chip, the Zijing M100. This is China's first automotive-grade MCU chip designed with an open-source RISC-V core, featuring faster processing speeds and reduced latency while meeting multiple international standards.

* **Tencent Open-Sources Autonomous Driving Simulation Software TAD Sim**  
   Tencent has announced the open-sourcing of its autonomous driving simulation software, TAD Sim. The software is based on Tencent's professional game engine and centimeter-level digital twin 3D reconstruction technology, supporting closed-loop simulation verification of full-stack algorithms. It aims to reduce development costs and shorten development cycles.

* **Xiaomi to Open Over 10 Million Lines of Xiaomi Vela Open-Source Code**  
   Xiaomi plans to enhance the user experience of devices such as smartwatches and smartphones through deep integration with Android and Linux systems, while extending its applications to broader IoT scenarios such as automobiles, robotics, and smart manufacturing. Xiaomi will release over 10 million lines of Xiaomi Vela open-source code, having completed compliance reviews and optimized the out-of-the-box experience. The primary open-source repository will be hosted on GitHub, with a mirror site on Gitee.

* **CAS Releases Third-Generation "Xiangshan" Series Kunming Lake Open-Source High-Performance RISC-V Processor Core**  
   The Chinese Academy of Sciences (CAS) has introduced the third-generation "Xiangshan" series Kunming Lake high-performance RISC-V processor core. Its performance is comparable to Intel's 12th-generation Core processors and rivals the Arm Neoverse N2 core.

* **USTC and Huawei Release Open-Source EDA Physical Design Framework**  
   The MIRA Lab at the University of Science and Technology of China (USTC) and Huawei's Noah's Ark Lab have jointly released a new evaluation framework and dataset, which are fully open-source. This standard is expected to address inconsistencies between layout metrics and final performance in chip physical design.

## 2. Open Source Software Security

> Translator: Feng (Jason) Wang, Reviewer: Feng (Jason) Wang

In 2024, open-source software security faces unprecedented challenges and opportunities. With the widespread adoption of open-source technologies, threats such as supply chain attacks, malicious code injections, and state-sponsored APT attacks are on the rise. Global security incidents, such as PyPI signature key tampering and NPM hash value tampering, highlight the vulnerabilities of the open-source ecosystem. At the same time, the open-source community and security organizations are actively responding, with initiatives like OpenSSF's Siren threat intelligence platform, the Rust Foundation's Safety-Critical Rust Consortium, and CISA's supply chain risk assessment tools. These efforts mark a shift from passive defense to proactive governance in open-source security, laying the foundation for a safer open-source ecosystem.

### 2.1 Malicious Code and Backdoor Implants

- **XZ Utils Backdoor**  
    The open-source compression tool XZ Utils was found to contain backdoored code, lurking for three years, allowing attackers to gain unauthorized system access via SSH. The backdoor injection was traced back to late 2021, executed through sophisticated social engineering tactics. Recent security incidents in the XZ Utils open-source ecosystem have raised concerns. The intruder spent 2-3 years infiltrating the project to gain advanced privileges and execute complex operations. These events highlight the need for open-source communities and maintainers to strengthen project management and security practices.

- **Vant and Rspack Attacks**  
    Popular open-source projects like Youzan's Vant and ByteDance's Rspack had multiple versions injected with malicious scripts. Attackers stole npm tokens of project team members to upload compromised versions. These malicious versions spread through widely used npm packages, infecting developer and end-user code, posing risks like data leaks and remote code execution. This incident exposed security vulnerabilities in npm repositories.

- **SQLite Backdoor**  
    Unauthorized backdoor code was discovered in SQLite, successfully embedded in multiple versions. Google researchers detected this backdoor using AI models, which could trigger memory leaks and code execution vulnerabilities. Exploiting this flaw allows attackers to execute malicious code, potentially leading to full system compromise. After patching, the SQLite team conducted rigorous code reviews to enhance security.

- **OpenSSH Vulnerability (CVE-2024-6387)**  
    A critical vulnerability caused by a signal handling race condition in OpenSSH allows remote attackers to execute arbitrary code with root privileges. Exploitation involves injecting malicious signals into SSH sessions, forcing unauthenticated code execution. Attackers could gain full control of target machines, risking data breaches and system crashes.

- **7-Zip Severe Security Vulnerability (CVE-2024-11477)**  
    7-Zip, a widely used open-source compression tool, was found to have a critical vulnerability in its Zstandard decompression process. Attackers can craft malicious archives to trigger code execution upon user extraction. The risk is amplified by 7-Zip's popularity and users' lack of security awareness, leaving many exposed.

- **RISC-V Medium-Severity Remotely Exploitable Vulnerability**  
    A remotely exploitable medium-risk vulnerability was discovered in the RISC-V SonicBOOM processor design by Northwestern Polytechnical University's cybersecurity team. RISC-V, an open-source instruction set architecture used in high-performance and embedded systems, now faces scrutiny over hardware design security. Timely patching and tracking are critical in open-source hardware development.

- **OpenWrt High-Risk Vulnerability (CVE-2024-54143)**  
    OpenWrt disclosed a high-risk vulnerability in its `attended.sysupgrade` service, allowing attackers to tamper with firmware images and push malicious updates. This enables device takeover via firmware upgrades, threatening routers and embedded devices. Given OpenWrt's widespread use, exploitation could lead to large-scale infections and network attacks.

### 2.2 Tampering and Dependency Hijacking of Code Bases, Artifacts, and Codes

- **Docker Hub Cryptojacking**  
    Popular Docker Hub images like "nginx" and "alpine" were found to contain cryptocurrency mining scripts. Attackers modified these images to embed malicious code, which were then downloaded at scale. Victims unknowingly provided computational resources to attackers when using these tampered images, degrading server performance. This incident highlights supply chain security issues in Docker images.

- **GitHub Malware**  
    Open-source repositories on GitHub were maliciously altered to spread ransomware. Attackers injected code that automatically encrypts system files upon execution, demanding ransom payments. The incident underscores security risks in GitHub code management, especially when maintainer privileges are compromised.

- **GitHub Ghost Repositories**  
    Fake repositories ("ghost repos") containing only virus files appeared on GitHub. Created by bot accounts, these repos targeted over 180 users by masquerading as open-source projects. Attackers aimed to trick developers into downloading malware for data theft or system destruction.

- **RubyGems Backdoor**  
    RubyGems packages like "rest-client" were backdoored to execute malicious scripts during installation. These scripts steal sensitive data (API keys, databases) or grant attackers machine control. Attackers impersonated legitimate packages to trick developers into installing compromised versions.

- **Helm Charts Cryptomining Infection**  
    Popular Kubernetes Helm Charts (e.g., "redis", "nginx") were infected with cryptomining scripts. Attackers exploited these charts to hijack cluster resources during application deployment, impacting enterprise Kubernetes users and exposing risks in Helm package workflows.

- **Event-Stream Copycat Attack**  
    Attackers mimicked the infamous NPM Event-Stream attack by creating malicious packages disguised as legitimate ones. These packages spread malware, leading to data leaks, remote control, and ransomware. The incident reveals ongoing vulnerabilities in open-source package versioning and management.

- **Go Module Tampering**  
    Forged versions of popular Go modules (e.g., "gin-gonic") were uploaded with embedded malicious code. Widely adopted by developers, these tainted modules introduced risks into production environments, exposing flaws in Go's dependency management ecosystem.

- **NPM Monero Miner**  
    The NPM package "crypto-mine" secretly embedded Monero mining scripts. Developers unknowingly installed the package, draining their systems' computational resources for attacker profit. This highlights risks of hidden cryptojacking in open-source dependencies.

- **NPM Counterfeit Frameworks**  
    Fake JavaScript framework packages like "React-Advanced" and "VuePro" appeared on npm, embedding remote code execution scripts. Developers using these packages risked code injection, data theft, and system compromise, exposing npm's susceptibility to impersonation attacks.

- **NuGet Typosquatting**  
    Attackers created typosquatted NuGet packages (e.g., "EntityFrameworks") with malicious scripts to steal API keys and credentials. This method enabled unauthorized access and malicious operations, revealing vulnerabilities in NuGet's package naming safeguards.

- **PyPI Ransomware**  
    PyPI packages masquerading as ML/AI tools (e.g., "tensorflow-plus") delivered spyware and ransomware. Malware harvested cloud credentials and encrypted user data for ransom, emphasizing risks of malicious packages posing as legitimate tools.

- **PyPI Unauthorized Commits**  
    Unauthorized malicious commits were detected in unofficial forks of popular PyPI projects (e.g., "numpy"), leading to data leaks and remote code execution. This exposed security gaps in Python package management, particularly in third-party code reviews.

- **SourceForge Unsigned Binaries**  
    Attackers uploaded unsigned malicious binaries to SourceForge, impersonating official releases. Users executing these files risked malware infections, revealing weaknesses in SourceForge's signature verification and file validation processes.

- **Linux Kernel Backdoored Fork**  
    An unmaintained Linux kernel fork was found to contain backdoor code, allowing attackers to execute arbitrary commands and seize system control. The incident prompted stricter security reviews for kernel branches and version sources.

- **Node.js Dependency Chain Exploit**  
    Attackers infiltrated Node.js projects via indirect dependencies (e.g., "express"), embedding malicious modules. Poor scrutiny of nested dependencies allowed attackers to bypass security measures, exposing risks in unchecked dependency trees.

### 2.3 Building Systems and Containers

- **Jenkins Exploitation**  
    Attackers leveraged known Jenkins vulnerabilities to implant malicious scripts in build pipelines. These scripts compromised CI/CD workflows across multiple projects, potentially releasing untested software to production environments and triggering security flaws or data breaches. This incident underscores security weaknesses in DevOps tools like Jenkins and emphasizes the need for robust security management in CI/CD processes.

- **GitHub Actions Compromise**  
    Malicious actors created harmful CI/CD workflows in GitHub Actions that downloaded and executed ransomware during runtime. This attack vector demonstrates the risks of malware propagation through CI/CD environments, particularly when security measures are inadequate. Organizations and developers must enhance scrutiny and governance of GitHub Actions workflows to prevent similar incidents.

- **Azure DevOps Breach**  
    Attackers stole Azure DevOps build pipeline credentials to distribute malicious code within enterprise networks, threatening multiple development projects. The breach highlights the critical importance of protecting pipeline credentials in DevOps ecosystems. Attackers bypassed corporate defenses by exploiting these credentials to propagate malware.

- **CircleCI Dependency Injection**  
    Attackers injected malicious dependencies into CircleCI pipelines, infecting internal enterprise systems. These dependencies were automatically downloaded and executed during builds, disrupting CI/CD processes for multiple customers and causing data leaks and code tampering. By exploiting security gaps in build tools and automation workflows, attackers circumvented traditional defenses, exposing dependency risks in development pipelines—especially when using external dependencies.

- **PHP Framework Compromise**  
    Attackers tampered with build scripts of popular PHP frameworks (e.g., Laravel, Symfony) to distribute malicious versions. These compromised frameworks enabled remote code execution, credential theft, and backdoor injection. The incident revealed supply chain vulnerabilities in PHP ecosystems, particularly weaknesses in framework build and release processes.

- **Kubernetes YAML File Vulnerability**  
    Attackers exploited flaws in Kubernetes YAML configuration files to access internal system resources. Malicious code or misconfigurations in these files allowed attackers to manipulate cluster configurations, bypass access control policies, and steal sensitive data or execute arbitrary commands. This vulnerability underscores the criticality of secure configuration file management in Kubernetes, especially in multi-team or third-party environments.

- **Docker Container Escape**  
    A Docker container escape vulnerability enabled attackers to break out of isolated container environments and gain full control of host operating systems. By exploiting Docker's isolation flaws, attackers could interact directly with host systems, severely undermining containerized application security. This poses significant risks in multi-tenant environments, where attackers might traverse containers to infiltrate entire host systems. The vulnerability threatens production environments relying on Docker, particularly in cloud infrastructures where cluster-wide service compromise is possible.

### 2.4 Credential theft and exploitation

- **GitHub OAuth Token Leak**  
    Attackers obtained GitHub users' OAuth tokens through phishing campaigns, gaining unauthorized access to private repositories to alter code. Phishing emails mimicked GitHub communications to trick users into clicking malicious links and stealing tokens. With these tokens, attackers could push malicious code, delete projects, or steal sensitive data. This incident exposed vulnerabilities in GitHub's OAuth authentication process.

- **Docker Hub Credential Leak**  
    Stored Docker Hub credentials were compromised, enabling attackers to upload malicious images (e.g., "nginx," "alpine") to the platform. These images, masquerading as official versions, were widely downloaded and deployed. Attackers exploited them to execute remote commands or hijack computational resources for cryptomining, highlighting weaknesses in Docker Hub's credential management.

- **Bitbucket SSH Key Theft**  
    Attackers stole SSH keys from Bitbucket users, which are typically used to authenticate access to private repositories. Using these keys, attackers modified code, leaked data, or injected malware into multiple private projects. Poor SSH key management allowed attackers to bypass standard authentication, emphasizing the need for stricter security reviews of key practices on Bitbucket and similar platforms.

- **Azure DevOps Phishing Attack**  
    Phishing emails disguised as Azure DevOps security alerts or updates tricked victims into surrendering access tokens. Attackers used these tokens to infiltrate Azure DevOps pipelines, tamper with build/deploy processes, and implant malware or exfiltrate sensitive data. The incident underscores phishing risks in DevOps environments.

- **AWS Public Key Exposure**  
    Public GitHub repositories exposed AWS access keys, enabling attackers to abuse cloud resources (e.g., launching VMs, creating storage buckets) and incur financial costs. This highlights the critical need to avoid exposing credentials in public repositories and enforce stricter key management.

- **Nokia Source Code Leak**  
    Hackers claimed to steal and sell Nokia's proprietary source code—including internal software, OS components, and enterprise applications—on the dark web. The leak risks exposing vulnerabilities in Nokia's core technologies, threatening both corporate security and global customer trust. Attackers allegedly breached Nokia's internal network to access sensitive data.

- **Pokémon Game Source Code Leak**  
    Game Freak, developer of Pokémon games, confirmed hackers stole source code for unreleased titles by infiltrating company servers. The breach jeopardizes development timelines and allows reverse engineering, potentially enabling piracy or unauthorized game modifications. This poses significant financial and reputational risks to the franchise.

- **"RockYou2024"**
    黑客在暗网论坛上发布了包含 100 亿条明文密码的 rockyou2024.txt 文件，新增了约 15 亿个新密码。

### 2.5 Spelling Error Hijacking and Fake Bags

- **Fake Axios Package**  
    A malicious package named "axiosjs" on NPM mimicked the popular "axios" library. Developers inadvertently installed this malicious version due to typosquatting. Upon installation, the embedded code executed malicious actions, risking system infections or data theft. This incident exposes security flaws in NPM's package naming system, where attackers exploit typos to trick developers.

- **Rust Crate Typosquatting**  
    Attackers published typosquatted Rust Crates (e.g., "sarde" instead of "serde") to hijack installations. Users mistakenly selecting these malicious Crates triggered malware downloads. Such attacks exploit dependency naming trust, highlighting supply chain risks in Rust's ecosystem.

- **RubyGems Rails Impersonation**  
    A counterfeit "rails-core" package was uploaded to RubyGems, posing as a core Ruby on Rails library. The package injected malicious scripts to steal developer data like database credentials and API keys. As RubyGems is central to Ruby's ecosystem, many developers accidentally installed this fake package, leading to widespread data leaks.

- **Spring Framework Spoofing**  
    Attackers distributed malicious code via a fake "Spring Framework" package on Maven Central. Widely downloaded for enterprise deployments, the package contained exploit tools enabling remote code execution. The Spring framework's popularity amplified the impact, demonstrating vulnerabilities in open-source framework supply chains.

### 2.6 Attacks on AI Modeling and Training

- **Tencent Hunyuan LLM Dataset Poisoning**  
    Tencent's Hunyuan large language model training dataset was maliciously contaminated, leading to attacks during inference. Attackers inserted erroneous or malicious data to degrade training quality, causing the model to produce incorrect predictions or decisions. Such data poisoning attacks are hard to detect and rectify post-training, highlighting security risks in data preprocessing for large models, especially when relying on open-source datasets.

- **Google AI Model Inference Vulnerability**  
    Attackers manipulated input data to trigger errors in Google AI models, exposing sensitive information. By altering input formats or content, attackers induced models to leak confidential data in predictions. This threatens applications in healthcare, finance, and other sensitive fields, revealing vulnerabilities in AI models' dependency on input data during inference.

- **OpenAI Dependency Hijacking**  
    Attackers tampered with open-source dependencies used by OpenAI to steal users' API keys. Malicious code injections or dependency version manipulations enabled credential theft from OpenAI services. Leaked API keys could be abused for unauthorized access or data extraction, emphasizing the need for rigorous dependency management and code audits in high-security services.

- **PyTorch Dataset Malware**  
    Official PyTorch datasets were injected with malicious code, compromising developer environments. These tainted datasets triggered harmful actions during runtime, such as stealing sensitive data or executing system commands. Given PyTorch's widespread use in AI research, this incident underscores the critical need for dataset security management on official platforms.

- **HuggingFace Data Poisoning**  
    Maliciously modified datasets uploaded to HuggingFace misled model training processes. Poisoned datasets contained mislabeled or biased data, degrading model accuracy and potentially generating harmful predictions. Such attacks challenge model safety and fairness, urging developers to rigorously validate public dataset sources and quality.

- **ChatGPT Search Tool Vulnerability**  
    Security flaws in ChatGPT's search tool allowed attackers to manipulate results or embed hidden malicious content, tricking users into downloading malware. By injecting malicious code into search queries, attackers compromised user systems and data. This exposes security risks in AI-based tools' input/output data handling mechanisms.

- **AI-Generated Content Fraud Risks**  
    The rapid advancement of generative AI brings economic and social benefits but also raises legal, ethical, and societal safety challenges. AI-driven deepfakes enable malicious actors to spread disinformation via forged videos, audio, and text, eroding public trust. Regulatory bodies face dilemmas in balancing innovation with fraud prevention, highlighting the urgency for content verification frameworks.

- **Large Models' Impact on Deepfakes**  
    Large language models (e.g., GPT-4) empower hyper-realistic deepfakes, generating indistinguishable fake images, videos, and human-like interactions. The industry calls for cross-disciplinary collaboration to address security threats posed by these technologies, as they jeopardize societal trust and safety on an unprecedented scale.

### 2.7 Social Engineering and Insider Threats

- **Library Maintainer Sabotage**  
    In the open-source community, a library maintainer maliciously uploaded a version with a backdoor, attempting to profit by damaging the project's reputation. These malicious versions contained backdoor code capable of remotely controlling development environments or systems. Maintainers are often the trusted source of libraries, and attackers exploit this to carry out potential sabotage. This type of attack can affect multiple projects, as certain libraries are widely relied upon in the open-source community. This incident highlights the importance of maintainer behavior in open-source projects.

- **GitHub Maintainer Phishing**  
    Attackers disguised as the official GitHub team gained access to the accounts of some open-source project maintainers through phishing emails. Once they obtained maintainer privileges, the attackers were able to submit PRs containing malicious code, destabilizing open-source projects and even spreading malicious code to a large number of developers using the project. Such phishing attacks often masquerade as urgent notifications or critical security updates, leading developers to inadvertently leak sensitive information or permissions.

- **Rust Crate Deepfake Voice Attack**  
    Using deepfake technology, attackers were able to mimic the voice commands of Rust project maintainers, gaining administrative access to the projects. Through forged voice commands, attackers could alter project settings or submit malicious code, further compromising the project's security. This type of attack not only challenges maintainers but also tests the security management of open-source projects. Deepfake technology provides hackers with a new attack vector, making traditional identity verification and permission control mechanisms more vulnerable.

- **Fake LinkedIn Account Attack**  
    Attackers created multiple fake LinkedIn accounts, posing as active contributors to open-source projects. These fake accounts built credibility by publishing technical articles, participating in project discussions, and actively engaging with open-source project maintainers. After gradually gaining the trust of maintainers, attackers used social engineering tactics to obtain sensitive information or gain authorization to participate in project development. Their ultimate goal was to gain access to code repositories and implant malicious code or backdoors into the project, thereby affecting a wide range of developers and users. This type of attack relies on the trust mechanisms of social networking platforms, revealing the potential risks of fake identities in the open-source community.

- **OpenSSL Insider Attack**  
    The OpenSSL project experienced tampering potentially from an internal developer. The attacker exploited their access privileges within the project to submit unauthorized code containing vulnerabilities. This code could pose serious security risks and was merged into the main branch without thorough review. As OpenSSL is one of the most widely used open-source encryption libraries globally, its security is of utmost importance. The covert nature of insider attacks makes it difficult for traditional security audit mechanisms to detect such tampering. If exploited, this vulnerability could lead to attacks on a large number of systems using OpenSSL. This incident has sparked deep reflection on the internal management and code review mechanisms of open-source projects.

- **TeamViewer Remote Control Exploitation**  
    Scammers used TeamViewer to remotely control a victim's mobile banking app, successfully transferring 3.98 million yuan. RustDesk suspended domestic services in China due to rampant fraud, sparking controversy.

- **Hacker Lurks in Open-Source Project for Two Years**  
    A hacker lurked in a well-known open-source project for two years, gaining trust and infiltrating the core development team. During the project founder's retreat, the hacker submitted code designed to steal secrets, nearly creating the largest backdoor in history. However, the plan was exposed due to a bug in the code.

### 2.8 Encryption and Signature Tampering and Malware Distribution

- **PyPI Signature Key Tampering**  
    Attackers successfully uploaded malicious versions of packages to the PyPI (Python Package Index) repository by replacing the signature keys of some packages. These tampered packages bypassed the original security verification mechanisms, causing users to install versions containing malicious code when downloading them. Through this method, attackers gained control over Python development environments, enabling them to steal sensitive information or execute remote code. As PyPI is the primary package management platform for Python developers, such attacks pose a significant threat to the security of developers worldwide.

- **Helm Certificate Theft**  
    During the Helm chart signing process, attackers stole the signing certificates for Helm Charts, leading users to download tampered, malicious deployment packages. By exploiting the stolen certificates, attackers could impersonate legitimate Helm publishers and embed malicious code into deployment files. These malicious charts are widely used in Kubernetes environments, and once deployed, attackers could gain control over affected services. This incident exposed security vulnerabilities in supply chain management within containerized and microservices architectures, particularly in areas involving signing and authentication.

- **NPM Hash Value Tampering**  
    Attackers tampered with the hash values of certain NPM packages after their release, enabling them to distribute hidden malicious code. By modifying the hash values, attackers made it impossible for users to detect the tampering, leading to the inadvertent installation of versions containing malicious scripts. These malicious packages could steal sensitive user data, execute commands, or even impact other projects dependent on the package. As NPM is a core tool in the JavaScript ecosystem, affected packages could be used by thousands of developers, creating widespread security risks.

- **RubyGems Signature File Tampering**  
    Attackers tampered with the signature files of RubyGems packages, allowing them to impersonate trusted package publishers. Specifically, in RubyGems packages used by the banking and financial industries, attackers injected malicious scripts designed to steal sensitive user data, such as account information and authentication credentials. By altering the package signatures, these attacks bypassed package verification mechanisms, creating significant security risks. Since signature files are typically considered a guarantee of package security, the attackers' tampering went unnoticed by developers and users, impacting multiple critical industries.

- **Docker Hub Signature Vulnerability**  
    Docker Hub's image signing system was compromised, allowing attackers to distribute tampered, malicious container images. Container images are widely used for deploying applications, and by exploiting vulnerabilities in the image signature verification mechanism, attackers could trick victims into downloading images containing malicious code. These malicious images, when run in Docker container environments, threatened the security of containerized applications and services. Such attacks not only endanger developers but could also impact critical business systems in production environments, highlighting the vulnerabilities in container image security management.

- **PHP Git Tampering**  
    Attackers gained unauthorized access to a PHP project's Git repository and added potential backdoor code to the codebase. This backdoor code, through hook functions or hidden features, could remotely execute malicious commands, thereby gaining control over affected systems. Since PHP projects often run on web servers, hackers could exploit these backdoors to further attack websites, including data breaches or server hijacking. This incident demonstrates the security risks associated with Git repositories in open-source projects, especially when access controls are lacking.

- **Node.js Account Hijacking**  
    Attackers gained access to a Node.js maintainer's account through hacking, enabling them to modify dependencies or spread malicious code through indirect dependencies. Due to the deeply nested dependency relationships in the Node.js ecosystem, attackers could indirectly impact a wide range of developers and production environments by tampering with core libraries or modules. Such account hijacking attacks often bypass traditional security measures, posing serious code injection risks to developers.

### 2.9 National Supply Chain Attacks

- **APT Targeting NPM**  
    Advanced Persistent Threat (APT) attackers successfully targeted the supply chain of critical infrastructure in the United States by implanting backdoored NPM packages. These malicious packages were widely downloaded and executed malicious code in the projects that used them, stealing sensitive data. This incident highlights the severity of supply chain attacks in the NPM ecosystem, particularly the ability of state-sponsored attackers to infiltrate sensitive industries through the supply chain. Such attacks are often difficult to detect and have far-reaching consequences, serving as a warning for developers to exercise extreme caution when using third-party packages.

- **Russian Helm Attack**  
    A Russian-backed hacker group embedded malware into Kubernetes Helm Charts by tampering with deployment packages. These tampered Helm Charts were widely used in enterprise Kubernetes clusters, leading to the inadvertent deployment of malware into production environments. Through such supply chain attacks, the attackers gained control over services deployed in Kubernetes clusters, enabling them to execute remote code, steal information, or carry out ransomware attacks.

- **Iranian PyPI Spyware**  
    Iranian APT attackers published libraries on PyPI disguised as data analysis tools, which were actually designed as spyware. After victims downloaded and installed these tools, the attackers were able to collect and exfiltrate sensitive user data, such as access credentials and encryption keys. This incident underscores the potential risks of malicious software in the PyPI ecosystem, especially when attackers package malware as seemingly harmless tools.

- **North Korean Lazarus Group Attack**  
    North Korea's Lazarus hacker group injected backdoor code into popular open-source libraries by submitting malicious PRs to open-source projects. Once merged, this malicious code could be widely used, leading project participants to unknowingly introduce it into production environments. Through this method, attackers gained control over affected open-source projects, enabling them to steal information or launch follow-up attacks. The Lazarus group used this strategy to infiltrate multiple industries, including finance, energy, and technology sectors.

- **EU Supply Chain Exploitation**  
    According to reports, suspected state-sponsored attackers exploited supply chain vulnerabilities in the EU software development community to successfully implant spyware. These attackers manipulated the release processes of open-source projects, injecting malicious code into multiple open-source software projects to steal sensitive data. Through this method, attackers could indirectly obtain sensitive information from targeted countries or organizations, exposing vulnerabilities in the EU's management of open-source software supply chains.

### 2.10 Global Actions and Updates

- **OpenSSF Siren Launch**  
    The Open Source Security Foundation (OpenSSF) announced Siren, a collaborative effort aimed at aggregating and disseminating threat intelligence specific to open-source projects. Siren provides a platform for sharing Tactics, Techniques, and Procedures (TTPs) and Indicators of Compromise (IoCs), addressing the gap where OSS projects and maintainers lack access to enterprise-grade network threat intelligence tools. Key features of Siren include sharing open-source threat intelligence, real-time updates, adherence to the Traffic Light Protocol (TLP), and community-driven contributions.

- **Rust Security Alliance Formation**  
    The Rust Foundation has established the Safety-Critical Rust Consortium to promote the use of Rust in critical software applications.

- **CISA Releases Supply Chain Risk Tool**  
    The U.S. Cybersecurity and Infrastructure Security Agency (CISA) released a new tool to help organizations assess risks in their software supply chains.

- **Linux Foundation Launches Tazama Project**  
    A real-time fraud prevention open-source project focused on enhancing the security of the open-source ecosystem.

- **AWS and Rust Foundation Challenge**  
    Launched a challenge to verify the safety of Rust's standard library, promoting the security of unsafe code.

- **CISA Unveils "Next-Gen Malware" Analysis System**  
    The U.S. Cybersecurity and Infrastructure Security Agency (CISA) announced a new version of its malware analysis system, Malware Next-Gen, allowing the public to submit malware samples and other suspicious artifacts for analysis by CISA.

- **U.S. Government Warns Against Using C/C++ for Critical Software**  
    The U.S. CISA and FBI jointly issued the "Bad Practices in Product Security" guide, recommending that software manufacturers publish a memory safety roadmap by January 1, 2026, and avoid using memory-unsafe languages like C or C++ for critical infrastructure software. The guide emphasizes the risks of memory-unsafe languages and provides recommendations for improving security, though it is not enforceable. Reactions from developers and organizations are mixed, with some supporting the recommendations and others citing implementation challenges.

- **Biden: All Non-Rust Projects Are Illegal**  
    The White House Office of the National Cyber Director (ONCD) released a report urging software developers to use memory-safe programming languages like Rust and abandon weaker languages like C and C++. The report notes that approximately 70% of security vulnerabilities are caused by memory safety issues. While tech giants and academia support the report, some critics argue that memory safety is only a small part of overall security and that C++ safety can be improved through other means.

- **India Plans to Train 5,000 Cyber Commandos**  
    India announced plans to train a specialized force of 5,000 cyber commandos over the next five years to combat cybercrime. The plan also includes establishing cyber fraud mitigation centers, a central cybercrime coordination and data-sharing platform, and a national registry of cybercrime suspects.

- **U.S. Department of Defense Recommends AI for Converting C Code to Rust**  
    The U.S. Defense Advanced Research Projects Agency (DARPA) is advancing the development of the TRACTOR tool, which uses machine learning to automatically convert legacy C code to Rust, accelerating the transition to memory-safe programming languages.

- **Global Software Supply Chain Development Report Released**  
    The "Global Software Supply Chain Development Report" highlights that Debian and RPM have the most vulnerabilities introduced through the open-source ecosystem, while NPM and PyPI have the highest proportion of severe CVE vulnerabilities. The report emphasizes the importance of monitoring and preventing malicious packages from entering the software supply chain.

- **AWS and Rust Foundation Launch Challenge to Verify Standard Library Safety**  
    AWS and the Rust Foundation launched a community challenge to verify the safety of Rust's standard library, ensuring the reliability of unsafe code.

- **ISRG (Internet Security Research Group) Releases 2024 Annual Report**  
    ISRG released its 2024 annual report, focusing on three projects: the renowned free certificate provider Let's Encrypt, the Prossimo project to rewrite internet infrastructure in Rust, and the privacy-respecting telemetry service Divvi Up.

- **Let's Encrypt's 10th Anniversary**  
    Let's Encrypt, launched on November 18, 2014, is a nonprofit certificate authority providing free Transport Layer Security (TLS) certificates, now used by over 450 million websites.

- **U.S. Cybersecurity Threat Capability Analysis Report: Exploiting Open-Source Software**  
    The U.S. leverages its dominance in the open-source software community to conduct supply chain attacks, posing a global cybersecurity threat.

- **The Worm Tide: Zergeca Botnet Analysis Report**  
    X Lab released an analysis report on the Zergeca botnet. Implemented in Golang, the botnet's C2 server uses the string "ootheca," hence the name Zergeca. The report details its propagation methods and attack characteristics.

- **Rust Foundation Establishes Safety-Critical Rust Consortium**  
    The Safety-Critical Rust Consortium aims to ensure the responsible use of Rust in safety-critical software. The group will also guide the Rust Foundation's funding efforts, ensuring all funded projects are freely and FOSS-licensed, and align with existing safety standards.

### 2.11 Other Risk Incidents

- **CrowdStrike Triggers Massive Blue Screen**  
    A faulty update from CrowdStrike caused millions of devices to experience blue screens, impacting multiple industries.

- **GitHub Experiences Major Site-Wide Outage**  
    On August 14 (U.S. time), GitHub suffered a large-scale outage, with nearly all core services going down. Users reported being unable to access the main GitHub site, receiving an error message stating "No available servers." Several core services, including Pull Requests, GitHub Pages, Copilot, and the GitHub API, were severely affected. According to GitHub's Status page, the outage impacted all services across the entire site.

- **IP Source Address Spoofing Vulnerability**  
    The IP source address spoofing vulnerability reported last year remains a concern. The vulnerability can be exploited in various ways, including HTTP header spoofing and modifying response packet content. Security experts have conducted in-depth analysis of this issue.

- **RustDesk Suspends Domestic Services**  
    RustDesk, an open-source remote desktop software, has been frequently used by scammers. To combat fraud, RustDesk has temporarily decided to suspend services in China. Users attempting to access domestic hosts via public servers will now receive a "forbidden" message. For overseas users, RustDesk will only allow access within the same city and plans to block all VPNs in the future.

- **Linux Mint Disables Unverified Flatpak Packages by Default**  
    The Linux Mint project announced that unverified Flatpak packages are now disabled by default. When enabled, the software manager will display a warning to inform users of the security risks associated with using unverified packages. If users choose to allow unverified Flatpak packages, the software manager will clearly mark them.

- **"RockYou2024"**  
    Hackers released a file named rockyou2024.txt on a dark web forum, containing 10 billion plaintext passwords, including approximately 1.5 billion new passwords.

### 2.12 Relevant Domestic Actions

- **"Cloud Computing Open Source Technology Application Security Specification" Standard Drafting Kickoff Meeting Held in Beijing**  
    The kickoff meeting for the drafting of the "Information Technology - Cloud Computing Open Source Technology Application Security Specification" was held in Beijing. The aim is to enhance the security and controllability of cloud computing services, standardize the application of open-source technologies in cloud computing platforms, and guide users in the reasonable procurement and use of cloud computing products based on open-source technologies.

- **2024 Cloud and Software Security Forum Held in Beijing**  
    The "2024 Global Digital Economy Conference - Cloud and Software Security Forum," organized by the Global Digital Economy Conference Committee, was held in Beijing. The forum released the "Insights into Cloud Offense and Defense Development" and the "Development Trends of Security Industry Large Model Technology Applications," exploring the latest trends in cloud computing and cybersecurity.

- **China Software Testing Center Releases 2023 Open Source Project Evaluation Report**  
    The China Software Testing Center released the 2023 Open Source Project Evaluation Report today, providing a comprehensive assessment of multiple open-source projects.

- **CCF Open Source Development Committee's Open Source Supply Chain Security Working Group Holds 2024 Strategic Seminar**  
    On March 10, 2024, the Open Source Supply Chain Security Working Group of the China Computer Federation (CCF) Open Source Development Committee held its 2024 Strategic Seminar in Beijing. The meeting conducted in-depth discussions on open-source supply chain security and formulated preliminary plans for 2024.

- **CCF Open Source Development Committee (CCF ODC) Supply Chain Security Working Group Visits Fudan University**  
    The "Open Source Ecosystem and Software Supply Chain Seminar" was successfully held at Fudan University in Shanghai, attracting experts from various universities and enterprises. The seminar focused on topics such as software supply chain code security detection, AI open-source communities, and software supply chain security system construction.

- **China Academy of Information and Communications Technology Releases 2024 Trusted Open Source Evaluation Results**  
    The China Academy of Information and Communications Technology announced the latest 2024 Trusted Open Source Evaluation Results. The results show that open source, as a new mindset and model in the digital economy era, has injected vitality into the rapid development of the global digital economy. From the perspectives of technological innovation, industrial collaboration, and social development, open source has played a significant role.

- **Intel Responds to Being Named for "Frequent Security Vulnerabilities"**  
    On October 16, the China Cyberspace Security Association published an article on its official WeChat platform titled "Frequent Vulnerabilities and High Failure Rates: Systematic Investigation of Intel Product Cybersecurity Risks." The article highlighted four security issues with Intel: frequent security vulnerabilities, poor reliability and disregard for user complaints, monitoring users under the guise of remote management, and hidden backdoors endangering network and information security. In response, Intel issued a statement on its official WeChat account, stating that as a multinational company operating in China for nearly 40 years, Intel strictly complies with applicable laws and regulations. Intel always prioritizes product safety and quality, actively collaborates with customers and the industry to ensure product safety and quality, and will maintain communication with relevant departments to clarify concerns and reaffirm its commitment to product safety and quality.

- **To Prevent "Blue Screens," Core Technologies Must Be Independent and Controllable**  
    Technological self-reliance and self-improvement are the foundation of national prosperity and security. Core technologies must be firmly in our own hands. In recent years, including domestic operating systems, the independent and controllable domestic information technology system has been widely applied in fields such as transportation, finance, and energy, increasingly reaching ordinary households and expanding into international markets.

- **Latest Microsoft Security Reference Architecture Diagram**  
    Cybersecurity expert Zhang Meibo released the latest version of the Microsoft Security Reference Architecture Diagram, showcasing his thoughts and vision on cybersecurity strategy, tactics, and execution. Every line and node represents a commitment to security and a vision for the future.


## 3. Open Source Community Ecology

> Translator: Biaowei Zhuang, Reviewer: Biaowei Zhuang

### 3.1 Dynamics of Key Persons

In the open-source ecosystem, the outstanding contributions of individuals often serve as a vital force driving technological advancements. In 2024, we witnessed the passing of several key figures whose work had profound impacts on computer science and open-source communities:

* **Death of Niklaus Wirth (father of Pascal)**
    Niklaus Wirth, Turing Award winner and father of the Pascal programming language, passed away on January 1, 2024. He not only developed a number of influential programming languages, but also first introduced the concept of “computer arithmetic”, which laid the foundation for the development of modern programming languages.

* **Death of Gordon Bell (computer pioneer)**
    Dr. Gordon Bell, a major figure in computing, passed away on May 17th at the age of 89 years. His research advanced the development of early computer architectures and made indelible contributions to the field of distributed computing.

* **Death of Larry Finger (Linux wireless development pioneer)** 
    Larry Finger, who made significant contributions to the field of Linux wireless driver development, passed away on June 21st. His work provided solid support for the use of wireless networking technologies in open source systems, benefiting users worldwide.

* **Stiver (author of the Java decompiler Fernflower) has passed away**
    Stiver, the original author of the Java decompiler Fernflower, passed away in October after a long illness. The tools he developed were popular for software debugging and reverse engineering, and had a profound impact on the Java development ecosystem.

* **Death of Thomas Kurtz (Co-Inventor of the BASIC Language)**
    Thomas Kurtz, co-inventor of the BASIC programming language, passed away on November 12th. He created a language that dramatically lowered the barriers to programming and allowed computer technology to be accepted and used by a wider range of people.
   
* **James Gosling, Father of Java, Announces Retirement**
    On July 9, 2024, James Gosling (James Gosling), the founder of the programming language Java, announced his retirement on social media platforms. The Canadian computer scientist, known as the “father of Java,” reportedly just celebrated his 69th birthday. Gosling said: “I finally retired. After so many years as a software engineer, it's time for me to have some fun. Despite the industrial climate, the last seven years at Amazon have been great. I still have a string of side projects to accomplish that will be fun.”

* **Longtime AMD Open Source Linux Graphics Driver Champion John Bridgman Retires**
    After more than a quarter of a century with ATI/AMD, John Bridgman has officially announced his retirement. He is well known in the open source community for his work on the Linux kernel and the Mesa 3D graphics library, particularly on drivers for AMD Radeon graphics cards. His work has had a significant impact on improving graphics performance on Linux systems and the usability of open source software.

* **Russ Cox, Technical Lead of the Go team, has announced that he is stepping down**.
    In August 2024, Russ Cox, who has led Google's Go team and the entire Go project for more than 12 years, announced that he will step down as technical lead on September 1, 2024, a decision he said was made after a deep process. He said the decision was a deliberate one, designed to bring new energy and perspective to the project. His replacement, Austin Clements, has been working on the Go language at Google since 2014, where he was responsible for the compiler toolchain, runtime, and releases. Russ Cox emphasized that the role of technical lead is one of service, not honor, and that he will continue to be involved with the Go project, but hopes that the change in leadership creates more room for the project to grow.

* **Redis Founder antirez Announces Return**
    Redis founder antirez has decided to return to the Redis community after about 1620 days away from the Redis project. He mentioned that he didn't have a strong attachment to the Redis project, but that he had been working on occasional programming projects during his time away. The reason for his return was that he wanted to try new things, especially writing, and spend more time with his family. He has noticed a split in the Redis community, which worries him, and is considering returning to the Redis ecosystem, possibly as an “evangelist” to bridge the gap between the company and the community.

* **Safari Chief Designer Joins Company Behind Arc Browser**
    Charlie Deets, the lead designer of Apple's Safari browser, has left Apple to join The Browser Company, the company behind Arc Browser, potentially improving the performance and user experience of Arc Browser.

### 3.2 Community Dynamics and Controversies

* **Robin Li's Controversial Remarks Angering the IT industry**
    On July 5, 2024, during the World Artificial Intelligence Conference, Robin Li, CEO of Baidu, participated in a roundtable discussion on open-source versus closed-source models. He unequivocally characterized open-source models as an "intellectual tax," asserting that closed-source models would maintain dominance due to their ability to offer customizable variants balancing performance, inference speed, and cost efficiency. His declaration—"Closed-source models should always be the choice"—sparked widespread criticism across the industry, as it implicitly disparaged both open-source providers and their user base.

* **Will PHP be worth learning in 2024?**
    Despite falling to an all-time low (#17) in the TIOBE Index, software engineer Sotiris Kourouklis has published an article stating that PHP will still be a good choice for web development in 2024.PHP's popularity in the web development space, community support, flexibility, and good integration with other technologies continue to keep it competitive in the marketplace. PHP's popularity in web development, community support, flexibility and good integration with other technologies allow it to remain competitive in the market.

* **ModelBest's CEO posts a response to a Stanford AI team's “plagiarism” incident**
    On May 29, an AI team from Stanford began to advertise on the web that a SOTA multimodal model could be trained for $500, called Llama3-V, which was later found to be a plagiarized copy of Facade Intelligence's MiniCPM-Llama3-V 2.5. Facade Intelligence CEO Dahai Li said that users in the open source community helped discover the plagiarism, and that open source's self-cleaning ability played an important role in the process. We deeply regret this incident,” said Li Dahai. On the one hand, we lament that this is a way to be recognized by international teams, and on the other hand, we call on everyone to build an open, cooperative, and trusting community environment.” “We want the good work of the team to be noticed and recognized by more people, but not in this way.”

* **India is on track to overtake the United States as the world's largest software developer nation by 2027**
    GitHub CEO Thomas Dohmke said that India is expected to overtake the US to become the world's largest software developer nation by 2027 as AI technology evolves. This has raised a lot of concerns and doubts in the Chinese open source community.
    
* **Linux Kernel Expels Russian Contributors, Prompting Farewell Letter from Linux Kernel Developer Serge Semin**
    The Linux project's recent removal of several Russian maintainers for compliance reasons has sparked widespread debate in the kernel community. linus Torvalds, the author of Linux, has also been involved in the debate, saying that as a Finn he could not have supported Russia's aggression, and refusing to disclose the details of what his lawyers have told him and the other maintainers of the kernel about the compliance requirements. He believes a lot of the controversy is coming from Russian “Trolls”. This made Serge Semin very sad, so he posted a farewell letter to the community expressing his dissatisfaction with the way it was handled and thanking the community members who had worked together for many years. He said that while he was still willing to help, the incentive to continue participating as a volunteer had disappeared under the current circumstances.

* **KDE pop-up fundraiser sparks controversy & revenue spike**
    Nate Graham, a developer for the KDE project, submitted a PR for a “pop-up window” in the notification system of the KDE Plasma desktop asking users to donate. This feature has been available since Plasma 6.2 and occurs only once a year in December. The results showed that KDE e.V. received twice as many donations in one day as in the previous two months combined, and user feedback was mostly positive.

### 3.3 Personnel Changes in Open Source Organizations and Teams 

* **Controversy over enforcement of Python community's code of conduct**
    The Python Steering Committee has announced a three-month suspension of core developer Tim Peters for multiple violations of the Python Software Foundation's Code of Conduct. Peters reportedly made a number of posts that could have triggered emotional reactions from community members, used offensive language, and more. The decision raised questions in the community about the transparency of the enforcement of the code of conduct.
   
* **Rust for Linux project maintainer quits for non-technical reasons**
    Wedson Almeida Filho, one of the Rust for Linux kernel maintainers and a Microsoft engineer, has announced his resignation from the project, primarily due to a long history of culture clashes and disrespect with C developers. He was frustrated with the non-technical aspects of the project, and his energy and enthusiasm were sapped. In an email, he expressed his gratitude to the team and reiterated his belief in the importance of memory-safe languages in kernel development.

* **Economic Pressure on Open Source Project Maintainers**
    Simon Hofmann, the core developer of the open source UI automation/testing tool nut.js, has decided to charge for some of its features, reflecting the economic pressures open source project maintainers face in seeking sustainability for their projects.
    
* **ECharts Founder Moves to Agriculture**
    ECharts founder Lin Feng has announced that he is leaving Baidu to join the agricultural venture capital field, “going into the sea” to raise fish, and raising top streams. This triggered a hot debate among users, reflecting the trend of diversification of technical talents. There are also netizens questioned: I do not know whether he is tired of the life of the Internet factory or some other reason.
    
* **The developer of Neofetch archived the project, leaving only one sentence: I'm going to plant!**
    Not coincidentally, on April 26, Neofetch developer Dylan Araps has archived his GitHub repository, marking the end of the project. In the repository's README.md file, he left behind a short sentence: “Have taken up farming”. Dylan's choice has generated a lot of buzz in the community, despite the fact that there are several similar competitors out there. 

### 3.4 Project Disputes and Team Changes

* **Google dismantles Python base team**
   In April 2024, Google disbanded its U.S.-based Python Foundation Team. Team member Thomas Wouters confirmed the news on social media, stating that Google plans to reorganize the new Python team in Munich, Germany. The move was seen as a reorganization strategy due to cost considerations, raising questions in the community about Google's decision to lay off the Python team in the age of AI.

* **Flutter team layoffs and the emergence of the Flock fork project**
   In May 2024, Google's Flutter team was affected by a wave of layoffs at the company and the team was downsized. Carroll, a former Google employee, announced the launch of a fork called Flock to address the long backlog of bugs and feature delays in the Flutter project. the Flock team wanted to keep Flutter up to date and engage community contributors to make up for Google's lack of investment in resources.

* **WinAmp open source repository removed**
   Less than a month after announcing that it was open source, the WinAmp project team suddenly deleted its GitHub repository.WinAmp is a well-known multimedia player, and the project team released the source code for the Windows side of the project on GitHub in September 2024, under the Winamp Collaborative License (WCL). Version 1.0 agreement placed restrictions on user forks and modified distributions. It is unclear exactly why the repository was removed.

* **EndeavourOS ARM branch ending**
    The founder and project lead of EndeavourOS has announced that the distribution's ARM branch is coming to an end due to a lack of up-to-date upstream changes and maintainers. This highlights the challenges of maintaining open source projects, especially for projects with limited resources.

* **Greenplum GitHub repository becoming read-only**
    The GitHub repository for Greenplum, a well-known open source MPP database, has suddenly become read-only, raising concerns in the community about the future direction of the project. There are no official details on the change.

* **SerenityOS author steps down from BDFL, forks Ladybird**
    SerenityOS creator Andreas Kling has announced that he is stepping down as the project's dictator for life (BDFL) and forking the new project called Ladybird. He says the move is to allow the two projects to develop independently of each other, and has no ulterior motives.

* **Team Rust Announces 2024 Development Goals**
    The Rust team has announced 26 project goals for the second half of 2024, including the release of Rust version 2024. The plan is to complete development of the Rust 2024 release features later this year and to release a beta version of Rust v1.85 on January 3, 2025 and a stable version of Rust v1.85 on February 20th.

* **FreeBSD Receives Nearly €700,000 in Investments**
    The Sovereign Tech Fund (STF), Germany's sovereign technology fund, has agreed to invest €686,400 in the FreeBSD project to drive improvements in infrastructure, security, regulatory compliance and developer experience. STF has previously funded other open source projects such as GNOME, PHP, Rustls, Coreutils uutils, and others.
    
* **Controversies within the WordPress Community**
    WordPress co-creator Matt Mullenweg forked and took control of the popular plugin Advanced Custom Fields (ACF), which is maintained by rival WP Engine, due to a conflict with the latter, and later publicly rebuked WP Engine, which is built on WordPress, for Mullenweg then publicly criticized WP Engine, which is based on WordPress, for profiteering without giving much back to the community. Things quickly escalated, with WP Engine filing a lawsuit after being denied access to key WordPress resources, and the court subsequently ordering WordPress to restore access. The move sparked a community debate about the spirit of open source and control of the project.

### 3.5 Open Source Industry & Ecology

* **Nanjing's Open Source Industry Alliance was inaugurated**
   The Nanjing Open Source Industry Alliance was inaugurated during the Nanjing Software and Information Service Industry Conference 2024. The alliance aims to promote open source collaboration, develop the open source software industry, and attract open source talent. With the launch of this project, the Nanjing Municipal Government expects to build Nanjing into an industry highland for open source software, and drive technological innovation and digital transformation in the region.
    
* **Chengdu releases list of 85 open source collaboration opportunities**
    On August 30, 2024, at the “2024 Chengdu Open Source Eco-Construction Conference”, the Municipal New Economy Committee of the Municipal Bureau of Economy and Information Technology officially released the “2024 Chengdu Open Source Collaboration Opportunity List” at the conference. There are 48 demand lists and 37 supply lists, involving technological innovation, scenario application, carrier platform, talent construction, public services and other aspects. The conference also officially released the “Chengdu Open Source Community Map”. The map covers major open source organizations, well-known projects and technology exchange platforms in Chengdu, aiming to promote technology sharing and cooperation, and stimulate more innovation possibilities. It will help developers to find like-minded friends and enterprises to discover excellent open source projects.

* **Status of Open Source Maintainers: Low Pay, Aging, and Flooded with Security Issues**
    Tidelift has released its State of the Open Source Maintainer 2024 report, noting that about 45% of maintainers have been in the role for more than 10 years, that the age distribution of maintainers is aging, and that most maintainers are unpaid enthusiasts. The report also highlights the growing security concerns of open source projects.

* **OpenHarmony Ecosystem Growing Rapidly**
    On December 20, 2024, version 5.0 Release of the OpenHarmony operating system was officially released. The OpenHarmony project has been continuously open to the community on the OpenAtom Open Source Foundation's platform, with more than 120 chips adapted and more than 900 hardware and software products passing compatibility evaluation; the community has gathered more than 8100 contributors and more than 70 organizations for continuous co-construction, with a cumulative total of more than 120 million lines of project code; and the OpenHarmony talent ecosystem has extensively covered more than 300 colleges and universities, attracting more than 70,000 teachers and students to actively participate in the development of the OpenHarmony operating system. The open source talent ecology has widely covered more than 300 colleges and universities, attracting more than 70,000 teachers and students to actively participate in the closed-loop path of “learning, examining, using, competing, and staying”, and more than 50,000 developers have passed the open source talent certification exam, and more than 20 industry chain enterprises have opened up open source positions. More than 20 upstream and downstream enterprises in the industry chain have opened up open source positions. At present, the ecological devices based on OpenHarmony have exceeded 1 billion units, continuously empowering the transformation and upgrading of thousands of industries.

### 3.6 International Collaboration

* **Open source cooperation in the joint statement of the 75th anniversary of the establishment of diplomatic relations between China and Russia**
    In the joint statement of the two countries, special mention is made of: mutually beneficial cooperation in the field of information and communication technologies, including artificial intelligence, communications, software, the Internet of Things, open source, cyber and data security, video games, radio frequency coordination, vocational education and specialized scientific research. The two sides agreed to establish and make good use of a regular consultation mechanism to strengthen cooperation in AI and open source technologies, coordinate their positions when considering AI regulatory issues on international platforms, and support international conferences related to AI organized by the other side.

* **Open source cooperation in China-UAE joint statement**
   In the statement, the two sides are willing to strengthen cooperation in innovation, digital economy, science, open source project incubation and commercialization, science, technology and technical talent training, clean energy, infrastructure, and all industrial sectors including precision and core industries by exploring common investment opportunities between the two countries, emphasizing a strong willingness to strengthen the complementarity of supply chains between the two sides in order to achieve economic and investment growth and realize the friendly expectations of both countries.

* **Ministry of Industry and Information Technology (MIIT) strengthens China-Africa cooperation in the digital sector with open-source operating system solutions**
    Minister of Industry and Information Technology Jin Zhuanglong said at the China-Africa Digital Cooperation Forum held in Beijing on July 29 that it will continue to uphold the principle of common business and common sharing, actively engage in cooperation in the digital field with African countries, and help build “Digital Africa”. It is worth mentioning that with the application of mobile payment on the ground in Africa, Open Source Ola, as an open source operating system incubated by the Open Atom Open Source Foundation, will provide solutions in security, vulnerability management and operation and maintenance.

* **The 2nd Open Source Congress was held in Beijing.**
    The second Open Source Congress (“OSC”), organized by the OpenAtom Open Source Foundation, was successfully held in Beijing from August 25th to 26th. the Linux Foundation, the Eclipse Foundation, the OpenAtom Open Source Foundation, the Open Source Initiative (OSI), the OpenInfra Foundation (OIF), the Open Source Foundation (OSF), and the Open Source Initiative (OSI) were invited to participate in the conference, Linux Foundation, Eclipse Foundation, Open Atomics Open Source Foundation, Open Source Initiative (OSI), OpenInfra Foundation (OIF), Open Invention Network (OIN), Rust Foundation, KAIYUANSHE, and 24 other open source organizations participated in the conference. Focusing on key topics such as open source artificial intelligence, open source security, cooperation among open source organizations, and the future development of OSC, the conference discussed common challenges faced by the global open source field, explored how to promote global open source and open cooperation, and effectively promoted exchanges and cooperation among global open source organizations. The cooperation of global open source forces breaks the boundaries of geography and culture, and the successful convening of this OSC conference provides a stage for the majority of open source organizations to discuss challenges, share wisdom, and work together to shape a more open, innovative, and sustainable open source future.

## 4. Open Source Licensing and Compliance Governance

### 4.1 Case Ruling Highlights Elevated Status of Open Source License

> Translator: Jianfan (Sir) Wei, Reviewer: Jianfan (Sir) Wei

The health and stability of the open-source ecosystem rely heavily on the robust support of a legal framework. In 2024, a series of rulings related to open-source cases once again demonstrated the law's clear endorsement of open-source initiatives: open-source licenses hold legal standing, the use of open-source must comply with legal standards, and developers' rights are protected by law. These rulings will steer the development of open-source software toward a healthier, more orderly, and innovative direction.

- On February 18, 2024, the headline article in the *People's Court Daily*, titled "This Ruling Gives Software Developers Peace of Mind," sparked widespread discussion in the open-source community. The ruling, issued by the Supreme People's Court, is significant because it not only affirmed the legal validity of the GPLv2 license but also effectively protected the rights of software developers. The case involved Suzhou-based Network Technology Co., Ltd. (referred to as Suzhou Company), which claimed that its "OfficeTen" software had been misappropriated by Zhejiang-based Communication Technology Co., Ltd. (referred to as Zhejiang Company). Zhejiang Company argued that OfficeTen was subject to the GPLv2 license's "copyleft" provision and thus should be open-sourced, meaning their actions did not constitute infringement. Suzhou Company, however, contended that it had used technical means to ensure that the upper-layer functional software was "independent and separate," making it immune to the copyleft effect and thus eligible for copyright protection. On October 12, 2023, after reviewing the case, the Intellectual Property Tribunal of the Supreme People's Court ruled in favor of Suzhou Company, finding Zhejiang Company guilty of infringement. The court reasoned that "whether a software developer violates the GPLv2 license and whether they enjoy copyright protection are two relatively independent legal issues. These should not be conflated, as doing so could unreasonably deprive or restrict developers of the copyright they are legally entitled to based on their original contributions."

- Another interesting ruling came from the Intermediate People's Court of Wuxi City, Jiangsu Province, in the "DedeCMS" case. Shanghai Zhuozhuo Network Technology Co., Ltd. sued a dental hospital for using its DedeCMS V5.7 - sp1 software without paying licensing fees. On February 19, 2024, the Wuxi court ruled against Zhuozhuo's primary claims. The court found that although this version of DedeCMS was commercial, it included open-source sphinxclient code protected under the GPLv2 license. As a result, DedeCMS was deemed to be subject to the GPL's copyleft provision. The court stated, "The software as a whole, due to its connection with the GPL-licensed library, should have been released under the GPL or a GPL-compatible license." The court further noted, "Zhuozhuo Company failed to comply with the GPL license terms when using others' code, which violates the principle of good faith and constitutes improper conduct."

    Consequently, the court ruled that the hospital's use of DedeCMS did not infringe on Zhuozhuo's reproduction rights. However, the hospital had failed to include attribution information on its website homepage as required by Zhuozhuo's licensing agreement, thereby infringing on Zhuozhuo's right of attribution. The final ruling required the hospital to compensate Zhuozhuo with 800 RMB and issue a public apology statement for 30 days.

    This case presents a subtle distinction from the earlier Supreme People's Court ruling on the OfficeTen case, primarily in two aspects: First, regarding whether the software was subject to the GPL's "copyleft" effect, the Supreme Court determined that OfficeTen was not affected by the GPL, whereas the Jiangsu Intermediate Court concluded that DedeCMS was indeed subject to it. Second, the manner in which the accused party obtained the source code differed. In the OfficeTen case, Suzhou Company had not publicly released the source code, and Zhejiang Company's acquisition of the code was deemed illegal. In contrast, in the DedeCMS case, the source code of the disputed version had been publicly released by Zhuozhuo Company.

    Additionally, the court made an important observation: "Zhuozhuo Company, relying on the disputed software as the basis for its claims, has initiated a large number of computer software copyright infringement cases in courts across the country, thereby reaping significant financial gains. This litigation model not only fails to effectively address the root causes of infringement but also consumes substantial public resources for dispute resolution. Such practices should not be encouraged or promoted."

- On February 14, 2024, the French Court of Appeal's ruling on the Lasso case once again unequivocally affirmed the robust standing of the GPLv2 license. French telecommunications company Orange had won a bid to develop a portal website for the French Electronic Communications Authority and, during the implementation, used the Lasso software library (released under GPLv2) published by Entr'ouvert. The court found that Orange had violated multiple provisions of the GPLv2, including failing to disclose the source code and engaging in unauthorized copying and distribution. Orange was ordered to pay 650,000 euros in damages. This ruling underscores the importance of corporate compliance with open-source licensing.

- After nearly two years, on July 5, 2024, three claims made by programmers alleging infringement by GitHub, Microsoft, and OpenAI were dismissed in court, leaving only two claims pending. The plaintiffs, five anonymous programmers, had filed a lawsuit in November 2022 against GitHub, Microsoft, and OpenAI, accusing their Copilot coding assistant of infringement. They argued that these companies used their code to train Copilot and provided it to other programmers without proper acknowledgment of their work or adherence to the original licensing terms. Judge Jon Tigar disagreed with this view, stating that the code suggested by Copilot was not sufficiently similar to the developers' copyrighted works. This lawsuit highlights the complex challenges of software copyright protection in the rapidly evolving AI landscape. While GitHub and others currently hold the upper hand, the ongoing controversy indicates a need for further refinement of laws to address the new challenges posed by AI.

- On November 22, 2024, Deno submitted a petition to the United States Patent and Trademark Office (USPTO) requesting the cancellation of Oracle's "JavaScript" trademark. Deno argued that "JavaScript" has become a generic term, that Oracle submitted deceptive evidence during the trademark renewal process, and that Oracle has not effectively used the trademark for many years. Over 14,000 developers supported this petition. Oracle has informed Deno that it will not voluntarily relinquish its rights to the "JavaScript" trademark. Deno will now begin gathering evidence to prove that "JavaScript" is widely recognized as a generic term. According to U.S. law, if a trademark is no longer in use with no intent to resume use, or if it has become a generic term, the trademark rights should be considered abandoned. If Deno's petition succeeds, it will remove barriers for the community to use the term "JavaScript," allowing its use in conference names, language specifications, and other contexts without legal threats. Deno is a JavaScript and TypeScript runtime environment based on the V8 engine, developed by Ryan Dahl, the creator of Node.js.

### 4.2 Controversial Incident Highlights the Difficulty of Reconciling the Interests of Multiple Stakeholders

> Translator: Jianfan (Sir) Wei, Reviewer: Jianfan (Sir) Wei

The series of open-source events in 2024 have shown us that an increasing number of people are developing a sense of open-source compliance. They recognize the importance of respecting the original authors' labor and ensuring their rightful interests. On the other hand, more and more people are realizing that the relationship between enterprises and the open-source community is becoming more complex, with intensifying conflicts of interest. Individual authors of open-source projects may face pressure from commercial companies, while open-source businesses may struggle against "free-riding" by cloud providers. Balancing personal interests, community interests, and commercial interests among open-source authors, open-source startups, and large corporations remains a challenging issue with no perfect solution. Breakthrough innovations in the management and development models of open-source projects are still needed.

- On October 23, 2024, the Linux kernel development community removed some maintainers with .ru-suffixed email addresses from the MAINTAINERS file. Many developers expressed confusion and sought explanations from the Linux community. Linus Torvalds personally responded, stating that the decision would not be reversed. Some netizens argued, "Linux is free software, and the freedom of free software should not be restricted by any factors, including nationality and political circumstances." However, the four freedoms defined by Richard Stallman, the father of free software, refer to the freedom to run, study, modify, and distribute the software, and do not include the freedom to contribute. Although this decision did not violate the spirit of the license, many intuitively felt that Linus was in the wrong, as his actions seemed to violate the Code of Conduct (CoC), which prohibits mockery, insulting/derogatory comments, and personal or political attacks.

- On March 20, 2024, the CEO of Redis announced that future versions of Redis would abandon the BSD license and adopt the RSALv2 and SSPLv1 dual licenses, neither of which meets the Open Source Initiative (OSI) definition of open source. The previously used BSD 3-Clause License was relatively permissive, while the new licenses impose restrictions, such as RSALv2 limiting commercial use and SSPLv1 requiring derivative works of the server to be open-sourced. Redis made this change to prevent cloud providers from freely using its source code for commercial gain. This move sparked significant controversy, as developers pointed out that Redis has many external contributors and that Redis the company did not initially participate in its development; it merely acquired the intellectual property and trademark rights from Redis' original creator, Antirez. Currently, Microsoft appears to have obtained a license from Redis to continue offering Redis products and services to its customers. Interestingly, just one day before Redis' announcement, Microsoft open-sourced the Garnet project under the MIT license, positioning it as a competitor to Redis. Many netizens commented, "Microsoft is trying to take away Redis' market share." This move by Redis also directly led to the creation of the Valkey project, which aims to replace Redis and continue its open-source development. Valkey was initially launched by Amazon, with engineers from Google and Oracle joining shortly after, and it became part of the Linux Foundation within a week.

- On November 15, 2024, a popular Bilibili UP主 (content creator) with over 12 million followers, known as "Teacher He," used the ASCII generator open-source project (licensed under MIT) developed by Viet Nguyen on GitHub in his video titled "I Made an Animation with 360,000 Lines of Notes..." but claimed, "We specifically wrote a software for this." This sparked widespread discussion. Viet Nguyen expressed dissatisfaction, accusing Teacher He of stealing his work. Netizens also criticized Teacher He for removing the original author's copyright notice in the code displayed in the video, violating the MIT license requirements. Faced with criticism, Teacher He admitted that the software was modified from the open-source program, stating, "As the project leader, I lacked professional sensitivity regarding technical matters. The project was not properly divided, and I failed to identify the issue during the process, leading to this mistake." Teacher He also contacted Viet Nguyen personally to apologize, and Viet Nguyen accepted the apology.

- Terraform, an infrastructure-as-code software developed by HashiCorp, was originally open-sourced under the MPL-2.0 license. In August 2023, HashiCorp changed its open-source license to the BSL. Subsequently, the Linux Foundation launched OpenTofu, an open-source fork of Terraform, which continued to use the MPL-2.0 license. In February 2024, an InfoWorld contributor pointed out that a feature in OpenTofu was similar to one in HashiCorp's new version of Terraform (a non-open-source version), and the code was also similar. Soon after, HashiCorp's legal team sent a notice to OpenTofu, accusing it of infringement. OpenTofu responded by stating that the claim was baseless, as both new features were based on modifications of the previous open-source version of the code, making similarities inevitable.

- In November 2024, Redis contacted Armin Ronacher, the maintainer of the Rust language's redis-rs client library, expressing a desire to take over the project. Redis claimed it wanted to create an officially supported Rust client with enterprise-level features while maintaining compatibility with the community version. However, Ronacher sensed from the conversation that Redis might believe the name "redis-rs" infringed on their trademark. Redis presented two options: either transfer ownership of the project to them or rename it. The technical community on HackerNews discussed this issue extensively, with developers expressing dissatisfaction with Redis' alleged misuse of trademark rights. Some developers suggested fully transitioning to Valkey, an open-source fork of Redis, while others pointed out that individual open-source maintainers could hardly afford the legal costs of confronting a commercial company.

- On August 6, 2024, ZLUDA was removed from GitHub. Initially, the ZLUDA project was an open-source initiative to provide CUDA support for Intel GPUs. Later, it received funding from AMD, and developer Andrzej Janik enabled it to run CUDA applications on AMD GPUs. According to the agreement between Andrzej Janik and AMD, after AMD ceased funding, Janik could open-source the relevant parts. However, six months after the open-source release, ZLUDA was taken down from GitHub at the request of AMD's legal department. Interestingly, this was not due to a legal challenge from NVIDIA but rather a shift in AMD's open-source strategy. Can open-sourced code be closed again? In this case, it happened. AMD's legal team argued that the initial email approval for releasing the code was not legally binding, meaning the open-source release was unauthorized from the start—a mistake! Developer Andrzej Janik stated that, given the circumstances, there was no other choice, but he remained undeterred. He planned to rebuild ZLUDA starting from the codebase prior to AMD's funding. In October 2024, ZLUDA returned to GitHub, open-sourced once again, and with support for AMD GPUs.

### 4.3 National Standards in the Field of Open Source Have Been Released One after Another, and SBOM Has Become the Focus of the Standards

> Translator: Yao (Leon) Liang, Reviewer: Yao (Leon) Liang

In 2024, China made significant progress in the standardization system for open source, with breakthroughs in national standards development. The release of national standards such as GB/T 43848-2024 Cybersecurity Technology—Security Evaluation Methods for Open Source Code in Software Products and GB/T 44272-2024 Information Technology—Open Source—Open Source License Framework marked key milestones‌.Software supply chain security and Software Bill of Materials (SBOM)-related standards gained prominence, including the approval of the industry standard Information Technology—Specification for Software Bill of Materials Data Format and the establishment of the "SBOM Standards Community"‌.

- **Cybersecurity Technology—Security Evaluation Methods for Open Source Code in Software Products‌(GB/T 43848-2024)** In April 2024, the national standard GB/T 43848-2024, organized and drafted by the China Academy of Information and Communications Technology (CAICT), was officially approved and released. This standard defines evaluation elements and procedures for open-source code security in software products, covering source verification, security quality, intellectual property compliance, and management practices. It applies to static security evaluations of open-source components in software products, providing a basis for organizations to conduct self-assessments and offering reference guidelines for third-party evaluations‌.

- **Information Technology—Open Source—Open Source License Framework‌(GB/T 44272-2024)** In August 2024, the national standard GB/T 44272-2024, drafted by the China Electronics Standardization Institute (CESI), was officially released. The standard establishes a framework for open-source licenses, specifying their basic structure, preamble, terms and conditions, usage instructions, and compatibility. It addresses issues such as inconsistent licensing norms, legal ambiguities in license obligations, and the lack of unified guidelines for open-source participants. As a foundational standard, it regulates core rules of the open-source ecosystem, fills the global gap in license framework standards, and initiates China’s independent development of open-source licenses. It also enhances understanding and rational use of licenses to promote open-source ecosystem development‌.

- **SBOM Standards Community** In September 2024, the National Industrial Information Security Development Research Center (NIISDRC) established the "SBOM Standards Community" and launched the "SBOM Chain Initiative" under the national project "Open Source Community Software Bill of Materials (SBOM) Platform." Collaborating with 39 research institutions and enterprises, the initiative focuses on SBOM standardization, technological innovation, and practical applications to strengthen software supply chain risk governance. In October 2024, NIISDRC released the Software Bill of Materials Composition and Requirements standard to regulate SBOM development processes, improve software quality and maintainability, and enhance the resilience and security of China’s software industry chain‌.

- **Information Technology—Software Bill of Materials Data Format Specification (2024-1400T-SJ)** In December 2024, the industry standard Information Technology—Software Bill of Materials Data Format Specification, led by CESI, was approved (Project Code: 2024-1400T-SJ). As the core component of SBOM, data formats determine the effectiveness of SBOM in delivering actionable information across the software supply chain. This standard addresses gaps in China’s SBOM data format standardization and resolves issues such as redundant fields in existing mainstream formats, ensuring interoperability and industrial resilience‌.

### 4.4 New Breakthroughs in Open Source Licensing in Emerging Fields, Models, Hardware Licenses Officially Released

> Translator: Yao (Leon) Liang, Reviewer: Yao (Leon) Liang

The development of emerging technologies has introduced new challenges in balancing intellectual property rights within legal frameworks, driving demand for innovative open-source licenses‌. While large-scale AI models are advancing rapidly worldwide, traditional open-source licenses—primarily designed for software source code—fail to adequately address rights allocation and governance for model components like parameters, weights, and datasets‌. Concurrently, open-source projects in hardware domains such as chips and robotics face compatibility issues due to fundamental differences between software and hardware IP rights systems, with no globally recognized mainstream hardware licenses currently available‌. To address these gaps, the OpenAtom Open Source Foundation has developed and released specialized open-source licenses tailored for AI models and hardware technologies‌.

- In September 2024, at the ‌OpenAtom Open Source Ecosystem Conference‌, the ‌OpenAtom Open Source Foundation‌ officially launched the ‌OpenAtom Model License, Version 1.0‌, a neutral and universally accessible open-source license designed to support the widespread adoption of large-scale AI models and drive the growth of open-source ecosystems in artificial intelligence‌. Developed through collaboration with institutions such as the ‌China Electronics Standardization Institute‌, ‌Huawei‌, ‌Ant Group‌, and ‌Grandall Law Firm (Nanjing)‌, the license provides a standardized framework for defining rights and governance of model components like parameters and datasets‌. Early adopters include technology leaders such as ‌CETC TaiJi‌ and ‌vivo‌, marking a milestone in aligning open-source licensing with emerging AI innovation needs‌.

- In December 2024, during the opening ceremony of the 2024 OpenAtom Developer Conference and the First Open Source Technology Academic Conference, the OpenAtom Open Source Foundation officially released Version 1.0 of the OpenAtom Open Hardware License. This license aims to provide a freely available open hardware license, maintained neutrally by the foundation, to support the prosperous development of the open hardware ecosystem. Major contributors to the drafting of this license include the OpenAtom Open Source Foundation, the China Electronics Standardization Institute, the OpenSDV Automotive Software Open Source Alliance, and Alibaba Cloud Computing Co., Ltd. The first batch of organizations to adopt this license includes the National-Local Joint Innovation Center for Embodied Intelligent Robots promoted by the OpenSDV Automotive Software Open Source Alliance, Suzhou Changxing Zhijia Automotive Technology Co., Ltd., Shenzhen Jialichuang Technology Group Co., Ltd., Shanghai Zhiwei Robotics Co., Ltd., and Realman Intelligent Technology (Beijing) Co., Ltd.

## 5. Open Source Commercialization

> Translator: Yi (RollRoll) Yuan, Reviewer: Yi (RollRoll) Yuan

### IBM Acquires HashiCorp for $6.4 Billion to Strengthen Its Hybrid Cloud Management Strategy

IBM announced the acquisition of HashiCorp for $6.4 billion, a move seen as a key step in bolstering its hybrid cloud management strategy, particularly in accelerating the deployment of generative AI. IBM CEO Arvind Krishna stated that as generative AI deployment accelerates, HashiCorp has an excellent track record in helping customers automate, orchestrate, and secure hybrid and multi-cloud environments.

HashiCorp is a software company specializing in cloud infrastructure automation, offering tools for managing cloud infrastructure across various computing environments. Its products help enterprises automate and manage their cloud infrastructure, excelling in handling complex multi-cloud environments. The company started with open-source products, including Vagrant, Packer, Terraform, Vault, Consul, and Nomad, and has a broad user base in IT and cloud service management.

### Belgian Startup Aikido Secures $17 Million in Series A Funding to Develop a Simplified Security Platform for Developers

Aikido, a small startup based in Ghent, Belgium, recently announced the completion of a $17 million Series A funding round. The company is dedicated to providing developers with a no-nonsense, open-source security platform aimed at solving the complexity of managing security tools. Aikido emphasizes the ease of use and open-source nature of its product, offering efficient security strategies without excessive notifications and delivering comprehensive security solutions at affordable rates. The company currently serves 3,000 small and medium-sized businesses, with this funding round led by European venture capital firm Singular.

### Paris-Based AI Startup Mistral AI Valued at $6 Billion

According to TechCrunch, Paris-based startup Mistral AI is currently raising funds with a valuation as high as $6 billion, tripling its valuation from December last year. DST, General Catalyst, and Lightspeed Venture Partners have all expressed interest in participating in this funding round. The scale of Mistral AI's fundraising is expected to reach but not exceed $600 million.

Mistral AI, founded in Paris, focuses on developing open-source large language models and aims to deliver generative AI services.

### Redpanda Acquires Open-Source Stream Processing Platform Benthos

Redpanda, a well-funded Kafka-compatible streaming data platform, has announced the acquisition of the open-source stream processing platform Benthos. Although the financial terms were not disclosed, it is worth noting that Redpanda raised $100 million in a Series C funding round a year ago, enabling acquisitions like this.

### Open-Source Data Service Company Cube Raises $25 Million to Strengthen Its "Semantic Layer" Services

Cube, a company providing semantic layer services, helps enterprises organize and standardize relationships between data by building abstract data models. With the rapid growth of data and AI, existing data models face challenges in management and fragility. To address this, Cube has launched Cube Cloud, a subscription-based cloud service that adds automated workflows and enterprise-grade governance deployment tools, aiming to establish a unified platform for data sources and metrics. Cube maintains its competitive edge with over 10 million downloads of its open-source Cube project and Cube Cloud installations on approximately 90,000 servers.

### Open-Source AI Development Platform Secures $85 Million in Seed Funding

The open-source AI development platform Sentient has raised $85 million in a seed funding round led by Peter Thiel's Founders Fund, Pantera Capital, and Framework Ventures. The funding will advance the development of community-driven AI models and incentivize contributions through blockchain technology.

### Open-Source Compliance and Security Platform FOSSA Acquires StackShare

Open-source compliance and security platform FOSSA has confirmed its acquisition of StackShare, a developer community platform where developers can discuss, track, and share the tools they use. FOSSA, valued at over $100 million, provides end-to-end third-party code governance services and initially helped developers identify open-source licenses in their products. By integrating StackShare, FOSSA aims to expand its governance and security services to a broader range of developer tools.

### Hugging Face Acquires XetHub to Enhance AI Storage Capabilities

Hugging Face Inc. has acquired XetHub, a Seattle-based startup specializing in file management for AI projects. This acquisition, reportedly the largest in Hugging Face's history (exceeding $10 million), aims to strengthen the platform's storage infrastructure, particularly for hosting AI models and datasets.

### NVIDIA Acquires Israeli AI Startups Run:ai and Deci

NVIDIA has acquired Israeli AI startups Run:ai and Deci to lower the costs of developing or running generative AI models, helping clients utilize AI computing resources more efficiently and boosting demand for NVIDIA's AI chips. Run:ai has approximately 150 employees and has raised $118 million in total funding, while Deci has around 100 employees and has raised $55 million.

### GitLab, an Open-Source Code Hosting Platform, Considers Sale

GitLab, an open-source code hosting platform with a market value of approximately $8 billion, is considering a sale after attracting interest from several potential bidders.

GitLab has initiated the sale process in collaboration with investment bankers, with peers such as cloud monitoring company Datadog reportedly expressing interest. Datadog, valued at $44 billion, provides software that enables tech workers to collaborate and measure productivity in the cloud.

### Databricks Raises $10 Billion in Funding

Big data and AI company Databricks has announced the completion of its latest Series J funding round, with its valuation soaring to $62 billion. The company expects to raise $10 billion in non-dilutive funding and has already secured $8.6 billion, marking this as the largest venture capital deal of the year.

## 6. Open Source Education

> Translator: Mingkang (Bright) Li, Reviewer: Mingkang (Bright) Li

### 6.1 Open Source Educational Practices

In 2024, several significant and influential open-source educational practices took place nationwide:

- **Open Source Promotion Plan (OSPP)**
    Open Source Promotion Plan is a summer program organized by the Institute of Software Chinese Academy of Sciences and long-term supported by the Open Source Software Supply Chain Promotion Plan. It aims to encourage college students to actively participate in the maintenance and development of open source software, promote the vigorous development of open source software communities, and build the open source software supply chain together.
    The 2024 OSPP concluded on November 9th, with a total of 168 open-source communities participating. These communities released 561 project tasks, attracting over 2,500 students from nearly 500 universities to sign up. Among them, 518 students were selected for participation. After three months of project development and one month of code integration, ultimately, 455 students successfully passed evaluations by mentors, communities, and the organizing committee and completed their projects

- **GitLink "Indeed Open Source" Programming Summer Camp (GLCC)**
    The GitLink Programming Summer Camp (GLCC) is a summer coding initiative organized by the CCF Open Source Development Committee (CCF ODC) under the guidance of the China Computer Federation (CCF), targeting university students nationwide.
    The third edition of GLCC concluded all projects on October 31. Official data reveals that this year's camp involved 31 participating communities proposing challenges, with 46 students successfully passing the final evaluation. Among them, 18 were rated S-level, 20 A-level, 6 B-level, and 2 C-level.

- **"One Chip Per Lifetime" Project**
    Launched in August 2019 by the School of Computer Science and Technology at the University of Chinese Academy of Sciences (UCAS) in collaboration with the research engineering team from the Institute of Computing Technology (ICT) under the Chinese Academy of Sciences, the "One Chip Per Lifetime" initiative integrates theoretical coursework, experimental training, and practical projects to form a cohesive pipeline for open-source processor chip design and tape-out (manufacturing) education.
    As of December 2024, the program has engaged over 10,000 participants from more than 800 universities worldwide. Official records show 1,163 formal trainees and 90 tape-out participants. Since the 2024 cohort (starting in July 2024), enrollment has surged, with 2,581 new registrants within half a year—a figure expected to grow rapidly.

- **Open-Source Operating System Training Camp**
    The Open-Source Operating System Training Camp (referred to as "the Camp") was initiated in 2020 by Professors Chen Yu and Xiang Yong from Tsinghua University. It aims to cultivate operating system development skills among university students nationwide through hands-on practice in writing operating systems using the Rust programming language. To date, the Camp has successfully run for four years, training over 4,000 college students and engineers to become outstanding professionals in the field of operating systems.
    In 2024, the Camp offered two sessions: The Spring-Summer Session , launched on April 7, attracted 2,123 student and engineer participants from across the country. The Autumn-Winter Session , starting on September 29, drew 3,320 registrants. As of now, the Camp has been successfully held for five years across eight editions, with over 8,000 total participants. Many high-performing trainees have emerged as exceptional talents in the operating system domain.

- **The Second OpenAtom Competition**
    In September 2024, the Second OpenAtom Competition was officially launched under the theme "Software Defines the World, Open Source Builds the Future" . The competition featured 50 challenge categories with a total prize pool of 15 million RMB, covering fields such as foundational software, industrial software, artificial intelligence, and large-scale models. It included formats like peak challenge contests, practical skill competitions, and training-oriented events, focusing on solving real-world technical challenges, promoting open-source technologies, and identifying top talent.
    The inaugural OpenAtom Competition in 2023 saw participation from 43,400 contestants across universities, research institutions, and enterprises, with 13.384 million RMB in awarded prizes. It resolved 191 technical challenges in foundational and industrial software, generated 573 technical achievements, and facilitated 31 intent-to-land agreements between winning teams and regional entities. On December 20, 2024, the award ceremony for the first batch of challenges in the Second OpenAtom Competition recognized 13 first-prize teams across eight categories.

- **The 7th CCF Open Source Innovation Competition**
    Organized by the China Computer Federation (CCF) under the guidance of the Department of Information Science at the National Natural Science Foundation of China, the 7th CCF Open Source Innovation Competition is co-hosted by Changsha University of Science and Technology and the CCF Open Source Development Committee. Aligned with China's "14th Five-Year Plan" strategy for open-source ecosystem development, the competition focuses on critical "bottleneck" software domains and cutting-edge technologies such as artificial intelligence, big data, chip design, and IoT. It aims to provide a platform for domestic open-source communities to showcase, collaborate, and innovate, fostering practical talent and driving high-quality growth in the open-source ecosystem.
    The competition attracted over 13,000 registrants, with 105 teams advancing to the finals through online and offline preliminary rounds. It has effectively promoted innovation and application of open-source technologies, strengthened the integration of open-source culture and education, and contributed to building a more open, secure, and prosperous open-source ecosystem. This initiative has also injected momentum into China's national science and technology innovation system and high-quality digital economic development.

- **The First China Graduate Operating System Open Source Innovation Competition**
    The "Songshan Lake Cup" First China Graduate Operating System Open Source Innovation Competition , part of the China Graduate Innovation Practice Competition series, is guided by the Department of Degree Management and Graduate Education of the Ministry of Education and organized by the Chinese Society of Graduate Education and the China Association for Science and Technology's Youth Science and Technology Center. This national, public-interest competition targets graduate students and senior undergraduates, emphasizing strategic national needs and foundational software ecosystem development. It focuses on core operating system technologies and ecosystem construction to stimulate innovation and enhance practical capabilities among participants.
    Hosted by the National University of Defense Technology, the inaugural competition attracted 277 teams from 107 universities nationwide. After months of intense competition, 84 teams (approximately 300 participants) advanced to the finals in Changsha, showcasing their innovations in this landmark event.

- **Chance Foundation Open Source Innovation Practice Graduation Design Program**
    The Tiangong Kaiwu Open Source Innovation Practice Graduation Design Program (abbreviated as "Open Source Graduation Project") is an open-source technical initiative launched by the Tiangong Kaiwu Open Source Foundation and supported by multiple stakeholders, including open-source foundations, enterprises, communities, and university faculty. This innovative model integrates open-source culture with higher education practices, aiming to provide college students with a platform to apply theoretical knowledge to real-world projects, cultivate innovative thinking, and enhance teamwork skills. By engaging with authentic open-source projects, the program encourages young talents to contribute to the open-source ecosystem. To date, the initiative has launched over 100 open-source project topics on its dedicated platform.

- **National College Student Computer System Capability Competition**
    The National College Student Computer System Capability Competition (hereinafter referred to as "the Competition") is a nationwide event initiated by the Expert Group on System Capability Development Research and co-organized by the National Association of Computer Education in Universities and leading institutions involved in system capability development projects. The Competition aims to reform professional education and cultivate innovative talent in computer science by promoting disciplinary contests, focusing on nurturing后备人才 (future talent) for China's high-end chip and critical foundational software sectors.
    - **PolarDB Database Innovation Design Contest (Tianchi Cup)**: Targeting undergraduate and vocational students from universities nationwide, this contest aims to cultivate expertise in database system design, analysis, optimization, and application. The 2024 edition attracted 934 teams (1,296 participants) from 208 institutions, including Wuhan University, Renmin University, Zhejiang University, Huazhong University of Science and Technology, Nankai University, East China Normal University, and Shandong University.
    - **The 4th OceanBase Database Competition**: Co-organized by Beijing Jiaotong University's School of Computer Science and Technology and OceanBase, this competition emphasizes "competition, exchange, and growth" to help students systematize database theory knowledge and enhance practical skills. The 2024 contest drew over 2,600 participants from nearly 200 top universities, including Peking University, Tsinghua University, Shanghai Jiao Tong University, Fudan University, Renmin University, Nanjing University, Northeastern University, Wuhan University, and Southern University of Science and Technology.

### 6.2 Open-Source Education Takes Root on Campus

- **OpenAtom OpenSource Way To School**
    The OpenAtom OpenSource Way To School is a long-term non-profit initiative launched by the OpenAtom Foundation. It aims to cultivate open-source talent through: Promoting open-source curricula, Guiding hands-on projects, Building instructor networks, Organizing events (e.g., lectures, competitions, and international exchanges), Supporting student communities, and Establishing training and certification systems. By aggregating resources from industries, enterprises, universities, and students, the initiative accelerates the development of China's open-source ecosystem.
    Since 2023, the program has organized nearly 20 large-scale offline events at institutions such as Beihang University, Harbin Institute of Technology, and Northwestern Polytechnical University. It has also conducted over 400 Meetup sessions across 100+ universities nationwide, engaging 20,000+ student participants.

- **CCF Open Source Campus Tour**
    The CCF Open Source Campus Tour , organized by the Education Group of the CCF Open Source Development Committee (CCF ODC), aims to strengthen open-source culture promotion and talent cultivation in universities. The initiative includes various formats such as open-source classrooms, project showcases, and forums, serving as one of the committee’s annual flagship campus outreach programs.
    In 2024, the program hosted its 12th edition (cumulative 30th edition) , bringing enterprise and community open-source experts to institutions including Peking University, Southwest University, Beijing Institute of Technology, Tongji University, Shanghai Jiao Tong University, University of Electronic Science and Technology of China, Northeastern University, Fudan University, South China Normal University, Guilin University of Technology, Changsha University of Science and Technology, and Hunan University of Finance and Economics.

- **Chance Foundation Open Source Education Campus Tour**
    The Chance Foundation Open Source Education Campus Tour , launched by the Chance Foundation, aims to advance China’s software and information service industry clusters and accelerate open-source ecosystem construction . Through on-site training workshops and interactive exchanges , participants explore innovative achievements in open-source disciplines and study diverse institutional approaches to open-source development. The initiative drives collaborative efforts to build and apply foundational open-source education platforms , fostering a robust ecosystem for open-source growth.

- **DataWhale AI+X University Tour**
    The "X" symbolizes infinite possibilities and embodies the aspirations of the "AI+X University Tour" series. As a pioneer in China’s AI open-source learning organizations, DataWhale aims to provide young students with a "key to unlock the future" amid the surging AI revolution. 
    Since March 2024, the tour has reached 36 top universities , including Tsinghua University (Shenzhen), Zhejiang University, Nanjing University, and Soochow University, engaging over 5,000 students and faculty through the DataWhale community to experience the transformative power of AI tools in the new era.

- **OSPP Campus Tour**
    To deepen student engagement with open-source projects, the Open Source Promotion Plan (OSPP) initiative launched the "OSPP Campus Tour". This series aims to inspire next-generation developers by fostering understanding of globally recognized open-source technologies, projects, and communities, thereby promoting open-source cultural adoption in higher education.
    In 2024, the tour conducted outreach at South China University of Technology, Soochow University, Nanjing University, Jilin University, and Fudan University for open-source project promotions.

- **Hongshan Open Source Campus Tour**
    The Hongshan Open Source Community launched the "Hongshan Open Source Campus Tour" initiative, targeting key universities and strategic disciplines to enhance community visibility and attract innovative resources for participation in open-source innovation ecosystem development

### 6.3 Open Source Educational Theory Research

- **Higher Education Reform and Open-Source Education System Construction**
    - Peng Ding and Jiang Ying in "The Construction of Open-Loop and Open-Source Innovation and Entrepreneurship Education System in Vocational Undergraduate Programs"propose an open-source innovation and entrepreneurship education system centered on resource integration, cross-disciplinary knowledge, and practical validation , enhancing the贯穿力 (cohesive force) of vocational undergraduate talent cultivation.
    - Huang Qichun in "Practices in Cultivating Innovation Capabilities for Software Engineering Graduate Students Based on Special Projects and Open-Source Talent Development"explores diverse evaluation methods (e.g., open-source contributions, major engineering projects) to improve graduate innovation capabilities, establishing an industry-academia-research integrated training model .
    - Hu Ping, Wang Jun, et al. in "Exploration of Software Talent Cultivation Models Under Engineering Education Accreditation: A Case Study of Anhui Polytechnic University" integrate open-source culture into curriculum development to enhance students' engineering practice capabilities and innovative awareness .
- **Primary and Secondary School Maker Education and Digital Literacy Cultivation**
    - He Wei and Sun Kai in "Practical Exploration of Maker Education for Enhancing Primary Students' Digital Literacy" develop a case framework integrating digital literacy and maker education through tools like graphical programming and open-source hardware .
    - Yu Haijun in "On the Integration of Maker Education and Disciplinary Courses in Primary and Secondary Schools"explores pathways for merging maker education with subject curricula based on Gansu Province practices, aiming to strengthen cross-disciplinary problem-solving skills .
    - Tian Haoxuan and Xu Xiaojun in "Shanghai Practices and Research on Digital Literacy Cultivation for Primary and Secondary Students via Open-Source Hardware" analyze how open-source hardware bridges the digital divide and enhances students' digital competitiveness under new curriculum standards.
- **Open Source Technology-Driven Teaching Model Innovation**
    - Li Heng, Xu Jin, et al. propose the "sharing, openness, collaboration" trilogy teaching model in Exploration and Practice of Electronic Cognitive Internship Reform in Innovation 2.0-Oriented Open Source Innovative Education, constructing a new ecosystem for practical teaching.
    - Tang Haibing, Liao Lingzhi, et al. reconstruct research-based teaching processes through open-source projects in Using Open Source Projects for Research-Oriented Teaching to Cultivate Students' Innovative Abilities, enhancing students' problem analysis and resolution skills.
    - Zhang Xuning, Zhang Junming, et al. integrate online platforms with open-source projects in Research on Blended Teaching Models for Web Design and Production Courses Based on Open Source Projects, strengthening students' autonomous learning and teamwork capabilities.
* **Open Source Software Strategy and Policy Research**
    * Long Yuntao, Wang Zhe, et al. in *"International Experience and Reflections on Promoting Open Source and Open Access of National Funded Research Project Outcomes"* summarize international policy experiences in open source and open access, and propose optimization suggestions for China's open source mechanisms for scientific and technological achievements.
    * Zhang Taolue, Liu Ye in *"Innovation and Security in Openness: A Review of the EU's Open Source Software Strategy"* analyze the EU's open source strategy regarding ecosystem development and security challenges, offering references for China's open source policies.
    * Sheng Xiaoping, Chen Yifan, et al. in *"UNESCO's Open Science Policy and Its Implications"* distill the UNESCO open science policy framework and recommend strengthening infrastructure and standardization in China.
- **Open Source Tools and Platform Construction Practices**
    - Yu Zhuorui, Sun Yiheng, et al. in "Research on Spatial Analysis Teaching Reform Based on Open-Source R Language Modeling" enhance the effectiveness of geographic information courses by opening model parameters and algorithms through R language.
    - Zeng Xiangjin, Wu Dongyu, et al. in "Innovative Teaching Models: Exploring MicroPython-Based AI Experiment Kits in Education" optimize AI education scenarios using MicroPython's hardware integration capabilities.
    - Lu Huadeng, Li Tingyu, et al. in "Construction and Application of an Online Open Software Project Practice Platform" build a vocational software development competency framework with open-source principles to quantify student project capabilities.
* **Research on Open Source Ecosystems and Governance Systems**
    * Li Ye, Zhou Na, et al. in *"From Bureaucratic Closure to Open Source: Governance Choices for Universities in the Digital Intelligence Era"* propose that university governance should transition toward open-source models to build data-driven collaborative systems integrating industry, academia, and research.
    * Wang Jie, Huang Wenrui, et al. in *"OpenRank Contribution Evaluation Method and Its Empirical Study in Open Source Courses"* design a contribution evaluation algorithm based on developer collaboration networks to improve the teaching assessment system for open source projects.
    * Xu Xiaojun, Tian Haoxuan in *"Application and Analysis of Open Source Hardware in Shanghai Primary and Secondary Schools"* investigate bottlenecks in open-source hardware education and propose recommendations for equipment management and curriculum optimization.

### 6.4 Evaluation Mechanisms for Open-Source Education

With the continuous maturation of China's open source ecosystem, the demand for open source talent will steadily grow. Therefore, accelerating the establishment of an industry-demand-oriented talent cultivation and evaluation system centered on capability and contribution holds significant strategic importance. Minister of Industry and Information Technology Jin Zhuanglong emphasizes: **"Optimizing the open source development environment** is critical. We must prioritize talent and international cooperation as core drivers of open source growth, cultivate fertile ground for development, and enhance the quality and efficiency of open source initiatives. To **foster a favorable development atmosphere**, stakeholders must collaboratively build an open source culture with Chinese characteristics, promote awareness through multi-dimensional outreach, amplify open source advocacy, and create a society that understands and actively engages with open source principles. To **cultivate high-caliber talent**, efforts should focus on establishing contribution-based evaluation systems that integrate open source achievements into career advancement metrics for employees and academic recognition for students. This ensures talent development progresses from academic institutions to community engagement and ultimately benefits society. Minister Jin highlights the need for leading enterprises and universities to pilot innovative evaluation frameworks, aligning with national strategies to reinforce the open source ecosystem."

- The OpenAtom Foundation, in collaboration with ministry-affiliated universities, specialized model software colleges, and representative institutions, has launched a **"contribution-oriented talent evaluation mechanism for open source"** and established pilot working groups to advance implementation.
- The Talent Exchange Center of the Ministry of Industry and Information Technology (MIIT) released the **"Open Source Talent Competency Requirements and Evaluation Standards". This standard is closely aligned with the practical needs of open-source ecosystem development, focusing on four core domains—development, compliance, operations, and strategy—and elaborates on specific job competency requirements**, training pathways, and evaluation criteria. The release of this standard will further guide stakeholders to prioritize the construction of an open-source talent system oriented by industry demand and centered on capability contributions, thereby providing robust talent support for a thriving open-source ecosystem.
- **Northwestern Polytechnical University** researchers **Chen Yaxing** and **Zhang Mingyang** published the article **(["On the Synergistic Effects of Open Source and Academic Evaluation"](https://mp.weixin.qq.com/s/MhdbAsT_ixRw7kTRzVo3hw)):** This article explores the potential integration of open-source practices into academic evaluation systems, analyzes the challenges of leveraging open source to empower academic evaluation, and proposes strategies to address them. By positioning open source as a **"small breakthrough"** to drive **"large-scale reform"** of academic evaluation, it aims to foster a more scientific and mature academic evaluation framework in China. 
- **East China Normal University** scholar **Wang Wei** published the article **(["Contribution-Oriented Open Source Talent Evaluation: Principles, Methods, and Services"](https://mp.weixin.qq.com/s/D00hS5n_2-HLssSiDagg6w))** : The study examines a **contribution-driven open-source talent evaluation system**, proposing methods to assess talent through **quantitative and qualitative analysis** of open-source contributions. It emphasizes the importance of building evaluation services tailored to open-source communities, aiming to establish fairer standards for recognizing open-source talent and promoting the healthy development of these communities. The discussion is structured around three pillars: **principles**, **methods**, and **services**.

### 6.5 Teacher Training and Academic Forums/Conferences on Open Source Education

* **The 12th CCF Xiuhu Conference**
    Over 20 scholars and experts were invited to engage in in-depth discussions on the theme *"Open Source Education: Mission, Challenges, and Development"*. Based on the symposium outcomes, participants summarized key insights, formed consensus, and issued initiatives to promote **industry-academia-research-application integration** and jointly advance China's open source education.

* **CCD 2024: *"Fundamentals of Open Source Software"* Course**
    The China Computer Federation (CCF) established the *"CCF Computer Course Reform Teaching Class"* (CCD) in 2013, inviting experienced educators to share frontline teaching practices and methodologies. CCD 2024 will focus on computer course development and reforms in the era of intelligence and open source. A course titled *"Fundamentals of Open Source Software"*, led by Professor Wang Wei from East China Normal University, will be held in Suzhou from August 6-9.

* **OpenAtom Campus Source Faculty Training Program**
    The OpenAtom Campus Source Faculty Training Program successfully held multiple sessions in 2024, focusing on OpenHarmony-related instructor training. Additionally, OpenHarmony ecosystem enterprises actively organized related training activities to expand the pool of qualified OpenHarmony educators.

* **First Digital Economy Open Source Innovation Academic Conference and Open Source Innovation Education Forum for Economics, Management, and Law Universities**
    Held under the guidance of the Shanghai Municipal Commission of Economy and Informatization, this conference was a key initiative by the Shanghai Open Source Information Technology Association to implement national policies on open source ecosystem development. Experts from institutions such as the Chinese Academy of Sciences, Tsinghua University, Peking University, East China Normal University, Fudan University, Shanghai Jiao Tong University, Communication University of China, University of Science and Technology Beijing, and Macao Polytechnic University, alongside industry representatives from Huawei, Red Hat, RT-Thread, DaoCloud, PingCAP, Dentons Law Firm, and Junyue Law Firm, engaged in dialogues on open source theoretical frameworks and open source innovation education in economics, management, and law disciplines.

* **2024 CCF ChinaOSC Open Source Education Innovation and Development Forum**
    Organized by the Tiangan Kaowu Open Source Foundation under the guidance of the CCF Open Source Development Committee, this forum was successfully held. Themed *"Open Source Education and Industrial Innovation: How to Empower Each Other Bidirectionally?"*, the forum convened experts, entrepreneurs, and educators from institutions such as the LF Open Source Academy, Shanghai Open Source Technology Information Association, Huawei Open Source, OpenSource China, Guoke Open Source Technology, Peking University, National University of Defense Technology, Huazhong University of Science and Technology, Hubei University, and Chongqing University of Posts and Telecommunications. Discussions addressed challenges and solutions in open source education, talent cultivation, university course development, and industry-education integration. Through expert reviews, multiple outstanding papers were selected, including *"Open Source Innovation: Theoretical Connotations, Analytical Frameworks, and Future Prospects"* and *"Open Source's Revision and Theoretical Development of Traditional Economics"*. These papers significantly contributed to open source innovation in theory and practice, providing robust support for advancing China's open source initiatives.

* **2024 OpenAtom Developer Conference and the First Open Source Technology Academic Conference**
    On December 20, 2024, the **Academic Report Sub-forum** was officially held during the **2024 OpenAtom Developer Conference and the First Open Source Technology Academic Conference**. Contributors from academia and industry shared insights on **building open-source theories**, **advancing open-source technologies**, and **establishing open-source systems**, aiming to uncover high-quality research and promote the development of open-source technologies and projects. **Organized jointly by the China Institute of Communications and the OpenAtom Open Source Foundation**, this sub-forum marked the **first academic conference in the field of information and communications dedicated to open source topics**. Scholars from **Central South University**, **Chongqing Jiaotong University**, **Zhejiang University**, **Tongji University**, **Huazhong University of Science and Technology**, **Fudan University**, **Wuhan University**, **Hubei University**, **Central China Normal University**, and **East China Normal University** presented specialized research papers. The conference received **20 submitted papers**, with **4 long papers and 3 short papers accepted** after rigorous selection. Among these, the paper **"OpenRank Dynamics: Influence Assessment and Dynamic Propagation Models for Open Source Ecosystems"** was awarded the **Best Paper Prize**. Academic presentations covered a wide range of topics, including **ecosystem-level research**, **software vulnerability detection technologies**, and **data-driven analysis of the evolutionary patterns and collaboration models in open-source academic achievements**.

## 7. Open Source Policies

### 7.1 China Domestic Policies

* **Open source policies at the national ministry level**
    2024 China's state ministries and commissions have introduced a series of policies in promoting the development of open source technology, aiming to build an open source ecosystem and promote technological innovation and industrial upgrading.
    * Ministry of Industry and Information Technology and other seven departments: *Implementation Opinions on Promoting the Innovative Development of Future Industries*
        * Key tasks: building iconic products, optimizing information service products, developing next-generation operating systems, promoting open-source technologies, building open-source communities, and constructing an open-source ecosystem.
        * Participating departments: Ministry of Industry and Information Technology, Ministry of Education, Ministry of Science and Technology, Ministry of Transportation, Ministry of Culture and Tourism, State-owned Assets Supervision and Administration Commission of the State Council, Chinese Academy of Sciences.
    * Four Departments Release *Guidelines for the Construction of a Comprehensive Standardization System for the National Artificial Intelligence Industry (Version 2024)*
        * Main content: Promote the construction of an open-source basic framework for AI software, and promote the evaluation of the energy efficiency of AI systems, as well as standards related to the utilization of resources, carbon emissions, and the disposal of discarded parts.
        * Participating departments: Ministry of Industry and Information Technology (MIIT), Office of the Central Committee for Cybersecurity and Informatization, National Development and Reform Commission (NDRC), and National Standardization Administration Commission (NSAC).
    * The four departments issued the *pecial Action Program for Digital Empowerment of Small and Medium-sized Enterprises (2025-2027)* of a notice to support the establishment of an AI open source community
        * Main content: Promote AI innovation and empowerment, support open source communities such as the Open Atom Open Source Foundation and other open source communities to lead the establishment of AI open source communities, focus on the special needs of small and medium-sized enterprises (SMEs) to set up thematic AI open source projects, and provide replicable and easy-to-propagate training frameworks, development examples, testing tools and open source code. Guide small and medium-sized enterprises to actively participate in open source projects to lower the threshold of AI deployment and development. Encourage leading enterprises, trading organizations, platform enterprises, data service enterprises and other business entities to build public datasets and industry datasets to provide SMEs with high-quality data for AI model training. Build a batch of vertical industry large models applicable to SMEs, and strengthen the supply of large model technology products for SMEs.
        * Participating departments: Ministry of Industry and Information Technology, Ministry of Finance, People's Bank of China, General Administration of Financial Supervision
    * Speech by Mr. Xie Yuansheng, Director General of Radio Administration Bureau, Ministry of Industry and Information Technology (MIIT)
        * Main content: Brain-computer interface is listed as one of the top ten iconic products of the future industry that the state will focus on supporting, and it is planned to build an open source community for brain-computer interface.
    * MIIT's Instructions on 5G Network Evolution and Upgrade
        * Main content: to strengthen the exchange and cooperation with international open source organizations, to jointly build high-quality open source projects and land open source results.

* **Open source policies at the local level**
   2024, local governments at all levels have also actively responded to the national call and introduced a series of local open source policies to promote the development of local open source ecology. Among them, the most notable one has to be Beijing!
    * Beijing
        * Beijing Chaoyang District *Government Work Report 2024*: “Open Source and Open AI Ecology”.
        * *Beijing Action Plan for Accelerating the Construction of a Highland for Innovation and Development of the Information and Software Industry*: Encourage enterprises, public institutions, social agencies and experts to participate in global open source organizations, attract internationally renowned open source activities and conferences to be held in Beijing, and cultivate professional domestic open source community operation teams.
        * *Beijing Action Plan to Promote “Artificial Intelligence Plus” (2024-2025)*: Encouraging open-source communities and open-source big models.
        * *Action Plan for Panoramic Empowerment of Artificial Intelligence in Zhongguancun Science City (2024-2026)* : Build an international application open source platform, and jointly build, develop and operate an AI application open source platform with head enterprises.
    * Guangdong
        * *Major Work Plan of Guangdong Provincial Department of Industry and Information Technology in 2024* : Accelerating the Construction of Open Source Hongmeng Industrial Ecology.
        * *Several Measures of Guangdong Province on Artificial Intelligence Empowering Thousands of Industries* : building a large model open source community.
        * *Shenzhen Action Plan for Supporting the Development of Open Source Hongmeng Native Applications in 2024* : By the end of 2024, the number of Hongmeng native applications developed by Shenzhen enterprises will account for more than 10% of the national total.
        * *Notice of Shenzhen Bureau of Industry and Information Technology on the Release of Application Guidelines Related to Major Open Source Projects under the 2024 High-Quality Development Project for Software Industry* : Supporting projects for promoting the application of commercial distribution software and procurement of chip modules for major open source projects.
        * Shenzhen has released a number of measures to boost the construction of AI pioneer cities, support the construction of full-stack open source system, and reward open source AI software: it will set up a 10 billion yuan AI and body robotics industry fund, and promote the construction of a 100 billion yuan fund investment ecosystem with the synergistic force of “guide fund + angel fund + seed fund + cluster fund”, and give the maximum amount of money to the startups of overseas talents. The ecological system will be promoted to build a 100 billion fund investment synergistically, and a maximum of 1 million yuan will be granted to the business start-up of overseas students.
    * Shanghai
        * *Shanghai has introduced 117 measures in 8 areas to implement and promote the high-level systematic opening up of the Pilot Free Trade Zone* : to build an international open source promotion organization, to increase the scope and intensity of public data opening up, and to strengthen international cooperation on digital inclusion.
        * *Several Measures on Promoting Industrial Services to Enable Industrial Upgrading* : supporting the construction of public service platforms for R&D and design, testing and evaluation, adaptation and verification, open source services, and common technology research and development in key areas of software, meta-universe, and the communications industry.
    * Chongqing
        * *Chongqing Special Action Plan for 2024 for the In-depth Implementation of the Software and Information Service Industry “Full Star” Action Plan* : accelerate the construction of open source software code hosting platforms, encourage leading enterprises to form project-based open source communities, and vigorously cultivate open source commercialized software enterprises.
        * *Several Policy Measures for Supporting the Innovative Development of Robotics Industry with Body Intelligence in Chongqing* : Promote the construction of open source ecology, and guide relevant enterprises to jointly build open source communities with relevant scientific research units and industry organizations in the way of “unveiling the list of commanders”.
    * Zhejiang
        * *Guiding Opinions of the General Office of the People's Government of Zhejiang Province on Accelerating the Development of the Artificial Intelligence Industry* : promoting the construction of autonomous and controllable open source communities and open innovation platforms in the field of large models of artificial intelligence, and supporting the research and development of autonomous open source deep learning frameworks and the construction of code hosting mirror platforms.
        * *Opinions on Special Policies for Promoting High-quality Development of Software Industry in Ningbo* : Encourage software enterprises to focus on basic software, industrial software (embedded software), and release independent technology open source projects in the field of emerging technology software.
    * Chengdu
        * *Chengdu High-tech Industrial Development Zone to accelerate the high-quality development of key areas of the digital economy industry Several Policies* : support the construction of open source open platform (community), selecting a number of open source open demonstration platform (community).
    * Wuhan
        * *Wuhan Several Policies and Measures on Further Promoting the High-quality Development of Software and Information Technology Service Industry* : increasing support for open source projects, encouraging enterprises or related organizations to participate in open source innovation, and fostering and incubating high-quality open source projects.
    * Xi'an
        * Xi'an Municipality has issued 9 policy documents in 3 major aspects: support the construction of open source chip adaptation centers and industrial innovation centers.

* **Summary**
    The main features of China's open source policy in 2024 can be summarized as follows:
    * National and local synergistic promotion to build an open source ecosystem
        - National level: several ministries and commissions have jointly issued policies, showing the importance the state attaches to open source technology.
        - Local level: various provinces and cities (such as Beijing, Shanghai, Guangdong, Shenzhen, etc.) have actively responded to the national policy and launched targeted open source support measures in combination with local industrial characteristics, forming a synergistic promotion mode of “national guidance and local implementation”.
        - The policy emphasizes the integrity of the open source ecosystem, including the construction of open source communities, open source platforms and the promotion of open source commercialization, and encourages enterprises, universities, research institutions and other parties to participate in the construction of the open source ecosystem and the formation of a good open source atmosphere.
    * Focus on artificial intelligence and future industries, and promote the application of open source technology to the ground
        - The core areas of open source policy focus on future industries such as artificial intelligence, big models, operating systems and brain-computer interfaces.
        - Promote the application of open source technology in the fields of automatic driving, robotics, pharmaceutical research and development, and industrial manufacturing.
        - Support the development of open-source Hongmeng native applications and promote the construction of open-source chip adaptation centers.
    * Focus on autonomous and controllable
        - The policy emphasizes the development of autonomous open-source technologies and supports the research and development of core technologies such as autonomous open-source deep learning frameworks and operating systems.
    * Strong financial and policy support
        - Beijing provides subsidies of up to 5 million yuan for the construction of open source communities.
        - Shenzhen provides financial support of up to 20 million yuan for major open source projects.
        - Wuhan City gives 300,000 to 1 million yuan reward for excellent open source projects.
    * Regional synergy and characteristic development
        - Shenzhen focuses on open source Hongmeng ecology, to build Hongmeng native application characteristics of industrial parks.
        - Beijing builds Zhongguancun open source platform and promotes the development of AI open source community.
        - Six cities in central China (Wuhan, Zhengzhou, Taiyuan, etc.) jointly promote open source sharing mechanism to facilitate regional synergistic development.
    * Emphasis on standardization and normalization
        - The policy emphasizes standardization in the open source field and promotes open source technology to be in line with international rules.

### 7.2 International Policies

* **Related U.S. Policies**
    2024, the United States has taken a series of major initiatives in the field of artificial intelligence, reflecting the great importance and cautious attitude toward the development of AI technology. On the one hand, through legislative and judicial means, it has strengthened export control and security regulation of AI technology to guard against potential national security and social risks (some of the more radical policies are fortunately stillborn); on the other hand, it has actively promoted independent research and development of AI technology in an attempt to maintain a leading position in global competition. At the same time, the U.S. government's antitrust investigations and rulings on tech giants show the U.S. government's determination to maintain fair competition in the market. These measures will have a far-reaching impact on the global technology industry landscape, and deserve continued attention.
    * U.S. House of Representatives Passes National Framework for Strengthening Overseas Critical Export Restrictions Act (ENFORCE Act): On May 22, 2024, the U.S. House of Representatives Foreign Affairs Committee overwhelmingly passed the bill, which seeks to tighten export controls on technologies such as AI models, particularly for countries such as China. 
    * California Governor Vetoes AI Safety Bill SB-1047: In September 2024, California Governor Gavin Newsom vetoed SB-1047, a bill sponsored by Senator Scott Wiener. The bill aimed to set safety standards for large-scale AI models, but Newsom argued that it could place too heavy a burden on AI companies and undermine California's dominance in the field. 
    * U.S. court orders Google to overhaul its Android app business: In October 2024, U.S. Federal Judge James Donato ruled that Google may not restrict competition for the next three years by requiring it to open up its Android app store to allow users to download apps from other platforms and use other in-app payment methods. The move is aimed at breaking Google's monopoly in the Android app market.
    * U.S. Department of Justice Recommends Breaking Up Google's Chrome Business: In November 2024, the U.S. Department of Justice recommended that a federal court require Google to sell its Chrome browser and prohibit it from re-entering the browser market for five years. The move is aimed at preventing Google from using its browser dominance to consolidate its monopoly in the search engine market.
    * U.S. Launches AI “Manhattan Project”: In November 2024, the U.S.-China Economic and Security Review Commission (USCC) under the U.S. Congress released its annual report, recommending that the U.S. government take reference from the Manhattan Project during World War II and launch a major special project on artificial intelligence, focusing on the nation's strengths and capabilities. The USCC recommended that the U.S. government launch a major program on artificial intelligence (AI) and focus the nation's efforts on accelerating the research and development of general-purpose AI (AGI) to cope with the increasing competition between the U.S. and China in science and technology.

* **Related European Policies**
    * Russian Government Considers Charging Local Businesses for Using Foreign Software: In May 2024, Russia's Minister of Digital Development, Maksut Shadayev, stated that the government is considering imposing a fee on domestic businesses that use foreign software in order to reduce dependence on foreign technology and promote the development of domestic technology. 
    * Germany's highest civil court rules invention by AI system DABUS patentable: In July 2024, Germany's Federal Court of Justice ruled that a lunchbox designed by the AI system DABUS can be patented, provided a human is listed as the inventor and the application clearly states that the product was conceived by an artificial intelligence. 
    * Germany's Federal Ministry of Justice Issues Draft Computer Criminal Code to Protect IT Security Researchers: 2024 In November, Germany's Federal Ministry of Justice issued a draft computer criminal code that aims to make clear that certain actions by IT security researchers will not be penalized by the computer criminal code, in order to encourage them to detect and remediate IT security vulnerabilities.
    * Switzerland Passes EMBAG Bill Requiring Public Agencies to Open Source Their Software: In July 2024, Switzerland passed the Federal Act on the Use of Electronic Means for the Fulfillment of Governmental Tasks (EMBAG), which requires all public agencies to disclose the source code of software developed by or for them, unless third-party rights or security concerns are involved.
    * Apache Software Foundation Expresses Concerns About Upcoming EU Software Regulations: Over the past two years, the Apache Software Foundation (ASF) and other open source organizations have expressed concerns about the upcoming Cyber Resilience Act (CRA) in the European Union (EU), particularly with respect to software distributed and sold over the Web. Policymakers have introduced a new concept of “open source stewardship,” creating a new category of economic actor for the software industry. the CRA bill has been extended for one year, until full implementation begins in 2027.

* **Related Policies in Asia**
    * In June 2024, the Japanese government proposed three major enhancement policies in the Comprehensive Innovation Strategy 2024, one of which is “Competitiveness Enhancement and Security-Peace of Mind Ensuring in the Field of AI”. The strategy aims to promote the development and application of AI technology through cooperation with a global perspective, while focusing on the safety and social acceptance of AI systems. On the other hand, Japan's copyright law allows the widespread use of copyrighted images and other materials for commercial purposes to train AI models without seeking permission. This has caused alarm and criticism from many creators.
    * In December 2024, Malaysia announced the establishment of the National Artificial Intelligence Office (NAIO), which aims to focus on policy development and regulatory issues in this way, and to promote AI leadership in Malaysia and beyond, thereby establishing Malaysia as a regional hub for AI.
