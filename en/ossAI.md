---
title: Open Source AI
tags: [2024 China Open Source Report]

---

# Open Source AI

Author: Biaowei Zhuang & Ted Liu, Translator & Reviewer: Ted Liu

## 1. Overview

Since the groundbreaking emergence of ChatGPT at the end of 2022, 2023 has been a pivotal year for the development of artificial intelligence. By 2024, the explosive growth of open-source AI has completely rewritten industry rules—shifting from technological monopolies to collective innovation, from lab-driven research to real-world industrial applications. An AI paradigm shift, led by open source, has officially arrived. As a result, the **2024 China Open Source Annual Report** has decided to dedicate a separate section, **'Open Source AI'**, to provide readers with a more comprehensive perspective on this transformative movement.

On July 27, 2024, Meta CEO Mark Zuckerberg published a groundbreaking article titled **"AI is approaching an open-source inflection point."** He emphasized the profound impact of open-source AI on the entire industry, stating that as AI technology advances and community collaboration strengthens, open source will be the key driver of innovation and the widespread adoption of AI. The key points in his article provide a strong summary of the current state and development trends of open-source AI:

- **The Rise of Open-Source AI** An increasing number of companies and research institutions are releasing open-source AI models and tools, a trend that is transforming the industry's competitive landscape. Open source is driving technological democratization, allowing more developers and enterprises to access and utilize cutting-edge AI technology.
- **Balancing Business and Technology** Enterprises leverage open-source AI to attract developer ecosystems while integrating proprietary and open-source technologies to build unique competitive advantages. This dual-track strategy allows companies to benefit from open source while maintaining the competitiveness of their core technologies.
- **The Importance of Community and Collaboration** The key to the success of open-source AI lies in an active developer community and a culture of collaboration. These communities provide strong support for model improvements, bug fixes, and new feature development, significantly accelerating the pace of AI innovation.
- **Ethics and Transparency** Open-source AI introduces new possibilities for transparency and accountability in AI technology. Open-source code makes the training and decision-making processes of models more transparent, helping to address bias and ethical concerns.
- **Future Challenges** Despite its vast potential, open-source AI faces several challenges, including copyright protection, data privacy, security vulnerabilities, and commercial sustainability. The industry must find solutions to these issues to fully unlock the potential of open-source AI.

As Zuckerberg asserted, **"Open Source AI is the Path Forward."** In 2024, open-source models like Llama and Mistral are rapidly approaching—and even surpassing—proprietary benchmarks. Chinese teams such as DeepSeek, Tongyi Qianwen (Qwen), and Zhipu are reshaping the global landscape with their **"radical openness"** and **"cost revolution."** Platforms like Hugging Face and GitHub are bringing together hundreds of thousands of developers, making collaboration and knowledge-sharing the cornerstone of technological democratization. Open source is not just about making code accessible—it represents a **redefinition of technological beliefs.** It transforms innovation from being confined to research labs to reaching everyday life, shifting AI from corporate monopolies to a movement of collective creation.

However, the rapid surge in technology also brings **unprecedented challenges.** Behind the increasing convergence in performance lies the failure of benchmark testing and growing concerns over data contamination. The **low cost and high availability** of open-source models have triggered an intense global AI price war. NVIDIA’s **chip dominance** and the **EU’s strict regulations** reflect the complex entanglement between technology and power. Meanwhile, the **misuse of synthetic data** and the **proliferation of deepfakes** continuously raise alarms over ethics and security. This leads us to an inevitable question: **As AI approaches human-level capabilities, are we truly prepared to coexist with it?**

To enhance the reader's experience, the editors of this chapter have opted **not** to use the traditional news listing format. Instead, they have synthesized insights from multiple domestic and international reports and in-depth analyses, blending **a global perspective with local insights.** This chapter systematically unpacks the contradictions and hopes of our era—**from technological breakthroughs and commercial battles to policy struggles and ethical reflections.** In the following sections, you will discover:

- **How Open Source is Breaking Technological Monopolies** Bringing Llama 3 and GPT-4o into direct competition on performance rankings;
- **Lightweight Models and Multimodality** Why they have become the key to AI deployment and real-world applications;
- **Embodied Intelligence and AI Agents** – How they are redefining the boundaries of human-machine collaboration.
- **The Power of Chinese Open-Source AI** How it is leveraging price wars and full-scale open sourcing to break through the competition.

As we stand at the doorstep of 2025, AI technology is reaching a critical open-source inflection point. The future industry leaders will be those who can strike the optimal balance between open source and commercialization. By embracing open source, AI has the potential to accelerate real-world applications while driving the entire industry toward a more open and inclusive future.Now, more than ever, we must remain clear-eyed: the vast horizon of open-source AI should not be a battleground for a few tech giants but a collective intelligence ecosystem built and shared by all.

May this report serve as a guiding light, illuminating both reason and warmth in the tide of technological progress.

## 2. 2024 Global Open Source AI: Current Status and Development

### 2.1 2024 Open-Source AI Panorama

There are different classifications for AI technology stacks and no industry standards, so this section uses some reported classifications for readers' reference. 
- Foundation Model 
- Model Deployment and Inference
- Development Tools
- Model Training and Fine-tuning 
- Monitoring and Observability

The chart below takes only a selection of products globally as of the second quarter of 2024:

![image](/image/ossAI/HJHilcAD1l.png)

> <center> https://synaptic.com/resources/open-source-ai-2024 </center>

### 2.2 2024 Artificial Intelligence Timeline

- **Open Source Models - 55**
![image](/image/ossAI/S16M_0J_yl.png)

- **API-Only Models - 63**
![image](https://hackmd.io/_uploads/HJ1Ed0ku1x.png)


    > <center> https://huggingface.co/spaces/reach-vb/2024-ai-timeline </center>

## 3. 2024 Artificial Intelligence Panorama Report

### 3.1 Research: Technological Breakthroughs and Capabilities of Artificial Intelligence

- **Performance Convergence**
    OpenAI's early lead is narrowing, with models like Claude (Anthropic's AI model) and Gemini (Google's AI model) catching up. For most of the year, benchmarks and community leaderboards indicated a significant gap between GPT-4 and other top models. However, Claude 3.5 Sonnet, Gemini 1.5, and Grok 2 (Tesla's AI model) have nearly closed this gap, and model performance is now beginning to converge.


    ![Foundational Model Performance (Lmsys Leaderboard)](/image/ossAI/ryScvbZukl.png)
    > <center> Foundational Model Performance (Lmsys Leaderboard) - Hugging Face </center>

- **The Rise of Open Source Models**
    Meta's Llama series has significantly narrowed the performance gap with proprietary models. "This marks the first time that open-source models have closed the gap with the cutting-edge closed-source models." For instance, models like Mistral, Vicuna, and Yi have surpassed closed models in certain aspects. For example, Mixtral 8x7B has outperformed GPT-3.5 in both Elo and MMLU evaluations.

    ![Foundational Model Performance (Open-LLM-Leaderboard)](/image/ossAI/SJiIqbW_1e.png)

    > <center> Foundational Model Performance (Open-LLM-Leaderboard)-Hugging Face </center>

- **Open-source Hosting Platform have accelerated the Momentum**

    Platforms such as GitHub and Hugging Face have seen the emergence of many groundbreaking research and development projects with remarkable results.

    - In 2023, GitHub saw a 148% increase in contributors and a 248% growth in generative AI projects, while Hugging Face hosted over 400,000 models.
    - Popular open source projects in the first half of 2024： 
        - Huggingface, MindsDB, and Roboflow are the most popular projects on GitHub.
        - AutoGPT and ModularML's Mojo lead GitHub buzz in 2023.
        - LeRobot: Offering models, datasets, and tools for real-world robotics applications, dedicated to making robotics more accessible and user-friendly.
        - MindsDB, an NVIDIA-backed platform focused on enabling businesses to build AI models using data and simplifying the integration of data sources with AI/ML tools, along with other emerging projects, rapidly gained traction in 2024.

        ![Open Source AI Github Tracction](/image/ossAI/HJ_TzzWO1g.jpg)

        ![Open Source AI Foundation Models Hugging Face Traction](/image/ossAI/HkwoXGbd1g.png)

- **The Challenges of Model Benchmarking**

    The benchmarking of large language models (LLMs) is akin to the "standardized tests" of the artificial intelligence world, employing uniform questions and criteria to help us fairly compare the performance of different models. Early testing content was relatively simple, such as sentence completion tasks. However, as large models have evolved from "text continuation players" to "programming experts" and "dialogue specialists," the testing content has become increasingly challenging. Modern benchmarks not only assess the logical capabilities of models but also evaluate their safety, domain-specific knowledge, and other multifaceted performances. It's like an upgraded examination, more comprehensively assessing the "strength" of the models.

   - **Better Model Selection**: Benchmarks allow you to choose models based on real-world performance metrics. Want an excellent coding assistant? Check how it performs on HumanEval. Need safety or factual accuracy? Check TruthfulQA or SafetyBench.
    - **Progress Tracking**: Researchers use benchmarks to understand whether changes (such as fine-tuning or prompt updates) truly improve performance or just add hype.
    - **Standardization**: With a fair competitive environment, anyone can verify the vendor's claims. If a new LLM claims to have world-class mathematical reasoning abilities, you can check whether it passed the GSM8K or MATH exams.

    Benchmarking is essentially a set of specially designed "exam questions," which could be multiple-choice, programming problems, or conversational tasks. Each question has a clear correct answer or scoring standard. We "bring the large model into the exam room" and have it answer these questions. Then, we score it based on how many it answers correctly (or other performance metrics) and compare it with other models on the leaderboard. A high score represents the model's strengths, while a low score tells us which areas need improvement. It's like giving AI a comprehensive report card!
    - Some benchmarks can become "easier" over time as models improve, thus losing their predictive value.
    - Benchmarks rarely simulate the chaotic conditions of the real world. For business use cases, custom tests are better than relying solely on public leaderboards.
    - Data leakage is a concern—if a model is trained on the test set, the results may be inflated. Dataset contamination and errors in benchmark testing are affecting progress evaluations and raising security concerns. "Researchers are increasingly focusing on the issue of dataset contamination." "Some of the most popular benchmarks have surprisingly high error rates, which could lead to underestimating the capabilities of certain models and pose security risks."

    **Evaluation Metrics**
    ![image](/image/ossAI/HJGAKR1OJl.png)
    > <center> https://x.com/i2ichardlin/status/1869125541212700797 </center>

- **Focus on Reasoning Computation**
    OpenAI's o1 model demonstrates the potential of shifting computation to the inference layer to tackle complex problems, but it also comes with a significant increase in usage costs.

- **Multi-modal and New Architectures**
    Multimodal models are gaining momentum, while researchers are exploring alternatives to Transformers (though Transformers remain the dominant approach) and hybrid architectures to enhance efficiency and address specific tasks.

- **Synthetic Data**
    The use of synthetic data is expanding, but concerns about model collapse raised by critics still persist.

- **"Lightweight" Leads the New Trend in AI**
    In recent years, as the scale of AI models has continued to expand, computing costs have also risen accordingly. To address these challenges, the focus of research has shifted toward improving efficiency and enabling edge-side deployment. For instance, many new technologies are dedicated to compressing model size and reducing computational demands while maintaining performance stability as much as possible. Such optimization is particularly crucial for promoting AI applications in mobile devices and resource-constrained scenarios:

    1. **Model Compression**: Techniques to reduce model size;  
    2. **Knowledge Distillation**: Methods to transfer "knowledge" from large models to smaller ones;  
    3. **Lightweighting**: Reducing the numerical accuracy of models to reduce storage and computational requirements.

- **Advances in specific scientific fields**
    AI has brought astonishing advancements across multiple scientific fields, such as predicting protein structures, discovering new drugs, gene editing, materials research, and innovations in robotics and medicine. It can even generate synthetic data in medical imaging. These breakthroughs demonstrate the vast potential of AI, injecting vitality into interdisciplinary research and innovation. The recent awarding of the Nobel Prizes in Physics and Chemistry stands as a testament to AI's role in driving scientific progress!

    ![image](/image/ossAI/H1ubqiRwke.png)
    > <center> 2024 Nobel Prize Winners </center>

- **Planning and Reasoning Limitations** 
    Large language models still "stumble" when handling planning and simulation tasks, reflecting certain limitations in their generalization and real-world reasoning capabilities. However, the latest research is enhancing their reasoning abilities through clever methods, such as "chain-of-thought prompting" (guiding the model to derive answers step by step), reinforcement learning (helping the model learn through trial and error), and open-ended exploration (expanding its adaptability). These approaches are all striving to make models smarter and more reliable!

- **Chinese AI model companies are making steady progress, forging ahead with determination**

    China (V)LLM tops the leaderboards despite sanctions.

    **<center>OpenAI o1 Racing</center>**

    ![OpenAI o1 racing](https://hackmd.io/_uploads/SkFDQKr3kl.png)

    > <center>OpenAI o1 Racing Baidu, Tencent, ByteDance, MiniMax, Baichuan, 01.AI...not included yet (https://wx4.sinaimg.cn/mw690/8c803935ly1hxtqbzoxnhj21jk2bch8n.jpg)</center>

    - Alibaba recently released the **Qwen-2** series, whose visual capabilities have particularly impressed the community, ranging from challenging OCR tasks to the ability to analyze complex artworks.

    - In terms of smaller projects:
        - The NLP Lab at Tsinghua University has funded the **OpenBMB** project, which gave rise to the **MiniCPM** series. These models, with fewer than 2.5B parameters, can run on devices. Their 28B vision model slightly trails GPT-4V on some metrics, while the Llama 3-based 85B model surpasses GPT-4V on others. 
        - Tsinghua University's Knowledge Engineering Group has also developed **CogVideoX**, one of the most capable text-to-video models.

    - On January 20, 2025, two highly anticipated domestic AI large model startups, **DeepSeek** and **Kimi**, almost simultaneously released their latest models: the **DeepSeek-R1** reasoning model and the **Kimi k1.5** multimodal thinking model. Both outperformed OpenAI's official o1 model in performance benchmarks. Meanwhile, compared to their international counterparts, China's open-source models are more comprehensive, garnering a global following.

    - **DeepSeek**
        - **DeepSeek-V3**, built on non-top-tier hardware configurations, has developed a cost-effective and high-performing AI large model that rivals GPT-4o through architectural innovation, all at a fraction of the cost of international tech giants. What's more, it's open-source!
        - **DeepSeek-V3** has surpassed other open-source models like Qwen2.5-72B and Llama-3.1-405B in multiple benchmarks, achieving performance on par with the world's top closed-source models, GPT-4o and Claude-3.5-Sonnet. Although the current open-source version does not yet support multimodal input and output, it is highly promising and worth anticipating.
        ![image](/image/ossAI/SJcQq8kOkg.png)
        - Even more impressive is that the entire training of **DeepSeek-V3** cost only $5.576 million, significantly lower than the hundreds of millions of dollars spent by OpenAI, Meta, and others on pre-training large language models.
            ![image](https://hackmd.io/_uploads/SkfPqL1dJl.png)
        - On January 20, 2025, the **DeepSeek-R1** reasoning model was released, demonstrating outstanding performance across multiple benchmarks, particularly in mathematics and coding, with some capabilities reaching levels comparable to OpenAI's o1 model. Its unique feature lies in the adoption of Reinforcement Learning as the core training method, breaking away from traditional reliance on large-scale annotated data. Through this approach, **DeepSeek-R1** exhibits strong reasoning abilities, including associative thinking and self-verification.
        - With its open-source nature and a cost 20 times lower, it stands alongside ChatGPT-4o (as of November 20, 2024).
        ![image](/image/ossAI/SkOUTMMOke.png)
        - On the leaderboard for complex prompts/style control, **DeepSeek-R1** ranks first.
        ![DeepSeek R1 Chatbot Arena - Hard Prompts w. Style Control](/image/ossAI/H1r5ofMuyl.jpg)
        - Based on current results, **DeepSeek-R1** maintains a leading position across all dimensions.
        ![DeepSeek R1 Overall Comparison](/image/ossAI/rJovoMGd1g.jpg)


        - On the WebDev sub-ranking, which measures a model's programming and development capabilities, **DeepSeek-R1** ranks second, trailing the closed-source Claude 3.5 Sonnet by less than 40 points.

        ![DeepSeek R1 WebDev Leaderboard](/image/ossAI/S1Cx2zzuJg.jpg)


    - Just before the Year of the Snake, Moonshot AI unveiled the **Kimi k1.5** multimodal thinking model, creating a sensation in the AI community. **Kimi k1.5** excels in short-chain reasoning and multimodal processing, while OpenAI's o1 maintains a strong performance in long-chain reasoning and broad application scenarios. Each has its strengths, catering to different application needs.
<br>

| Feature             | Kimi k1.5                        | OpenAI o1                  |
| ------------------- | -------------------------------- | -------------------------- |
| **Multimodal Capability** | Supports joint text and visual reasoning | Primarily focused on text processing |
| **Short-chain Reasoning Performance** | Surpasses GPT-4o and Claude 3.5 Sonnet | Excellent, but not as good as Kimi k1.5 |
| **Long-chain Reasoning Performance** | Matches the full version of o1 | Significant advantage in long-chain reasoning |
| **Context Window**   | 128K                             | <=128K                     |
| **Reinforcement Learning Application** | Widely applied, enhancing autonomous exploration capabilities | Present, but not exceeding Kimi k1.5 |

<center> Kimi k1.5 vs. OpenAI o1 </center>

### 3.2 Industry: Commercial Applications of Artificial Intelligence and Its Business Impact

- **Business User Preferences**
    41% of business users prefer open source AI because it is more cost-effective, has more room for innovation, and has fewer legal constraints.
- **NVIDIA's Dominance**
    NVIDIA remains the undisputed leader in the AI chip market—its GPUs are almost ubiquitous in research papers and large-scale deployments. With rapid product updates and advanced GPU interconnect technology, NVIDIA's position has become even more solid. Even NVIDIA's CEO, Jensen Huang, boldly suggested, "Every government should have its own large language model to protect national assets."

    However, this heavy reliance on NVIDIA has sparked some concerns. As a result, tech giants like Google, Meta, and OpenAI have begun actively exploring alternative hardware solutions, seeking more options to break free from the constraints of a single supplier.
    * Competitors: Established rivals like AMD and Intel are striving to catch up but remain significantly behind NVIDIA.
    * A handful of AI chip startups, such as Cerebras and Groq, are gaining some momentum. Unlike NVIDIA, which dominates the training hardware market, these startups primarily focus on providing inference interfaces and cloud services, differentiating themselves by offering faster and more cost-effective solutions than NVIDIA.

- **Talent Flow from Major Labs**
    Top AI labs like OpenAI and DeepMind have recently experienced a brain drain, enabling well-funded newcomers such as Sakana AI and H Company to rise rapidly. These new challengers, led by renowned researchers, focus on specific AI domains or innovative architectures, showcasing the diversification and deepening of the AI ecosystem.

    However, transitioning from research to entrepreneurship is not always smooth sailing. Some high-profile projects have already encountered significant challenges in practical operations, highlighting the gap between technological breakthroughs and commercial implementation.

- **Penetration into Vertical Industries**
    AI is making significant strides across various sectors! Even the traditionally "conservative" legal industry is finally seeing the large-scale application of legal tech. In programming, AI development tools like GitHub Copilot have become invaluable assistants for many programmers. In autonomous driving, Wayve and Waymo are steadily advancing, while Cruise has recently encountered some challenges.

    In the medical field, AI is also gaining momentum: mRNA-based personalized cancer therapies are showing immense potential, while AI-driven drug development companies are continuously integrating resources and growing rapidly, injecting more innovation into the healthcare industry!

- **Emerging Technologies & Applications**
    Some emerging AI fields are rapidly rising, brimming with opportunities and challenges. For instance, humanoid robot companies have attracted substantial investments, but to truly materialize, they must overcome both technological and market hurdles.

    Simultaneously, breakthroughs in voice-to-voice AI technology have enabled conversations that are nearly on par with human levels, sparking a wave of anticipation for the future of voice interaction. In the realm of video generation, multiple contenders are vying to enhance the quality of technology and its scalable application.

    However, some AI-driven consumer products, such as the Rabbit R1 and Humane AI Pin, have not lived up to expectations. This underscores the fact that there are still numerous challenges to overcome in transitioning from impressive technology to practical, user-friendly products.

- **Ethical and Legal Challenges**
    With the widespread application of AI technology, issues surrounding copyright and legality are increasingly coming to the forefront. Model developers are often questioned by content creators and media companies regarding the legality of their data usage. However, courts have yet to provide a clear stance on what constitutes "fair use" in AI training.    

    Additionally, a new phenomenon known as "pseudo-acquisition" is beginning to spark debate. This practice involves large tech companies hiring only the core team of an AI startup rather than acquiring the entire company. Such maneuvers have already caught the attention of regulatory bodies, and it is likely that more rules addressing this issue will be introduced in the future.    

- **AI Economics**
    An increasing number of enterprises are adopting "AI-first" products, which boast strong user retention, and the revenue growth of AI companies far outpaces that of traditional SaaS companies. However, many AI firms are still exploring how to establish a truly sustainable profit model.

    Meanwhile, several emerging innovative fields are rapidly gaining momentum, brimming with vitality and opportunities:

    - **The Post-Sora Era of AI Video**
        The field of AI video has entered a phase of rapid development following Sora, branching into two main trajectories: closed-source models and open-source models:
        - **Closed-Source Models**: These include a series of models (such as Gen-3, D.M, Kling, etc.) launched by technology companies like Runway, LUMA AI, ByteDance, and Kuaishou, which have gradually evolved to higher versions (e.g., D.M 1.6 and Kling 1.5). These models continue to enhance their functionality and precision, offering increasingly robust support for video generation.
        - **Open-Source Models**: Centered around the Open-Sora series and complemented by emerging projects like EasyAnimate and the CogVideo-X series, these models are driving the growth of the open-source community. They provide developers with more accessible tools and opportunities for collaboration.

        The following diagram illustrates the key milestones and version iteration trajectory of AI video technology from mid-2024 to the end of the year. It highlights the parallel advancement of open-source and closed-source models, as well as the gradual maturation of technology implementation and application.

        ![image](/image/ossAI/SyLtBGWdkg.png)
        > https://ailab-cvc.github.io/VideoGen-Eval/

    - **AI Coding**
        As shown in the figure below, AI programming has gradually become mainstream. Notable AI programming tools include Cursor and Devin internationally, while domestically, there are ByteDance's Doubao MarsCode, Alibaba's Tongyi Lingma, and Baidu's Wenxin Kuaima, among others.

        ![image](/image/ossAI/r1G1QQbOJg.png)

    - **AI Search**
        Startups like Perplexity are leading the charge by leveraging AI to provide precise summaries for search queries, sparing users from being overwhelmed by hundreds of links. This approach has rapidly attracted a global user base, propelling the company to a valuation of $9 billion. Meanwhile, tech giants such as Google, Bing, and ChatGPT 4o are also making significant strides in the AI search domain, setting the stage for an intensely competitive future.

    - **AI Consumer Hardware**
        However, some AI-driven consumer devices, such as the smart glasses developed through the collaboration between Meta and Rayban, have initially garnered market attention and acceptance. Domestically, the launch of the **ShineGo AI glasses** at the end of 2024 marks a significant advancement in the smart wearable device market in China. Their multifunctionality and convenience make them competitive in the marketplace.

        Of course, some devices, such as the Rabbit R1 and Humane AI Pin, have failed to meet expectations, highlighting the challenges of translating AI technology into practical consumer products.

    - **Embodied AI and AI Agents** will be discussed in detail in later chapters.

- **Investment Boom**

    **The AI investment boom continued in 2024**, with total investment nearing $100 billion. Notably, a clear watershed has emerged between the "pre-GPT-4" and "post-GPT-4" eras, with large-scale funding rounds of $250 million or more dominating the landscape. The total valuation of AI companies has soared to nearly $9 trillion, primarily driven by a handful of publicly traded firms.  

    However, the IPO market remains stagnant, and merger and acquisition activities are declining, reflecting regulatory pressures and market uncertainties.  

    **Capital flow in the open-source AI sector has significantly accelerated**, with large-scale funding deals becoming the norm. Over the past two years, this sector has completed more than 60 transactions, totaling over $13 billion. Remarkably, 45% of these deals were Series A or later-stage funding rounds, indicating that investors are increasingly focusing on projects that have entered the growth phase, optimistic about their potential and future prospects.

    **Open-Source AI Startups Attract Significant Capital Investment**
    * Scale AI completed a $1 billion Series F funding round. 
    * Mistral AI secured $640 million in a Series B funding round. 
    * Together AI raised $106 million in a Series A funding round.
    * Supabase and AutoGPT are also seen as having the potential to attract further investment.

    **YC Investment in Startups (Approximately 250+ Companies)**
    Y Combinator (commonly referred to as YC) is a highly renowned startup accelerator in the United States. Since its founding in 2005, it has been hailed as the "cradle of top-tier startups." YC hosts two startup programs each year: the Winter Batch (January to March) and the Summer Batch (June to August), providing initial investment and resource support to participating startups.

    YC's startup accelerator culminates in the final Demo Day. On Demo Day, all teams present their results of going from zero to one to investors, while also quickly establishing connections with numerous investment firms. It can be said that this is a crucial moment for startups to gain investment and exposure.

    All AI projects in the Summer 2024 (S24) accelerator fully demonstrate that the AI startup boom in Silicon Valley is continuing to heat up! 

    ![image](/image/ossAI/HJ5HYGWukx.png)

    > https://www.ycombinator.com/companies?batch=S24

- **Acquisitions Surge**
    - Nvidia acquired Deci AI for $300 million
    - Other acquisitions:
    <!-- ![image](/image/ossAI/r13iF7bO1e.png) -->
    <center> Source: Founder Park Research Center </center>
    **2024 AI Company Acquisition Statistics**
| **Report Date** | **Company** | **Valuation** | **Description** | **Acquisition News** |
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
| **February 2024** | **Perplexity** | $3B | AI search tool | Its management is in acquisition discussions with four companies |

- **AI Graveyard**

    Starting a business is tough, and AI is especially challenging: The famous AI Graveyard quickly records a large number of fallen AI startups. However, we can expect that in the future, many more entrepreneurs and investment firms will continue to rush into the AI innovation field. AI entrepreneurs never die; they just fade away!

    ![image](/image/ossAI/HkxgAQW_1x.png)
    > Source：https://dang.ai/ai-graveyard

### 3.3 Policy: AI Regulation, Economic Impact, and the Evolving Geopolitics of AI

- **US AI Regulatory Trends**
    The Biden administration issued an executive order to regulate the most advanced AI models. Specifically, it requires models trained with more than 1026 FLOPS of computing power to report to the federal government and submit security test results before going public. However, since this order is an executive order, it can be easily revoked by future administrations, so its long-term impact remains uncertain.

    Meanwhile, individual states have started to introduce their own AI regulations, with California's SB 1047 bill being the most comprehensive but also the most controversial. However, due to strong opposition from many Silicon Valley leaders, the bill was ultimately vetoed by the Governor of California.

- **EU AI Act Passed**
    After long discussions and lobbying, the European Parliament finally passed the AI Act, becoming the first comprehensive AI regulatory framework in the world. The act will be implemented in phases and adopts a tiered management approach for foundational models.

    However, major US tech companies have faced some challenges in adapting to these new regulations in the EU. For example, Anthropic's AI model, Claude, was not available to European users until May 2024, and Meta has temporarily withheld multimodal models from the European market. These examples highlight that multinational tech companies still need further adjustments and adaptations to comply with the EU's strict AI regulations.

- **Data Collection Scrutiny**
    As the demand for data grows among model developers, the policies surrounding the collection of user data have come under increasing scrutiny and attention. For example, Meta was required to offer EU users an option to "opt out of global data participation," while X (formerly Twitter) has ceased using public posts from European users to train AI models. These changes reflect the growing emphasis on protecting user privacy.

- **Global AI Competitive Landscape**
    The Japanese government is actively supporting AI entrepreneurship and venture capital, hoping to inject new vitality into the economy through the AI boom. At the same time, as cutting-edge AI laboratories face increasing funding demands, some sovereign wealth funds are starting to play a more significant role in AI investments. This situation has also raised concerns about national security, as some of the funding may come from abroad, increasing the potential risks related to sensitive technologies.

- **Public Computing Power Infrastructure**
    The UK, US, and EU are all working to increase the supply of public computing resources, but compared to private companies, the resources available are still somewhat limited. Meanwhile, the Indian government has proposed an ambitious plan: they are willing to fund half of the costs to help build large-scale GPU clusters, with the condition that private companies cover the remaining expenses. This collaborative model opens up new possibilities for cooperation between the public and private sectors.

- **Energy Consumption Issues**
    With the rapid development of AI, large tech companies are struggling to meet the challenge of achieving "net-zero emissions" due to a significant increase in energy consumption. At the same time, the growth of AI has put a strain on existing energy infrastructure. Some countries have even started to restrict the construction of new data centers in order to control the rapid growth in energy demand.

### 3.4 Safety: Identifying and Mitigating the Catastrophic Risks of Future High-Capability AI Systems

- **Shift in AI Safety Attitudes**
    In 2024, discussions surrounding AI safety saw an interesting shift. The concerns of "AI is dangerous" from 2023 evolved into a more positive attitude of "come use my AI application" in 2024. OpenAI's "internal turmoil" further signified the beginning of a backlash against the narrative of "AI poses risks."

    Despite the more optimistic atmosphere, governments around the world have not slowed down their efforts to govern AI safety. The UK was the first to establish the world’s first AI Security Institute (AISI, was AI Safety Institute), followed by the US, Japan, and Canada, all of whom are working to ensure that AI development is both efficient and safe.

- **New Focus in AI Safety Research**
    Researchers are increasingly focusing on "jailbreaking" attacks on AI systems. Although major labs have ramped up research into defending against these types of attacks, red team tests continue to successfully breach AI defenses.

    What’s even more interesting is that research has revealed more subtle forms of attack, such as "sneaky tampering" with the preference data used to train AI models (RLHF, or reinforcement learning with human feedback), subtly manipulating the behavior of the model. These findings indicate that AI safety remains an ongoing cat-and-mouse game.

- **Progress and Limitations of Alignment Techniques**
    In the alignment techniques aimed at making AI more "obedient," there have been several new attempts and challenges. For example, Direct Preference Optimization (DPO) has gained attention as an alternative to RLHF (Reinforcement Learning with Human Feedback), but research has found that it may encounter similar "over-optimization" issues.

    At the same time, due to the advantage of supporting online learning, RLHF is still unlikely to be fully replaced in the short term. To better address these issues, researchers are trying to combine the strengths of both approaches. For example, they are exploring a new method called "Direct Alignment Architecture Framework" (DAAF), which aims to find more efficient and stable solutions.

- **Breakthroughs in AI Explainability**
    Anthropic recently successfully used Sparse Autoencoders (SAE) to analyze the internal activations of Claude 3 Sonnet, giving us a clearer understanding of how the model "thinks." Following that, OpenAI improved SAE technology, making it applicable to larger-scale models.

    These advancements make it possible to "open the AI black box," helping to reveal the internal workings of the model. However, this technology also raises some concerns—if misused, it could lead to privacy or security risks, reminding us that while pursuing transparency, we must also exercise caution.

- **Biological Risks**  
    Previous research by Anthropic raised concerns that large language models (LLMs) could accelerate the emergence of biological threats, but other labs have struggled to replicate this result. However, researchers also emphasize that, compared to LLMs, tools specifically designed for biological purposes (such as protein folding, design, and gene-editing tools) may pose more direct risks. Therefore, focusing on the safe use of these tools is becoming even more important.

- **The Threat of AI Misuse**
    Research from Google DeepMind points out that most instances of AI misuse are not due to complex hacking techniques, but rather because certain capabilities of generative AI are too easily accessible. For example, deepfake technology has been used for fraud, harassment, and even the creation of illegal pornography. These issues have become a growing area of concern.

### 3.5 Looking Forward

- **Closing the Gap Between Open-Source and Closed-Source Models**
    Mistral and Llama, among other open-source models, have firmly established themselves within the AI community. By delivering efficient versions and demonstrating exceptional performance in benchmarks, they are competing with top-tier closed-source models like GPT and Claude, even surpassing them in certain metrics.

- **The Role of Open Source in the AI Lifecycle**
    - Open source continues to grow along the "enlightenment slope" of the AI cycle, driving value innovation.  
    - While Hugging Face and OpenAI dominate the field, codebases like MindsDB and Roboflow are also rising, with projects such as AutoGPT standing out prominently.

- **Open-Source Innovation Expands Downstream**
    - Extending from model and tool development to training and monitoring fields.
    - In 2024, around 150 companies are involved in open-source AI innovation, including model training, fine-tuning, and monitoring tools, indicating the maturation of the foundational toolchain.

- **Significant Growth in Funding and Deals** 
    - The transaction size and number of deals for open-source AI startups have surged, demonstrating immense potential.
    - For example, Nvidia acquired Deci AI for $300 million, Scale AI raised $1 billion, and Mistral AI secured $640 million, highlighting the high recognition of capital in this field.

### 3.6 Future Predictions: 10 predictions for AI developments in the next 12 months

1. **Massive Investment Draws Attention**: A sovereign nation might invest over $10 billion in a major U.S. AI lab, triggering national security reviews. 
2. **No-Code Creativity Goes Viral**: An app or website entirely created by someone without programming skills could go viral, potentially breaking into the top 100 on the App Store.
3. **Shift in Data Collection Policies**: As copyright cases go to trial, leading AI labs may make significant changes to their data collection practices.
4. **EU Relaxes AI Act**: Due to lawmakers' concerns about stifling innovation, the early implementation of the EU AI Act might be more lenient than expected.
5. **Open-Source AI Breaks Through**: An open-source model could surpass OpenAI's o1 model in benchmark tests (Editor's Note: DeepSeek and Kimi are making strides in this direction).
6. **NVIDIA's Dominance Remains Unshaken**: Challengers still cannot disrupt NVIDIA's leadership in the AI chip market.  
7. **Cooling Investment in Humanoid Robots**: Investment in humanoid robots may decline as companies struggle to find viable market directions.  
8. **Apple Advances On-Device AI**: Apple's breakthroughs in on-device AI research will accelerate the development of AI for personal devices.  
9. **AI Scientist Publishes Research**: A research paper generated by AI might be accepted by a major machine learning conference or workshop.  
10. **AI Video Game Takes Off**: A video game featuring generative AI-driven interactive elements could become a hit, offering a revolutionary gaming experience.

## 4. 2024 AI Status and Development in China

Compared to the **“Hundred-Model Battle”** of 2023, which left the industry dazzled, the AI market landscape has finally become clearer after a year of reshuffling.  

Major internet giants have now established relatively mature large-model capabilities. While aggressively expanding their cloud businesses, they have also deeply integrated AI models into their product ecosystems. Not only have they launched new AI applications, but many existing products have also been seamlessly aligned with large models—an important strategy for strengthening their **competitive moat**.  

Meanwhile, China’s **“Six AI Tigers”**—the startups aiming to compete with OpenAI—have spent the past year navigating challenging or successful funding rounds, securing their spots at the AI table. Each company is now carving out its own path in model development and application, showcasing diverse commercialization strategies.  

Additionally, startups in niche areas such as **edge AI models** and **video generation models** have demonstrated remarkable vitality. Though they may not match the scale of the tech giants, they have emerged as rising stars in their respective domains, with the potential to dominate their specialized tracks.  

After a year of consolidation, the industry is transitioning from chaos to stability. Tech giants continue their steady expansion, leveraging their vast resources, while startups are making bold moves in niche markets, injecting fresh energy and diversity into the AI ecosystem.

### 4.1 China's AI startup leader

**Top Domestic Large AI Models** 
Companies with Over 1 Billion RMB in Funding

<!-- ![image](/image/ossAI/BkamlN-_Jx.png) -->
| Company | 2024 Financing / Valuation | Total Raised Funds | Investors |
| -------- | -------- | -------- | -------- |
| Zhipu AI (智谱 AI) | March: Several billion RMB financing; June: Over $400M financing; September: Several billion RMB financing, with a total investment exceeding 20 billion RMB; December: $301M financing | Over 50 billion RMB | Beijing AI Industry Investment Fund, Mubadala Capital (UAE), Prosperity7, Keywin Capital, Junlian Capital, and other institutional investors |
| Moonshot AI (月之暗面) | March: 1 billion RMB financing; August: Over $3B valuation | Over $2B (~150 billion RMB) | Alibaba, Sequoia China, Xiaomi, Meituan, Hillhouse Capital, Tencent Investment, and other top-tier investors |
| Baichuan Intelligence (百川智能) | July: $500M in Series A funding; Soon to complete Series B with a $2B valuation | Over 7.5 billion RMB | Investors include Alibaba, Xiaomi, Tencent, and other major companies and financial investment institutions, along with the Beijing AI Industry Investment Fund, Sequoia, and other investors |
| MiniMax | March: Over $600M financing; Recent investment will push MiniMax valuation beyond $2.5B | Over 6 billion RMB | Alibaba, Sequoia, and top-tier investment institutions |
| 01.AI (零一万物) | August: New multi-hundred-million-dollar financing round completed | Over 10 billion RMB | Investors include Hillhouse International Strategy and Southeast Asia financial groups |
| StepFun (阶跃星辰) | December: Several hundred million USD Series B financing | Over 10 billion RMB | Core investors include Shanghai Lingang Investment and Sequoia, with strategic capital from Tencent Investment, Source Code Capital, and others |
| Beijing Wenge Technology (中科闻歌) | December: Several billion RMB strategic financing | Over 10 billion RMB | Beijing AI Industry Investment Fund |
| ModelBest (面壁智能) | December: Several hundred million RMB financing completed | Over 10 billion RMB | Led by Cambricon, Denglin Technology, Zhongke Chuangshi Fund, and Shunwei Capital, along with Beijing AI Industry Investment Fund and Yuanjing Investment, with Vanke as an independent investment consultant |

> Note: Statistics based on open-source information, data as of December 31, 2024.

**Major Product Lines of the Six Emerging AI Model Companies**

![image](/image/ossAI/HJX1eV-_kx.png)

| Company | To C Products | To B Products & Solutions |
| -------- | -------- | -------- |
| Zhipu AI (智谱) | Zhipu Qingyan (智谱清言) | BigModel Zhipu AI Open Platform: Solutions for smart vehicles, manufacturing, consumer goods, finance, government services, healthcare, gaming, cultural tourism, and AI agents. |
| MiniMax | HaiLuo AI (海螺AI), Xingye (星野), Talkie | MiniMax Open Platform: Solutions for office, entertainment, infrastructure services, and smart hardware |
| Baichuan Intelligence (百川智能) | BaiXiaoYing (百小应) | Baichuan Large Model Open Platform: Domain-enhanced models, full-chain domain enhancement toolchains, AI platforms, and tool-based applications. Industry solutions for healthcare, education, finance, manufacturing, and retail |
| StepFun (阶跃星辰) | Yilian (跃问), Maopeng (冒泡鸭) | StepFun Open Platform: Solutions for e-commerce, content creation, smart vehicles, local services, finance, AI manufacturing, gaming, and AI governance |
| Moonshot AI (月之暗面) | Kimi | Kimi Open Platform |
| 01.AI (零一万物) | Wanzhi (万知) | 01.AI Large Model Open Platform: Solutions for digital humans, marketing short video solutions, and AI infrastructure solutions  |

<center> Source: Jazzyear </center>

### 4.2 Chinese AI vendors start a global price war

The global price war was ignited by DeepSeek's astonishing performance and ultra-low pricing, prompting ByteDance's Doubao and Alibaba's Qwen to quickly follow suit, slashing prices to the bone and even pushing into negative margins!

![price_war_comparison](/image/ossAI/en/Hy70wzWdkl.png)
> <center> Note: Estimated input price - CNY$ per thousand tokens </center>

![inference_price_comparison](/image/ossAI/en/HJR3UG-dyx.jpg)
> <center>Inference Price Comparison of Leading Models from Chinese and International Companies</center>

## 5. World Modeling and Spatial Intelligence

500 million years ago, the emergence of vision shattered the darkness of the world, triggering one of the most profound evolutions in the history of life. Over the past decade, the development of artificial intelligence has been equally astonishing. As we begin to endow computers and robots with "spatial intelligence," much like the dawn of biodiversity in nature, this could potentially spark a "digital Cambrian explosion." As this revolution unfolds, the future of AI is brimming with limitless possibilities, filling us with anticipation and excitement!

### 5.1 World Modeling

The world model can autonomously understand how the world operates by learning from unlabeled data (similar to listening to someone speak without needing explanations), completely without requiring explicit instructions.

The architecture of the world model consists of six modules, each responsible for different tasks:
1. **Configurator**: Manages and controls overall operations.
2. **Perception Module**: Understands the current state, acting as the AI's "sensory organs." 
3. **World Model**: Predicts what might happen next, akin to the AI's brain speculating about the future. 
4. **Cost Module**: Calculates the potential costs of each choice, helping to evaluate gains and losses.
5. **Action Module**: Plans the next steps of action, ensuring clear objectives.
6. **Short-Term Memory Module**: Tracks the current state and related cost information, ensuring the AI doesn't "short-circuit."

This set of modules functions like a small team, working together to help the AI better understand and respond to the dynamic changes in the world!
![image](/image/ossAI/rJlXM2APke.png)

### 5.2 Spatial Intelligence

From a technological development perspective, **World Models** bring a completely new approach to the field of artificial intelligence. The key idea is to convert the perceived information into an abstract "world map" that helps AI understand and predict the dynamic changes in its surrounding environment.

The core design concept of this model is to use historical data to construct a digital framework that simulates the real-world environment. In other words, a world model functions like a smart "virtual laboratory," allowing AI to learn, predict, and adapt to reality more efficiently within this digital world.

### 5.3 Application Examples (partial)

- **Urban Planning**
    Tokyo is building its own 3D digital twin city with an accuracy that can achieve an absolute position error of less than 10 centimeters! This digital model not only includes LiDAR point clouds (high-precision laser scan data), but also detailed CityGML data (used to represent city buildings and structures), as well as real-time traffic dynamics.

    According to Japan's plans, by 2030, Tokyo will become a fully digital twin city, where seamless integration of information will cover everything from transportation to energy. By then, more and more buildings, homes, and factories will be transformed into virtual data, driving a comprehensive upgrade in urban management and planning!
    
    ![东京智能空间](/image/ossAI/BJ60emz_kg.jpg)

- **Traffic Management and Autonomous Driving**
    - **New South Wales Traffic Management**
        The integration of digital twins and artificial intelligence allows for real-time adjustments in traffic management to reduce congestion, thereby maximizing social benefits.
    - **China's Vehicle-Road-Cloud Integration + Real-time Digital Twin**
        Essentially, this is a "communication, sensing, and computation" network. Its core goal is to digitally represent the real world in real time, seamlessly connecting all smart devices to provide real-time data support, helping traffic and other industries achieve more efficient collaboration, decision-making, and processing.

        Specifically, by deploying AI-powered digital road base stations with "communication, sensing, and computation" capabilities at intersections, and combining them with AI roadside edge computing systems (AI-MRS), traffic managers can obtain dynamic information about all traffic participants within a 300-meter radius of the intersection. Based on this data, the system can instantly construct a digital twin model to provide precise, real-time services to all vehicles within the range, making traffic smarter and more efficient!
    
        ![中国智能化路车云](/image/ossAI/B1fUbmzu1e.jpg)
        > <center>China's Intelligent Vehicle-Road-Cloud Integration</center>

- **Medical Field**
    - **Disease Diagnosis**
        Spatial intelligence technology can perform 3D reconstruction and analysis of medical imaging data, helping doctors diagnose diseases more accurately. For example, by converting CT or MRI image data into three-dimensional models, it clearly shows the location, shape, and size of organs and lesions. This 3D information provides doctors with more intuitive and accurate diagnostic references, making complex cases easier to understand!
    - **Surgical Navigation and Decision Support**
    Spatial intelligence technology also offers surgical navigation and decision support for doctors. Through 3D modeling and analysis of a patient's anatomical structure, doctors can gain a clear understanding of the surgical site's anatomy and vascular distribution. This intuitive three-dimensional view not only enhances the precision of surgical operations but also significantly improves surgical safety, leading to better treatment outcomes for patients!

## 6. Embodied Intelligence

There is growing interest and investment in combining AI with robotics, known as "embodied intelligence." This term refers to giving robots both a "body" and "intelligence." Currently, this technology has entered a new phase characterized by deep integration with AI technology, where embodied intelligent robots are considered the most important and promising application direction.

This chapter will explain embodied intelligence, focusing on main technologies and recent advancements in "embodied intelligent robots." We will also delve into the industrial ecosystem behind it, its developmental trajectory, and the key players who are actively shaping this domain.

### 6.1 Concepts and connotations

Embodied intelligence refers to the integration of artificial intelligence into various physical entities to form intelligent systems, enabling these entities to possess the capabilities of autonomous perception, learning, decision-making, and action within physical environments. This allows them to flexibly adapt to and accomplish tasks in such environments.

The essence of embodied intelligence is reflected in three key aspects: physical interaction, generalization and adaptation, and autonomous evolution. These aspects emphasize the dynamic and complex nature of designing and developing intelligent systems.

**Embodied Intelligence System Framework**
![embodied_intelligence_system_framework 1](/image/ossAI/en/ry5T7VQd1x.jpg)
<center>Source: https://www.idc.com/getdoc.jsp?containerId=prCHC52780624 </center>

### 6.2 Key Technologies and Progress

The key to accelerating the development of embodied intelligent robots lies in technology, especially the rapid evolution of large AI models in recent times. Today's large models are not only rich in knowledge but also capable of understanding complex information, performing logical reasoning, and even "self-learning and upgrading." These capabilities have provided a tremendous boost to the development of embodied intelligent robots.

In embodied intelligence, robots need to possess four core capabilities: "perception, learning, decision-making, and action." In simple terms, they must be able to "see, think, decide, and move." To achieve this efficient feedback loop, robots must seamlessly integrate various technologies, with different modules offering multiple technical paths. This technological synergy is like piecing together a puzzle to form a complete intelligent robot.

**<center>Key Technologies of Embodied Intelligent Robots</center>**
![Key Technologies of Embodied Intelligent Robots](/image/ossAI/en/H1MqNNXdyg.png)
<center> https://www.idc.com/getdoc.jsp?containerId=prCHC52780624 </center>

### 6.3 Industry Ecology and Composition

For embodied intelligent robots to adapt to a wide range of application scenarios, they require the support of various technologies and products, as well as the seamless integration of these complex systems. To ensure the healthy development of the entire industry ecosystem, it is essential for all market players to collaborate and work together, enabling the path forward to be both far-reaching and stable.

**<center>Embodied Intelligent Robot Industry Ecosystem</center>**
![Embodied Intelligent Robot Industry Ecosystem](/image/ossAI/en/Syb-8NX_Je.png)
<center> Note: Red-box (China-based companies): https://www.idc.com/getdoc.jsp?containerId=prCHC52780624 </center>

Embodied intelligent robots are like highly sophisticated machines, with hardware and software serving as their two main pillars. On the hardware side, this includes components, infrastructure, and the robot's physical body—these are its "skeleton" and "muscles." On the software side, it represents its "brain" and "nervous system," including the robot's operating system, simulation platforms, datasets, AI large models, visual perception algorithms, motion control algorithms, and more, all of which are key to bringing it "to life."

Furthermore, the needs of different industries vary, and to allow robots to perform exceptionally in specific scenarios, application integration services are required. The establishment of standards and norms is akin to setting the "rules of the game," ensuring that all parties can collaborate smoothly and collectively drive the development of embodied intelligent robots.

### 6.4 Development Pathways and Modalities

In the embodied intelligence industry chain, everyone is working together to drive its development. Currently, there are two main development directions for embodied intelligent robots:
1. **Specialized Non-humanoid Robots**: These robots, such as collaborative robots and commercial service robots, focus on specific tasks in professional scenarios. They are designed for particular purposes, like assistants on assembly lines or food delivery robots, dedicated to specialized tasks.
2. **Multifunctional Humanoid Robots**: These robots are more like "all-rounders." Using a humanoid form, their goal is to handle a wider range of general tasks and become versatile assistants that can be used both at home and in the workplace.

In simple terms, one direction focuses on specialization, while the other pursues versatility.

**<center> Two Development Paths of Embodied Intelligent Robots</center>**
![Two Development Paths of Embodied Intelligent Robots-1](/image/ossAI/en/ByKQd4mdyg.jpg)
<center> https://www.idc.com/getdoc.jsp?containerId=prCHC52780624 </center>

### 6.5 Technology Provider Focus

- **Focus on Well-Defined Pain Points**  
    Utilize industry experience to prioritize vertical application scenarios that have clear problems, urgent needs, and a clear commercialization prospect for in-depth exploration and technological optimization. In simple terms, start with the "most pressing problems" to achieve more with less effort.

- **Leverage Data to Enhance R&D**  
    Combine open-source data with the actual application data, user feedback, and industry insights accumulated in-house. These valuable "first-hand materials" can help you develop and train embodied intelligent robots more efficiently.

- **Multiple Cooperation Models for Mutual Growth**  
    Explore different cooperation forms, such as technical collaboration, market expansion, or equity investment, to establish deep relationships with partners. This will help drive the efficient integration of hardware and software, such as collaboration between components and the robot's physical body, or AI models and the robot's body, thus accelerating real-world application.

### 6.6 Open Source Embodied Intelligent Robots

Currently, the field of embodied intelligent robots is rapidly advancing globally, particularly in China, where it has become a cutting-edge hotspot at the intersection of artificial intelligence and robotics. Embodied intelligent robots have not only achieved significant technological breakthroughs but are also beginning to make their mark in practical applications. Major tech companies and startups are entering the fray, launching innovative products tailored for industrial manufacturing, logistics, healthcare, education, home services, and more.

- **Development in China**
    In China, the progress of embodied intelligent robots is particularly noteworthy. Leveraging strong manufacturing capabilities, diverse application scenarios, and an open technological ecosystem, Chinese companies are quickly rising to prominence in this field. Several Chinese enterprises are actively creating and participating in open-source projects, fostering technological sharing and innovation. Below are some open-source embodied intelligent robot manufacturers and their open-source status. Among them, **Agibot**, founded by Zhihui Jun (a former Huawei engineer), has emerged as a standout star in the industry.

<center>

| **Manufacturer Name** | **Open-Source Project** | **Impact** |
| -------- | -------- | -------- |
| **Agibot** | Open-sourced the general-purpose embodied robot "Lingxi X1," achieving the production of the 1,000th unit in 2024 | Promoted the popularization of embodied intelligent robots and facilitated industry-wide technology sharing and collaboration |
| **Agibot** | Open-sourced AgiBot World, the world's first million-unit real-world dataset based on actual scenarios | Enhanced collaboration between industry and academia, accelerating advancements in the field of embodied intelligence |
| **Beijing Embodied Intelligent Robot Innovation Center** | Launched the "Tiangong Open-Source Initiative," open-sourcing resources for the embodied intelligence industry | Fostered technological innovation and ecosystem development in the field of embodied intelligence |
| **IO-AI** | Open-sourced an embodied intelligence dataset with over 500,000 entries, covering multiple scenarios and skills | Provided robust data support for the development of embodied intelligent robots, accelerating industry progress |
| **NimbRo** | Developed the NimbRo-OP2X, an adult-sized open-source 3D-printed humanoid robot | Offered a low-cost, high-performance research platform for institutions and developers, advancing humanoid robotics research |

</center>

<br>

- **Agibot's Open-Source Practices**
    Agibot has significantly propelled the industry forward through its **full-stack open-source approach**. They have not only made their core algorithms and code accessible but also provided hardware design plans (Lingxi X1). Furthermore, they open-sourced AgiBot World, the world's first million-unit real-world dataset based on actual scenarios. This dataset surpasses existing similar datasets, such as Google's Open X-Embodiment, in both scale and quality, offering ten times the long-distance data volume and a hundred times the scene coverage. This initiative has created a comprehensive open-source ecosystem. Such openness allows more developers and companies to participate in the development of embodied intelligent robots at a lower cost, accelerating the dissemination and innovation of technology.
<br>

![智元灵犀 X1 全栈开源机器人](/image/ossAI/ryMdIB7_1e.png)

<center> AGIBOT X1 Full-Stack Open Source Robot</center> 

<br>

- **Impact of Agibot's Full-Stack Open-Source Initiative**:
    1. **Lowered Technical Barriers**: By open-sourcing, more small and medium-sized enterprises as well as individual developers have the opportunity to enter the field of embodied intelligence, accelerating the diffusion of technology.
    2. **Strengthened Community Ecosystem**: Agibot has inspired a large number of developers to collaboratively optimize and refine related technologies, driving technological iteration across the industry. 
    3. **Innovation in Domestic Technology**: The open-source model showcases the technical prowess of Chinese enterprises while enhancing China's influence in the global embodied intelligent robotics sector. 
    4. **Accelerated Diversified Applications**: Through open-source initiatives, companies can quickly adapt technologies to meet the needs of various industries, facilitating the realization of product deployments.

The global embodied AI robotics industry is in its takeoff stage, and China is undoubtedly a key player in this transformation. The emergence of open-source pioneers like Zhiyuan Robotics has not only accelerated technological advancements but also set an example of open collaboration for the industry. In the future, as more enterprises and developers join the movement, embodied intelligent robots will demonstrate immense potential and value across a wide range of fields.

### 6.7 One more thing! Open Source Generative AI Enabling Embodied Intelligence, Genesis Officially Released

**Genesis** is an embodied intelligence research platform that integrates generative model capabilities. This platform consists of a general-purpose physics engine, a robotics simulation platform, a photorealistic rendering system, and a data generation engine. The data generation engine leverages generative AI technology to convert natural language into training data for various modules.  

The project was developed by a team led by Dr. Chuang Gan, Chief Scientist at the MIT-IBM Watson AI Lab. At the end of 2023, the team published a paper introducing RoboGen, a framework that uses generative AI to provide robots with unlimited learning data and fully automated training. This research gained global attention. After more than a year of development, the RoboGen framework was officially open-sourced as the Genesis embodied intelligence research platform, igniting widespread discussions across the internet. 

According to **OpenDigger** data, since its release on December 19, 2024, the Genesis project attracted over 500 developers to join discussions within just 10 days. 21 contributors have already participated in the project, and it has received nearly 20,000 stars on GitHub. This is definitely a project worth keeping an eye on!
<br>

## 7. AI Agent

This chapter primarily references the **"Evolution and Impact of AI Agents White Paper"** released by the World Economic Forum in 2024, the **"China AI Agent Industry Research Report"** published by Jazz Year Think Tank, and the CSET workshop report. The goal is to provide readers with a glimpse into the rapidly evolving and continuously updated field of AI Agents.

### 7.1 Course of Evolution

Starting in the 1950s, the field has evolved from simple rule-based, deterministic systems to complex systems capable of handling uncertainty, learning, and adapting. This progress has been driven by advancements in computing power, the exponential growth of data, and breakthroughs in algorithms, including the development of large models and machine learning techniques.

![image](/image/ossAI/Bkti9PQ_kx.png)

### 7.2 Definition and Core Components

- **AI Agent** is an autonomous system capable of perceiving its environment, making independent decisions, and taking actions to achieve specific goals. It consists of core components such as sensors, effectors, and a control center, enabling it to operate in both physical and digital environments. By receiving user input, perceiving the environment, planning decisions, and executing actions, it can effectively alter its surroundings.

    ![WEF-Core Components of an Agent](/image/ossAI/SkvhhPQ_Jx.png)

- 2024 marks the breakout year for AI Agents, as the industry shifts from Copilot-driven models to deeper explorations of AI Agent capabilities. As a result, highly automated Copilot products are often generalized under the broader concept of AI Agents in the market. The key difference between Copilots and AI Agents lies in **autonomous planning**. Copilots require human direction, whereas AI Agents directly tackle target tasks with autonomous memory, reasoning, planning, and execution capabilities. In its ultimate form, an AI Agent would only need an initial user instruction and final feedback, operating independently without human intervention throughout the process.

    ![Chatbot-Copilot-Agent small](/image/ossAI/en/rJTMI_7OJl.png)
    > <center>China AI Agent Industry Research Report by Jazz Year Think Tank</center>
<br>

- The main source of confusion between Copilot and AI Agent lies in the distinction between automation in the context of a workflow. From a results-oriented perspective, tasks can be infinitely broken down by humans, and some "Copilot + automation" solutions can fully automate individual work units. However, while these automated Copilot systems handle specific tasks independently, they still rely on human intervention to structure and direct workflows. In contrast, a true AI Agent autonomously orchestrates and executes an entire workflow without requiring manual task segmentation or oversight.


| **Name** | **Automation Implementation** | **Meaning** |
| -------- | -------- | -------- |
| **Chatbot** | / | Humans perform the majority of tasks, similar to consulting AI for opinions or information. The AI provides information and suggestions but does not directly handle tasks. |
| **Copilot** | Achieves automation through complex prompts | Humans and AI collaborate, sharing the workload equally. The AI drafts work based on human prompts, while humans set goals, make adjustments, and finalize the output. |
| **Agent** | Achieves automation by setting goals | The AI handles the majority of tasks, with humans responsible for setting goals, providing resources, and overseeing results. The AI breaks down tasks, selects tools, manages progress, and autonomously concludes work upon achieving the goal. |
<br>

### 7.3 Types and Characteristics

These include simple reflex agents, model-based reflex agents, goal-based agents, and utility-based agents, each with distinct decision-making methods and characteristics, ranging from straightforward rule mapping to complex multi-objective trade-off decisions. Currently, many AI Agent architectures are built on large language models and possess the capability for multi-component collaboration, such as AI Agents in automotive infotainment systems.

1. **Advanced AI Agent**: An AI entity with strong autonomy, built on large models and composed of multiple components, capable of handling complex tasks and continuously learning.

    ![image](/image/ossAI/SyFEsPQuyg.png)

2. **AI Agent System**: A system in which multiple AI agents with different functions work collaboratively to accomplish more complex tasks.

3. **Multi-Agent System (MAS)**: A system that integrates multiple intelligent autonomous entities (including AI agents, AI agent systems, and human users) designed to interact and collaborate to achieve a common goal. Examples include autonomous driving systems. MAS consists of multiple independent agents or agent systems working together, with architectures that may involve networks and supervisory mechanisms. These systems enhance efficiency and capabilities but also face challenges in agent communication and interoperability, such as those encountered in traffic management applications.

    ![image](/image/ossAI/BkeDowm_yx.png)

4. **The Structure and Relationship Between AI Agents, AI Agent Systems, and Multi-Agent Systems (MAS)**

    ![WEF-Structure of a multi-Agent Systems](/image/ossAI/HJgpVRwQOyx.png)

### 7.4 Work paradigms are being upended

- The commercial value of AI Agents revolves around differences in work paradigms, and a shift in these paradigms signifies the beginning of a new era of intelligence.

    **<center>AI Agent Capability Requirements by Automation Level</center>**
    ![AI Agent Capability Requirements by Automation Level](/image/ossAI/en/SJera_Q_ke.png)
    > Jazz Year Think Tank - China AI Agent Industry Research Report - AI Agent Automation Levels


- **Process-Oriented vs. Goal-Oriented**

    ![The Enhancement of AI Agent Capabilities Drives the Shift in Work Paradigms](/image/ossAI/en/BJINR_QOkg.png)
    > <center> Jazz Year Think Tank - China AI Agent Industry Research Report - AI Agents Drive a Shift in Work Paradigms </center>
<br>

### 7.5 Areas of application

AI Agents demonstrate broad application potential across multiple fields, including: 
- **Workflow Automation**: Enhancing enterprise efficiency. 
- **Personal Assistants**: Providing personalized services.
- **Healthcare**: Improving patient experience.
- **Education**: Supporting personalized learning.
- **...**

![Areas of application of AI Agent-small](/image/ossAI/en/ryOnktX_1e.png)

> <center> Jazz Year Think Tank - China AI Agent Industry Research Report - AI Agent Application Areas </center>


### 7.6 AI Agent Ecosystem Mapping in China

- China's AI Agent market has already attracted a diverse range of participants, including **internet giants, generative AI companies, enterprise SaaS providers, startups, and 3C (consumer electronics) companies**. These companies are leveraging their **technological expertise or industry knowledge** to quickly enter the market, securing a strong position in the emerging ecosystem. Additionally, an increasing number of enterprises are actively refining their products and exploring various application scenarios.
- As these pioneers gradually demonstrate their commercial value, the diversity of AI Agents in China will continue to expand, leading to an explosive growth in the number of enterprises investing in AI Agent technology.

![China AI Agent Ecosystem Map v1.0-small](/image/ossAI/en/r1juWY7OJg.png)
> <center> Jazz Year Think Tank - China AI Agent Industry Research Report - China AI Agent Ecosystem Map v1.0 </center>

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

### 7.7 Impacts and Response Measures

The widespread adoption of AI Agents has the potential to enhance productivity and improve customer experiences across various fields, such as software development, healthcare, education, and finance. However, it also comes with technical, socioeconomic, and ethical risks, including system failures, excessive reliance on technology leading to shifts in employment structures, and ethical dilemmas. To ensure the safe, reliable, and beneficial development of AI Agents, it is crucial to implement mitigation strategies, such as technological improvements, public education, the establishment of ethical guidelines, and strengthened regulatory oversight.

## 8. The Compressed 21st Century

At the end of this article, the editor would like to share a thought-provoking piece with you: **"[Machines of Loving Grace](https://darioamodei.com/machines-of-loving-grace)"**, a long-form essay published by Anthropic CEO Dario Amodei in October 2024. As we approach the 2025 Year of the Snake Spring Festival, let us reflect together on the potential prosperity and challenges that AI may bring to human society in the future.
<!-- >  推荐读者们细读译文：https://news.qq.com/rain/a/20241029A03T0400?utm_source=chatgpt.com -->

In his article, **Dario** explores the potential impact of powerful artificial intelligence (AI) on the **21st century**, asserting that AI is poised to achieve significant breakthroughs across multiple domains.

**Biology & Medicine**: Dario predicts that AI will accelerate advancements in biology and medicine, achieving in 5 to 10 years what would have originally taken 50 to 100 years. He refers to this phenomenon as the **"Compressed 21st Century"**, meaning that AI will enable humanity to accomplish a century’s worth of biomedical progress in a remarkably short period.

**Neuroscience & Mental Health**: Advances in AI are expected to significantly improve the treatment of most mental illnesses, potentially even curing them. Additionally, AI could expand human cognitive and emotional capacities, enhancing what Dario describes as "cognitive and psychological freedom."

**Economic Development & Poverty Alleviation**: Dario believes that AI can bring positive impacts to developing countries in areas such as healthcare, economy, and governance. However, he emphasizes that global collaboration is essential to ensure that these nations are not left behind.

**Peace & Governance**: Dario points out that if AI development follows the right trajectory, it could ultimately steer humanity toward rule of law, democracy, and enlightenment values. While this outcome is not guaranteed, statistical trends suggest that AI will accelerate progress in these directions, making the path clearer and the goals more defined.

**Work & Life Meaning**: The development of AI may bring challenges such as inequality, economic growth concerns, and ethical dilemmas, including the right to opt out of AI-driven systems. Nevertheless, Dario believes that AI has the potential to safeguard freedom, individual rights, and legal equality, ultimately contributing to the creation of a better world.

Finally, Dario emphasizes that while AI presents many challenges and risks, we should strive for positive outcomes that benefit everyone. He calls for unity and collective effort to navigate the challenges of the future together.
