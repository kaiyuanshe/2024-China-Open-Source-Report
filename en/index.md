---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "2024 China Open Source Annual Report"
  text: ""
  tagline: "KAIYUANSHE, in collaboration with multiple communities and organizations, has been releasing an annual comprehensive report on China's open-source industry for nearly a decade, providing longitudinal insights into the ecosystem."
  actions:
    - theme: brand
      text: 立即阅读 2024 年度报告
      link: /en/preface
    - theme: alt
      text: 往年报告
      link: https://kaiyuanshe.feishu.cn/wiki/wikcnUDeVll6PNzw900yPV71Sxd

features:
  - icon:
      src: "/image/home/KaiYuanShe-logo.png"
      width: 40
      height: 40
    title: KAIYUANSHE
    details: 'KAIYUANSHE (founded in 2014) is an open source community formed by individual volunteers committed to the open source cause, operating under the principles of "Contribution, Consensus, and Co-governance". As a steadfastly vendor-neutral, non-profit, and public-benefit organization, KAIYUANSHE upholds its vision of: "Rooted in China, Contributing Globally, Making Open Source a Lifestyle for the New Era". With core missions focused on: "Open Source Governance, Global Partnerships, Community Development and Project Incubation", KAIYUANSHE is dedicated to building a healthy and sustainable open source ecosystem.'
    link: https://kaiyuanshe.cn/
    linkText: Official Site
  - icon:
      src: "/image/home/x_lab2017_logo.jpg"
      width: 40
      height: 40
    title: X-lab 开放实验室
    details: X-lab Open Laboratory is positioned as an open collective for open source research and innovation, consisting of experts and engineers from prestigious universities, startups, and leading internet/IT companies both in China and internationally, forming a community focused on open innovation in the open source software industry. The team's professional backgrounds span interdisciplinary fields including computer science, software engineering, data science, business administration, sociology, and economics, with long-term research and practice in open source strategy, open source metrics, and open source digital ecosystems. Currently, X-lab has made significant contributions in areas such as open source governance standard development, open source community behavior measurement and analysis, community process automation, as well as comprehensive open source data governance and insights.
    link: https://github.com/X-lab2017
    linkText: GitHub link
---

<script setup>
import { withBase } from 'vitepress'
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

// 召集人
const convener = [
    {
    avatar: withBase('/image/home/avatar/王伟.jpg'),
    name: 'Wei (Will) Wang ',
  },
]

// 卷首语
const forewordMembers = [
  {
    avatar: withBase('/image/home/avatar/江波.jpg'),
    name: 'Bo (Nadia) Jiang ',
  }
]

// 问卷篇
const questionnaireDesignMembers = [
  {
    avatar: withBase('/image/home/avatar/赵思嘉.jpg'),
    name: 'Sijia Zhao',
  },
];


// 数据篇
const dataPieceMembers = [
  {
    avatar: withBase('/image/home/avatar/方蕴仪.png'),
    name: 'Yunyi Fang',
    title: "Marcro Insights",
  },
  {
    avatar: withBase('/image/home/avatar/游明东.jpg'),
    name: 'Mingdong You',
    title: "Marcro Insights",
  },
  {
    avatar: withBase('/image/home/avatar/赵思嘉.jpg'),
    name: 'Sijia Zhao',
    title: "Marcro Insights",
  },
  {
    avatar: withBase('/image/home/avatar/黄帆.png'),
    name: 'Fan Huang',
    title: "OpenRank Rankings",
  },
  {
    avatar: withBase('/image/home/avatar/赵生宇.jpg'),
    name: 'Shengyu (Frank) Zhao',
    title: "OpenRank Rankings",
  },
  {
    avatar: withBase('/image/home/avatar/彭佳恒.jpg'),
    name: 'Jianheng Peng',
    title: "Enterprise Insights",
  },
  {
    avatar: withBase('/image/home/avatar/夏倍蓓.png'),
    name: 'Beibei Xia',
    title: "Enterprise Insights",
  },
  {
    avatar: withBase('/image/home/avatar/夏小雅.jpg'),
    name: 'Xiaoya Xia',
    title: "Foundation Insights",
  },
   {
    avatar: withBase('/image/home/avatar/王婕.jpg'),
    name: 'Jie Wang',
    title: "Foundation Insights",
  },
  {
    avatar: withBase('/image/home/avatar/韩凡宇.jpg'),
    name: 'Fanyu Han',
    title: "Technology Insights",
  },
  {
    avatar: withBase('/image/home/avatar/娄泽华.jpg'),
    name: 'Zehua Lou ',
    title: "Technology Insights",
  },
  {
    avatar: withBase('/image/home/avatar/王衍童.jpg'),
    name: 'Yantong Wang',
    title: "Technology Insights",
  },
  {
    avatar: withBase('/image/home/avatar/李鸿斌.jpg'),
    name: 'Hongbin Li',
    title: "Open Source Project Insights",
  },
  {
    avatar: withBase('/image/home/avatar/史雪涛.jpg'),
    name: 'Xuetao Shi',
    title: "Open Source Project Insights",
  },
  {
    avatar: withBase('/image/home/avatar/毕枫林.jpg'),
    name: 'Fenglin Bi',
    title: "Developer Insights",
  },
  {
    avatar: withBase('/image/home/avatar/黄温瑞.jpg'),
    name: 'Wenrui Huang',
    title: "Developer Insights",
  },
  {
    avatar: withBase('/image/home/avatar/谢思怡.jpg'),
    name: 'Siyi Xie',
    title: "Commercial Open Source Insights",
  },
  {
    avatar: withBase('/image/home/avatar/朱志炜.jpg'),
    name: 'Zhiwei Zhu',
    title: "Commercial Open Source Insights",
  },
  {
    avatar: withBase('/image/home/avatar/何德鑫.jpg'),
    name: 'Dexin He',
    title: "Open Source Insights for Higher Education"
  },
]

// 商业化篇
const commercializationMembers = [
  {
    avatar: withBase('/image/home/avatar/袁滚滚.jpg'),
    name: 'Yi (Wenny) Yuan ',
  },
  {
    avatar: withBase('/image/home/avatar/徐至行.jpg'),
    name: 'Zhixing Xu (Guofang Innovation)',
  },
  {
    avatar: withBase('/image/home/avatar/刘景媛.jpg'),
    name: 'Jingyuan Liu (Delian Capital)',
  },
  {
    avatar: withBase('/image/home/avatar/丁宁.jpg'),
    name: 'Ning Ding (INP)',
  },
  {
    avatar: withBase('/image/home/avatar/刘超.jpg'),
    name: 'Chao Liu (Atypical Ventures)',
  },
];

// 开源人工智能篇
const aiMembers = [
  {
    avatar: withBase('/image/home/avatar/刘天栋.jpg'),
    name: 'Ted Liu',
  },
  {
    avatar: withBase('/image/home/avatar/庄表伟.jpg'),
    name: 'Biaowei Zhuang',
  },
  {
    avatar: withBase('/image/home/avatar/赵生宇.jpg'),
    name: 'Shengyu (Frank) Zhao',
  },
];

// 大事记篇
const memorabiliaMembers = [
  {
    avatar: withBase('/image/home/avatar/袁滚滚.jpg'),
    name: 'Yi (Wenny) Yuan',
    title: "Open Source Technologies, Open Source Commercialization",
  },
  {
    avatar: withBase('/image/home/avatar/INP.png'),
    name: 'INP',
    title: "Open Source Technologies",
  },
  {
    avatar: withBase('/image/home/avatar/王峰.jpeg'),
    name: 'Feng (Jason) Wang',
    title: "Open Source Software Security",
  },
  {
    avatar: withBase('/image/home/avatar/庄表伟.jpg'),
    name: 'Biaowei Zhuang',
    title: "Open Source Community Ecology, Open Source Policies",
  },
  {
    avatar: withBase('/image/home/avatar/卫剑钒.jpg'),
    name: 'Jianfan (Sir) Wei',
    title: "Open Source Licensing and Compliance Governance",
  },
  {
    avatar: withBase('/image/home/avatar/梁尧.jpg'),
    name: 'Yao (Leon) Liang',
    title: "Open Source Commercialization",
  },
  {
    avatar: withBase('/image/home/avatar/李明康.jpg'),
    name: 'Mingkang (Bright) Li',
    title: "Open Source Education",
  },
]

// 翻译团队
const translations = [
  {
    avatar: withBase('/image/home/avatar/江波.jpg'),
    name: 'Bo (Nadia) Jiang',
    title: 'Chairperson, KAIYUANSHE',
  },
  {
    avatar: withBase('/image/home/avatar/李明康.jpg'),
    name: 'MingKang (Bright) Li',
    title: 'Board of Directors, KAIYUANSHE',
  },
  {
    avatar: withBase('/image/home/avatar/梁尧.jpg'),
    name: 'Yao (Leon) Liang',
    title: 'Vice Chairperson, KAIYUANSHE',
  },
  {
    avatar: withBase('/image/home/avatar/王峰.jpeg'),
    name: 'Feng (Jason) Wang',
    title: 'Director of Marketing, SecTrend',
  },
  {
    avatar: withBase('/image/home/avatar/袁滚滚.jpg'),
    name: 'Yi (Wennyl) Yuan',
    title: 'KAIYUANSHE Member, Google Women Techmakers Ambassador',
  },
  {
    avatar: withBase('/image/home/avatar/赵思嘉.jpg'),
    name: 'Sijia Zhao',
    title: 'X-Lab Open Lab member',
  },
  {
    avatar: withBase('/image/home/avatar/刘天栋.jpg'),
    name: 'Ted Liu',
    title: 'Co-Founder of KAIYUANSHE, ASF Member, https://www.linkedin.com/in/liuted',
  },
  {
    avatar: withBase('/image/home/avatar/FeiTeng.jpg'),
    name: 'Fei Teng',
    title: 'Volunteer, https://www.linkedin.com/in/fei-t-3756356',
  },
  {
    avatar: withBase('/image/home/avatar/卫剑钒.jpg'),
    name: 'Jianfan (Sir) Wei',
    title: 'KAIYUANSHE Member, Translator of The Cathedral & the Bazaar',
  },
  {
    avatar: withBase('/image/home/avatar/FeigeZhu.png'),
    name: 'Feige Zhu',
    title: 'FIT2CLOUD',
  },
  {
    avatar: withBase('/image/home/avatar/庄表伟.jpg'),
    name: 'Biaowei Zhuang',
    title: 'Board of Directors, KAIYUANSHE',
  },
]

// 整体报告汇总/编辑
const copyreaders = [
  {
    avatar: withBase('/image/home/avatar/赵思嘉.jpg'),
    name: 'Sijia Zhao',
  },
  {
    avatar: withBase('/image/home/avatar/刘天栋.jpg'),
    name: 'Ted Liu',
  },
];

// 基础设施支持
const infrastructureMembers = [
  {
    avatar: withBase('/image/home/avatar/丁文昊.png'),
    name: 'Wenhao Ding',
  },
]

// 设计/排版
// const artWorkers = [
//   {
//     avatar: withBase('/image/home/avatar/王军.jpg'),
//     name: '王军',
//   }
// ]

</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>Editorial Team</template>
  </VPTeamPageTitle>

  <VPTeamPageSection v-if="convener">
    <template #title>Facilitator</template>
    <template #members>
      <VPTeamMembers size="small" :members="convener" />
    </template>
  </VPTeamPageSection>

  <VPTeamPageSection v-if="forewordMembers">
    <template #title>Preface</template>
    <template #members>
      <VPTeamMembers size="small" :members="forewordMembers" />
    </template>
  </VPTeamPageSection>

  <VPTeamPageSection v-if="questionnaireDesignMembers">
    <template #title>Questionnaire Section</template>
    <template #members>
      <VPTeamMembers size="small" :members="questionnaireDesignMembers" />
    </template>
  </VPTeamPageSection>

  <VPTeamPageSection v-if="dataPieceMembers">
    <template #title>Data Analytics Section</template>
    <template #members>
      <VPTeamMembers size="small" :members="dataPieceMembers" />
    </template>
  </VPTeamPageSection>

  <VPTeamPageSection v-if="commercializationMembers">
    <template #title>OSS Commercialization</template>
    <template #members>
      <VPTeamMembers size="small" :members="commercializationMembers" />
    </template>
  </VPTeamPageSection>

  <VPTeamPageSection v-if="aiMembers">
    <template #title>Open Source AI</template>
    <template #members>
      <VPTeamMembers size="small" :members="aiMembers" />
    </template>
  </VPTeamPageSection>

  <VPTeamPageSection v-if="memorabiliaMembers">
    <template #title>Open Source Chronicle</template>
    <template #members>
      <VPTeamMembers size="small" :members="memorabiliaMembers" />
    </template>
  </VPTeamPageSection>

  <VPTeamPageSection v-if="copyreaders">
    <template #title>Translation Team</template>
    <template #members>
      <VPTeamMembers size="small" :members="translations" />
    </template>
  </VPTeamPageSection>

  <VPTeamPageSection v-if="copyreaders">
    <template #title>Overall Report Consolidation & Editing</template>
    <template #members>
      <VPTeamMembers size="small" :members="copyreaders" />
    </template>
  </VPTeamPageSection>

  <VPTeamPageSection v-if="infrastructureMembers">
    <template #title>Infrastructure Support</template>
    <template #members>
      <VPTeamMembers size="small" :members="infrastructureMembers" />
    </template>
  </VPTeamPageSection>

  <!-- <VPTeamPageSection v-if="artWorkers">
    <template #title>设计/排版</template>
    <template #members>
      <VPTeamMembers size="small" :members="artWorkers" />
    </template>
  </VPTeamPageSection> -->
</VPTeamPage>

<!-- <VPTeamPageTitle>
  <template #title>点评专家</template>
  <template #lead>
    （按姓氏字母顺序列名）
  </template>
</VPTeamPageTitle>

<p :style="{fontSize: '1.5rem', textAlign: 'center'}">郭雪, 姜宁, 蒋涛, tison, 卫剑钒, 余杰</p> -->

<VPTeamPageTitle>
  <template #title>Collaborative Communities/Organizations</template>
</VPTeamPageTitle>

<div :style="{display: 'flex', width: '100%', center, flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center'}">
  <img :style="{display: 'flex', width: '26%', objectFit: 'contain'}" src="/image/home/KaiYuanShe-logo.png"/>
  <img :style="{display: 'flex', width: '26%', objectFit: 'contain'}" src="/image/home/x_lab2017_logo.jpg"/>
  <img :style="{display: 'flex', width: '26%', objectFit: 'contain'}" src="/image/home/logo-dark-FIT2CLOUD.svg"/>
  <img :style="{display: 'flex', width: '26%', objectFit: 'contain'}" src="/image/home/KWDB.png"/>
  <img :style="{display: 'flex', width: '26%', objectFit: 'contain'}" src="/image/home/logo_gitee_light.png"/>
</div>

<VPTeamPageTitle>
  <template #title>Media Partners</template>
</VPTeamPageTitle>

<div :style="{display: 'flex', width: '100%',center}">
  <img :style="{display: 'flex', width: '50%', objectFit: 'contain'}" src="/image/home/csdn_logo.jpg"/>
  <img :style="{display: 'flex', width: '50%', objectFit: 'contain'}" src="/image/home/sf_logo.png"/>
</div>
