---
title: 7.开源人工智能篇
tags: [2024 中国开源年度报告]

---

# 开源人工智能篇

编辑：刘天栋，概述修订及审核：庄表伟

## 一. 概述 @刘天栋 @庄表伟
 
2022 年底 ChapGPT 横空出世之后，2023 年堪称是人工智能发展最关键的一年，而在 2024 年，开源 AI 的井喷式爆发彻底改写了行业规则——从技术垄断到全民共创，从实验室创新到产业落地，一场由开源主导的 AI 范式革命已然到来。因此 2024 年中国开源年度报告的大事记篇决定将《开源人工智能篇》单列出来，以更为全面的方式，向读者呈现。

2024 年 7 月 27 日，Meta 首席执行官扎克伯格发表了【人工智能即将迎来开源的拐点】的重磅文章。他强调了开源 AI 发展对整个行业的巨大影响，表示随着 AI 技术的进步和社区合作的增强，开源将成为推动创新和普及 AI 的关键。文章里的几个要点，很好地总结了开源人工智能的现状与发展趋势：

- **开源 AI 的崛起** 越来越多的公司和研究机构开始发布开源的 AI 模型和工具，这种趋势正改变着行业竞争格局。开源推动了技术民主化，使更多开发者和企业能够利用顶尖的 AI 技术。
- **商业与技术的平衡** 企业通过开源 AI 吸引开发者生态系统，同时将闭源技术与开源技术相结合，构建独特的商业优势。这种双轨策略使企业既能从开源中获益，又能保持核心技术的竞争力。 
- **社区与协作的重要性** 开源 AI 成功的关键在于活跃的开发者社区和协作文化。这些社区为模型改进、问题修复以及新功能开发提供了强大支持，显著加速了 AI 技术的创新速度。
- **伦理与透明性** 开源 AI 为 AI 技术的透明性和问责制提供了新的可能。开源代码使得模型的训练和决策过程更加清晰，帮助应对偏见和伦理问题。 
- **未来的挑战** 尽管开源 AI 充满潜力，但仍面临一系列挑战，包括版权保护、数据隐私、安全漏洞以及商业可持续性。行业需要找到应对这些问题的解决方案，才能充分释放开源 AI 的潜力。

正如扎克伯格所断言的 “开源是 AI 未来的方向”，2024 年，Llama、Mistral 等开源模型以惊人的速度逼近甚至超越闭源标杆，DeepSeek、通义千问、智谱等中国团队以 “开源彻底性” 和 “成本革命” 撼动全球格局，HuggingFace、GitHub 等平台汇聚数十万开发者，让协作与共享成为技术民主化的基石。开源，不仅是代码的开放，更是一种技术信仰的重构——它让创新从实验室走向街头巷尾，从巨头垄断转向全民共创。

但是，技术的狂飙突进也带来前所未有的挑战。性能趋同的背后，是基准测试的失效与数据污染的隐忧；开源模型的低成本与高可用性，掀起了全球 AI 价格战的腥风血雨；英伟达的芯片霸权与欧盟的严苛监管，折射出技术与权力的复杂纠葛；合成数据的滥用、深度伪造的泛滥，则让伦理与安全的警钟长鸣。我们不禁要问：当 AI 的能力逼近人类，我们是否做好了与之共存的准备？

为了优化读者体验，本章编者没有采用传统的新闻条列方式，而是综合了多份国内外报告及长文的内容，融合全球视野与本土洞察，从技术突破、商业激战、政策博弈到伦理反思，层层剖析这个时代的矛盾与希望。您将会看到：

* **开源如何打破技术垄断**，让 Llama 3 与 GPT-4o 在性能榜单上短兵相接；
* **轻量化与多模态**为何成为 AI 落地的关键密码；
* **具身智能与 AI Agent**怎样重新定义人机协作的边界；
* **中国开源 AI 力量**如何利用价格战与彻底开源“突出重围”。

站在 2025 年的门前，AI 技术正处于开源拐点，未来的行业领导者将是那些能够在开源与商业化之间找到最佳平衡的企业。通过拥抱开源，AI 技术有望更快地扩展应用场景，同时推动整个行业走向更开放和包容的未来。我们或许比任何时候都更需要清醒：开源 AI 的星辰大海，不应是少数巨头的修罗场，而应是所有人共建共享的智慧共同体。

愿这份报告成为一盏灯，点亮技术洪流中的理性与温度。

## 二. 2024 全球开源 AI 现状与发展

### **2.1 2024 开源 AI 全景**

对于 AI 技术栈有各种不同的分类，并无行业标准，本篇则采用一些报告的分类方式供读者参考。
* 基础模型
* 模型部署及推理
* 开发工具
* 模型训练及微调
* 监控及可观测性

下图只取了截至 2024 年第二季度为止，全球范围内部分产品：

![image](/image/ossAI/HJHilcAD1l.png)

> <center> https://synaptic.com/resources/open-source-ai-2024 </center>

### **2.2 2024 人工智能时间线**

- **开源模型 - 55 个**
![image](/image/ossAI/S16M_0J_yl.png)

- **纯 API 模型 - 63 个**
![image](/image/ossAI/HJ1Ed0ku1x.png)


    > <center> https://huggingface.co/spaces/reach-vb/2024-ai-timeline </center>

## 三. 2024 人工智能全景报告

### 3.1. 研究 人工智能的技术突破及其能力

- **性能趋同**
    OpenAI 的早期领先优势正在缩小，Claude（Anthropic 公司的 AI 助手）和 Gemini（谷歌的 AI 模型）等模型正在迎头赶上。 ”在这一年的大部分时间里，基准测试和社区排行榜都指向 GPT-4 与其他最佳模型之间存在显著差距。然而，Claude 3.5 Sonnet、Gemini 1.5 和 Grok 2（特斯拉的 AI 模型）已经几乎消除了这一差距，模型性能现在开始趋同”。


    ![Foundational Model Performance (Lmsys Leaderboard)](/image/ossAI/ryScvbZukl.png)
    > <center> Foundational Model Performance (Lmsys Leaderboard) - Hugging Face </center>

- **开源模型的崛起**
    Meta 的 Llama 系列已显著缩小了与专有模型的性能差距。 ”这标志着开源模型首次缩小了与闭源前沿模型的差距”。如 Mistral、Vicuna、Yi 等，在某些方面已经赶超封闭模型。 例如，Mixtral 8x7B 在 Elo 和 MMLU 测评中的得分超越了 GPT-3.5。

    ![Foundational Model Performance (Open-LLM-Leaderboard)](/image/ossAI/SJiIqbW_1e.png)

    > <center> Foundational Model Performance (Open-LLM-Leaderboard)-Hugging Face </center>

- **开源托管平台助攻**

    GitHub 和 Hugging Face 等平台推出了许多具有突破性的研究和开发项目，取得显著成果。

    - 2023年，GitHub上的贡献者数量增加了 148%，生成式 AI 项目增长了 248%；Hugging Face 平台上托管的模型超过 40 万。
    - 2024 年上半年热门开源项目： 
        - Huggingface、MindsDB 和 Roboflow 是 GitHub 上最受欢迎的项目。
        - AutoGPT 和 ModularML 的 Mojo 在 2023 年引领 GitHub 热度。
        - LeRobot：提供面向现实世界机器人应用的模型、数据集和工具，致力于让机器人技术更容易访问和使用）
        - MindsDB：由 NVIDIA 支持的平台，专注于帮助企业利用数据构建 AI 模型，简化数据源与 AI/ML 工具的连接，为企业带来高效解决方案）等新兴项目在 2024 年迅速获得关注。 

        ![Open Source AI Github Tracction](/image/ossAI/HJ_TzzWO1g.jpg)

        ![Open Source AI Foundation Models Hugging Face Traction](/image/ossAI/HkwoXGbd1g.png)

- **模型基准测试的挑战**

    大模型（LLM）的基准测试就像人工智能界的 “标准化考试”，通过统一的问题和标准，帮助我们公平地比较不同模型的表现。 早期的测试内容相对简单，比如句子补全这样的任务。但随着大模型从 “文字接龙选手” 成长为 “编程高手” 和 “对话专家”，测试内容也越来越难。现在的基准不光评估模型的逻辑能力，还要看它的安全性、专业领域知识等多方面的表现。就像升级版考试，更全面地考察模型的 “实力”。

   - **更好地选择模型**：基准可让您根据实际性能指标选择模型。想要一个出色的编码助手？看看它在 HumanEval 上的表现如何。需要安全性或事实准确性？看看 TruthfulQA 或 SafetyBench。
    - **进度跟踪**：研究人员利用基准来了解变化（如微调或更新提示）是否真正提高了性能，或者只是增加了炒作。
    - **标准化**：有了公平的竞争环境，任何人都可以核实厂商的声明。 如果一个新的 LLM 声称自己拥有世界一流的数学推理能力，你可以检查它是否通过了 GSM8K 或 MATH 考试。

    基准测试其实就是一套专门设计的 “考试题”，可能是选择题、编程问题或者对话任务，每道题都有明确的正确答案或评分标准。我们把大模型 “拉进考场”，让它回答这些问题，然后根据答对多少（或者其他表现指标）来打分，再和排行榜上的其他模型做对比。高分代表模型的强项，而低分则告诉我们还有哪些地方需要加强。就像给 AI 开了一个全面的成绩单！
    - 有些基准会随着时间的推移而变得 "简单"，因为模型会变得越来越好，从而失去预测价值。
    - 基准很少能模拟混乱的真实世界条件。 对于业务用例，定制测试比完全依赖公共排行榜更好。
    - 数据可能泄露--如果模型是在测试集上训练的，结果可能会被夸大。数据集污染和基准测试中的错误正在影响进展评估并引发安全担忧。”研究人员越来越多地关注数据集污染问题”。”一些最流行的基准测试中存在惊人的高错误率，这可能导致我们低估了某些模型的能力，并带来安全隐患。

    **评价指标**
    ![image](/image/ossAI/HJGAKR1OJl.png)
    > <center> https://x.com/i2ichardlin/status/1869125541212700797 </center>

- **关注推理计算**
    OpenAI 的 o1 模型展示了将计算转移到推理层以解决复杂问题的潜力，但同时使用成本也显著增加。

- **多模态和新架构**
    多模态模型正在获得发展动力，同时研究人员正在探索 Transformer 的替代方案（当然目前Transformer 仍是绝对主流）和混合架构，以提高效率并解决特定任务。

- **合成数据**
    合成数据的使用面正在扩大，但反方强调的模型崩塌担忧仍然存在。

- **“轻量化”引领 AI 新趋势**
    近年来，随着 AI 模型的规模不断扩大，计算成本也随之水涨船高。为了应对这些挑战，研究的重点开始转向如何提升效率并实现端侧部署。比如，许多新技术正在致力于压缩模型体积和降低计算需求，同时尽可能保持性能稳定。这种优化对于在移动设备和资源受限的场景中推广 AI 应用显得尤为重要：

    1. **模型压缩**：减小模型大小的技术； 
    2. **知识蒸馏**：将大型模型的 ”知识” 转移到更小模型的方法；
    3. **量化**：降低模型数值精度以减少存储和计算需求。

- **特定科学领域的进展**
    AI 在多个科学领域都带来了令人惊叹的进展，比如预测蛋白质结构、发现新药、基因编辑、材料研发以及机器人和医学领域的创新，甚至还能在医疗影像中生成合成数据。这些突破展示了 AI 的广泛应用潜力，为跨学科研究和创新注入了活力。最近诺贝尔物理学和化学奖的颁布，就是 AI 助力科学发展的最佳例子！

    ![image](/image/ossAI/H1ubqiRwke.png)
    > <center> 2024 诺贝尔物理奖得主 </center>

- **规划和推理限制**
    大语言模型在处理规划和模拟任务时还会 “卡壳”，这反映了它在泛化能力和现实世界推理上的一些局限性。不过，最新的研究正在通过一些聪明的方法来提升它的推理能力，比如 “链式思考提示”（让模型一步步推导答案）、强化学习（让模型在试错中变聪明）以及开放性探索（扩展它的适应能力）。这些方向都在努力让模型变得更聪明、更靠谱！

- **中国 AI 模型公司日拱一卒，砥砺前行**

    尽管受到制裁，中国 (V) LLM 仍在排行榜上名列前茅。

    <!-- <center>**OpenAI o1 Racing**</center> -->

    ![image](/image/ossAI/HJsf0Cedkl.png)

    > <center> https://wx4.sinaimg.cn/mw690/8c803935ly1hxtqbzoxnhj21jk2bch8n.jpg </center>

    - 阿里巴巴最近发布了 **Qwen-2** 系列，其视觉能力给社区留下了特别深刻的印象，从具有挑战性的 OCR 任务到分析复杂艺术作品的能力，不一而足。

    - 在小型项目方面，
        - 清华大学 NLP 实验室资助了 **OpenBMB** 项目，该项目催生了 **MiniCPM** 项目。这些模型参数小于 2.5B，可在设备上运行。他们的 28B 视觉模型在某些指标上仅略微落后于 GPT-4V，而基于 Llama 3 的 85B 模型在某些指标上超过了 GPT-4V。
        - 清华大学的知识工程小组也创建了能力最强的文本到视频模型之一的 **CogVideoX**。

    - 2025 年 1 月 20 日，国内两家备受关注的人工智能大模型创业公司 **深度求索（DeepSeek）** 和 **月之暗面（Kimi）** 几乎在同一时间发布了最新模型：**DeepSeek-R1** 推理模型和 **Kimi k1.5** 多模态思考模型 ，二者都在性能测试中超过 OpenAI 的 o1 正式版模型。同时，比起国外竞争的开源模型，中国的开源更加彻底，因此在全球赢得拥趸。

    - **深度求索（DeepSeek）**
        - **DeepSeek-V3** 在非顶尖硬件配置基础上，用远低于国际科技巨头成本，通过结构创新开发出了一个性能叫板 GPT-4o 便宜且好用的 AI 大模型，而且还是开源的！
        - **DeepSeek-V3** 多项评测成绩超越了 Qwen2.5-72B 和 Llama-3.1-405B 等其他开源模型，并在性能上和世界顶尖的闭源模型 GPT-4o 以及 Claude-3.5-Sonnet 不分伯仲。虽然目前开源的版本尚不支持多模态输入输出，但是值得期待。
        ![image](/image/ossAI/SJcQq8kOkg.png)
        - 更令人惊艳的是，**DeepSeek-V3** 整个训练仅花费 557.6 万美元，这比 OpenAI、Meta 等用于预训练大型语言模型动辄数亿美元的成本要低得多。
            ![image](/image/ossAI/SkfPqL1dJl.png)
        - 2025 年 1 月 20 日发布 **DeepSeek-R1** 推理模型，在多个基准测试中表现出色，尤其是在数学和程序开发领域，部分性能已达到与 OpenAI 的 o1 模型相当的水平。其特别之处在于采用了强化学习（Reinforcement Learning）作为核心训练方法，突破了传统对大规模标注数据的依赖。通过这种方式，**DeepSeek-R1** 展现了强大的推理能力，包括关联思考和自我验证等特性。
        - 以开源、便宜 20 倍的 “身价” 与 ChatGPT-4o（2024.11.20）并列
        ![image](/image/ossAI/SkOUTMMOke.png)
        - 在复杂提示词/风格控制榜单上，**DeepSeek-R1** 位列第一
        ![DeepSeek R1 Chatbot Arena - Hard Prompts w. Style Control](/image/ossAI/H1r5ofMuyl.jpg)
        - 目前结果来看，**DeepSeek-R1** 在各个维度上都保持领先。
        ![DeepSeek R1 Overall Comparison](/image/ossAI/rJovoMGd1g.jpg)


        - 在衡量模型编程开发能力的 WebDev 分榜上，**DeepSeek-R1** 位列第二，与闭源的 Claude 3.5 Sonnet 相差不到 40 分。

        ![DeepSeek R1 WebDev Leaderboard](/image/ossAI/S1Cx2zzuJg.jpg)


    - 月之暗面在蛇年春节前推出了 **Kimi k1.5** 多模态思考模型，轰动武林，惊动万教。 **Kimi k1.5** 在短链推理和多模态处理方面展现出色，而 OpenAI o1 则在长链推理和广泛应用场景中保持强劲表现。两者各有千秋，适用于不同的应用需求。
<br>

| 特性             | Kimi k1.5                        | OpenAI o1                  |
| ---------------- | -------------------------------- | -------------------------- |
| **多模态能力**   | 支持文本与视觉联合推理           | 主要集中于文本处理         |
| **短链推理表现** | 超越 GPT-4o 和 Claude 3.5 Sonnet | 表现优秀，但不及 Kimi k1.5 |
| **长链推理表现** | 达到 o1 满血版水平               | 在长链推理上有显著优势     |
| **上下文窗口**   | 128K                             | <=128K                     |
| **强化学习应用** | 应用广泛，提升自主探索能力       | 有，但未超过 Kimi k1.5 |

> <center> Kimi k1.5 vs. OpenAI o1 </center>

### 3.2 行业 人工智能的商业应用领域及其商业影响

- **企业用户的偏好**
    41% 的企业用户 更倾向于使用开源 AI，因为，开源 AI 具备更高的成本效益、更大的创新空间以及更少的法律约束。
- **英伟达的主导地位**
    英伟达依然是AI芯片市场的绝对霸主——它的GPU在研究论文和大规模部署中几乎无处不在。凭借快速的产品更新和先进的GPU互连技术，英伟达的地位更加稳固。甚至连英伟达的老板黄仁勋都大胆建议，“每个政府都应该有自己的大语言模型来保护国家资产。”

    不过，这种对英伟达的高度依赖也引发了一些担忧。于是，一些科技巨头，比如 Google、Meta 和 OpenAI，开始积极探索替代硬件方案，希望找到更多的选择来摆脱单一供应商的限制。
    * 竞争对手：AMD 和英特尔等老牌竞争对手虽然在努力追赶，但显著落后于英伟达。
    * 有少数 AI 芯片初创公司开始获得了一定势头，例如 Cerebras 和 Groq。与主导训练硬件市场的英伟达不同，这些初创公司主要侧重于提供推理接口和云服务，通过提供比英伟达更快、更具成本效益的解决方案来实现差异化。

- **大型实验室的人才流向**
    像 OpenAI 和 DeepMind 这样的顶级 AI 实验室，最近出现了人才流失的情况，这让一些资金充足的新公司迅速崛起，比如 Sakana AI 和 H Company。这些新挑战者由知名研究人员带领，专注于特定的 AI 领域或创新架构，展现了 AI 生态系统的多样化和深入发展。

    不过，从研究转型到创业并不总是一路顺风。一些备受瞩目的项目在实际运作中已经遇到了不少挑战，说明技术突破和商业落地之间还有不少路要走。

- **垂直领域的渗透**
    AI 正在各行各业大展拳脚！就连一直 “保守” 的法律行业，法律科技也终于开始规模化应用了。在编程领域，像 GitHub Copilot 这样的 AI 开发工具成了很多程序员的好帮手。自动驾驶方面，Wayve 和 Waymo 稳步推进，而 Cruise 最近遇到了一些麻烦。 

    在医疗领域，AI 的表现也很亮眼：基于 mRNA 的个性化癌症疗法展现出巨大潜力，同时，AI 驱动的药物研发公司正不断整合资源，快速发展，给医疗行业注入更多创新动力！

- **新兴技术与应用**
    一些新兴的 AI 领域正在快速崛起，充满了机会和挑战。比如，人形机器人公司吸引了大量投资，但要真正落地，还得跨越技术和市场的难关。 

    同时，语音到语音的 AI 技术取得了突破，已经可以实现接近人类水平的对话，这让人们对语音交互的未来充满期待。而在视频生成领域，多个玩家正在竞争，努力提升技术质量和规模化应用。 

    不过，也有些 AI 驱动的消费产品，比如 Rabbit R1 和 Humane AI pin，并没有达到大家的期待。这也说明，从炫酷的技术到实用的产品，这中间还有不少难题需要解决。

- **伦理与法律挑战**
    随着 AI 技术的广泛应用，版权和法律问题也越来越引人关注。模型开发者常常被内容创作者和媒体公司质疑他们是否合法使用了数据，但目前法院对 AI 训练中的“合理使用”还没有明确的说法。

    另外，一种叫 “伪收购” 的新现象也开始引发讨论。这种做法是大型科技公司只雇佣 AI 初创公司的核心团队，而不是完全收购整个公司。这种操作已经引起了监管机构的注意，未来可能会有更多相关的规则出台。

- **AI 经济学**
    越来越多的企业开始使用 “AI 优先” 的产品，这些产品的用户黏性非常强，而且 AI 公司的收入增长速度远远超过传统的 SaaS 公司。不过，很多 AI 公司还在摸索如何找到一个真正可持续的盈利模式。 

    与此同时，一些新兴的创新领域正在快速崛起，充满了活力和机会：

    - **AI 视频的后 Sora 时代**
        AI 视频领域在 Sora 之后进入了一个快速发展的阶段，分为闭源模型和开源模型两条主线： 
        - **闭源模型：** 包括诸如 Runway、LUMA AI、字节跳动和快手等技术公司推出的系列模型（如 Gen-3、D.M、Kling 等），逐步迭代到了更高版本（如 D.M 1.6 和 Kling 1.5）。这些模型在功能和精度上不断提升，为视频生成提供更强大的支持。
        - **开源模型：** 以 Open-Sora 系列为主线，搭配新兴项目（如 EasyAnimate 和 CogVideo-X 系列），推动了开源社区的发展，为开发者提供更多的开放性工具和协作机会。 

        下图展示了 2024 年中至年底 AI 视频技术的关键节点和版本迭代的轨迹，表明了开源与闭源并行推进的趋势，以及技术落地和应用的逐步成熟。

        ![image](/image/ossAI/SyLtBGWdkg.png)
        > https://ailab-cvc.github.io/VideoGen-Eval/

    - **AI 编程**
        从下图可知，AI 编程已经逐渐成为主流。知名的 AI 编程工具：在国际上有 Cusor 和 Devin，国内则有字节豆包 MarsCode、阿里通义灵码、百度文心快码等。

        ![image](/image/ossAI/r1G1QQbOJg.png)

    - **AI 搜索**
        以 Perplexity 为首的新创公司，利用 AI 来为搜索精准地总结，免除了用户搜索后被数百条链接淹没，在短时间内吸引了全球大量用户，其估值高达 90 亿美元。Google、Bing、ChatGPT 4o 也在 AI 搜索领域发力，未来竞争的精彩程度可期。

    - **AI 消费级硬件**
        然而，一些 AI 驱动的消费设备，如 Meta 和 Rayban 合作的智能眼镜，初步获得了市场的关注与欢迎；国内则有闪极 AI 眼镜于 2024年底推出，标志着国内智能穿戴设备市场的一个重要进展，其多功能性和便捷性使其在市场中具有竞争力。

        当然，也有一些设备，如 Rabbit R1 和 Humane AI pin 未能达到预期，反映了将 AI 技术转化为实用产品的难度。

    - **AI 具身智能(Embodied AI) 与 AI 代理（AI Agent）** 会在后面章节展开。

- **投资热潮**

    **2024 年 AI 投资热潮持续**，总投资额接近 1,000 亿美元。值得注意的是出现了明显的 ”GPT-4 前后时代” 分水岭，2.5 亿美元以上的大额融资占据主导。AI 公司总价值飙升至接近 9 万亿美元，主要由少数上市公司推动。

    然而，IPO 市场仍然停滞，并购活动也在下降，反映了监管压力和市场不确定性。

    **开源 AI 领域的资本流动速度显著加快**，尤其是大额融资交易成为了主流。在过去两年里，这个领域已经完成了超过 60 笔交易，总金额超过 130 亿美元。值得注意的是，其中有 45% 的交易是 A 轮及以上阶段的融资，这说明投资者正越来越关注那些已经进入增长阶段的项目，看好它们的潜力和发展前景。

    **开源 AI 初创公司吸引了大量资本投资**
    * Scale AI 完成 10 亿美元 F 轮融资 
    * Mistral AI 完成 6.4 亿美元 B 轮融资
    * Together AI: 1.06 亿美元的 A 轮融资
    * Supabase 和 AutoGPT 也被认为具有进一步吸引投资的潜力。

    **YC 投资新创统计** (约 250+ 家)
    Y Combinator（简称 YC）是美国非常有名的创业孵化器，自 2005 年成立以来，一直被称为 “顶尖创业公司的摇篮”。YC 每年会举办两期创业营：冬季营（1-3 月）和夏季营（6-8 月），为参与的初创公司提供初始投资和资源支持。 

    YC 的创业营以最后的路演日（Demo Day）达到高潮。路演日上，所有团队都会向投资人展示从零到一的成果，同时还能快速与众多投资机构建立联系。可以说，这是创业公司争取投资和曝光的关键时刻。 
    
    2024 年夏季（S24）创业营的所有 AI 项目，充分体现了硅谷 AI 创业的热潮正持续升温！

    ![image](/image/ossAI/HJ5HYGWukx.png)

    > https://www.ycombinator.com/companies?batch=S24；
 
- **收购大增**
    - Nvidia 以 3 亿美元 收购 Deci AI
    - 其它收购：
    ![image](/image/ossAI/r13iF7bO1e.png)
    <!-- <center> Source: Founder Park Research Center </center> -->
    <!-- **2024 AI Company Acquisition Statistics** -->
<!-- | **Report Date** | **Company** | **Valuation** | **Description** | **Acquisition News** |
|---------------|------------|-------------|---------------|----------------|
| **July 2024** | **Adept** | Over $1B | AI Agent | Acquired by Amazon, with talent and technology integrated into Amazon |
| **July 2024** | **Leonardo.Ai** | Not disclosed | AI platform for text-to-image generation | Acquired by Canva; will continue as an independent brand while integrating with Canva |
| **May 2024** | **Character.ai** | $1B | AI-powered chatbot | Recently sought partnerships with Meta and xAI |
| **May 2024** | **Humane** | $750M - $1B | AI consumer hardware provider | Considering a sale to Apple for approximately $1B |
| **May 2024** | **Reka AI** | $300M | Generalist AI model provider | Snowflake attempted to acquire Reka AI for over $1B, but the deal reportedly fell apart |
| **May 2024** | **Wonder Dynamics** | Not disclosed | AI tool for mainstream CG production | Acquired by design software company Autodesk |
| **May 2024** | **Stability AI** | $4B | Open-source AI platform for text-to-image generation | Has faced internal crises due to talent loss since last year |
| **March 2024** | **Inflection AI** | Over $4B | AI model and AI assistant development | Acquired by Microsoft, with the founder joining Microsoft |
| **February 2024** | **Writer** | $500M - $750M | Enterprise-grade AI writing assistant | Being pursued by three enterprises for acquisition |
| **February 2024** | **Perplexity** | $3B | AI search tool | Its management is in acquisition discussions with four companies | -->

- **AI 坟场**

    创业维艰，AI 尤难：著名的 AI Graveyard 快速地记录了大批的阵亡 AI 新创企业。但是，我们可以预期，未来仍会有大批的创业家及投资机构前仆后继地投入 AI 创新事业中。AI 创业家不死，他们只是陆续凋零！

    ![image](/image/ossAI/HkxgAQW_1x.png)
    > 来源：https://dang.ai/ai-graveyard

### 3.3 政策 人工智能的监管、经济影响和不断演变的人工智能地缘政治

- **美国 AI 监管动向**
    拜登政府发布了一项行政命令，对最先进的 AI 模型进行了一定的监管。具体来说，要求那些使用超过 1026 FLOPS 计算能力训练的模型，在公开上线前必须向联邦政府报告，并提交安全测试的结果。不过，这项命令是行政令性质，可以被后续政府轻松撤销，所以它的长期影响还不太确定。

    与此同时，各州开始推出自己的 AI 法规，其中加州的 SB 1047 法案最为全面但也最具争议，但是由于诸多硅谷大佬的强烈反对，最后，该法案被加州州长否决。

- **欧盟 AI 法案通过**
    经过长期讨论和游说，欧洲议会终于通过了《AI 法案》，成为全球第一个全面的 AI 监管框架。这项法案将分阶段实施，并对基础模型采取分级管理的方式。

    不过，美国的大型科技公司在适应欧盟的这些新规时遇到了一些困难。比如，Anthropic 的 AI 模型 Claude 一直到 2024 年 5 月才向欧洲用户开放，而 Meta 则暂时没有向欧洲市场提供多模态模型。这些例子表明，跨国科技公司在应对欧盟严格的 AI 监管时还需要更多调整和适应。

- **数据收集审查**
    随着模型开发者对数据的需求越来越大，用户数据的采集政策也引发了更多关注和审查。例如，Meta（Facebook）被要求为欧盟用户提供一个可以选择 “全球数据不参与” 的选项，而 X 公司（Twitter）则直接停止使用欧洲用户的公开帖子来训练 AI 模型。这些变化反映出对用户隐私保护的重视正在不断加强。

- **全球 AI 竞争格局**
    日本政府正大力支持 AI 创业和风险投资，希望通过这波 AI 热潮来为经济注入新的活力。同时，随着最前沿的 AI 实验室对资金需求的增加，一些主权财富基金开始在 AI 投资中扮演更重要的角色。这种情况也引发了对国家安全的担忧，因为部分资金可能来自海外，涉及敏感技术的潜在风险更大。

- **公共计算能力建设**
    英国、美国和欧盟都在努力增加公共计算资源的供应，但相比私营企业，提供的资源还是显得有些有限。与此同时，印度政府提出了一个大胆的计划：他们愿意出资一半，帮助建立大规模 GPU 集群，但前提是私营企业得负责剩下的费用。这种合作模式为公共和私营部门的协作提供了新的可能性。

- **能源消耗问题**
    随着 AI 的快速发展，大型科技公司因为能源消耗大幅增加，正在努力应对实现 “净零排放” 承诺的挑战。同时，AI 的发展也让现有的能源基础设施吃不消。一些国家甚至开始限制新数据中心的建设，以控制能源需求的过快增长。

### 3.4 安全 识别并降低未来高能力人工智能系统可能给我们带来的灾难性风险

- **AI 安全态度的转变**
    2024 年，围绕 AI 安全的讨论发生了有趣的转变。从 2023 年的 “AI 很危险” 的担忧，变成了 2024 年的 “快来用我的 AI 应用” 这样更积极的态度。OpenAI 的 “内部风波” 更是标志着对 “AI 存在风险” 这一论调的反弹开始。

    尽管氛围变得乐观，各国政府对 AI 安全治理的行动却一点没停。英国率先成立了全球首个 AI 安全研究所 (AISI)，随后美国、日本和加拿大也纷纷跟进，努力确保 AI 的发展既高效又安全。

- **AI 安全研究的新焦点**
    研究人员对 AI 系统的 “越狱”（jailbreaking）攻击越来越重视。尽管主要实验室加大了防御这类攻击的研究力度，但红队测试仍然屡屡成功突破 AI 的防线。

    更有意思的是，研究还揭示了更隐蔽的攻击方式，比如 “偷偷动手脚” 污染 AI 模型用来学习的偏好数据（RLHF，即基于人类反馈的强化学习），从而悄悄操控模型的行为。这些发现表明，AI 安全依然是一场猫捉老鼠的游戏。

- **对齐技术的进展与局限**
    在让 AI 更“听话”的对齐技术中，有不少新的尝试和挑战。比如，直接偏好优化（DPO）作为 RLHF（基于人类反馈的强化学习）的替代方案受到关注，但研究发现它可能会遇到类似的 “过度优化” 问题。

    同时，RLHF 因为支持在线学习的优势，短期内仍然难以被完全取代。为了更好地解决这些问题，研究人员正在尝试将两者的优点结合起来，比如探索一种叫做“来自 AI 反馈的直接对齐架构框架”（DAAF：Direct Alignment Architecture Framework）的新方法，希望找到更高效、更稳定的解决方案。

- **AI 可解释性的突破**
    Anthropic 最近用稀疏自编码器（SAE）成功解析了 Claude 3 Sonnet 的内部激活，让我们更清楚地了解模型是怎么 “思考” 的。紧接着，OpenAI 对 SAE 技术进行了改进，让它可以应用到更大规模的模型上。

    这些进展让 “打开 AI 黑箱” 成为可能，有助于揭示模型内部的运作机制。不过，这种技术也带来了一些担忧——如果被滥用，可能会导致隐私或安全风险，提醒我们在追求透明的同时，还需要谨慎对待。

- **生物风险**
    Anthropic 之前的研究曾让人担心大语言模型（LLM）可能会加速生物威胁的产生，但其他实验室却难以复现这一结果。不过，研究人员也强调，与 LLM 相比，那些专门用于生物设计的工具（比如蛋白质折叠、设计和基因编辑工具）可能带来更直接的风险。因此，重点关注这些工具的安全使用显得更加重要。

- **AI 滥用的威胁**
    Google DeepMind 的研究指出，大多数 AI 被滥用的情况并不是因为复杂的黑客技术，而是因为生成式 AI 的某些功能过于容易获取。比如，有人利用深度伪造技术（deepfake）进行诈骗、骚扰，甚至制作非法的色情内容，这些问题已经成为值得关注的热点。

### 3.5 展望未来

- **开源模型缩小与闭源模型的差距** 
    Mistral 和 Llama 等开源模型在 AI 社区中站稳脚跟。它们通过高效版本和出色测试表现，与 GPT 和 Claude 等顶级闭源模型竞争，部分指标甚至超越。

- **开源在人工智能生命周期中的作用** 
    - 开源在 AI 周期的 “启蒙斜坡” 中持续增长，驱动价值创新。
    - 虽然 Hugging Face 和 OpenAI 在领域内占据优势，但 MindsDB 和 Roboflow 的代码库也在崛起，AutoGPT 等项目表现突出。

- **开源创新向下游扩展** 
    - 从模型和工具开发扩展到训练和监控领域。
    - 2024年，约 150 家公司参与开源 AI 创新，包括模型训练、微调和监控工具，表明基础工具链的成熟化。

- **融资规模和交易增长显著** 
    - 开源 AI 初创公司的交易规模和数量激增，展现出巨大潜力。 
    - 例如，Nvidia 以 3 亿美元收购 Deci AI，Scale AI 完成 10 亿美元融资，Mistral AI 获得6.4亿美元，显示资本对这一领域的高度认可。

### 3.6 未来预测 针对未来 12 个月的 AI 发展 10 条预测

1. **巨额投资引发关注**： 某个主权国家可能会向美国的大型 AI 实验室投资超过 100 亿美元，引发国家安全审查。
2. **无代码创意走红**： 一款完全由没有编程能力的人创建的应用程序或网站将会爆红，比如进入 App Store 前 100 名。
3. **数据收集政策的转变**： 随着版权案件进入审判阶段，领先的 AI 实验室可能会对数据收集方式做出重要调整。
4. **欧盟放宽 AI 法案**： 由于立法者担心过度限制创新，欧盟 AI 法案的早期实施可能比预期更宽松。
5. **开源 AI 突围**： 一款开源模型可能会在推理基准测试中超越 OpenAI 的 o1 模型（编者按：DeepSeek 和 Kimi 正在超越）。
6. **NVIDIA 地位稳固**： 挑战者仍无法撼动 NVIDIA 在 AI 芯片市场的领导地位。
7. **人形机器人投资降温**： 由于企业难以找到适合的市场方向，人形机器人的投资可能会减少。
8. **苹果推动设备端 AI**： 苹果在设备端 AI 研究方面的成果将加速个人设备 AI 的发展。
9. **AI 科学家发表研究**： 一篇由 AI 生成的研究论文可能会被主要的机器学习会议或研讨会接受。
10. **AI 视频游戏大火**： 一款基于生成式 AI 元素互动的视频游戏有望成为爆款，带来全新游戏体验。

## 四. 2024 中国 AI 现状与发展

相比于 2023 年的 “百模大战” 让人眼花缭乱，经过一年的洗牌后，AI 行业的市场格局终于变得清晰起来。

**互联网大厂**已经建立起比较成熟的大模型能力。在大力扩展云业务的同时，它们也将 AI 大模型深度融入到自家产品体系中。不仅推出了一些全新的 AI 应用，许多现有产品也和大模型高度契合，这成为了大厂巩固 “护城河” 的重要手段。

而中国对标 OpenAI 的大模型创业 “六小虎” 在这一年里，也通过艰难或顺利的融资，争取到了继续 “坐在牌桌上” 的资格。各家公司在模型开发和应用落地的方向上开始走出自己的路，展现出不同的商业化逻辑。

此外，在**端侧模型**和**视频生成模型**等细分领域，一些创业公司表现出了很强的活力。虽然它们规模不如大厂，但已经成为这些领域中的潜力股，有望在细分赛道中占据重要地位。

经过一年的沉淀，行业正从混乱走向稳定。大厂凭借资源优势稳步扩展，创业公司则在细分市场发力，为整个 AI 生态注入更多活力和多样性。

### 4.1 中国 AI 新创企业领头羊

<!-- **Top Domestic Large AI Models** 
Companies with Over 1 Billion RMB in Funding -->

![image](/image/ossAI/BkamlN-_Jx.png)
<!-- | Company | 2024 Financing / Valuation | Total Raised Funds | Investors |
| -------- | -------- | -------- | -------- |
| Zhipu AI (智谱 AI) | March: Several billion RMB financing; June: Over $400M financing; September: Several billion RMB financing, with a total investment exceeding 20 billion RMB; December: $301M financing | Over 50 billion RMB | Beijing AI Industry Investment Fund, Mubadala Capital (UAE), Prosperity7, Keywin Capital, Junlian Capital, and other institutional investors |
| Moonshot AI (月之暗面) | March: 1 billion RMB financing; August: Over $3B valuation | Over $2B (~150 billion RMB) | Alibaba, Sequoia China, Xiaomi, Meituan, Hillhouse Capital, Tencent Investment, and other top-tier investors |
| Baichuan Intelligence (百川智能) | July: $500M in Series A funding; Soon to complete Series B with a $2B valuation | Over 7.5 billion RMB | Investors include Alibaba, Xiaomi, Tencent, and other major companies and financial investment institutions, along with the Beijing AI Industry Investment Fund, Sequoia, and other investors |
| MiniMax | March: Over $600M financing; Recent investment will push MiniMax valuation beyond $2.5B | Over 6 billion RMB | Alibaba, Sequoia, and top-tier investment institutions |
| 01.AI (零一万物) | August: New multi-hundred-million-dollar financing round completed | Over 10 billion RMB | Investors include Hillhouse International Strategy and Southeast Asia financial groups |
| StepFun (阶跃星辰) | December: Several hundred million USD Series B financing | Over 10 billion RMB | Core investors include Shanghai Lingang Investment and Sequoia, with strategic capital from Tencent Investment, Source Code Capital, and others |
| Beijing Wenge Technology (中科闻歌) | December: Several billion RMB strategic financing | Over 10 billion RMB | Beijing AI Industry Investment Fund |
| ModelBest (面壁智能) | December: Several hundred million RMB financing completed | Over 10 billion RMB | Led by Cambricon, Denglin Technology, Zhongke Chuangshi Fund, and Shunwei Capital, along with Beijing AI Industry Investment Fund and Yuanjing Investment, with Vanke as an independent investment consultant | -->

<!-- > Note: Statistics based on open-source information, data as of December 31, 2024. -->

<!-- **Major Product Lines of the Six Emerging AI Model Companies** -->

![image](/image/ossAI/HJX1eV-_kx.png)

<!-- | Company | To C Products | To B Products & Solutions |
| -------- | -------- | -------- |
| Zhipu AI (智谱) | Zhipu Qingyan (智谱清言) | BigModel Zhipu AI Open Platform: Solutions for smart vehicles, manufacturing, consumer goods, finance, government services, healthcare, gaming, cultural tourism, and AI agents. |
| MiniMax | HaiLuo AI (海螺AI), Xingye (星野), Talkie | MiniMax Open Platform: Solutions for office, entertainment, infrastructure services, and smart hardware |
| Baichuan Intelligence (百川智能) | BaiXiaoYing (百小应) | Baichuan Large Model Open Platform: Domain-enhanced models, full-chain domain enhancement toolchains, AI platforms, and tool-based applications. Industry solutions for healthcare, education, finance, manufacturing, and retail |
| StepFun (阶跃星辰) | Yilian (跃问), Maopeng (冒泡鸭) | StepFun Open Platform: Solutions for e-commerce, content creation, smart vehicles, local services, finance, AI manufacturing, gaming, and AI governance |
| Moonshot AI (月之暗面) | Kimi | Kimi Open Platform |
| 01.AI (零一万物) | Wanzhi (万知) | 01.AI Large Model Open Platform: Solutions for digital humans, marketing short video solutions, and AI infrastructure solutions  | -->

<!-- <center> Source: Jazzyear </center> -->

### 4.2 中国 AI 厂商开启了全球价格大战

从 DeepSeek 惊人的性能与超低的价格打响了全球的价格大战，字节跳动的豆包，阿里巴巴的 Qwen 也立即跟上，刀刀见骨，甚至打到了负毛利！

![image](/image/ossAI/Hy70wzWdkl.png)
<!-- > <center> Note: Estimated input price - CNY$ per thousand tokens </center> -->

![中国与国际AI厂商的主力模型推理价格对比](/image/ossAI/HJR3UG-dyx.jpg)
<!-- > <center>Inference Price Comparison of Leading Models from Chinese and International Companies</center> -->

## 五. 世界模型与空间智能

五亿年前，视觉的出现打破了黑暗的世界，带来了生物界最深远的一次进化。而在过去十年，人工智能的发展同样让人叹为观止。当我们开始为计算机和机器人赋予 “空间智能” 时，就像大自然曾开启的生物多样化时代一样，这也许将引发一场 “数字寒武纪大爆发”。随着这场革命的展开，AI 的未来将充满无限可能，令人充满期待！

### 5.1 世界模型

它能通过学习未标记的数据（就像听别人讲话而不用解释）来自主理解世界是如何运作的，完全不需要明确指令。

它的架构有 6 个模块，分别承担不同的任务：  
1. **配置器**：负责安排和控制整体操作。  
2. **感知模块**：用来理解现在的状态，相当于 AI 的“感知器官”。  
3. **世界模型**：预测接下来可能发生什么，就像它的大脑在推测未来。  
4. **成本模块**：计算每种选择可能的成本，帮忙评估得失。  
5. **行动模块**：负责规划接下来的行动步骤，确保动作目标明确。  
6. **短期记忆模块**：追踪当前状态和相关的成本信息，确保 AI 不“短路”。  

这套模块像是一个小团队，分工合作，帮助 AI 更好地理解和应对世界的动态变化！
![image](/image/ossAI/rJlXM2APke.png)

### 5.2 空间智能

从技术发展的角度来看，**世界模型**带来了人工智能领域一种全新的思路。它的关键是将感知到的信息转化为一个抽象的 “世界地图”，帮助 AI 理解和预测周围环境的动态变化。

这种模型的核心设计理念是利用历史数据，搭建一个能模拟现实环境的数字框架。换句话说，世界模型就像一个聪明的 “虚拟实验室”，让 AI 可以在这个数字化的世界里更高效地学习、预测和适应现实。

### 5.3 应用案例（部分）

- **都市规划**
    东京正在构建自己的 3D 数字孪生城市，其精度可以达到绝对位置误差小于 10 厘米！这个数字化模型不仅包含了 LiDAR 点云（高精度的激光扫描数据），还有详细的 CityGML 数据（用于表示城市建筑和结构），以及实时的交通动态信息。

    按照日本的规划，到 2030 年，东京将成为一个完全数字孪生的城市，从交通到能源都能实现无缝的信息整合。届时，越来越多的建筑、房屋和工厂都将被转化为虚拟数据，推动城市管理和规划的全面升级！
    
    ![东京智能空间](/image/ossAI/BJ60emz_kg.jpg)

- **交通管理与自动驾驶**
    - **新南威尔士州交通管理**
        数字孪生和人工智能结合的技术，交通管理可以实时调整以减少拥堵，从而最大程度地提高社会效益。
    - **中国车路云一体化+实时数字孪生**
        本质上就是一个结合通信、感知和计算的 “通感算” 网络。它的核心目标是将现实世界实时数字化，把所有智能设备无缝连接在一起，提供实时的数据支持，帮助交通以及其他产业实现更高效的协作、决策和处理。 

        具体来说，通过在路口部署具有 “通感算” 功能的 AI 数字道路基站，再配合 AI 路侧边缘计算系统（AI-MRS），交通管理者可以实时获取路口周围 300 米范围内所有交通参与者的动态信息。基于这些数据，系统可以即时构建一个数字孪生模型，为范围内的所有车辆提供精准、实时的服务，从而让交通更智能、更高效！

        ![中国智能化路车云](/image/ossAI/B1fUbmzu1e.jpg)
        <!-- > <center>China's Intelligent Vehicle-Road-Cloud Integration</center> -->

- **医疗领域**
    - **疾病诊断**
        空间智能技术能对医学影像数据进行 3D 重建和分析，帮助医生更精准地诊断疾病。比如，将 CT 或 MRI 的影像数据转化为三维模型，可以清楚地展现人体器官以及病变的位置、形状和大小。这些立体化的信息为医生提供了更直观、更准确的诊断依据，让复杂的病例一目了然！
    - **手术导航和辅助决策**
        空间智能技术还能为医生提供手术导航和辅助决策。通过对患者身体结构的 3D 建模和分析，医生可以清晰地了解手术部位的解剖结构和血管分布。这种直观的三维视图不仅让医生操作更精准，还能显著提升手术的安全性，为患者带来更好的治疗效果！

## 六. 具身智能

最近，AI 大模型和机器人结合得越来越紧密，引发了业界对 “具身智能” 的极大兴趣和投入。所谓 “具身智能”，可以简单理解为让 AI 和机器人有了 “身体” 和 “智慧” 的深度融合。现在，这种技术已经进入了一个以 AI 技术深度整合为特点的新阶段，其中具身智能机器人被认为是最重要、最有潜力的应用方向。

本章将简短地说明具身智能是什么，重点了解以机器人为载体的 “具身智能机器人” 都有哪些关键技术和最新进展。同时，我们还会聊到它背后的产业生态、发展路径，以及那些活跃在这个领域的重要玩家。

### 6.1 概念与内涵

具身智能是将人工智能融入各类物理本体形成的智能系统，使本体具备在物理环境中拥有自主感知、学习、决策及行动的能力，从而完成物理环境及任务的灵活适应。

具身智能的内涵体现在物理互动、泛化适应、自主进化等三大方面，强调了智能系统设计开发的动态性和复杂性。

<!-- **Embodied Intelligence System Framework** -->
![具身智能系统框架](/image/ossAI/ry5T7VQd1x.jpg)
<center> https://www.idc.com/getdoc.jsp?containerId=prCHC52780624 </center>

### 6.2 关键技术与进展

推动具身智能机器人快速发展的关键就在于技术，尤其是最近 AI 大模型的飞速进化。现在的大模型不仅知识储备丰富，还能理解复杂信息、进行逻辑推理，甚至自己 “学习升级”。这些能力对具身智能机器人的发展起到了巨大的助推作用。

在具身智能中，机器人需要具备 “感知-学习-决策-行动” 四大核心能力模块。简单来说，就是 “能看懂、会思考、能决定、还会动”。为了实现这一套高效的闭环，机器人需要将各种技术在自身完美结合起来，不同模块也有多种技术路径可选。这种技术协同，就像把拼图一块块拼成一个完整的智慧机器人。

<!-- **<center>Key Technologies of Embodied Intelligent Robots</center>** -->
![具身智能机器人的关键技术](/image/ossAI/H1MqNNXdyg.png)
<center> https://www.idc.com/getdoc.jsp?containerId=prCHC52780624 </center>

### 6.3 产业生态与构成

具身智能机器人要想适应各种丰富的应用场景，离不开多种技术和产品的支持，同时也需要将这些复杂的系统无缝整合在一起。而要让整个产业生态健康发展，还得靠各路市场玩家一起努力、通力合作，才能真正把这条路走得更远更稳。

**<center>Embodied Intelligent Robot Industry Ecosystem</center>**
![具身智能机器人产业生态](/image/ossAI/Syb-8NX_Je.png)
<center> https://www.idc.com/getdoc.jsp?containerId=prCHC52780624 </center>

具身智能机器人就像一部高精尖的机器，硬件和软件是它的两大支柱。硬件方面，包括零部件、基础设施和机器人的本体，这些是它的 “骨骼” 和 “肌肉”。而软件方面，则是它的 “大脑” 和 “神经系统”，比如机器人操作系统、仿真平台、数据集、AI 大模型、视觉感知算法、运动控制算法等，都是让它 “活” 起来的关键。

此外，不同行业的需求各不相同，为了让机器人在特定场景下大展身手，还需要提供应用集成服务。而标准规范的制定则相当于给大家画好了 “游戏规则”，确保各方能够顺畅协作，共同推动具身智能机器人的发展。

### 6.4 发展路径与方式

在具身智能的产业链中，大家齐心协力推动着它的发展。目前，具身智能机器人主要有两条发展方向：
1. 专攻特定任务的非人形机器人：比如协作机器人、商用服务机器人等，这些机器人专注于专业场景任务，像流水线上的助手或送餐机器人，专为某些特定用途设计。
2. 追求多功能的人形机器人：这类机器人更像 “全能选手”，以人形为载体，目标是能胜任更多通用任务，努力成为 “家里、公司里都能用的万能助手”。

简单来说，就是一个方向走专业路线，另一个方向走全能路线。

<!-- **<center> Two Development Paths of Embodied Intelligent Robots</center>** -->
![具身智能机器人两大发展路径](/image/ossAI/ByKQd4mdyg.jpg)
<center> https://www.idc.com/getdoc.jsp?containerId=prCHC52780624 </center>

### 6.5 技术供应商关注重点

- **聚焦痛点明确的场景**
    利用所在行业的经验，优先选择那些问题清晰、需求迫切，同时商业化前景明确的垂直应用场景进行深入探索和技术优化。简单来说，就是从 “最需要解决的问题” 入手，事半功倍。

- **善用数据提升研发**
    结合开源数据以及自己积累的机器人实际应用数据、用户反馈和行业理解，这些宝贵的“第一手资料”能帮助你更高效地研发和训练具身智能机器人。

- **多种合作模式，共同成长**
    尝试通过技术合作、市场拓展或者股权投资等多种形式，和合作伙伴建立深度关系，推动软硬件的高效整合，比如零部件与机器人本体、模型与机器人本体的协作效果，从而加速实际落地应用。

### 6.6 开源具身智能机器人

目前，全球尤其是中国的具身智能机器人领域正在快速发展，成为人工智能和机器人结合的前沿热点。具身智能机器人不仅在技术上有了显著突破，还在实际应用中开始崭露头角。各大科技企业和初创公司纷纷入局，围绕工业制造、物流、医疗、教育、家庭服务等场景推出各类创新产品。

- **中国的发展现况**
    在中国，具身智能机器人的发展尤为引人注目。凭借强大的制造能力、丰富的应用场景以及开放的技术生态，中国企业在该领域迅速崛起，而多家中国企业积极创建及参与开源项目，推动技术共享与创新。以下是部分开源具身智能机器人厂商及其开源状况。其中，稚晖君（前华为工程师）创办的**智元机器人**成为行业中的一颗明星。

<center>

| **厂商名称** | **开源项目** | **影响力** |
| -------- | -------- | -------- |
| **智元机器人** | 开源了通用具身机器人“灵犀 X1”，并于 2024 年实现第 1000 台量产下线 | 推动了具身智能机器人的普及，促进了行业的技术共享与合作 |
| **智元机器人** | 开源了全球首个基于真实场景的百万真机数据集 AgiBot World | 促进工业与学术界的合作，并加速具身智能领域的发展 |
| **北京具身智能机器人创新中心** | 发布了 “天工开源计划”，面向具身智能行业开源开放 | 促进了具身智能领域的技术创新和生态构建 |
| **艾欧智能（IO-AI）** | 开源了超过 50 万条数据的具身智能数据集，涵盖多个场景和技能 | 为具身智能机器人的研发提供了丰富的数据支持，加速了行业的发展 |
| **NimbRo** | 开发了成人尺寸的开源 3D 打印人形机器人 NimbRo-OP2X | 为研究机构和开发者提供了一个低成本、高性能的研究平台，推动了人形机器人研究的发展 |

</center>

<br>

- **智元机器人的开源实践**
    智元机器人通过**全栈开源**的方式，为行业带来了极大的推动力。他们不仅开放了核心算法和代码，还提供了硬件设计方案（灵犀X1），更进一步开源了全球首个基于真实场景的百万真机数据集 AgiBot World（该数据集的规模和质量显著超过了现有的类似数据集，例如 Google Open X-Embodiment 数据集，具有十倍的长距离数据规模和百倍的场景覆盖率），形成了一个完整的开源生态。这样的开放性，让更多开发者和企业可以低成本地参与到具身智能机器人的开发中，加速了技术的普及和创新。
<br>

![智元灵犀 X1 全栈开源机器人](/image/ossAI/ryMdIB7_1e.png)

<center> 智元灵犀 X1 全栈开源机器人</center> 

<br>

- **智元机器人全栈开源带来的影响**：
    1. **技术门槛降低**：通过开源，更多中小企业和个人开发者有机会进入具身智能领域，加速了技术的扩散。
    2. **社区生态壮大**：智元机器人带动了一大批开发者共同优化和完善相关技术，推动了整个行业的技术迭代。
    3. **国产技术创新**：开源模式展现了中国企业的技术实力，同时提升了中国在全球具身智能机器人领域的影响力。
    4. **多元应用加速落地**：通过开源，企业能够快速针对不同行业的需求进行技术适配，从而实现产品落地。

全球具身智能机器人正处于起飞阶段，而中国无疑是这场变革中的重要力量。智元机器人等开源先锋的出现，不仅加速了技术发展，也为行业树立了开放合作的典范。未来，随着更多企业和开发者的加入，具身智能机器人将在更多领域展现巨大的潜力和价值。

### 6.7 One more thing! 开源生成式 AI 赋能具身智能，Genesis 正式发布

Genesis 是一个结合了生成模型能力的具身智能研究平台，这个研究平台由通用物理引擎、机器人仿真平台、照片级渲染系统和数据生成引擎构成，而其中的数据生成引擎使用了生成式 AI 技术，可以将自然语言转换成各类不同模块的训练数据。

该项目由 MIT-IBM 沃森人工智能实验室的首席科学家 淦创博士带领的团队所开发，该团队在 2023 年底发表论文介绍了一个利用生成式 AI 技术为机器人提供无限学习数据并全自动化训练的框架 RoboGen，引发了全球关注。经过一年多的开发，RoboGen 框架正式开源为具身智能研究平台 Genesis 并引爆全网。

根据 OpenDigger 数据显示，Genesis 项目自 2024/12/19 发布以来，该仓库在 10 天内吸引到超过 500 位开发者参与讨论，有 21 人成为项目贡献者，获得近 2 万 Star。值得读者持续关注！
<br>

## 七. 人工智能代理（AI Agent）

本章主要参考了 2024 年世界经济论坛发布的 “人工智能代理的演进和影响白皮书”、甲子光年智库发布的 “中国 AI Agent 行业研究报告”，CSET 工作坊报告等，期盼尽量在快速迭代更新的 AI Agent 领域，为读者提供惊鸿一瞥。

### 7.1 演进历程

始于 20 世纪 50 年代，从基于规则、行为确定的简单系统发展到能处理不确定性、具有学习和适应能力的复杂系统，得益于计算能力提升、数据增长和算法突破，如大模型和机器学习技术的发展。

![image](/image/ossAI/Bkti9PQ_kx.png)

### 7.2 定义与核心组件

- AI Agent 是能感知环境并自主决策、采取行动以实现目标的自主系统，由传感器、效应器、控制中心等核心组件构成，可在物理或数字环境中运行，通过接收用户输入、感知环境、决策规划、执行动作来改变环境。

    ![WEF-Core Components of an Agent](/image/ossAI/SkvhhPQ_Jx.png)

- 2024 是 AI Agent 的爆发之年，也是产品逐步从 Copilot 模式转向 AI Agent 的探索之年。因此市场中往往也会把自动化程度高的 Copilot 产品作为泛化的 Agent 概念产品。Copilot 与 Agent 最大的区别在于 “自主规划” 的能力：Copilot 的模式需要人的指挥；而 Agent 则是直接面对目标任务，具有自主记忆、推理、规划和执行的全自动能力，因此终极形态的 AI Agent 只需要用户的起始指令和结果的反馈，过程中并不需要人的介入。

    ![Chatbot-Copilot-AI Agent](/image/ossAI/rJTMI_7OJl.png)
    > <center> 甲子光年智库 - 中国 AI Agent 行业研究报告</center>
<br>

- Copilot 与 Agent 的混淆点在于对于 “工作流” 的 “自动化” 的区分：从完成效果看，工作可以人为地被无限拆分，部分 “Copilot产品+自动化” 可以完成单个工作单元的完全自动化。


| **名称** | **自动化的实现方式** | **含义** |
| -------- | -------- | -------- |
| **Chatbot** | / | 人类完成绝大部分工作，类似向 AI 询问意见，了解信息，AI 提供信息和建议但不直接处理工作 |
| **Copilot** | 借助复杂的提示词完成自动化 | 人类和 AI 进行协作，工作量相当。AI 根据人类 prompt 完成工作初稿，人类进行目标设定，修改调整，最后确认 |
| **Agent** | 通过设定目标完成自动化 | AI 完成绝大部分工作，人类负责设定目标、提供资源和监督结果，AI 完成任务拆分，工具选择，进度控制，实现目标后自主结束工作 |
<br>

### 7.3 类型与特点

包括简单反射、基于模型的反射、基于目标和基于效用等类型，分别具有不同决策方式和特点，从简单的规则映射到复杂的多目标权衡决策。当前许多 AI Agent 架构基于大语言模型，具备多组件协同工作能力，如汽车信息娱乐系统中的 AI Agent。

1. **先进 AI 代理**（Advanced AI agent）： 具备强大自主性、基于大型模型且包含多个组成部分，能够处理复杂任务并持续学习的AI 实体。

    ![image](/image/ossAI/SyFEsPQuyg.png)

2. **AI 代理系统**（AI agent system）： 由多个功能不同的 AI 代理协同工作，以完成更复杂任务的系统。 

3. **多代理系统**（Multi-agent system，MAS）：是整合多个智能自主体（包括 AI 代理、AI 代理系统和人类使用者），通过不同设计，进行互动和协作，从而实现共同目标的系统，如自动驾驶汽车系统。MAS 由多个独立智能体或智能体系统协作，有网络和监督等架构类型，可提高效率和能力，但面临智能体间通信和互操作性挑战，如交通管理中的 MAS 应用。

    ![image](/image/ossAI/BkeDowm_yx.png)

4. **人工智能代理、人工智能代理系统和多代理系统之间的结构和关系**

    ![WEF-Structure of a multi-Agent Systems](/image/ossAI/HJgpVRwQOyx.png)

### 7.4 工作范式被颠覆

- Agent 的商业价值围绕工作范式差别展开，工作范式的改变则意味着新的智能时代开启。

    <!-- **<center>AI Agent Capability Requirements by Automation Level** -->
    ![AI Agent 自动化等级](/image/ossAI/SJera_Q_ke.png)
    > <center> 甲子光年智库 - 中国 AI Agent 行业研究报告</center>


- **面向过程 vs. 面向目标**

    ![AI Agent 造成工作方式转移](/image/ossAI/BJINR_QOkg.png)
    > <center> 甲子光年智库 - 中国 AI Agent 行业研究报告</center>
<br>

### 7.5 应用领域

AI Agent 在多个领域展现出广泛应用潜力，包括： 
- 工作流自动化: 提升企业效率。 
- 个人助手: 提供个性化服务。 
- 医疗保健: 改善患者体验。 
- 教育: 支持个性化学习。 
- ...

![AI Agent 应用领域](/image/ossAI/ryOnktX_1e.png)

> <center> 甲子光年智库 - 中国 AI Agent 行业研究报告</center>


### 7.6 中国 AI Agent 生态图谱

- 中国当下的 AI Agent 市场已经迎来丰富的参与者，包括互联网大厂类、生成 AI 类、企业服务 SaaS 类、创业类、3C 类等多类型企业，这些企业依据自身技术或行业知识迅速切入市场，通过先手占据更好的生态占位；并且越来越多的企业正在进行产品打磨与场景探索。
- 随着这些先行者的商业价值逐步展现，中国 AI Agent 的多样性将进一步丰富，投入 AI Agent 的企业数量将迎来爆发。

![中国 AI Agent 生态图谱 v1.0](/image/ossAI/r1juWY7OJg.png)
> <center> 甲子光年智库 - 中国 AI Agent 行业研究报告</center>

- 一些值得关注的互联网大厂与新兴提供商
    - 百度：文心智能体平台
    - 字节跳动：扣子 Coze
    - 阿里云：钉钉
    - 用友：大易
    - 汇智智能
- 一些值得关注的海外企业
    - OpenAI
    - IBM
    - AWS

### 7.7 影响与应对措施

AI 代理的普及可能带来生产力提升、改善客户体验等好处，如在软件开发、医疗保健、教育和金融等领域的应用。但也伴随存在技术、社会经济和伦理等风险，如技术故障、过度依赖技术可能导致就业结构变化和伦理困境等。因此，应该考虑制定应对措施，包括技术改进、公众教育、制定伦理准则和加强监管等，以确保其安全、可靠和有益发展。

## 八. 压缩的廿一世纪

本篇的结尾，编者想以 Anthropic 公司首席执行官 Dario Amodei 在 2024 年 10月份发表的 ”**强大的 AI 将在 21 世纪为我们带来什么**？“ 的长文，与大家在 2025 蛇年春节前夕共同分享未来人类社会可能的荣景与反思。
>  推荐读者们细读译文：https://news.qq.com/rain/a/20241029A03T0400?utm_source=chatgpt.com

Dario 在文章中探讨了强大人工智能（AI）对 21 世纪的潜在影响，认为 AI 有望在多个领域实现重大突破。

**生物学与医学**：Dario 预测，AI 将加速生物学和医学的进步，在未来 5 至 10 年内实现原本需要 50 至 100 年才能取得的成果。他将这一现象称为 “压缩的21世纪”，即 AI 使人类在短时间内取得相当于一个世纪的生物医学成就。

**神经科学与心理健康**：AI 的进步有望极大改善对大多数心理疾病的治疗，甚至可能治愈这些疾病。同时，AI 还可能扩展人类的认知和情感能力，提升 “认知与心理自由”。

**经济发展与消除贫困**：Dario 认为，AI 可以在健康、经济和政治等方面为发展中国家带来积极影响，但这需要全球共同努力，确保这些国家不被遗忘。

**和平与治理**：他指出，若 AI 的发展遵循正确的逻辑，最终可能引导人类走向法治、民主和启蒙价值观。虽然这一进程并非必然，但从统计趋势来看，AI 将加速人类朝这些目标前进的步伐，使方向更加清晰，目标更加明确。

**工作与人生意义**：AI 的发展可能带来一些挑战，如不平等和经济增长问题，以及道德和选择退出问题。尽管如此，AI 有望成为自由、个人权利和法律平等的保障，帮助实现一个更加美好的世界。

最后 Dario 强调，尽管 AI 带来了许多挑战和风险，但我们应为能够让每个人受益的积极结果而奋斗，并让人们团结起来，共同应对未来的挑战。
 