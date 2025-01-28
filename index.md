---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "2024 中国开源年度报告"
  text: ""
  tagline: 开源社联合多家单位，纵横近十年对中国开源行业的综合性报告，每年发布一次
  actions:
    - theme: brand
      text: 立即阅读 2024 年度报告
      link: /preface
    - theme: alt
      text: 往年报告
      link: https://kaiyuanshe.feishu.cn/wiki/wikcnUDeVll6PNzw900yPV71Sxd

features:
  - icon:
      src: "/image/home/KaiYuanShe-logo.png"
      width: 40
      height: 40
    title: 开源社
    details: 开源社（英文名称为“KAIYUANSHE”）成立于 2014 年，是由志愿贡献于开源事业的个人志愿者，依 “贡献、共识、共治” 原则所组成的开源社区。开源社始终维持 “厂商中立、公益、非营利” 的理念，以 “立足中国、贡献全球，推动开源成为新时代的生活方式” 为愿景，以 “开源治理、国际接轨、社区发展、项目孵化” 为使命，旨在共创健康可持续发展的开源生态体系。
    link: https://kaiyuanshe.cn/
    linkText: 官网
  - icon:
      src: "/image/home/x_lab2017_logo.jpg"
      width: 40
      height: 40
    title: X-lab 开放实验室
    details: X-lab 开放实验室定位为一个开源研究与创新的开放群体，是一群由来自国内外著名高校、创业公司、部分互联网与IT企业的专家学者与工程师所构成，聚焦于开源软件产业开放式创新的共同体。专业背景包括计算机科学、软件工程、数据科学、工商管理学、社会学、经济学等跨学科领域，长期思考并实践开源战略、开源测量学、开源数字生态系统等主题。目前已在包括开源治理标准制定、开源社区行为度量与分析、开源社区流程自动化、开源全域数据治理与洞察等方面做出了较有影响力的工作。
    link: https://github.com/X-lab2017
    linkText: GitHub 主页
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
    name: '王伟',
  },
]

// 卷首语
const forewordMembers = [
  {
    avatar: withBase('/image/home/avatar/江波.jpg'),
    name: '江波',
  }
]

// 问卷篇
const questionnaireDesignMembers = [
  {
    avatar: withBase('/image/home/avatar/赵思嘉.jpg'),
    name: '赵思嘉',
  },
];


// 数据篇
const dataPieceMembers = [
  {
    avatar: withBase('/image/home/avatar/方蕴仪.jpg'),
    name: '方蕴仪',
  },
  {
    avatar: withBase('/image/home/avatar/游明东.jpg'),
    name: '游明东',
  },
  {
    avatar: withBase('/image/home/avatar/赵思嘉.jpg'),
    name: '赵思嘉',
  },
  {
    avatar: withBase('/image/home/avatar/黄帆.jpg'),
    name: '黄帆',
  },
  {
    avatar: withBase('/image/home/avatar/赵生宇.jpg'),
    name: '赵生宇',
  },
  {
    avatar: withBase('/image/home/avatar/彭佳恒.jpg'),
    name: '彭佳恒',
  },
  {
    avatar: withBase('/image/home/avatar/夏倍蓓.jpg'),
    name: '夏倍蓓',
  },
  {
    avatar: withBase('/image/home/avatar/夏小雅.jpg'),
    name: '夏小雅',
  },
   {
    avatar: withBase('/image/home/avatar/王婕.jpg'),
    name: '王婕',
  },
  {
    avatar: withBase('/image/home/avatar/韩凡宇.jpg'),
    name: '韩凡宇',
  },
  {
    avatar: withBase('/image/home/avatar/娄泽华.jpg'),
    name: '娄泽华',
  },
  {
    avatar: withBase('/image/home/avatar/王衍童.jpg'),
    name: '王衍童',
  },
  {
    avatar: withBase('/image/home/avatar/李鸿斌.jpg'),
    name: '李鸿斌',
  },
  {
    avatar: withBase('/image/home/avatar/史雪涛.jpg'),
    name: '史雪涛',
  },
  {
    avatar: withBase('/image/home/avatar/毕枫林.jpg'),
    name: '毕枫林',
  },
  {
    avatar: withBase('/image/home/avatar/黄温瑞.jpg'),
    name: '黄温瑞',
  },
  {
    avatar: withBase('/image/home/avatar/谢思怡.jpg'),
    name: '谢思怡',
  },
  {
    avatar: withBase('/image/home/avatar/朱志炜.jpg'),
    name: '朱志炜',
  },
  {
    avatar: withBase('/image/home/avatar/何德鑫.jpg'),
    name: '何德鑫',
  },
]

// 商业化篇
const commercializationMembers = [
  {
    avatar: withBase('/image/home/avatar/袁滚滚.jpg'),
    name: '袁滚滚',
  },
  {
    avatar: withBase('/image/home/avatar/徐至行.jpg'),
    name: '徐至行',
  },
  {
    avatar: withBase('/image/home/avatar/刘景媛.jpg'),
    name: '刘景媛',
  },
  {
    avatar: withBase('/image/home/avatar/丁宁.jpg'),
    name: '丁宁',
  },
  {
    avatar: withBase('/image/home/avatar/刘超.jpg'),
    name: '刘超',
  },
];

// 开源人工智能篇
const aiMembers = [
  {
    avatar: withBase('/image/home/avatar/刘天栋.jpg'),
    name: '刘天栋',
  },
  {
    avatar: withBase('/image/home/avatar/庄表伟.jpg'),
    name: '庄表伟',
  },
  {
    avatar: withBase('/image/home/avatar/赵生宇.jpg'),
    name: '赵生宇',
  },
];

// 大事记篇
const memorabiliaMembers = [
  {
    avatar: withBase('/image/home/avatar/袁滚滚.jpg'),
    name: '袁滚滚',
  },
  {
    avatar: withBase('/image/home/avatar/INP.png'),
    name: 'INP',
  },
  {
    avatar: withBase('/image/home/avatar/王峰.jpg'),
    name: '王峰',
  },
  {
    avatar: withBase('/image/home/avatar/庄表伟.jpg'),
    name: '庄表伟',
  },
  {
    avatar: withBase('/image/home/avatar/卫剑钒.jpg'),
    name: '卫剑钒',
  },
  {
    avatar: withBase('/image/home/avatar/梁尧.jpg'),
    name: '梁尧',
  },
  {
    avatar: withBase('/image/home/avatar/李明康.jpg'),
    name: '李明康',
  },
]

// 整体报告汇总/编辑
const copyreaders = [
  {
    avatar: withBase('/image/home/avatar/赵思嘉.jpg'),
    name: '赵思嘉',
  },
  {
    avatar: withBase('/image/home/avatar/刘天栋.jpg'),
    name: '刘天栋',
  },
];

// 基础设施支持
const infrastructureMembers = [
  {
    avatar: withBase('/image/home/avatar/丁文昊.png'),
    name: '丁文昊',
  },
]

// 设计/排版
const artWorkers = [
  {
    avatar: withBase('/image/home/avatar/王军.jpg'),
    name: '王军',
  }
]

</script>



<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>编写团队</template>
  </VPTeamPageTitle>

  <VPTeamPageSection v-if="convener">
    <template #title>召集人</template>
    <template #members>
      <VPTeamMembers size="small" :members="convener" />
    </template>
  </VPTeamPageSection>

  <VPTeamPageSection v-if="forewordMembers">
    <template #title>卷首语</template>
    <template #members>
      <VPTeamMembers size="small" :members="forewordMembers" />
    </template>
  </VPTeamPageSection>

  <VPTeamPageSection v-if="questionnaireDesignMembers">
    <template #title>问卷篇</template>
    <template #members>
      <VPTeamMembers size="small" :members="questionnaireDesignMembers" />
    </template>
  </VPTeamPageSection>

  <VPTeamPageSection v-if="dataPieceMembers">
    <template #title>数据篇</template>
    <template #members>
      <VPTeamMembers size="small" :members="dataPieceMembers" />
    </template>
  </VPTeamPageSection>

  <VPTeamPageSection v-if="commercializationMembers">
    <template #title>商业化篇</template>
    <template #members>
      <VPTeamMembers size="small" :members="commercializationMembers" />
    </template>
  </VPTeamPageSection>

  <VPTeamPageSection v-if="aiMembers">
    <template #title>开源人工智能篇</template>
    <template #members>
      <VPTeamMembers size="small" :members="aiMembers" />
    </template>
  </VPTeamPageSection>

  <VPTeamPageSection v-if="memorabiliaMembers">
    <template #title>开源大事记</template>
    <template #members>
      <VPTeamMembers size="small" :members="memorabiliaMembers" />
    </template>
  </VPTeamPageSection>

  <VPTeamPageSection v-if="copyreaders">
    <template #title>整体报告汇总/编辑</template>
    <template #members>
      <VPTeamMembers size="small" :members="copyreaders" />
    </template>
  </VPTeamPageSection>

  <VPTeamPageSection v-if="infrastructureMembers">
    <template #title>基础设施支持</template>
    <template #members>
      <VPTeamMembers size="small" :members="infrastructureMembers" />
    </template>
  </VPTeamPageSection>

  <VPTeamPageSection v-if="artWorkers">
    <template #title>设计/排版</template>
    <template #members>
      <VPTeamMembers size="small" :members="artWorkers" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>

<!-- <VPTeamPageTitle>
  <template #title>点评专家</template>
  <template #lead>
    （按姓氏字母顺序列名）
  </template>
</VPTeamPageTitle>

<p :style="{fontSize: '1.5rem', textAlign: 'center'}">郭雪、姜宁、蒋涛、tison、卫剑钒、余杰</p> -->

<VPTeamPageTitle>
  <template #title>合作媒体</template>
</VPTeamPageTitle>

<div :style="{display: 'flex', width: '100%',center}">
  <img :style="{display: 'flex', width: '50%', objectFit: 'contain'}" src="/image/home/sf_logo.png"/>
  <img :style="{display: 'flex', width: '50%', objectFit: 'contain'}" src="/image/home/csdn_logo.jpg"/>
</div>

