'use client';

import React, { useState, useEffect, useRef } from 'react';

// Hero slides data
const HERO_SLIDES = [
  {
    index: 0,
    tag: 'AWARD & RECOGNITION',
    subTag: 'CELEBRITY ATELIER',
    num: '01 / 05',
    title: 'Celebrity Styling & Awards',
    desc: 'Red carpet glamour, national beauty awards recognition, and couture styling trusted by stars.',
    cta: 'Explore Couture Edit',
    ctaLink: '#bridal',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuArAMlkDl9srowM3Y68WaFLGM1f01cgArxsBw2sQAzXT9de03aRldEnhz_0NXO4Jo7q_MAQckpgo4DK0C4AB_Pxs4gGrcYyI2y0hpZMOjbySCpR0owlXElnfj5eyxYUwg2RLrIM1JqrMma_F3DZ3q_oms0nBN3603MITGiJnQkuw3QspSWkrdtnRIpL0xc00AFVTzWIce8L8NocniIzrasYrlEmXGmWBg2aUu6f9U2hxsW2_mBC8xwRZByf6Ca9P6uimg',
  },
  {
    index: 1,
    tag: 'MILESTONES & CELEBRATIONS',
    subTag: 'CONVOCATION GLAM',
    num: '02 / 05',
    title: 'Convocation & Milestones',
    desc: 'Elegant, radiant looks designed for unforgettable life milestones, graduations, and honor ceremonies.',
    cta: 'Discover Event Glam',
    ctaLink: '#services',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPHnzHa3ROjKZK8DGS1CwBFw0cuT2gTL5TmUPDE3Q7cJ4HIgS4FLdDSoaBYz9wiqSA68A846q6Gr2EuGvJsm2IdhlzHDgb6boELhKH4Lkd_2ceG0MWGHx6WaoW2PsnrXSOQ0ADhVRWziO2ibpz3y0ZAdQ20fjsRURbPdQxf8KnIfHU-BXv7W7WQSmVMI-NHpQq97WAS6MSJPlR3tjpQQsJq1ozXNHV1916FITf85spt3urVAEWDQLjx8AKjsp0xje9Qw',
  },
  {
    index: 2,
    tag: 'HAIR TRANSFORMATION',
    subTag: 'ATELIER PROCESSING',
    num: '03 / 05',
    title: 'Ultra-Long Hair Therapy',
    desc: 'Intensive nourishing ritual, mirror-shine silk treatment, and precision length care by senior stylists.',
    cta: 'Discover Hair Care',
    ctaLink: '#services',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC64alK2NA48HGXd0GoMRAoqSRK1CXnzo7BoQ1VCgS6kVK71iRWS_CKfJbcqACBAKWca4tSZ-davFmxi06_VOhQtC4pFP9k1nq7f0UTDVxe9zx1soKb2HizsiJKnbXzEETfEiZYJMgn4oVl7JJYxu-jX3Dqjif0fpar7NJ2vJcVinspMgKEALYzjJg9hxWIqVbg7BkUyEH3hf-kSBTMohCKucJtwJTvkV1Pk28Ev5n4c2P7XOcO3EbGQm-kMXGCjBu4zg',
  },
  {
    index: 3,
    tag: 'PRECISION FINISH',
    subTag: 'SILK SMOOTH',
    num: '04 / 05',
    title: 'Silk Finish & Gloss',
    desc: 'Flawless alignment, glass-like shine, and heat-protective hair botox for long-lasting smoothness.',
    cta: 'Explore Treatments',
    ctaLink: '#services',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWIxrNm7k-jr9BmQRow-w5JJR4svuW6PMdQnEQz3t6KR-52n5KQqct58DwTk8ngnZWnkiXY2ZUAvOX_PgIw2HCb30niwu9sEszeWTw-DV1loMyI1NRFaX0ciXmYlh2TkSxQr_BS1t69PVR9d8U7XlnVfdlOp6_ZXc-a_dgOuXvBZMzIsjC5SwyHCsENCuHb3t_umeE8morXqMtxjke6gjNekIPUe8MfG6-uYuyQPqzQGG_0tf5RXevsGcI-9M8se1OUA',
  },
  {
    index: 4,
    tag: 'ATELIER SANCTUARY',
    subTag: 'TRANSFORMATION SUITE',
    num: '05 / 05',
    title: 'Bespoke Salon Experience',
    desc: 'Step into our private styling sanctuary in Ring Road, Mohammadpur designed for personalized pampering — always open.',
    cta: 'Book Transformation',
    ctaLink: '#book',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAKC3eTQsfPRRJd-_G-FUR1Hm0HAOIeD9ynffk2_8ytbczmPhP6jR6x5SLFl6kDheg5soMFrdTS3Wpyj1gIR3_Bi-IAZRr1dJEQUMinaeEHWwZlIA4-NNTek6xECTzpshdd8P_FcwkdbLpHPVQqcSe7U_Jx31oHK17S8JTOK8EsfN7XBrQwbf-MyJTR5MhAwrITH6VlknQp-jX4V6W8fF_m5QyFuQpmrihB5nC1bgFAV77eD1AL09LYwV_KvasiPCwEw',
  },
];

// Marquee services cards
const SERVICES = [
  {
    num: '01 / HAIR THERAPY',
    price: '৳ 3,500',
    tag: 'Beautification Studio',
    badge: 'Best Seller',
    title: 'Keratin Hair Treatment',
    desc: 'Smooth, glossy, manageable hair with deep thermal restorative seal.',
    action: 'Reserve',
    actionNote: 'Confirm before booking',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA58yj_wbwMxoA8Hkogd_QAApJ2KPPf0s5nfaL2pSNj1ma0DNBiWEznmUr97Sjry-tgoOAiKn4rEeeNtTneb0D92jH-o0HfbS7twMS80l9tgaaAsTY5OJSsXVMJOJNvy9qfSET1Oml6sHDbRM-8emWBx99lhPHghcPX4cwX2IClBx4bOfXdIpGf982bDDjJHzTgWH7CHzuJZEzQE00IEIAbhnkteG6JXfKVpSryFFwId5EkNHc5j49nIU1e50yFHB0xpg',
  },
  {
    num: '02 / HAIR REPAIR',
    price: '৳ 5,500',
    tag: 'Intensive Cure',
    badge: 'High Gloss',
    title: 'Brazilian Botox',
    desc: 'Repair, nourish, restore shine and eliminate frizz with natural protein infusions.',
    action: 'Reserve',
    actionNote: 'Confirm before booking',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCM7aBzVDQGn_7O2nCv-Kp9KRl89bvOLW7ZnY0Hat-X01d3SaCXTqzLOljUERhXFkzyNp-lXUoFgWevvcbziNEnyPm276tQjXuGLdogTSFhBcRwAV4Fi7HV8p_1No_xA1qxeliV4Z2grazl5BLub8Q3Zlj1h7Qn3ViVROWeFJmJeF-MCZok16OfxjhHo3AJxfaG7848CHSBZWsHFyDc4S74VwsqhEx64lv3nKlurLdXmAWPiB8Y3uv4b1XviyUUH2cySA',
  },
  {
    num: '03 / SKINCARE RITUAL',
    price: '৳ 850',
    tag: 'Skin Radiance',
    badge: 'Hydration Boost',
    title: 'Glow Facial',
    desc: 'Fresh, hydrated, radiant skin customized for all Dhaka seasons and skin types.',
    action: 'Reserve',
    actionNote: 'Confirm before booking',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLdliu-2sFpnPAipfmVazuUkp8bN4GVZzlkxyBCEUg1J0poY2YoqQ8ienLFOidVnipn1HVIJFEx-CbgVHmz8mI8GwuqD3ZMUUXAAhkcJyo9vi9EN5iC7r06vFzu6cJKmHyHKP28-fEoasj7KKj5253U2T8G2j3oNxnS8eXXEdGtSFPOF9GBU3bWM7qgTCRgFkTsb8aphfBuwYd-xomdOs9cm4rOrzQVy3Cpxp9gEuGV6HASkSlKGkgJxfyWfsvi6W8Vw',
  },
  {
    num: '04 / HAIR WELLNESS',
    price: '৳ 499',
    tag: 'Weekly Care',
    badge: 'Special Price',
    title: 'Hair Spa',
    desc: 'Deep care, soft shine, healthy finish with revitalizing botanical essential oils.',
    action: 'Reserve',
    actionNote: 'Confirm before booking',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXgZUWMEe55jPjqmi-316Y_EM17_iMba4hnWJh85zec8fKfvmUiq1ashT3OM6FnDPO6IQcNc5sNOIqGF8Zp-JJR8h0wvCmx8Z-T6dCy0B8_kiitbSzQUi239RORNvzPJyCp63XTN_VE5ntY2CG1HOkwLNwkpFMIcz0vNYAEr8waEFxoPN7zHgPMBVOc90woMn3-RECCtdsr0T2HIgQjWobGmXid10C3CgxBHQsqNyQT6fzlkmddqT4HoEhSUgGwAvABg',
  },
  {
    num: '05 / BRIDAL SPECIAL',
    price: '৳ 1,750',
    tag: 'Bridal Atelier',
    badge: 'Offer Price',
    title: 'Bridal Glow Facial',
    desc: 'Radiance for your special day with pearl essence polishing and deep pore cleansing.',
    action: 'Reserve',
    actionNote: 'Confirm availability',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANsbCuJ4umjfu5zXFKKS87-0ykvyRwF00yiLcHMQS43PVLkTUvwEvgIIw-BYgy2216NE2NyfLpvShi5oGLCBGEo2r53binoNDaEHg1oedP1PIyynGqeedizDuCxf9JQ7H5Xlht9AfLvID79pLpDkfvAWHp0pcEalLSsln04gs8_fq4j4jHhyJPopFhw3Fx3w-_xLcPpUr4_XazDTBk3y8BaVRlcHeckULi-GnmCDqWebyMu25yFJ8RuoRogZ2EBorLLQ',
  },
  {
    num: '06 / SEASONAL OFFER',
    price: '৳ 999',
    tag: 'Seasonal Deal',
    badge: 'Special Offer',
    title: 'Happy Hour Package',
    desc: 'Whitening facial, Whitening pedicure, and U-cut / underarm wax complete bundle.',
    action: 'Reserve',
    actionNote: 'Confirm validity',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfkcY0WxsB1GwbeUHO4EHkKxRiYntE-JeZl-8gKdzWIT9Xwr5-H3Du_ffE3_zAwrT0M3BtPJ4stoAgkiWS-Cdy20uXofvU-UyzOgShmfBLWAPWznd_NSE3xvDQTE_p3xljBl7SJKfNdm6CcaDBBgp8KZ66OKYN407XE-aS18fCa9Vvir2UNWBIISBWOWO9TxQdYWfUj7PFVTK8R41_f8EoRb9cJgLtSzl3j1fzAkpg_gXJCjF1AJqik6LEYTbq2Y1S_A',
  },
  {
    num: '07 / DERMA CARE',
    price: 'Consultation',
    tag: 'Dhaka Studio',
    badge: 'Personalized',
    title: 'Hydrafacial',
    desc: 'Personalized care, consultation first with advanced deep suction and serum infusion.',
    action: 'Contact',
    actionNote: 'Book a consultation',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjxdu4-Ip56JqbKV0oZZ__Ea22sKJsOecIx1wgq6cYI3lMlY1HtCXUvbMIrFDCwS2gkEGPQqxWHtsS-JqV2Qb3kEEjnmFeS7KVnn1tFehMXrl9fpvyESs_YFn2BGgHTI5FA1dcugBCAiVGHR-WNjMUnnjgzGlG9dnmI7iygBUoM4ac1lWsolvHfFl5mwehn9pVGX5f6l75NgOYThiHifo_hzCcvcXlzYBS44vzZRPetQt-KvmAgiGL-EYiCy6i3z0jHA',
  },
];

// 3D Spatial Gallery cards
const GALLERY_3D_CARDS = [
  {
    id: '01',
    badge: '★ HONORS',
    badgeClass: 'bg-amber-500/30 text-amber-200 border-amber-400/50',
    title: 'Beautification Recognition',
    subtitle: 'Celebrity & Excellence Honor',
    baseZ: 65,
    floatClass: 'animate-float-1',
    borderClass: 'border-amber-400/40 hover:border-amber-300',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWvCapdYNyI_rwadwyzB0eNax4VkuVouWQzwWWzghjEKMuJl6z39nCuqMRn7KWW0DxFC7xSDYH24xkPo1CvgWuRqZmPVnMrvL-Kd-46l_nfBacAMvPwdu4OBBHtrndRFEn1DRE_ZdhO0w0J1mMpzY5LbIiAaKiwCc7uXg3JUGkbQiV1rezfN-sNo8Uk5r1D0Rzk09OjUTY77Ws8FfdbAGuqzlnT0MiXlOp5E_Sd6AZFm4zW9FgXGk5DMpHmU514DcJpQ',
    actionLink: '#services',
  },
  {
    id: '02',
    badge: 'CONVOCATION GLAM',
    badgeClass: 'bg-black/70 border-white/20 text-sky-300',
    title: 'Convocation Glow & Glam',
    subtitle: 'Academic Milestone Beauty',
    baseZ: 25,
    floatClass: 'animate-float-2',
    borderClass: 'border-white/15 hover:border-amber-300/60',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDO2Qt4BNWSMwsEjed6bcLcj_5ybjjmCuB7N_XBNnM2JoRVxtjglLCQ9v8pIHZ-YIqYJJshYAk_05f5Ey5mMBmVUwrkJ5dHvHa1NXpvOInrgEgH7GAc3pm49SkJDEsPoJCvKCpeYGta3ivA0EMsOas60e6ekD2GeeO8zoOAuT3gcaO1qvTHrJrDrd5pCCKFRSPvQ7xrFphYPUkE00qp12AshEAVkIp20o0NgCJYXGQKG-vHvIc1hv6eFcBAm4TFvPTc6g',
    actionLink: '#services',
  },
  {
    id: '03',
    badge: '★ HAIR CLINIC',
    badgeClass: 'bg-purple-500/30 text-purple-200 border-purple-400/50',
    title: 'While Processing Therapy',
    subtitle: 'Ultra-Length Keratin Treatment',
    baseZ: 95,
    floatClass: 'animate-float-1',
    borderClass: 'border-white/15 hover:border-amber-300 shadow-[0_20px_50px_rgba(197,154,111,0.2)]',
    specialCol: 'sm:col-span-2 lg:col-span-1',
    highlightTitle: true,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6Me7OHUUcu-9r_ECG_1zteIyfSzvv1ZHkC_4KFPHnf37MQKOl1mQtadYvCHha80SF46luDOMcMFeNAT2jTt0aY4utev9nMCzxGC_sW8K5efSDwaG8OWKokr1E7WxAktYFrLYok330eL2Rr-FwKIZrjI2kQKQzqqntbsH4zZfgdQ-n7ivcFcLTUiYTL2B5tohLBysDkOubL7msr30_7S3pP01dDqRd4MY3-hcHlbzeAVKGihvBWniCPxtVBe-lgxnOOg',
    actionLink: '#bridal',
  },
  {
    id: '04',
    badge: 'DEEP SHINE',
    badgeClass: 'bg-black/70 border-white/20 text-emerald-300',
    title: 'Canvo Deep Shine Finish',
    subtitle: 'Thermal Sleek Blowout',
    baseZ: 35,
    floatClass: 'animate-float-2',
    borderClass: 'border-white/15 hover:border-amber-300/60',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGcJS7uMTBwdHv1qEn-Ue7uvtAb1CEDPqPqKEWrWVuSoCIGceXbsCHLP_h-esO17CQZYxzTgaRT1WIpW6hOC6O51hDVDief9WWbNqZP21AbbN0xPZAxgQEBAVn-N6FM4JMcx4SE2A2caM5y-38kdNcm9U37P9coCeg62vlQmgg7vb_kEJg5YuT0H1_voEp4cQC3o82jeeXzt6_iw_UvyBjTMLRfFr4ZRJZ5KfZwgj9A0WwSKmpzZ1A6W_CUW0ZDw9_Ag',
    actionLink: '#services',
  },
  {
    id: '05',
    badge: 'ATELIER LOUNGE',
    badgeClass: 'bg-black/70 border-white/20 text-rose-300',
    title: 'Mohammadpur Atelier Studio',
    subtitle: 'Private Styling Suite',
    baseZ: 75,
    floatClass: 'animate-float-1',
    borderClass: 'border-white/15 hover:border-amber-300/60',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKT2fjNwt8a3G1M-BPNJ_w7F06lAGh-Lxosqfg5I5M8zoGXpnUW1WzHJJCmfm77nO9Dqgr8iayWLjZB5ui6kl9JwnG2Hr9Dqk2A2v8hWYXQP-jgOIe98b-FicwfdzVG7yHWZqa8wSaykHtS6zcnVhntGZSriZkAng-naIQ7BCCZ6cPJYbv4ZctWQRotOKSX-01Lw6-fOCH1QPkN7e2i9WqbR3kwBnQlIVo6gTrw4Oe3e5BeXBYHLMRteIcAx8ji0ZFYA',
    actionLink: '#locations',
  },
  {
    id: '06',
    badge: 'HONEY BALAYAGE',
    badgeClass: 'bg-black/70 border-white/20 text-amber-300',
    title: 'Dimensional Honey Balayage',
    subtitle: 'Custom Tint & Nourish',
    baseZ: -15,
    floatClass: 'animate-float-2',
    borderClass: 'border-white/15 hover:border-amber-300/60',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIlgX0jQ3vR9mAWjuZqECAjdhPa6hyFWqVBccxlE9ZZhWYy6LiTDZ4zgs3_kSkjkg6xD0yrMw09PhNNn00MsUAdNh4uTmDOvriJxgcod2ggLnZqsavpeIXyXlxz4AJbvtWt3r7Tkdp0nLXE5hMkYzU0LB1BYfbQFkW4cesp2tNwqvUyuLIOlTKW4aEfhQ88XFPBdT_h4cQeUKAhD2Yettu62xgst8BC66-zjumRU2VOM5ee7y2PzyxRbnbOZ9TPTJQTA',
    actionLink: '#services',
  },
  {
    id: '07',
    badge: 'CARAMEL GLOSS',
    badgeClass: 'bg-black/70 border-white/20 text-orange-300',
    title: 'Warm Caramel Highlights',
    subtitle: 'Precision Gloss & Tone',
    baseZ: 45,
    floatClass: 'animate-float-1',
    borderClass: 'border-white/15 hover:border-amber-300/60',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdO3se0ruwUZ4hC_J6o5exceEOYROQQLF3t4nok6HRtflvI-qPms36jHveQIpZBSZczW84gc8Ku2l2G72Izt8M5ioWDAhFALg_1jhnB5H_BAMyuw4J5uBXaJsWxrCy-yhqjMaxzImDrP3Y_fZMgrmcoWUtBYTC2lBjAsDdp1KNZfxagikRudcAXIItblQbtIWj5gP3JxknmHeMqxybtB4FNN75KE534CxG9L7gbOQ1WltmnWprF7B5EDtooAfRgDjXeA',
    actionLink: '#services',
  },
  {
    id: '08',
    badge: 'BOTOX FINISH',
    badgeClass: 'bg-black/70 border-white/20 text-purple-300',
    title: 'Brazilian Botox Glass Finish',
    subtitle: 'Ultra-Hydration Therapy',
    baseZ: 80,
    floatClass: 'animate-float-2',
    borderClass: 'border-white/15 hover:border-amber-300/60',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJp4tHHdIJewSGjTcTc1Xh3hq7ZDYatFnnIxkj_jdXcR5L2YuVhkgP4Z-eRv9GtemChzTEJ7ZCvx5_uKAWrBS6O7__N6BnRiM2nZLnEtnhQpCVALHfZ9XyLUrnOToNSE6iHyv4mObvnuJszizZzgdabTKlQAo1eqJvwFkG6OU3mZKKb_HxLlkbhKuswhrc1OaBeIYsHh-6YQHZRJqqosx5jgnjrYiog1KJaIme-rJmP19uu43N29rZdU9sPNhrOehYWw',
    actionLink: '#services',
  },
  {
    id: '09',
    badge: 'PRECISION CUT',
    badgeClass: 'bg-black/80 text-amber-200 border-white/20',
    title: 'Precision V-Cut & Keratin',
    subtitle: 'Deep Conditioning Lustre',
    baseZ: 15,
    floatClass: 'animate-float-1',
    borderClass: 'border-white/15 hover:border-amber-300/60',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLv-uTZV7A-67hVqhQ0PWauHjEgFsx7qXNcJtSiDMZl33xqdyyCZmefoVL6X32U4ua84QYyZbOcXNIK1tkrrJHBZq2SRLzSNXvPi3T5D253Io14qlNvuDhQ88CkWUzQErZosTi1d0yduSYbw9MMiynYHTKM9nzjDNYTQS7K_aanJ_z5SUuGfG_yF0ZmQivwurE4TfTodnFXF1iQrTiZMmNWg8L-8DpLPVkVd7A3JrxpSlPnjYYPujQeDwqqErkctMHiQ',
    actionLink: '#book',
  },
  {
    id: '10',
    badge: 'OFFICIAL MENU',
    badgeClass: 'bg-black/80 text-emerald-200 border-white/20',
    title: 'Signature Atelier Menu',
    subtitle: 'Curated Treatments & Rates',
    baseZ: 50,
    floatClass: 'animate-float-2',
    borderClass: 'border-white/15 hover:border-amber-300/60',
    isMenu: true,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbVIFzqITlWqgWt3VMkbB7XBcartx2i3BdTBtYVCEroTd4e_rZVSFv93k4pq5YFmnBR7HhqWar3t1_SkwSHLzn81IRBbRXbUKO4e48sT5HwOb9UGxQrKalnDzswhJpxzULKdiwFpfCHqzo5T7Foixn5sc5ork25-uLfd4VQggyq53RIp7AITmh1pANWeHJj_GOKO3UxNKZnms31I1q7c-Ur6a_DjtCL2P_XokZ-5mL864I55pZBjmVNiG2jN-3h2rqMQ',
    actionLink: '#book',
  },
];

export default function HomePage() {
  // Hero Carousel State
  const [activeHeroIdx, setActiveHeroIdx] = useState(3);
  const [isHeroPaused, setIsHeroPaused] = useState(false);

  // Marquee State
  const [isMarqueePaused, setIsMarqueePaused] = useState(false);

  // Services Category Filter
  const [selectedCat, setSelectedCat] = useState(3);

  // 3D Spatial Gallery State
  const spatialSectionRef = useRef<HTMLElement | null>(null);
  const spatialStageRef = useRef<HTMLDivElement | null>(null);
  const [is3DFloatPaused, setIs3DFloatPaused] = useState(false);
  const [spatialTilt, setSpatialTilt] = useState({ rx: 0, ry: 0, tx: 0, ty: 0 });
  const [isSpatialHovered, setIsSpatialHovered] = useState(false);

  // Booking Form State
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formAtelier, setFormAtelier] = useState('Mohammadpur Flagship Studio (Ring Road)');
  const [isAtelierDropdownOpen, setIsAtelierDropdownOpen] = useState(false);
  const [formService, setFormService] = useState('Bridal Couture Makeover & Draping');
  const [formDate, setFormDate] = useState('');
  const [formTime, setFormTime] = useState('Flexible / Always Open (24/7)');
  const [isTimeDropdownOpen, setIsTimeDropdownOpen] = useState(false);

  // Hero carousel auto-timer
  useEffect(() => {
    if (isHeroPaused) return;
    const timer = setInterval(() => {
      setActiveHeroIdx((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isHeroPaused]);

  // 3D Spatial gallery mouse tilt handler
  const handleSpatialMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!spatialSectionRef.current) return;
    setIsSpatialHovered(true);
    const rect = spatialSectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const normX = x / (rect.width / 2);
    const normY = y / (rect.height / 2);

    setSpatialTilt({
      ry: Number((normX * 12).toFixed(2)),
      rx: Number((-normY * 10).toFixed(2)),
      tx: Number((-normX * 16).toFixed(1)),
      ty: Number((-normY * 12).toFixed(1)),
    });
  };

  const handleSpatialMouseLeave = () => {
    setIsSpatialHovered(false);
    setSpatialTilt({ rx: 0, ry: 0, tx: 0, ty: 0 });
  };

  const resetPerspective = () => {
    setSpatialTilt({ rx: 0, ry: 0, tx: 0, ty: 0 });
    setIsSpatialHovered(false);
  };

  const toggleFloat = () => {
    setIs3DFloatPaused((prev) => !prev);
  };

  // Booking submit handler
  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello Beautification Studio! I would like to book an appointment:\n• Name: ${formName}\n• Contact: ${formPhone}\n• Atelier: ${formAtelier}\n• Service: ${formService}\n• Date: ${formDate}\n• Slot: ${formTime}`
    );
    window.open(`https://wa.me/8801682079429?text=${text}`, '_blank');
  };

  return (
    <div className="bg-[#FBF8F4] text-[#211D1D] selection:bg-[#6F214F] selection:text-white font-sans antialiased min-h-screen">
      {/* BEGIN: MainHeader */}
      <header
        className="sticky top-0 z-50 bg-[#FBF8F4]/95 backdrop-blur-md border-b border-[#E9E0DA] transition-all"
        data-purpose="top-navigation"
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
          <div className="flex items-baseline gap-2.5">
            <a
              className="text-xl md:text-2xl font-extrabold tracking-[-0.05em] uppercase hover:opacity-80 transition-opacity"
              href="#"
            >
              Beautification
            </a>
            <span className="text-xs font-semibold tracking-wider text-neutral-500 font-sans uppercase">
              The Beauty Studio
            </span>
          </div>
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center space-x-8 text-[13px] font-medium tracking-tight text-neutral-800"
          >
            <a className="hover:text-black transition-colors" href="#services">
              Services
            </a>
            <a className="hover:text-black transition-colors" href="#bridal">
              The Experience
            </a>
            <a className="hover:text-black transition-colors" href="#locations">
              Locations
            </a>
          </nav>
          <div className="flex items-center space-x-5">
            <a
              className="inline-flex items-center justify-center bg-[#6F214F] text-white px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase hover:bg-[#530738] transition-all shadow-sm"
              href="#locations-booking"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </header>
      {/* END: MainHeader */}

      <main>
        {/* Section 1: Hero Viewport Stepped Showcase Carousel */}
        <section
          className="relative bg-[#0a0a0a] text-white pt-24 pb-20 px-4 md:px-8 overflow-hidden"
          data-purpose="hero-viewport"
        >
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <img
              alt="Hero Background - Beautification Studio Couple Silhouette"
              className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.05]"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBejatSYa1GhiZDuA0F8BH9sR7EbXGgZYBkmE3_XvYvHjvi443J-0ZwSTKM5pK2nv36-aceUUh8I3o3WEXLkhcw5dKlwMbgtDF3JOMynuDMMkOBfTStVRb4bcepYPBfda9OrdcWVARUX4fXYBEOEBpnBaP3AFrVtUThPenYQB966zob0QWidZghCf1UzgCFWZY43Lhf9ueGup3xJi9eZBW4CWpgg9j5ui_cZP3HwKJVvy7NQEn3ceI6knJ7PFXUxxugYco"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/90 via-[#0a0a0a]/75 to-[#0a0a0a]" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/60 via-[#0a0a0a] to-[#0a0a0a] pointer-events-none" />

          <div className="relative z-10 max-w-[1440px] mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
                A makeovere<br />makes it real.
              </h1>
              <div className="flex flex-col items-center justify-center">
                <a
                  className="bg-[#6F214F] hover:bg-[#530738] text-white font-semibold text-xs tracking-wider uppercase px-8 py-3 rounded-full transition-all shadow-lg border border-[#C98E9F]/40"
                  href="#locations-booking"
                >
                  Get Started
                </a>
                <p className="text-neutral-400 text-xs text-center mt-3 tracking-wide">
                  Bespoke bridal &amp; couture artistry in Dhaka. No advance consultation required.
                </p>
              </div>
            </div>

            {/* Stepped Controls Bar */}
            <div
              className="max-w-[1240px] mx-auto flex items-center justify-between px-2 sm:px-4 mb-5 select-none"
              id="hero-carousel-root"
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono tracking-wider text-neutral-300 backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>HAUTE ARTISTRY EDITORIAL</span>
                </div>
                <span className="hidden sm:inline text-xs text-neutral-500 font-mono">
                  [ STEPPED SHOWCASE SUITE ]
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  aria-label="Toggle Auto Advance"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-[11px] font-mono text-neutral-200 backdrop-blur-md transition-all cursor-pointer"
                  onClick={() => setIsHeroPaused(!isHeroPaused)}
                >
                  <span>{isHeroPaused ? '▶' : '⏸'}</span>
                </button>
                <div className="flex items-center gap-1.5 ml-2">
                  <button
                    aria-label="Previous Slide"
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 border border-white/15 text-white flex items-center justify-center text-sm transition-all cursor-pointer"
                    onClick={() =>
                      setActiveHeroIdx(
                        (prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length
                      )
                    }
                  >
                    ‹
                  </button>
                  <button
                    aria-label="Next Slide"
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 border border-white/15 text-white flex items-center justify-center text-sm transition-all cursor-pointer"
                    onClick={() =>
                      setActiveHeroIdx((prev) => (prev + 1) % HERO_SLIDES.length)
                    }
                  >
                    ›
                  </button>
                </div>
              </div>
            </div>

            {/* Stepped Stage Container */}
            <div
              className="relative max-w-[1360px] mx-auto overflow-hidden py-4 select-none"
              onMouseEnter={() => setIsHeroPaused(true)}
              onMouseLeave={() => setIsHeroPaused(false)}
            >
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#c59a6f]/10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative w-full flex items-center justify-center min-h-[480px] sm:min-h-[560px] md:min-h-[600px]">
                {HERO_SLIDES.map((slide, idx) => {
                  const total = HERO_SLIDES.length;
                  const offset = (idx - activeHeroIdx + total) % total;
                  const isActive = offset === 0;
                  const isPrev = offset === total - 1;
                  const isNext = offset === 1;

                  let styleClass = 'hero-stage-card absolute w-[92%] sm:w-[82%] md:w-[74%] lg:w-[68%] max-w-[960px] h-[480px] sm:h-[540px] md:h-[580px] rounded-3xl overflow-hidden border border-neutral-800/80 bg-[#191513] shadow-2xl transition-all duration-700 cursor-pointer ';
                  let inlineStyle: React.CSSProperties = {};

                  if (isActive) {
                    styleClass += 'is-active';
                    inlineStyle = {
                      transform: 'translateX(0px) scale(1)',
                      zIndex: 20,
                      opacity: 1,
                      pointerEvents: 'auto',
                    };
                  } else if (isPrev) {
                    styleClass += 'is-prev';
                    inlineStyle = {
                      transform: 'translateX(-54%) scale(0.86)',
                      zIndex: 10,
                      opacity: 0.35,
                      pointerEvents: 'auto',
                    };
                  } else if (isNext) {
                    styleClass += 'is-next';
                    inlineStyle = {
                      transform: 'translateX(54%) scale(0.86)',
                      zIndex: 10,
                      opacity: 0.35,
                      pointerEvents: 'auto',
                    };
                  } else {
                    styleClass += 'is-hidden';
                    inlineStyle = {
                      transform: 'translateX(-54%) scale(0.86)',
                      zIndex: 1,
                      opacity: 0,
                      pointerEvents: 'none',
                    };
                  }

                  return (
                    <div
                      key={slide.index}
                      className={styleClass}
                      style={inlineStyle}
                      onClick={() => !isActive && setActiveHeroIdx(idx)}
                    >
                      <img
                        alt={slide.title}
                        className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.92]"
                        src={slide.img}
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent w-full md:w-[70%] z-10 pointer-events-none" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30 z-10 pointer-events-none" />
                      
                      <div className="relative z-20 p-6 sm:p-10 flex items-center justify-between border-b border-white/10">
                        <div className="flex items-center gap-3">
                          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-amber-200/90 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                            {slide.tag}
                          </span>
                          <span className="text-[11px] font-mono text-neutral-400 hidden sm:inline">
                            {slide.subTag}
                          </span>
                        </div>
                        <div className="text-xs font-mono text-white/70">{slide.num}</div>
                      </div>

                      <div className="relative z-20 p-6 sm:p-10 flex flex-col justify-end h-[calc(100%-80px)] max-w-xl">
                        <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif text-white tracking-tight mb-4 leading-none">
                          {slide.title}
                        </h2>
                        <p className="text-sm sm:text-base text-neutral-300 font-sans leading-relaxed mb-8 max-w-md">
                          {slide.desc}
                        </p>
                        <div>
                          <a
                            className="inline-flex items-center gap-3 bg-[#e8ded1] hover:bg-white text-neutral-950 px-6 py-3 rounded-full text-xs font-semibold tracking-wide transition-all shadow-lg hover:scale-105"
                            href={slide.ctaLink}
                          >
                            <span>{slide.cta}</span>
                            <span className="text-base leading-none">→</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Metrics */}
            <div className="mt-16 text-center">
              <p className="text-neutral-500 text-xs font-sans tracking-wide mb-10">
                Join hundreds of brides &amp; clients who celebrate their unforgettable moments with Beautification.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 max-w-2xl mx-auto gap-8 text-center pt-4 border-t border-neutral-800/60">
                <div>
                  <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                    14K+
                  </div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mt-2">
                    Transformations Crafted
                  </div>
                </div>
                <div>
                  <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                    99.4%
                  </div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mt-2">
                    Bride Satisfaction Score
                  </div>
                </div>
                <div>
                  <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                    2
                  </div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mt-2">
                    Mohammadpur Flagship (Ring Road)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Template Services Carousel Section */}
        <section
          className="py-24 bg-[#FBF8F4] border-t border-[#E9E0DA] relative overflow-hidden"
          data-purpose="services-showcase"
          id="services"
        >
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 text-center mb-12">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-neutral-950 mb-3">
              Grow your business
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500 tracking-wide mb-8">
              You deserve bespoke beauty artistry that can do it all.
            </p>
            <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 text-xs font-medium text-neutral-600">
              {[
                'Services',
                'Bridal Makeover',
                'Event Glam',
                'Scheduling',
                'Hair Artistry',
                'Memberships',
                'Blog',
                'Portfolio',
              ].map((catName, idx) => (
                <button
                  key={catName}
                  onClick={() => setSelectedCat(idx)}
                  className={`px-4 py-1.5 rounded-full transition-colors cursor-pointer ${
                    selectedCat === idx
                      ? 'bg-[#6F214F] text-white font-semibold shadow-xs'
                      : 'hover:text-black'
                  }`}
                >
                  {catName}
                </button>
              ))}
            </div>
          </div>

          {/* Marquee Container */}
          <div
            className="relative w-full overflow-hidden select-none py-6 group"
            id="infinite-services-marquee"
          >
            <div
              className={`marquee-track gap-6 px-4 ${
                isMarqueePaused ? 'is-paused' : ''
              }`}
            >
              {[...SERVICES, ...SERVICES].map((item, index) => (
                <div
                  key={`${item.title}-${index}`}
                  className="w-[340px] sm:w-[380px] flex-shrink-0 bg-white border border-[#E5E4DE] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group/card"
                >
                  <div className="relative aspect-[16/10] bg-[#fbf0ed] overflow-hidden">
                    <img
                      alt={`${item.title} - ${item.price}`}
                      className="w-full h-full object-cover object-center group-hover/card:scale-105 transition-transform duration-700"
                      src={item.img}
                    />
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider text-neutral-900 border border-neutral-200/60">
                      {item.num}
                    </div>
                    <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-mono font-bold">
                      {item.price}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col justify-between flex-1">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
                          {item.tag}
                        </span>
                        <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                          {item.badge}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold tracking-tight text-neutral-950">
                        {item.title}
                      </h3>
                      <p className="text-xs text-neutral-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    <div className="pt-6 mt-4 border-t border-neutral-100 flex items-center justify-between">
                      <span className="text-xs font-mono text-neutral-400">
                        {item.actionNote}
                      </span>
                      <a
                        className="inline-flex items-center gap-2 bg-black hover:bg-neutral-800 text-white text-xs font-semibold px-4 py-2 rounded-full transition-colors"
                        href="#locations-booking"
                      >
                        <span>{item.action}</span>
                        <span>➔</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="flex items-center gap-4 text-xs font-mono text-neutral-500">
              <button
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 border border-neutral-200 transition-colors cursor-pointer"
                onClick={() => setIsMarqueePaused(!isMarqueePaused)}
              >
                <span>{isMarqueePaused ? '▶' : '⏸'}</span>
                <span className="font-semibold text-[11px]">
                  {isMarqueePaused ? 'RESUME LOOP' : 'PAUSE LOOP'}
                </span>
              </button>
              <span className="hidden sm:inline-block text-neutral-400">•</span>
              <span className="text-[11px] tracking-wider uppercase text-neutral-500 hidden sm:inline-block">
                Hover card to pause · 7 Authentic salon packages
              </span>
            </div>
          </div>
        </section>

        {/* Section 4: Reservations Section */}
        <section
          className="py-20 px-6 md:px-10 max-w-[1440px] mx-auto border-t border-[#E9E0DA]"
          data-purpose="commerce-split"
          id="bridal"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div
                className="bg-[#F5EFE9] rounded-2xl border border-[#E9E0DA] p-8 shadow-sm"
                data-purpose="metric-card"
              >
                <div className="flex items-center justify-between pb-6 border-b border-neutral-200">
                  <span className="text-xs font-mono uppercase tracking-widest text-neutral-600 font-bold">
                    Reservation Engine
                  </span>
                  <span className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    SLOTS ACTIVE - WEDDING SEASON
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8">
                  <div className="border-b-2 border-black pb-2">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-500">
                      Upcoming Bridal Slots
                    </div>
                    <div className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-1">
                      42 Confirmed
                    </div>
                  </div>
                  <div className="border-b-2 border-black pb-2">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-500">
                      Satisfaction Score
                    </div>
                    <div className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-1">
                      99.4%
                    </div>
                  </div>
                </div>
                <div className="space-y-3 pt-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                    Available Ateliers
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg border border-neutral-200 bg-neutral-50">
                    <span className="text-xs font-semibold">
                      Mohammadpur Flagship (Ring Road)
                    </span>
                    <span className="text-[10px] font-mono uppercase text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                      Always Open
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg border border-neutral-200 bg-neutral-50">
                    <span className="text-xs font-semibold">
                      WhatsApp Concierge (01682-079429)
                    </span>
                    <span className="text-[10px] font-mono uppercase text-neutral-600 bg-neutral-200 px-2 py-0.5 rounded">
                      Instant Booking
                    </span>
                  </div>
                </div>
                <div className="mt-8 pt-4 border-t border-neutral-200 flex items-center justify-between text-[11px] font-mono text-neutral-400 uppercase">
                  <span>WHATSAPP CONCIERGE INTEGRATED</span>
                  <span>PCI-DSS ENCRYPTED</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <div className="text-[11px] font-mono font-bold uppercase tracking-widest text-neutral-500">
                02 / RESERVATIONS &amp; CONSULTATIONS
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold headline-tight text-neutral-950 uppercase leading-none">
                Seamless bookings, tailored experience, zero delay.
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                Reserve your bridal or party transformation effortlessly with direct WhatsApp coordination,
                customized bridal trial options, and bespoke packages tailored to your wedding itinerary.
              </p>
              <ul className="space-y-3 pt-2 text-xs sm:text-sm text-neutral-800">
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold">✓</span>
                  <span>Zero cancellation hidden fees on selected bridal season packages</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold">✓</span>
                  <span>Personalized bride-to-be timeline and skin preparation calendar</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold">✓</span>
                  <span>Instant slot confirmation via official concierge desk</span>
                </li>
              </ul>
              <div className="pt-4">
                <a
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#6F214F] hover:text-[#530738] hover:underline"
                  href="#locations-booking"
                >
                  Explore Bridal Packages ➔
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: TARGET ELEMENT - Immersive 3D Spatial Gallery */}
        <section
          ref={spatialSectionRef}
          className="bg-black text-white py-28 px-4 sm:px-6 md:px-10 blueprint-grid relative overflow-hidden select-none"
          data-purpose="3d-portfolio-spatial-gallery"
          id="portfolio-3d"
          onMouseMove={handleSpatialMouseMove}
          onMouseLeave={handleSpatialMouseLeave}
        >
          <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute -bottom-40 right-1/4 w-[550px] h-[550px] bg-neutral-700/20 rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-[1440px] mx-auto relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
              <div>
                <div className="text-[11px] font-mono font-bold tracking-[0.25em] uppercase text-neutral-400 mb-3 flex items-center gap-2">
                  <span>03 / CURATED PORTFOLIO ARCHIVE</span>
                  <span className="text-neutral-600">•</span>
                  <span className="text-[10px] text-amber-300 font-mono tracking-wider bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                    ATELIER VAULT
                  </span>
                </div>
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold headline-tight tracking-tight text-white uppercase leading-none">
                  STUDIO-LEVEL BEAUTY COMPOSITION.
                </h2>
                <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mt-4 leading-relaxed font-sans">
                  An immersive 3D spatial gallery of authentic client looks floating in space. Move your cursor to tilt cards and shift depth perspective.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2 sm:gap-3 self-start md:self-auto">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-700/80 text-[11px] font-mono text-emerald-400 backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>
                    {is3DFloatPaused ? '3D PERSPECTIVE: PAUSED' : '3D PERSPECTIVE: ACTIVE'}
                  </span>
                </div>
                <button
                  className="px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-[11px] font-mono text-neutral-200 transition-all cursor-pointer"
                  onClick={toggleFloat}
                >
                  {is3DFloatPaused ? '[RESUME FLOAT]' : '[PAUSE FLOAT]'}
                </button>
                <button
                  className="px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-[11px] font-mono text-neutral-200 transition-all cursor-pointer"
                  onClick={resetPerspective}
                >
                  [RESET PERSPECTIVE]
                </button>
              </div>
            </div>

            {/* 3D Viewport with Perspective & Preserved 3D Children */}
            <div
              className="relative w-full py-6 md:py-10"
              style={{ perspective: 1300, perspectiveOrigin: '50% 50%' }}
            >
              <div
                ref={spatialStageRef}
                className={`gallery-3d-stage w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-7 ${
                  is3DFloatPaused ? 'stage-anim-paused' : ''
                }`}
                style={{
                  transform: `rotateX(${spatialTilt.rx}deg) rotateY(${spatialTilt.ry}deg) translate3d(${spatialTilt.tx}px, ${spatialTilt.ty}px, 0px)`,
                }}
              >
                {GALLERY_3D_CARDS.map((card) => {
                  const zVal = isSpatialHovered ? card.baseZ * 1.35 : card.baseZ;
                  return (
                    <div
                      key={card.id}
                      className={`gallery-card-3d ${card.floatClass} group relative rounded-2xl overflow-hidden bg-[#141212]/90 border ${
                        card.borderClass
                      } transition-all duration-500 shadow-2xl backdrop-blur-sm flex flex-col justify-between ${
                        card.specialCol || ''
                      }`}
                      style={{
                        transform: `translateZ(${zVal}px)`,
                      }}
                    >
                      <div
                        className={`relative aspect-[3/4] overflow-hidden ${
                          card.isMenu ? 'bg-[#fbf0ed]' : 'bg-neutral-950'
                        }`}
                      >
                        <img
                          alt={card.title}
                          className={`w-full h-full object-cover ${
                            card.isMenu ? 'object-top group-hover:scale-105' : 'group-hover:scale-108 brightness-95'
                          } transition-transform duration-700`}
                          src={card.img}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                        <span
                          className={`absolute top-3 left-3 text-[10px] font-mono font-bold tracking-widest uppercase backdrop-blur-md px-2.5 py-1 rounded-full border ${card.badgeClass}`}
                        >
                          {card.badge}
                        </span>
                        <span
                          className={`absolute top-3 right-3 text-[10px] font-mono ${
                            card.highlightTitle ? 'text-amber-200 font-bold' : 'text-white/60'
                          }`}
                        >
                          {card.id}
                        </span>
                      </div>
                      <div
                        className={`p-4 ${
                          card.highlightTitle
                            ? 'bg-neutral-950/90 border-t border-amber-400/30'
                            : 'bg-neutral-950/80 border-t border-white/10'
                        } flex items-center justify-between`}
                      >
                        <div>
                          <div
                            className={`text-xs font-bold tracking-tight ${
                              card.highlightTitle ? 'text-amber-100' : 'text-white'
                            }`}
                          >
                            {card.title}
                          </div>
                          <div
                            className={`text-[10px] font-mono ${
                              card.highlightTitle ? 'text-neutral-300' : 'text-neutral-400'
                            }`}
                          >
                            {card.subtitle}
                          </div>
                        </div>
                        <a
                          className={`w-7 h-7 rounded-full flex items-center justify-center text-xs transition-colors ${
                            card.highlightTitle
                              ? 'bg-amber-300 group-hover:bg-white text-black'
                              : 'bg-white/10 group-hover:bg-white text-white group-hover:text-black'
                          }`}
                          href={card.actionLink}
                        >
                          ➔
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-14 pt-8 border-t border-neutral-900 flex flex-wrap items-center justify-between text-xs font-mono text-neutral-500 gap-4">
              <span>CANVAS ENGINE: DHAKA BESPOKE BEAUTY ARCHITECTURE</span>
              <div className="flex items-center gap-4 text-[11px]">
                <span>SNAP GUIDES ACTIVE</span>
                <span>•</span>
                <span>10 AUTHENTIC PORTFOLIO NODES</span>
                <span>•</span>
                <span className="text-neutral-400">HOVER TO EXAMINE PERSPECTIVE</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Ecosystem Branches Section */}
        <section
          className="py-20 px-6 md:px-10 max-w-[1440px] mx-auto border-t border-[#E9E0DA]"
          data-purpose="branches-ecosystem"
          id="locations"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-neutral-500 mb-2">
                Atelier &amp; Location
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold headline-tight text-neutral-950 uppercase">
                Prime Sanctuary in Mohammadpur, Dhaka.
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <a
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-5 py-3 rounded-full transition-all shadow-sm"
                href="https://wa.me/8801682079429?text=Hello%20Beautification%20Studio,%20I%20would%20like%20to%20inquire%20about%20a%20bridal/salon%20appointment."
                target="_blank"
                rel="noreferrer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.668-.699c.966.527 1.838.815 2.792.815 3.183 0 5.769-2.586 5.769-5.766.001-3.18-2.585-5.767-5.769-5.767zm7.394 5.765c0 4.079-3.315 7.394-7.394 7.394-1.22 0-2.385-.3-3.415-.845l-4.616 1.21 1.233-4.498c-.649-1.077-1.012-2.336-1.012-3.661 0-4.079 3.315-7.394 7.394-7.394 4.079 0 7.394 3.315 7.394 7.394z" />
                </svg>
                <span>Chat directly with Concierge on WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            {/* Branch 1 */}
            <div
              className="lg:col-span-4 bg-white rounded-2xl border border-[#E5E4DE] p-8 flex flex-col justify-between hover:border-black transition-all shadow-sm"
              data-purpose="branch-card"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center mb-6 text-black font-bold">
                  01
                </div>
                <h3 className="text-xl font-bold tracking-tight text-neutral-950 mb-2">
                  Mohammadpur Flagship Studio
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed mb-6">
                  House 16/A/3, 3rd Floor, Ring Road, beside Suchona Community Centre &amp; Ecstasy, Mohammadpur, Dhaka, Bangladesh
                </p>
                <div className="space-y-2 py-4 border-t border-neutral-100 text-xs font-mono text-neutral-700">
                  <div className="flex justify-between">
                    <span>Phone:</span>
                    <span className="font-bold">01682-079429</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Hours:</span>
                    <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-bold">
                      Always Open (24/7)
                    </span>
                  </div>
                </div>
              </div>
              <div className="pt-6 border-t border-neutral-100 flex items-center justify-between">
                <a
                  className="text-xs font-bold uppercase tracking-wider text-black hover:underline flex items-center gap-2"
                  href="tel:01682079429"
                >
                  Call Studio ➔
                </a>
                <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  Flagship Atelier
                </span>
              </div>
            </div>

            {/* Branch 2 */}
            <div
              className="lg:col-span-4 bg-white rounded-2xl border border-[#E5E4DE] p-8 flex flex-col justify-between hover:border-black transition-all shadow-sm"
              data-purpose="branch-card"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center mb-6 text-black font-bold">
                  02
                </div>
                <h3 className="text-xl font-bold tracking-tight text-neutral-950 mb-2">
                  Helpline &amp; Backup Desk
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed mb-6">
                  Secondary reservation &amp; customer support hotline for bridal and salon inquiries.
                </p>
                <div className="space-y-2 py-4 border-t border-neutral-100 text-xs font-mono text-neutral-700">
                  <div className="flex justify-between">
                    <span>Hotline:</span>
                    <span className="font-bold text-neutral-800">01515-291554</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Status:</span>
                    <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded text-[10px]">
                      Active Hotline
                    </span>
                  </div>
                </div>
              </div>
              <div className="pt-6 border-t border-neutral-100 flex items-center justify-between">
                <a
                  className="text-xs font-bold uppercase tracking-wider text-black hover:underline flex items-center gap-2"
                  href="tel:01515291554"
                >
                  Call Helpline ➔
                </a>
                <span className="text-[10px] font-mono text-neutral-600 bg-neutral-100 px-2 py-0.5 rounded">
                  Direct Support
                </span>
              </div>
            </div>

            {/* Branch 3 */}
            <div
              className="lg:col-span-4 bg-white rounded-2xl border border-[#E5E4DE] p-8 flex flex-col justify-between hover:border-black transition-all shadow-sm"
              data-purpose="branch-card"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center mb-6 text-black font-bold">
                  03
                </div>
                <h3 className="text-xl font-bold tracking-tight text-neutral-950 mb-2">
                  Beautification WhatsApp Desk
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed mb-6">
                  Direct 1-on-1 virtual consultations, personalized bridal trials, and customized vanity booking inquiries.
                </p>
                <div className="space-y-2 py-4 border-t border-neutral-100 text-xs font-mono text-neutral-700">
                  <div className="flex justify-between">
                    <span>WhatsApp:</span>
                    <span className="font-bold">01682-079429</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Desk Hours:</span>
                    <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded text-[10px]">
                      Always Open (24/7)
                    </span>
                  </div>
                </div>
              </div>
              <div className="pt-6 border-t border-neutral-100">
                <a
                  className="text-xs font-bold uppercase tracking-wider text-emerald-700 hover:underline flex items-center gap-2"
                  href="https://wa.me/8801682079429"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open WhatsApp Chat ➔
                </a>
              </div>
            </div>
          </div>

          {/* Booking Terminal Form */}
          <div
            className="bg-white rounded-3xl border border-[#E5E4DE] p-8 md:p-12 shadow-sm relative overflow-hidden"
            data-purpose="appointment-booking-module"
            id="locations-booking"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 mb-8 border-b border-neutral-200 gap-4">
              <div>
                <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-neutral-500 mb-1">
                  <span className="w-2 h-2 rounded-full bg-black" />
                  <span>Atelier Scheduling Terminal</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950">
                  Book an Exclusive Atelier Experience
                </h3>
              </div>
              <div className="flex items-center gap-3 text-xs font-mono text-neutral-500">
                <span className="px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200">
                  Instant WhatsApp Confirmation
                </span>
                <span className="hidden sm:inline text-emerald-600 font-semibold">
                  • 0 Inquiry Fees
                </span>
              </div>
            </div>

            <form className="space-y-6" onSubmit={handleBookingSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex flex-col justify-end">
                  <label
                    className="block text-xs font-mono uppercase tracking-wider text-neutral-700 mb-2"
                    htmlFor="b-name"
                  >
                    Full Name *
                  </label>
                  <input
                    className="w-full h-12 text-xs font-sans px-4 py-3 rounded-xl border border-[#E9E0DA] bg-white focus:bg-white focus:border-black focus:outline-none transition-all text-[#211D1D]"
                    id="b-name"
                    placeholder="e.g., Anika Rahman"
                    required
                    type="text"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                  />
                </div>

                <div className="flex flex-col justify-end">
                  <label
                    className="block text-xs font-mono uppercase tracking-wider text-neutral-700 mb-2"
                    htmlFor="b-phone"
                  >
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    className="w-full h-12 text-xs font-sans px-4 py-3 rounded-xl border border-[#E9E0DA] bg-white focus:bg-white focus:border-black focus:outline-none transition-all text-[#211D1D]"
                    id="b-phone"
                    placeholder="01682-079429"
                    required
                    type="tel"
                    value={formPhone}
                    onChange={(e) => setFormPhone(e.target.value)}
                  />
                </div>

                <div className="flex flex-col justify-end">
                  <label
                    className="block text-xs font-mono uppercase tracking-wider text-neutral-700 mb-2"
                    htmlFor="b-atelier"
                  >
                    Preferred Atelier *
                  </label>
                  <div className="relative">
                    <button
                      className="w-full h-12 text-xs font-sans px-4 py-3 rounded-xl border border-[#E9E0DA] bg-white text-left flex items-center justify-between focus:border-black focus:outline-none text-[#211D1D] cursor-pointer"
                      id="b-atelier-btn"
                      type="button"
                      onClick={() => setIsAtelierDropdownOpen(!isAtelierDropdownOpen)}
                    >
                      <span id="b-atelier-text">{formAtelier}</span>
                      <span className="text-xs">▼</span>
                    </button>
                    {isAtelierDropdownOpen && (
                      <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#E9E0DA] rounded-xl shadow-lg z-30 overflow-hidden">
                        <div
                          className="p-3 hover:bg-neutral-100 cursor-pointer text-xs font-sans text-[#211D1D]"
                          onClick={() => {
                            setFormAtelier('Mohammadpur Flagship Studio (Ring Road)');
                            setIsAtelierDropdownOpen(false);
                          }}
                        >
                          Mohammadpur Flagship Studio (Ring Road)
                        </div>
                        <div
                          className="p-3 hover:bg-neutral-100 cursor-pointer text-xs font-sans text-[#211D1D]"
                          onClick={() => {
                            setFormAtelier('Online / Home Service Concierge');
                            setIsAtelierDropdownOpen(false);
                          }}
                        >
                          Online / Home Service Concierge
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex flex-col justify-end">
                  <label
                    className="block text-xs font-mono uppercase tracking-wider text-neutral-700 mb-2"
                    htmlFor="b-service"
                  >
                    Service Category *
                  </label>
                  <select
                    className="w-full h-12 text-xs font-sans px-4 py-3 rounded-xl border border-[#E9E0DA] bg-white focus:bg-white focus:border-black focus:outline-none transition-all text-[#211D1D]"
                    id="b-service"
                    required
                    value={formService}
                    onChange={(e) => setFormService(e.target.value)}
                  >
                    <option value="Bridal Couture Makeover & Draping">
                      Bridal Couture Makeover &amp; Draping
                    </option>
                    <option value="Reception & Event Glam Makeover">
                      Reception &amp; Event Glam Makeover
                    </option>
                    <option value="Hair Styling & Balayage Coloring">
                      Hair Styling &amp; Balayage Coloring
                    </option>
                    <option value="Holistic Skin Care, Facial & Spa">
                      Holistic Skin Care, Facial &amp; Spa
                    </option>
                    <option value="Royal Organic Henna Mehndi Artistry">
                      Royal Organic Henna Mehndi Artistry
                    </option>
                  </select>
                </div>

                <div className="flex flex-col justify-end">
                  <label
                    className="block text-xs font-mono uppercase tracking-wider text-neutral-700 mb-2"
                    htmlFor="b-date"
                  >
                    Preferred Date *
                  </label>
                  <input
                    className="w-full h-12 text-xs font-sans px-4 py-3 rounded-xl border border-[#E9E0DA] bg-white focus:bg-white focus:border-black focus:outline-none transition-all text-[#211D1D]"
                    id="b-date"
                    required
                    type="date"
                    value={formDate}
                    onChange={(e) => setFormDate(e.target.value)}
                  />
                </div>

                <div className="flex flex-col justify-end">
                  <label
                    className="block text-xs font-mono uppercase tracking-wider text-neutral-700 mb-2"
                    htmlFor="b-time"
                  >
                    Preferred Time Slot *
                  </label>
                  <div className="relative">
                    <button
                      className="w-full h-12 text-xs font-sans px-4 py-3 rounded-xl border border-[#E9E0DA] bg-white text-left flex items-center justify-between focus:border-black focus:outline-none text-[#211D1D] cursor-pointer"
                      id="b-time-btn"
                      type="button"
                      onClick={() => setIsTimeDropdownOpen(!isTimeDropdownOpen)}
                    >
                      <span id="b-time-text">{formTime}</span>
                      <span className="text-xs">▼</span>
                    </button>
                    {isTimeDropdownOpen && (
                      <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#E9E0DA] rounded-xl shadow-lg z-30 overflow-hidden">
                        {[
                          'Flexible / Always Open (24/7)',
                          '10:30 AM - 01:00 PM (Morning Slot)',
                          '01:30 PM - 04:30 PM (Afternoon Slot)',
                          '05:00 PM - 08:30 PM (Evening Slot)',
                        ].map((slot) => (
                          <div
                            key={slot}
                            className="p-3 hover:bg-neutral-100 cursor-pointer text-xs font-sans text-[#211D1D]"
                            onClick={() => {
                              setFormTime(slot);
                              setIsTimeDropdownOpen(false);
                            }}
                          >
                            {slot}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-neutral-100">
                <div className="flex items-center gap-3 text-xs text-neutral-500 font-sans">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Instant WhatsApp receipt confirmation · Zero inquiry deposit required</span>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-neutral-300 bg-white hover:bg-neutral-100 text-neutral-900 px-6 py-3.5 rounded-full text-xs font-semibold tracking-wide transition-all"
                    href="https://wa.me/8801682079429"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg className="w-4 h-4 text-emerald-600 fill-current" viewBox="0 0 24 24">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.668-.699c.966.527 1.838.815 2.792.815 3.183 0 5.769-2.586 5.769-5.766.001-3.18-2.585-5.767-5.769-5.767zm7.394 5.765c0 4.079-3.315 7.394-7.394 7.394-1.22 0-2.385-.3-3.415-.845l-4.616 1.21 1.233-4.498c-.649-1.077-1.012-2.336-1.012-3.661 0-4.079 3.315-7.394 7.394-7.394 4.079 0 7.394 3.315 7.394 7.394z" />
                    </svg>
                    <span>Chat on WhatsApp</span>
                  </a>
                  <button
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#6F214F] hover:bg-[#530738] text-white px-8 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all shadow-md cursor-pointer"
                    type="submit"
                  >
                    <span>Request Appointment</span>
                    <span>➔</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>

        {/* Section 7: Pre-Footer Conversion Section */}
        <section
          className="py-24 px-6 md:px-10 bg-[#F5EFE9] border-t border-[#E9E0DA] text-center"
          id="book"
        >
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="space-y-4 max-w-3xl mx-auto">
              <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-neutral-500">
                BEGIN TODAY
              </div>
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold headline-tight text-neutral-950 uppercase leading-none">
                Make your next moment unforgettable.
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 max-w-xl mx-auto">
                Connect with Beautification — The Beauty Studio. Personalized bridal, hair, and glamour transformations crafted for you.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <a
                  className="w-full sm:w-auto bg-[#6F214F] hover:bg-[#530738] text-white font-semibold text-xs tracking-wider uppercase px-8 py-3.5 rounded-full transition-all shadow-md"
                  href="https://wa.me/8801682079429"
                  target="_blank"
                  rel="noreferrer"
                >
                  Request Appointment ➔
                </a>
                <a
                  className="w-full sm:w-auto bg-white hover:bg-neutral-100 text-black border border-neutral-300 font-semibold text-xs tracking-wider uppercase px-8 py-3.5 rounded-full transition-all"
                  href="tel:01682079429"
                >
                  Call 01682-079429
                </a>
              </div>
            </div>

            {/* Interactive Google Maps Atelier Showcase */}
            <div
              className="bg-white rounded-3xl border border-[#E5E4DE] shadow-sm overflow-hidden text-left"
              data-purpose="atelier-map-showcase"
            >
              <div className="p-6 md:px-8 border-b border-neutral-200 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white">
                <div>
                  <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>ATELIER NAVIGATION &amp; DIRECTIONS</span>
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-neutral-950">
                    Visit Beautification The Beauty Studio
                  </h3>
                </div>
                <div className="flex items-center gap-2 bg-[#FAFAFA] p-1.5 rounded-full border border-neutral-200">
                  <div className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-black text-white shadow-sm flex items-center gap-1.5">
                    <span>Mohammadpur Ring Road</span>
                    <span className="text-[9px] font-mono uppercase bg-emerald-600 text-white px-1.5 py-0.5 rounded">
                      Always Open
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 relative">
                <div className="lg:col-span-8 relative min-h-[380px] md:min-h-[440px] bg-neutral-100">
                  <iframe
                    allowFullScreen
                    className="w-full h-full border-0 min-h-[380px] md:min-h-[440px]"
                    id="atelier-google-map-frame"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://maps.google.com/maps?q=Ring+Road+Mohammadpur+Dhaka+Suchona+Community+Centre&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    title="Beautification Google Maps Location"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-neutral-200/80 shadow-sm flex items-center gap-2 text-[11px] font-mono text-neutral-800 pointer-events-none">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="font-semibold text-emerald-700" id="map-chip-status">
                      MOHAMMADPUR STUDIO · ALWAYS OPEN
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-4 p-6 md:p-8 bg-[#FAFAFA] flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-neutral-200 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-black text-white font-bold tracking-wider">
                        DHAKA STUDIO
                      </span>
                      <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-semibold">
                        Always Open (24/7)
                      </span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-neutral-950 mb-1">
                        Beautification The Beauty Studio
                      </h4>
                      <p className="text-xs text-neutral-600 leading-relaxed">
                        House 16/A/3, 3rd Floor, Ring Road, beside Suchona Community Centre &amp; Ecstasy, Mohammadpur, Dhaka, Bangladesh
                      </p>
                    </div>
                    <div className="space-y-2.5 pt-3 border-t border-neutral-200 text-xs font-mono text-neutral-700">
                      <div className="flex justify-between items-center">
                        <span className="text-neutral-500">Operating Hours:</span>
                        <span className="font-semibold text-emerald-700">Always Open (24/7)</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-neutral-500">Primary Phone:</span>
                        <a className="font-bold text-neutral-950 hover:underline" href="tel:01682079429">
                          01682-079429
                        </a>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-neutral-500">Secondary Phone:</span>
                        <a className="font-bold text-neutral-950 hover:underline" href="tel:01515291554">
                          01515-291554
                        </a>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-neutral-500">Landmark:</span>
                        <span className="text-neutral-800 font-semibold">
                          Beside Suchona Community Centre &amp; Ecstasy
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2.5 pt-4 border-t border-neutral-200">
                    <a
                      className="w-full inline-flex items-center justify-center gap-2 bg-black hover:bg-neutral-800 text-white px-5 py-3 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all shadow-sm"
                      href="https://www.google.com/maps/dir/?api=1&destination=Ring+Road+Mohammadpur+Dhaka+Suchona+Community+Centre"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>Get Directions on Google Maps</span>
                      <span>➔</span>
                    </a>
                    <a
                      className="w-full inline-flex items-center justify-center gap-2 bg-white hover:bg-neutral-100 text-neutral-900 border border-neutral-300 px-5 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all"
                      href="tel:01682079429"
                    >
                      <span>Call Studio (01682-079429)</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-[11px] font-mono text-neutral-500">
              <span>✓ BESPOKE BRIDAL CONSULTATION</span>
              <span>✓ CERTIFIED MASTER ARTISTS</span>
              <span>✓ 100% VERIFIED GLOBAL BRANDS</span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#FBF8F4] border-t border-[#E9E0DA] pt-16 pb-12 px-6 md:px-10 text-neutral-600 text-xs">
        <div className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-5 gap-10 pb-16 border-b border-neutral-200">
          <div className="space-y-3">
            © 2025 Beautification — The Beauty Studio. All rights reserved.
          </div>
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-neutral-900">
              Bridal Edit
            </div>
            <ul className="space-y-2">
              <li>
                <a className="hover:text-black" href="#bridal">
                  The Royal Package
                </a>
              </li>
              <li>
                <a className="hover:text-black" href="#bridal">
                  Trial Consultations
                </a>
              </li>
              <li>
                <a className="hover:text-black" href="#bridal">
                  Dupatta &amp; Jewelry Draping
                </a>
              </li>
              <li>
                <a className="hover:text-black" href="#bridal">
                  Airbrush Longevity
                </a>
              </li>
              <li>
                <a className="hover:text-black" href="#bridal">
                  Destination Bridal Team
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-neutral-900">
              Locations
            </div>
            <ul className="space-y-2">
              <li>
                <a className="hover:text-black" href="#locations">
                  Ring Road, Mohammadpur Flagship
                </a>
              </li>
              <li>
                <span className="text-emerald-700 font-semibold">Always Open (24/7)</span>
              </li>
              <li>
                <a className="hover:text-black" href="#locations">
                  Virtual Bridal Consultations
                </a>
              </li>
              <li>
                <a className="font-bold text-neutral-800 hover:text-black" href="tel:01682079429">
                  01682-079429
                </a>
              </li>
              <li>
                <a className="hover:text-black" href="#locations-booking">
                  Bookings Concierge
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-neutral-900">
              Company
            </div>
            <ul className="space-y-2">
              <li>
                <a className="hover:text-black" href="#services">
                  Our Story &amp; Philosophy
                </a>
              </li>
              <li>
                <a className="hover:text-black" href="#services">
                  Careers &amp; Apprenticeships
                </a>
              </li>
              <li>
                <a className="hover:text-black" href="#portfolio-3d">
                  Press &amp; Editorial
                </a>
              </li>
              <li>
                <a className="hover:text-black" href="#services">
                  Hygiene &amp; Safety Protocol
                </a>
              </li>
              <li>
                <span className="italic text-neutral-400">[CONFIRM BUSINESS EMAIL]</span>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-neutral-900">
              Follow
            </div>
            <ul className="space-y-2">
              <li>
                <a className="hover:text-black" href="#" target="_blank" rel="noreferrer">
                  Instagram @beautificationdhaka
                </a>
              </li>
              <li>
                <a className="hover:text-black" href="#" target="_blank" rel="noreferrer">
                  Facebook @beautificationdhaka
                </a>
              </li>
              <li>
                <a className="hover:text-black" href="#" target="_blank" rel="noreferrer">
                  TikTok Tutorials
                </a>
              </li>
              <li>
                <a
                  className="hover:text-black"
                  href="https://wa.me/8801682079429"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp Concierge (01682-079429)
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-[1440px] mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between text-neutral-500 text-[11px] gap-4">
          <div>© 2025 Beautification — The Beauty Studio. All rights reserved.</div>
          <div className="flex space-x-6">
            <a className="hover:text-black" href="#privacy">
              Privacy Policy
            </a>
            <a className="hover:text-black" href="#terms">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
