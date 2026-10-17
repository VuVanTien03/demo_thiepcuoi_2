import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, X, Copy, Check, Send } from 'lucide-react';
import { weddingData } from '../data/weddingData';
import FallingPetals from './FallingPetals';
import '../cinelove.css';

const canvasRawHtml = "<div style=\"position:relative;user-select:auto;display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:500px;height:7680px;min-width:50px;min-height:50px\"><div class=\"jsx-2177353859 w-full h-full\"><div data-node-id=\"Rt6oRNzg5p\" style=\"position:absolute;top:54px;left:64.7515px;width:432.401px;height:129.721px;z-index:0;cursor:default;transform:rotate(0deg) scale(1, 1)\" class=\"jsx-1944329802\"><div data-transition-key=\"Rt6oRNzg5p-slide-up-1.3-0.2-ease-out-false\" data-node-id=\"Rt6oRNzg5p\" style=\"transition:all 1.3s ease-out 0.2s;transform:translateY(50px);opacity:0;width:100%;height:100%\"><div style=\"position:relative;width:100%;height:100%;display:flex;align-items:center;justify-content:center;box-sizing:border-box;border:0px solid;padding:0px 0px 0px 0px;background-color:transparent;text-shadow:0px 0px 2px rgba(0,0,0,0);opacity:1;box-shadow:none;border-radius:0px \n              0px \n              0px \n              0px\" class=\"jsx-1944329802\"><div style=\"-webkit-mask-box-image-source:none;-webkit-mask-box-image-slice:0 fill;mask-image:none;mask-size:100% 100%;mask-repeat:no-repeat\" class=\"jsx-1944329802 photo-component\"><div style=\"background-image:url(/assets/dec_header_ornament.png);border-radius:0px \n                  0px \n                  0px \n                  0px\" class=\"jsx-1944329802 photo-bg-wrap\"></div></div></div></div></div><div data-node-id=\"VFvLzARRH5\" style=\"position:absolute;top:7.5px;left:11px;width:200px;height:145px;z-index:0;cursor:default;transform:rotate(0deg) scale(1, 1)\" class=\"jsx-1944329802\"><div data-transition-key=\"VFvLzARRH5-slide-right-1.3-0.2-ease-out-false\" data-node-id=\"VFvLzARRH5\" style=\"transition:all 1.3s ease-out 0.2s;transform:translateX(-50px);opacity:0;width:100%;height:100%\"><div style=\"position:relative;width:100%;height:100%;display:flex;align-items:center;justify-content:center;box-sizing:border-box;border:0px solid;padding:0px 0px 0px 0px;background-color:transparent;text-shadow:0px 0px 2px rgba(0,0,0,0);opacity:1;box-shadow:none;border-radius:0px \n              0px \n              0px \n              0px\" class=\"jsx-1944329802\"><div style=\"-webkit-mask-box-image-source:none;-webkit-mask-box-image-slice:0 fill;mask-image:none;mask-size:100% 100%;mask-repeat:no-repeat\" class=\"jsx-1944329802 photo-component\"><div style=\"background-image:url(/assets/dec_top_left.png);border-radius:0px \n                  0px \n                  0px \n                  0px\" class=\"jsx-1944329802 photo-bg-wrap\"></div></div></div></div></div><div data-node-id=\"KjLDrIEkQg\" style=\"position:absolute;top:200.349px;left:0.0714999px;width:500.1px;height:756.302px;z-index:0;cursor:default;transform:rotate(0deg) scale(1, 1)\" class=\"jsx-1944329802\"><div data-transition-key=\"KjLDrIEkQg-fade-in-1.3-0-ease-out-false\" data-node-id=\"KjLDrIEkQg\" style=\"transition:all 1.3s ease-out 0s;transform:none;opacity:0;width:100%;height:100%\"><div style=\"position:relative;width:100%;height:100%;display:flex;align-items:center;justify-content:center;box-sizing:border-box;border:0px solid;padding:0px 0px 0px 0px;background-color:transparent;text-shadow:0px 0px 2px rgba(0,0,0,0);opacity:1;box-shadow:none;border-radius:0px \n              0px \n              0px \n              0px\" class=\"jsx-1944329802\"><div style=\"-webkit-mask-box-image-source:url(/assets/061_eheay43znau.png);-webkit-mask-box-image-slice:0 fill;mask-image:url(/assets/061_eheay43znau.png);mask-size:100% 100%;mask-repeat:no-repeat\" class=\"jsx-1944329802 photo-component\"><div style=\"background-image:url(/assets/groom_avatar.jpeg);border-radius:0px \n                  0px \n                  0px \n                  0px\" class=\"jsx-1944329802 photo-bg-wrap\"></div></div></div></div></div><div data-node-id=\"mGgPQzEcck\" style=\"position:absolute;top:206.3px;left:417px;width:65px;height:auto;z-index:0;cursor:default;transform:rotate(0deg)\" class=\"jsx-1828971989 text-box-component \"><div data-transition-key=\"mGgPQzEcck-slide-left-1.3-0-ease-out-false\" data-node-id=\"mGgPQzEcck\" style=\"transition:all 1.3s ease-out 0s;transform:translateX(50px);opacity:0;width:100%;height:100%\"><div style=\"position:relative;width:100%;height:100%;padding:0px 0px 0px 0px;border-radius:0px \n            0px \n            0px \n            0px;box-shadow:none;background-color:transparent;display:flex;align-items:center;justify-content:center;box-sizing:border-box;opacity:1;border:0px solid\" class=\"jsx-1828971989\"><div disabled=\"\" style=\"height:auto;width:100%;min-width:20px;color:#000000;font-size:30px;text-shadow:0px 0px 2px rgba(0,0,0,0);font-weight:bold;font-family:'Mallong',serif;text-align:center;line-height:normal;letter-spacing:0px;text-transform:none;text-decoration:none;font-style:normal;pointer-events:none;overflow:hidden;word-break:break-word\" contentEditable=\"false\">20</div></div></div></div><div data-node-id=\"8DwErKKZWD\" style=\"position:absolute;top:273.3px;left:432px;width:65px;height:auto;z-index:0;cursor:default;transform:rotate(0deg)\" class=\"jsx-1828971989 text-box-component \"><div data-transition-key=\"8DwErKKZWD-slide-left-1.3-0-ease-out-false\" data-node-id=\"8DwErKKZWD\" style=\"transition:all 1.3s ease-out 0s;transform:translateX(50px);opacity:0;width:100%;height:100%\"><div style=\"position:relative;width:100%;height:100%;padding:0px 0px 0px 0px;border-radius:0px \n            0px \n            0px \n            0px;box-shadow:none;background-color:transparent;display:flex;align-items:center;justify-content:center;box-sizing:border-box;opacity:1;border:0px solid\" class=\"jsx-1828971989\"><div disabled=\"\" style=\"height:auto;width:100%;min-width:20px;color:#000000;font-size:30px;text-shadow:0px 0px 2px rgba(0,0,0,0);font-weight:bold;font-family:'Mallong',serif;text-align:center;line-height:normal;letter-spacing:0px;text-transform:none;text-decoration:none;font-style:normal;pointer-events:none;overflow:hidden;word-break:break-word\" contentEditable=\"false\">09</div></div></div></div><div data-node-id=\"CHzeGobQjE\" style=\"position:absolute;top:238.3px;left:423px;width:65px;height:auto;z-index:0;cursor:default;transform:rotate(0deg)\" class=\"jsx-1828971989 text-box-component \"><div data-transition-key=\"CHzeGobQjE-slide-left-1.3-0-ease-out-false\" data-node-id=\"CHzeGobQjE\" style=\"transition:all 1.3s ease-out 0s;transform:translateX(50px);opacity:0;width:100%;height:100%\"><div style=\"position:relative;width:100%;height:100%;padding:0px 0px 0px 0px;border-radius:0px \n            0px \n            0px \n            0px;box-shadow:none;background-color:transparent;display:flex;align-items:center;justify-content:center;box-sizing:border-box;opacity:1;border:0px solid\" class=\"jsx-1828971989\"><div disabled=\"\" style=\"height:auto;width:100%;min-width:20px;color:#000000;font-size:30px;text-shadow:0px 0px 2px rgba(0,0,0,0);font-weight:bold;font-family:'Mallong',serif;text-align:center;line-height:normal;letter-spacing:0px;text-transform:none;text-decoration:none;font-style:normal;pointer-events:none;overflow:hidden;word-break:break-word\" contentEditable=\"false\">/</div></div></div></div><div data-node-id=\"ziO1vTYWf0\" style=\"position:absolute;top:985px;left:48px;width:145.734px;height:42.2628px;z-index:0;cursor:default;transform:rotate(0deg) scale(1, 1)\" class=\"jsx-1944329802\"><div data-transition-key=\"ziO1vTYWf0-slide-right-1.3-0.2-ease-out-false\" data-node-id=\"ziO1vTYWf0\" style=\"transition:all 1.3s ease-out 0.2s;transform:translateX(-50px);opacity:0;width:100%;height:100%\"><div style=\"position:relative;width:100%;height:100%;display:flex;align-items:center;justify-content:center;box-sizing:border-box;border:0px solid;padding:0px 0px 0px 0px;background-color:transparent;text-shadow:0px 0px 2px rgba(0,0,0,0);opacity:1;box-shadow:none;border-radius:0px \n              0px \n              0px \n              0px\" class=\"jsx-1944329802\"><div style=\"-webkit-mask-box-image-source:none;-webkit-mask-box-image-slice:0 fill;mask-image:none;mask-size:100% 100%;mask-repeat:no-repeat\" class=\"jsx-1944329802 photo-component\"><div style=\"background-image:url(/assets/dec_yen_nhi.png);border-radius:0px \n                  0px \n                  0px \n                  0px\" class=\"jsx-1944329802 photo-bg-wrap\"></div></div></div></div></div><div data-node-id=\"VNL-1OItDa\" style=\"position:absolute;top:1048px;left:74.92px;width:126.374px;height:42.9672px;z-index:0;cursor:default;transform:rotate(0deg) scale(1, 1)\" class=\"jsx-1944329802\"><div data-transition-key=\"VNL-1OItDa-slide-right-1.3-0.2-ease-out-false\" data-node-id=\"VNL-1OItDa\" style=\"transition:all 1.3s ease-out 0.2s;transform:translateX(-50px);opacity:0;width:100%;height:100%\"><div style=\"position:relative;width:100%;height:100%;display:flex;align-items:center;justify-content:center;box-sizing:border-box;border:0px solid;padding:0px 0px 0px 0px;background-color:transparent;text-shadow:0px 0px 2px rgba(0,0,0,0);opacity:1;box-shadow:none;border-radius:0px \n              0px \n              0px \n              0px\" class=\"jsx-1944329802\"><div style=\"-webkit-mask-box-image-source:none;-webkit-mask-box-image-slice:0 fill;mask-image:none;mask-size:100% 100%;mask-repeat:no-repeat\" class=\"jsx-1944329802 photo-component\"><div style=\"background-image:url(/assets/dec_hai_dang.png);border-radius:0px \n                  0px \n                  0px \n                  0px\" class=\"jsx-1944329802 photo-bg-wrap\"></div></div></div></div></div><div data-node-id=\"T9khLIm9LT\" style=\"position:absolute;top:990.767px;left:201.3px;width:138px;height:auto;z-index:0;cursor:default;transform:rotate(0deg)\" class=\"jsx-1828971989 text-box-component \"><div data-transition-key=\"T9khLIm9LT-slide-up-1.3-0-ease-out-false\" data-node-id=\"T9khLIm9LT\" style=\"transition:all 1.3s ease-out 0s;transform:translateY(50px);opacity:0;width:100%;height:100%\"><div style=\"position:relative;width:100%;height:100%;padding:0px 0px 0px 0px;border-radius:0px \n            0px \n            0px \n            0px;box-shadow:none;background-color:transparent;display:flex;align-items:center;justify-content:center;box-sizing:border-box;opacity:1;border:0px solid\" class=\"jsx-1828971989\"><div disabled=\"\" style=\"height:auto;width:100%;min-width:20px;color:#000000;font-size:29px;text-shadow:0px 0px 2px rgba(0,0,0,0);font-weight:500;font-family:'Signora',serif;text-align:center;line-height:normal;letter-spacing:0px;text-transform:none;text-decoration:none;font-style:normal;pointer-events:none;overflow:hidden;word-break:break-word\" contentEditable=\"false\">Yến Nhi</div></div></div></div><div data-node-id=\"2ZBrpt1U10\" style=\"position:absolute;top:1056.3px;left:232.3px;width:138px;height:auto;z-index:0;cursor:default;transform:rotate(0deg)\" class=\"jsx-1828971989 text-box-component \"><div data-transition-key=\"2ZBrpt1U10-slide-up-1.3-0-ease-out-false\" data-node-id=\"2ZBrpt1U10\" style=\"transition:all 1.3s ease-out 0s;transform:translateY(50px);opacity:0;width:100%;height:100%\"><div style=\"position:relative;width:100%;height:100%;padding:0px 0px 0px 0px;border-radius:0px \n            0px \n            0px \n            0px;box-shadow:none;background-color:transparent;display:flex;align-items:center;justify-content:center;box-sizing:border-box;opacity:1;border:0px solid\" class=\"jsx-1828971989\"><div disabled=\"\" style=\"height:auto;width:100%;min-width:20px;color:#000000;font-size:29px;text-shadow:0px 0px 2px rgba(0,0,0,0);font-weight:500;font-family:'Signora',serif;text-align:center;line-height:normal;letter-spacing:0px;text-transform:none;text-decoration:none;font-style:normal;pointer-events:none;overflow:hidden;word-break:break-word\" contentEditable=\"false\">Hải Đăng</div></div></div></div><div data-node-id=\"xiQ73HPV33\" style=\"position:absolute;top:1165.63px;left:17.6px;width:465px;height:auto;z-index:0;cursor:default;transform:rotate(0deg)\" class=\"jsx-1828971989 text-box-component \"><div data-transition-key=\"xiQ73HPV33-slide-up-1.3-0-ease-out-false\" data-node-id=\"xiQ73HPV33\" style=\"transition:all 1.3s ease-out 0s;transform:translateY(50px);opacity:0;width:100%;height:100%\"><div style=\"position:relative;width:100%;height:100%;padding:0px 0px 0px 0px;border-radius:0px \n            0px \n            0px \n            0px;box-shadow:none;background-color:transparent;display:flex;align-items:center;justify-content:center;box-sizing:border-box;opacity:1;border:0px solid\" class=\"jsx-1828971989\"><div disabled=\"\" style=\"height:auto;width:100%;min-width:20px;color:#000000;font-size:22px;text-shadow:0px 0px 2px rgba(0,0,0,0);font-weight:500;font-family:'Signora',serif;text-align:center;line-height:1.59;letter-spacing:0px;text-transform:none;text-decoration:none;font-style:normal;pointer-events:none;overflow:hidden;word-break:break-word\" contentEditable=\"false\">Thời gian trôi, tình yêu đong đầy.&nbsp;<div>Chúng mình trân trọng kính mời bạn đến dự lễ cưới,&nbsp;</div><div>Cùng chứng kiến lời thề nguyện và sẻ chia&nbsp;<span style=\"letter-spacing: 0px; background-color: transparent;\">khoảnh khắc hạnh phúc.&nbsp;</span></div><div><span style=\"letter-spacing: 0px; background-color: transparent;\">Sự hiện diện của bạn sẽ làm ngày đặc biệt này thêm rạng ngời</span></div></div></div></div></div><div data-node-id=\"KhYHqgg3vS\" style=\"position:absolute;top:1392px;left:198.65px;width:102.7px;height:84.7273px;z-index:0;cursor:default;transform:rotate(0deg) scale(1, 1)\" class=\"jsx-1944329802\"><div data-transition-key=\"KhYHqgg3vS-slide-up-1.3-0.2-ease-out-false\" data-node-id=\"KhYHqgg3vS\" style=\"transition:all 1.3s ease-out 0.2s;transform:translateY(50px);opacity:0;width:100%;height:100%\"><div style=\"position:relative;width:100%;height:100%;display:flex;align-items:center;justify-content:center;box-sizing:border-box;border:0px solid;padding:0px 0px 0px 0px;background-color:transparent;text-shadow:0px 0px 2px rgba(0,0,0,0);opacity:1;box-shadow:none;border-radius:0px \n              0px \n              0px \n              0px\" class=\"jsx-1944329802\"><div style=\"-webkit-mask-box-image-source:none;-webkit-mask-box-image-slice:0 fill;mask-image:none;mask-size:100% 100%;mask-repeat:no-repeat\" class=\"jsx-1944329802 photo-component\"><div style=\"background-image:url(/assets/dec_heart_ornament.png);border-radius:0px \n                  0px \n                  0px \n                  0px\" class=\"jsx-1944329802 photo-bg-wrap\"></div></div></div></div></div><div data-node-id=\"3cm8ld1oFn\" style=\"position:absolute;top:1576px;left:90.324px;width:326.669px;height:436.102px;z-index:1;cursor:default;transform:rotate(0deg) scale(1, 1)\" class=\"jsx-1944329802\"><div data-transition-key=\"3cm8ld1oFn-slide-up-1.3-0.2-ease-out-false\" data-node-id=\"3cm8ld1oFn\" style=\"transition:all 1.3s ease-out 0.2s;transform:translateY(50px);opacity:0;width:100%;height:100%\"><div style=\"position:relative;width:100%;height:100%;display:flex;align-items:center;justify-content:center;box-sizing:border-box;border:0px solid;padding:0px 0px 0px 0px;background-color:transparent;text-shadow:0px 0px 2px rgba(0,0,0,0);opacity:1;box-shadow:none;border-radius:0px \n              0px \n              0px \n              0px\" class=\"jsx-1944329802\"><div style=\"-webkit-mask-box-image-source:none;-webkit-mask-box-image-slice:0 fill;mask-image:none;mask-size:100% 100%;mask-repeat:no-repeat\" class=\"jsx-1944329802 photo-component\"><div style=\"background-image:url(/assets/couple_arch.jpeg);border-radius:0px \n                  0px \n                  0px \n                  0px\" class=\"jsx-1944329802 photo-bg-wrap\"></div></div></div></div></div><div data-node-id=\"d4PFgFScJl\" style=\"position:absolute;top:1543px;left:125.75px;width:248.7px;height:31.0875px;z-index:0;cursor:default;transform:rotate(0deg) scale(1, 1)\" class=\"jsx-1944329802\"><div data-transition-key=\"d4PFgFScJl-slide-up-1.3-0.2-ease-out-false\" data-node-id=\"d4PFgFScJl\" style=\"transition:all 1.3s ease-out 0.2s;transform:translateY(50px);opacity:0;width:100%;height:100%\"><div style=\"position:relative;width:100%;height:100%;display:flex;align-items:center;justify-content:center;box-sizing:border-box;border:0px solid;padding:0px 0px 0px 0px;background-color:transparent;text-shadow:0px 0px 2px rgba(0,0,0,0);opacity:1;box-shadow:none;border-radius:0px \n              0px \n              0px \n              0px\" class=\"jsx-1944329802\"><div style=\"-webkit-mask-box-image-source:none;-webkit-mask-box-image-slice:0 fill;mask-image:none;mask-size:100% 100%;mask-repeat:no-repeat\" class=\"jsx-1944329802 photo-component\"><div style=\"background-image:url(/assets/dec_date_bar.png);border-radius:0px \n                  0px \n                  0px \n                  0px\" class=\"jsx-1944329802 photo-bg-wrap\"></div></div></div></div></div><div data-node-id=\"ASebbJqh0n\" style=\"position:absolute;top:1497.36px;left:87.3px;width:325px;height:auto;z-index:0;cursor:default;transform:rotate(0deg)\" class=\"jsx-1828971989 text-box-component \"><div data-transition-key=\"ASebbJqh0n-slide-up-1.3-0-ease-out-false\" data-node-id=\"ASebbJqh0n\" style=\"transition:all 1.3s ease-out 0s;transform:translateY(50px);opacity:0;width:100%;height:100%\"><div style=\"position:relative;width:100%;height:100%;padding:0px 0px 0px 0px;border-radius:0px \n            0px \n            0px \n            0px;box-shadow:none;background-color:transparent;display:flex;align-items:center;justify-content:center;box-sizing:border-box;opacity:1;border:0px solid\" class=\"jsx-1828971989\"><div disabled=\"\" style=\"height:auto;width:100%;min-width:20px;color:#000000;font-size:20px;text-shadow:0px 0px 2px rgba(0,0,0,0);font-weight:500;font-family:'Signora',serif;text-align:center;line-height:normal;letter-spacing:0px;text-transform:none;text-decoration:none;font-style:normal;pointer-events:none;overflow:hidden;word-break:break-word\" contentEditable=\"false\">Gặp lại trong ngày hạnh phúc của chúng mình</div></div></div></div><div data-node-id=\"QBL1US5u6S\" style=\"position:absolute;top:1784.4px;left:0px;width:464.5px;height:78.965px;z-index:0;cursor:default;transform:rotate(0deg) scale(1, 1)\" class=\"jsx-1944329802\"><div data-transition-key=\"QBL1US5u6S-slide-up-1.3-0.2-ease-out-false\" data-node-id=\"QBL1US5u6S\" style=\"transition:all 1.3s ease-out 0.2s;transform:translateY(50px);opacity:0;width:100%;height:100%\"><div style=\"position:relative;width:100%;height:100%;display:flex;align-items:center;justify-content:center;box-sizing:border-box;border:0px solid;padding:0px 0px 0px 0px;background-color:transparent;text-shadow:0px 0px 2px rgba(0,0,0,0);opacity:1;box-shadow:none;border-radius:0px \n              0px \n              0px \n              0px\" class=\"jsx-1944329802\"><div style=\"-webkit-mask-box-image-source:none;-webkit-mask-box-image-slice:0 fill;mask-image:none;mask-size:100% 100%;mask-repeat:no-repeat\" class=\"jsx-1944329802 photo-component\"><div style=\"background-image:url(/assets/dec_banner.png);border-radius:0px \n                  0px \n                  0px \n                  0px\" class=\"jsx-1944329802 photo-bg-wrap\"></div></div></div></div></div><div data-node-id=\"AQYqESWUg3\" style=\"position:absolute;top:2030px;left:90.3px;width:180px;height:38.7px;z-index:2;cursor:default;transform:rotate(0deg) scale(1, 1)\" class=\"jsx-1944329802\"><div data-transition-key=\"AQYqESWUg3-slide-up-1.3-0.2-ease-out-false\" data-node-id=\"AQYqESWUg3\" style=\"transition:all 1.3s ease-out 0.2s;transform:translateY(50px);opacity:0;width:100%;height:100%\"><div style=\"position:relative;width:100%;height:100%;display:flex;align-items:center;justify-content:center;box-sizing:border-box;border:0px solid;padding:0px 0px 0px 0px;background-color:transparent;text-shadow:0px 0px 2px rgba(0,0,0,0);opacity:1;box-shadow:none;border-radius:0px \n              0px \n              0px \n              0px\" class=\"jsx-1944329802\"><div style=\"-webkit-mask-box-image-source:none;-webkit-mask-box-image-slice:0 fill;mask-image:none;mask-size:100% 100%;mask-repeat:no-repeat\" class=\"jsx-1944329802 photo-component\"><div style=\"background-image:url(/assets/dec_we_get_married.png);border-radius:0px \n                  0px \n                  0px \n                  0px\" class=\"jsx-1944329802 photo-bg-wrap\"></div></div></div></div></div><div data-node-id=\"PRvqUp7_6q\" style=\"position:absolute;top:2086.62px;left:176.8px;width:111px;height:29.97px;z-index:3;cursor:default;transform:rotate(0deg) scale(1, 1)\" class=\"jsx-1944329802\"><div data-transition-key=\"PRvqUp7_6q-slide-up-1.3-0.2-ease-out-false\" data-node-id=\"PRvqUp7_6q\" style=\"transition:all 1.3s ease-out 0.2s;transform:translateY(50px);opacity:0;width:100%;height:100%\"><div style=\"position:relative;width:100%;height:100%;display:flex;align-items:center;justify-content:center;box-sizing:border-box;border:0px solid;padding:0px 0px 0px 0px;background-color:transparent;text-shadow:0px 0px 2px rgba(0,0,0,0);opacity:1;box-shadow:none;border-radius:0px \n              0px \n              0px \n              0px\" class=\"jsx-1944329802\"><div style=\"-webkit-mask-box-image-source:none;-webkit-mask-box-image-slice:0 fill;mask-image:none;mask-size:100% 100%;mask-repeat:no-repeat\" class=\"jsx-1944329802 photo-component\"><div style=\"background-image:url(/assets/dec_mini_flower.png);border-radius:0px \n                  0px \n                  0px \n                  0px\" class=\"jsx-1944329802 photo-bg-wrap\"></div></div></div></div></div><div data-node-id=\"biF8RVpkhp\" style=\"position:absolute;top:2158.07px;left:219.1px;width:221.7px;height:auto;z-index:0;cursor:default;transform:rotate(0deg)\" class=\"jsx-1828971989 text-box-component \"><div data-transition-key=\"biF8RVpkhp-slide-up-1.3-0-ease-out-false\" data-node-id=\"biF8RVpkhp\" style=\"transition:all 1.3s ease-out 0s;transform:translateY(50px);opacity:0;width:100%;height:100%\"><div style=\"position:relative;width:100%;height:100%;padding:0px 0px 0px 0px;border-radius:0px \n            0px \n            0px \n            0px;box-shadow:none;background-color:transparent;display:flex;align-items:center;justify-content:flex-end;box-sizing:border-box;opacity:1;border:0px solid\" class=\"jsx-1828971989\"><div disabled=\"\" style=\"height:auto;width:100%;min-width:20px;color:#880505;font-size:24px;text-shadow:0px 0px 2px rgba(0,0,0,0);font-weight:500;font-family:'Signora',serif;text-align:right;line-height:normal;letter-spacing:0px;text-transform:none;text-decoration:none;font-style:normal;pointer-events:none;overflow:hidden;word-break:break-word\" contentEditable=\"false\">Tụi mình kết hôn rồi !!</div></div></div></div><div data-node-id=\"B5YqyOjZRx\" style=\"position:absolute;top:2237.36px;left:2.6px;width:236.6px;height:auto;z-index:0;cursor:default;transform:rotate(0deg)\" class=\"jsx-1828971989 text-box-component \"><div data-transition-key=\"B5YqyOjZRx-slide-right-1.3-0-ease-out-false\" data-node-id=\"B5YqyOjZRx\" style=\"transition:all 1.3s ease-out 0s;transform:translateX(-50px);opacity:0;width:100%;height:100%\"><div style=\"position:relative;width:100%;height:100%;padding:0px 0px 0px 0px;border-radius:0px \n            0px \n            0px \n            0px;box-shadow:none;background-color:transparent;display:flex;align-items:center;justify-content:center;box-sizing:border-box;opacity:1;border:0px solid\" class=\"jsx-1828971989\"><div disabled=\"\" style=\"height:auto;width:100%;min-width:20px;color:#880505;font-size:20px;text-shadow:0px 0px 2px rgba(0,0,0,0);font-weight:500;font-family:'Signora',serif;text-align:center;line-height:normal;letter-spacing:0px;text-transform:none;text-decoration:none;font-style:normal;pointer-events:none;overflow:hidden;word-break:break-word\" contentEditable=\"false\">Hôn lễ tổ chức tại&nbsp;<br>Trung tâm tiệc cưới Mai Anh</div></div></div></div><div data-node-id=\"vJcQ-ShwI0\" style=\"position:absolute;top:2227.58px;left:240px;width:0.9px;height:66.9px;z-index:4;cursor:default;transform:rotate(0deg) scale(1, 1)\" class=\"jsx-3557960200\"><div data-transition-key=\"vJcQ-ShwI0-slide-up-1.3-0.2-ease-out-false\" data-node-id=\"vJcQ-ShwI0\" style=\"transition:all 1.3s ease-out 0.2s;transform:translateY(50px);opacity:0;width:100%;height:100%\"><div style=\"position:relative;width:100%;height:100%;display:flex;align-items:center;justify-content:center;box-sizing:border-box;background-color:transparent;text-shadow:0px 0px 2px rgba(0,0,0,0);opacity:1\" class=\"jsx-3557960200\"><div class=\"jsx-3557960200 material-component\"></div></div></div></div><div data-node-id=\"-JvN11Dvym\" style=\"position:absolute;top:2237.06px;left:250px;width:242px;height:auto;z-index:0;cursor:default;transform:rotate(0deg)\" class=\"jsx-1828971989 text-box-component \"><div data-transition-key=\"-JvN11Dvym-slide-left-1.3-0-ease-out-false\" data-node-id=\"-JvN11Dvym\" style=\"transition:all 1.3s ease-out 0s;transform:translateX(50px);opacity:0;width:100%;height:100%\"><div style=\"position:relative;width:100%;height:100%;padding:0px 0px 0px 0px;border-radius:0px \n            0px \n            0px \n            0px;box-shadow:none;background-color:transparent;display:flex;align-items:center;justify-content:center;box-sizing:border-box;opacity:1;border:0px solid\" class=\"jsx-1828971989\"><div disabled=\"\" style=\"height:auto;width:100%;min-width:20px;color:#880505;font-size:20px;text-shadow:0px 0px 2px rgba(0,0,0,0);font-weight:500;font-family:'Signora',serif;text-align:center;line-height:normal;letter-spacing:0px;text-transform:none;text-decoration:none;font-style:normal;pointer-events:none;overflow:hidden;word-break:break-word\" contentEditable=\"false\">Thứ 2 ngày 20 tháng 09 năm 2025<br>Ngày 02 tháng 08 âm lịch 12:00 PM</div></div></div></div><div data-node-id=\"L9bOMu3bPi\" style=\"position:absolute;top:2365.81px;left:26px;width:186.4px;height:186.4px;z-index:5;cursor:default;transform:rotate(0deg) scale(1, 1)\" class=\"jsx-1944329802\"><div data-transition-key=\"L9bOMu3bPi-slide-right-1.3-0.2-ease-out-false\" data-node-id=\"L9bOMu3bPi\" style=\"transition:all 1.3s ease-out 0.2s;transform:translateX(-50px);opacity:0;width:100%;height:100%\"><div style=\"position:relative;width:100%;height:100%;display:flex;align-items:center;justify-content:center;box-sizing:border-box;border:0px solid;padding:0px 0px 0px 0px;background-color:transparent;text-shadow:0px 0px 2px rgba(0,0,0,0);opacity:1;box-shadow:none;border-radius:0px \n              0px \n              0px \n              0px\" class=\"jsx-1944329802\"><div style=\"-webkit-mask-box-image-source:url(/assets/072_y6myfwhzrlk.png);-webkit-mask-box-image-slice:0 fill;mask-image:url(/assets/072_y6myfwhzrlk.png);mask-size:100% 100%;mask-repeat:no-repeat\" class=\"jsx-1944329802 photo-component\"><div style=\"background-image:url(/assets/bride_avatar.jpeg);border-radius:0px \n                  0px \n                  0px \n                  0px\" class=\"jsx-1944329802 photo-bg-wrap\"></div></div></div></div></div><div data-node-id=\"jmGGH8G72t\" style=\"position:absolute;top:2365.76px;left:280.736px;width:187.138px;height:186.4px;z-index:6;cursor:default;transform:rotate(0deg) scale(1, 1)\" class=\"jsx-1944329802\"><div data-transition-key=\"jmGGH8G72t-slide-left-1.3-0.2-ease-out-false\" data-node-id=\"jmGGH8G72t\" style=\"transition:all 1.3s ease-out 0.2s;transform:translateX(50px);opacity:0;width:100%;height:100%\"><div style=\"position:relative;width:100%;height:100%;display:flex;align-items:center;justify-content:center;box-sizing:border-box;border:0px solid;padding:0px 0px 0px 0px;background-color:transparent;text-shadow:0px 0px 2px rgba(0,0,0,0);opacity:1;box-shadow:none;border-radius:0px \n              0px \n              0px \n              0px\" class=\"jsx-1944329802\"><div style=\"-webkit-mask-box-image-source:url(/assets/072_y6myfwhzrlk.png);-webkit-mask-box-image-slice:0 fill;mask-image:url(/assets/072_y6myfwhzrlk.png);mask-size:100% 100%;mask-repeat:no-repeat\" class=\"jsx-1944329802 photo-component\"><div style=\"background-image:url(/assets/couple_thumb_1.jpeg);border-radius:0px \n                  0px \n                  0px \n                  0px\" class=\"jsx-1944329802 photo-bg-wrap\"></div></div></div></div></div><div data-node-id=\"Y9zJipGhRG\" style=\"position:absolute;top:2568.34px;left:52.35px;width:133.7px;height:auto;z-index:0;cursor:default;transform:rotate(0deg)\" class=\"jsx-1828971989 text-box-component \"><div data-transition-key=\"Y9zJipGhRG-slide-right-1.3-0-ease-out-false\" data-node-id=\"Y9zJipGhRG\" style=\"transition:all 1.3s ease-out 0s;transform:translateX(-50px);opacity:0;width:100%;height:100%\"><div style=\"position:relative;width:100%;height:100%;padding:0px 0px 0px 0px;border-radius:0px \n            0px \n            0px \n            0px;box-shadow:none;background-color:transparent;display:flex;align-items:center;justify-content:center;box-sizing:border-box;opacity:1;border:0px solid\" class=\"jsx-1828971989\"><div disabled=\"\" style=\"height:auto;width:100%;min-width:20px;color:#880505;font-size:24px;text-shadow:0px 0px 2px rgba(0,0,0,0);font-weight:500;font-family:'Signora',serif;text-align:center;line-height:normal;letter-spacing:0px;text-transform:none;text-decoration:none;font-style:normal;pointer-events:none;overflow:hidden;word-break:break-word\" contentEditable=\"false\">Chú rể</div></div></div></div><div data-node-id=\"ToHauYxI39\" style=\"position:absolute;top:2620.51px;left:52.4px;width:133.7px;height:auto;z-index:0;cursor:default;transform:rotate(0deg)\" class=\"jsx-1828971989 text-box-component \"><div data-transition-key=\"ToHauYxI39-slide-right-1.3-0-ease-out-false\" data-node-id=\"ToHauYxI39\" style=\"transition:all 1.3s ease-out 0s;transform:translateX(-50px);opacity:0;width:100%;height:100%\"><div style=\"position:relative;width:100%;height:100%;padding:0px 0px 0px 0px;border-radius:0px \n            0px \n            0px \n            0px;box-shadow:none;background-color:transparent;display:flex;align-items:center;justify-content:center;box-sizing:border-box;opacity:1;border:0px solid\" class=\"jsx-1828971989\"><div disabled=\"\" style=\"height:auto;width:100%;min-width:20px;color:#000000;font-size:24px;text-shadow:0px 0px 2px rgba(0,0,0,0);font-weight:500;font-family:'Signora',serif;text-align:center;line-height:normal;letter-spacing:0px;text-transform:none;text-decoration:none;font-style:normal;pointer-events:none;overflow:hidden;word-break:break-word\" contentEditable=\"false\">Hải Đăng</div></div></div></div><div data-node-id=\"j3y04peD1g\" style=\"position:absolute;top:2568.34px;left:307.6px;width:133.7px;height:auto;z-index:0;cursor:default;transform:rotate(0deg)\" class=\"jsx-1828971989 text-box-component \"><div data-transition-key=\"j3y04peD1g-slide-left-1.3-0-ease-out-false\" data-node-id=\"j3y04peD1g\" style=\"transition:all 1.3s ease-out 0s;transform:translateX(50px);opacity:0;width:100%;height:100%\"><div style=\"position:relative;width:100%;height:100%;padding:0px 0px 0px 0px;border-radius:0px \n            0px \n            0px \n            0px;box-shadow:none;background-color:transparent;display:flex;align-items:center;justify-content:center;box-sizing:border-box;opacity:1;border:0px solid\" class=\"jsx-1828971989\"><div disabled=\"\" style=\"height:auto;width:100%;min-width:20px;color:#880505;font-size:24px;text-shadow:0px 0px 2px rgba(0,0,0,0);font-weight:500;font-family:'Signora',serif;text-align:center;line-height:normal;letter-spacing:0px;text-transform:none;text-decoration:none;font-style:normal;pointer-events:none;overflow:hidden;word-break:break-word\" contentEditable=\"false\">Cô dâu</div></div></div></div><div data-node-id=\"lTK0Ld8pUa\" style=\"position:absolute;top:2622.34px;left:307.6px;width:133.7px;height:auto;z-index:0;cursor:default;transform:rotate(0deg)\" class=\"jsx-1828971989 text-box-component \"><div data-transition-key=\"lTK0Ld8pUa-slide-left-1.3-0-ease-out-false\" data-node-id=\"lTK0Ld8pUa\" style=\"transition:all 1.3s ease-out 0s;transform:translateX(50px);opacity:0;width:100%;height:100%\"><div style=\"position:relative;width:100%;height:100%;padding:0px 0px 0px 0px;border-radius:0px \n            0px \n            0px \n            0px;box-shadow:none;background-color:transparent;display:flex;align-items:center;justify-content:center;box-sizing:border-box;opacity:1;border:0px solid\" class=\"jsx-1828971989\"><div disabled=\"\" style=\"height:auto;width:100%;min-width:20px;color:#000000;font-size:24px;text-shadow:0px 0px 2px rgba(0,0,0,0);font-weight:500;font-family:'Signora',serif;text-align:center;line-height:normal;letter-spacing:0px;text-transform:none;text-decoration:none;font-style:normal;pointer-events:none;overflow:hidden;word-break:break-word\" contentEditable=\"false\">Yến Nhi</div></div></div></div><div data-node-id=\"Ffhi_d2FoU\" style=\"position:absolute;top:2736.51px;left:121.902px;width:375.098px;height:75.0195px;z-index:26;cursor:default;transform:rotate(0deg)\"><div data-transition-key=\"Ffhi_d2FoU-slide-up-1.3-0.3-ease-out-false\" data-node-id=\"Ffhi_d2FoU\" style=\"transition:all 1.3s ease-out 0.3s;transform:translateY(50px);opacity:0;width:100%;height:100%\"><div style=\"position:relative;width:100%;height:100%;display:flex;align-items:center;justify-content:center;box-sizing:border-box;border:0px solid;padding:0px 0px 0px 0px;text-shadow:0px 0px 2px rgba(0,0,0,0);opacity:1;background-color:transparent;border-radius:0px \n              0px \n              0px \n              0px;box-shadow:none\"><div style=\"color:#880505;background-color:rgba(249, 248, 243, 0);width:100%;height:100%;font-size:16px;font-family:'Arial',serif;--spacing:20px\" class=\"jsx-3272123691 countdown componentBOX \"><div style=\"background-color:rgba(249, 248, 243, 0)\" class=\"jsx-3272123691\"><div class=\"jsx-3272123691\">0</div><div class=\"jsx-3272123691\">ngày</div></div><div style=\"background-color:rgba(249, 248, 243, 0)\" class=\"jsx-3272123691\"><div class=\"jsx-3272123691\">0</div><div class=\"jsx-3272123691\">giờ</div></div><div style=\"background-color:rgba(249, 248, 243, 0)\" class=\"jsx-3272123691\"><div class=\"jsx-3272123691\">0</div><div class=\"jsx-3272123691\">phút</div></div><div style=\"background-color:rgba(249, 248, 243, 0)\" class=\"jsx-3272123691\"><div class=\"jsx-3272123691\">0</div><div class=\"jsx-3272123691\">giây</div></div></div></div></div></div><div data-node-id=\"CfyAuzAcKK\" style=\"position:absolute;top:2710.49px;left:1.4px;width:500.1px;height:753.403px;z-index:8;cursor:default;transform:rotate(0deg) scale(1, 1)\" class=\"jsx-1944329802\"><div data-transition-key=\"CfyAuzAcKK-slide-up-1.3-0.2-ease-out-false\" data-node-id=\"CfyAuzAcKK\" style=\"transition:all 1.3s ease-out 0.2s;transform:translateY(50px);opacity:0;width:100%;height:100%\"><div style=\"position:relative;width:100%;height:100%;display:flex;align-items:center;justify-content:center;box-sizing:border-box;border:0px solid;padding:0px 0px 0px 0px;background-color:transparent;text-shadow:0px 0px 2px rgba(0,0,0,0);opacity:1;box-shadow:none;border-radius:0px \n              0px \n              0px \n              0px\" class=\"jsx-1944329802\"><div style=\"-webkit-mask-box-image-source:url(/assets/061_eheay43znau.png);-webkit-mask-box-image-slice:0 fill;mask-image:url(/assets/061_eheay43znau.png);mask-size:100% 100%;mask-repeat:no-repeat\" class=\"jsx-1944329802 photo-component\"><div style=\"background-image:url(/assets/couple_thumb_2.jpeg);border-radius:0px \n                  0px \n                  0px \n                  0px\" class=\"jsx-1944329802 photo-bg-wrap\"></div></div></div></div></div><div data-node-id=\"ZURu6KycGT\" style=\"position:absolute;top:3401.5075px;left:23.079px;width:341.242px;height:52.8925px;z-index:9;cursor:default;transform:rotate(0deg) scale(1, 1)\" class=\"jsx-1944329802\"><div data-transition-key=\"ZURu6KycGT-slide-up-1.3-0.2-ease-out-false\" data-node-id=\"ZURu6KycGT\" style=\"transition:all 1.3s ease-out 0.2s;transform:translateY(50px);opacity:0;width:100%;height:100%\"><div style=\"position:relative;width:100%;height:100%;display:flex;align-items:center;justify-content:center;box-sizing:border-box;border:0px solid;padding:0px 0px 0px 0px;background-color:transparent;text-shadow:0px 0px 2px rgba(0,0,0,0);opacity:1;box-shadow:none;border-radius:0px \n              0px \n              0px \n              0px\" class=\"jsx-1944329802\"><div style=\"-webkit-mask-box-image-source:none;-webkit-mask-box-image-slice:0 fill;mask-image:none;mask-size:100% 100%;mask-repeat:no-repeat\" class=\"jsx-1944329802 photo-component\"><div style=\"background-image:url(/assets/dec_extra_flower.png);border-radius:0px \n                  0px \n                  0px \n                  0px\" class=\"jsx-1944329802 photo-bg-wrap\"></div></div></div></div></div><div data-node-id=\"6dh7_FKkgk\" style=\"position:absolute;top:3524.51px;left:106.85000000000002px;width:357.7px;height:auto;z-index:0;cursor:default;transform:rotate(0deg)\" class=\"jsx-1828971989 text-box-component \"><div data-transition-key=\"6dh7_FKkgk-slide-up-1.3-0-ease-out-false\" data-node-id=\"6dh7_FKkgk\" style=\"transition:all 1.3s ease-out 0s;transform:translateY(50px);opacity:0;width:100%;height:100%\"><div style=\"position:relative;width:100%;height:100%;padding:0px 0px 0px 0px;border-radius:0px \n            0px \n            0px \n            0px;box-shadow:none;background-color:transparent;display:flex;align-items:center;justify-content:flex-end;box-sizing:border-box;opacity:1;border:0px solid\" class=\"jsx-1828971989\"><div disabled=\"\" style=\"height:auto;width:100%;min-width:20px;color:#000000;font-size:24px;text-shadow:0px 0px 2px rgba(0,0,0,0);font-weight:500;font-family:'Signora',serif;text-align:right;line-height:1.59;letter-spacing:0px;text-transform:none;text-decoration:none;font-style:normal;pointer-events:none;overflow:hidden;word-break:break-word\" contentEditable=\"false\"><p data-start=\"116\" data-end=\"187\">Xuân sang, hạ lại phai màu<br data-start=\"144\" data-end=\"147\">\nThu gom vàng nắng, đông sâu lạnh lùng.</p>\n<p data-start=\"189\" data-end=\"256\">Đời người muôn nẻo mông lung<br data-start=\"217\" data-end=\"220\">\nNghe tin anh đó, em cùng vượt qua.</p>\n<p data-start=\"258\" data-end=\"325\">Kiếp này hạnh ngộ chan hòa<br data-start=\"284\" data-end=\"287\">\nGặp nhau là đủ, ngọc ngà núi sông.</p></div></div></div></div><div data-node-id=\"-0fcPLazdz\" style=\"position:absolute;top:3781.51px;left:106.9px;width:357.7px;height:auto;z-index:0;cursor:default;transform:rotate(0deg)\" class=\"jsx-1828971989 text-box-component \"><div data-transition-key=\"-0fcPLazdz-slide-up-1.3-0-ease-out-false\" data-node-id=\"-0fcPLazdz\" style=\"transition:all 1.3s ease-out 0s;transform:translateY(50px);opacity:0;width:100%;height:100%\"><div style=\"position:relative;width:100%;height:100%;padding:0px 0px 0px 0px;border-radius:0px \n            0px \n            0px \n            0px;box-shadow:none;background-color:transparent;display:flex;align-items:center;justify-content:flex-end;box-sizing:border-box;opacity:1;border:0px solid\" class=\"jsx-1828971989\"><div disabled=\"\" style=\"height:auto;width:100%;min-width:20px;color:#880505;font-size:24px;text-shadow:0px 0px 2px rgba(0,0,0,0);font-weight:500;font-family:'Signora',serif;text-align:right;line-height:1.59;letter-spacing:0px;text-transform:none;text-decoration:none;font-style:normal;pointer-events:none;overflow:hidden;word-break:break-word\" contentEditable=\"false\"><p data-start=\"116\" data-end=\"187\">Mãi là em, mãi chỉ là em</p></div></div></div></div><div data-node-id=\"gjDbaemHrj\" style=\"position:absolute;top:3859.13px;left:109px;width:357.7px;height:auto;z-index:0;cursor:default;transform:rotate(0deg)\" class=\"jsx-1828971989 text-box-component \"><div data-transition-key=\"gjDbaemHrj-slide-up-1.3-0-ease-out-false\" data-node-id=\"gjDbaemHrj\" style=\"transition:all 1.3s ease-out 0s;transform:translateY(50px);opacity:0;width:100%;height:100%\"><div style=\"position:relative;width:100%;height:100%;padding:0px 0px 0px 0px;border-radius:0px \n            0px \n            0px \n            0px;box-shadow:none;background-color:transparent;display:flex;align-items:center;justify-content:flex-end;box-sizing:border-box;opacity:1;border:0px solid\" class=\"jsx-1828971989\"><div disabled=\"\" style=\"height:auto;width:100%;min-width:20px;color:#000000;font-size:24px;text-shadow:0px 0px 2px rgba(0,0,0,0);font-weight:500;font-family:'Signora',serif;text-align:right;line-height:1.59;letter-spacing:0px;text-transform:none;text-decoration:none;font-style:normal;pointer-events:none;overflow:hidden;word-break:break-word\" contentEditable=\"false\"><p data-start=\"116\" data-end=\"187\">Ta chẳng thể biết giá trị của khoảnh khắc</p><p data-start=\"116\" data-end=\"187\">Cho đến khi nó hóa thành ký ức.&nbsp;</p><p data-start=\"116\" data-end=\"187\">Nguyện có tháng ngày để ngoảnh lại nhìn,&nbsp;</p><p data-start=\"116\" data-end=\"187\">Và dùng trọn tình sâu để cùng nhau bạc đầu.</p></div></div></div></div><div data-node-id=\"y0Tkzk10d3\" style=\"position:absolute;top:4465.61px;left:0.1px;width:499.9px;height:329.774px;z-index:11;cursor:default;transform:rotate(0deg) scale(1, 1)\" class=\"jsx-1944329802\"><div data-transition-key=\"y0Tkzk10d3-slide-up-1.3-0.2-ease-out-false\" data-node-id=\"y0Tkzk10d3\" style=\"transition:all 1.3s ease-out 0.2s;transform:translateY(50px);opacity:0;width:100%;height:100%\"><div style=\"position:relative;width:100%;height:100%;display:flex;align-items:center;justify-content:center;box-sizing:border-box;border:0px solid;padding:0px 0px 0px 0px;background-color:transparent;text-shadow:0px 0px 2px rgba(0,0,0,0);opacity:1;box-shadow:none;border-radius:0px \n              0px \n              0px \n              0px\" class=\"jsx-1944329802\"><div style=\"-webkit-mask-box-image-source:none;-webkit-mask-box-image-slice:0 fill;mask-image:none;mask-size:100% 100%;mask-repeat:no-repeat\" class=\"jsx-1944329802 photo-component\"><div style=\"background-image:url(/assets/fall_in_love.jpeg);border-radius:0px \n                  0px \n                  0px \n                  0px\" class=\"jsx-1944329802 photo-bg-wrap\"></div></div></div></div></div><div data-node-id=\"iOlNf7z4H8\" style=\"position:absolute;top:4099.95px;left:-0.4px;width:500.4px;height:328.798px;z-index:12;cursor:default;transform:rotate(0deg) scale(1, 1)\" class=\"jsx-1944329802\"><div data-transition-key=\"iOlNf7z4H8-slide-up-1.3-0.2-ease-out-false\" data-node-id=\"iOlNf7z4H8\" style=\"transition:all 1.3s ease-out 0.2s;transform:translateY(50px);opacity:0;width:100%;height:100%\"><div style=\"position:relative;width:100%;height:100%;display:flex;align-items:center;justify-content:center;box-sizing:border-box;border:0px solid;padding:0px 0px 0px 0px;background-color:transparent;text-shadow:0px 0px 2px rgba(0,0,0,0);opacity:1;box-shadow:none;border-radius:0px \n              0px \n              0px \n              0px\" class=\"jsx-1944329802\"><div style=\"-webkit-mask-box-image-source:none;-webkit-mask-box-image-slice:0 fill;mask-image:none;mask-size:100% 100%;mask-repeat:no-repeat\" class=\"jsx-1944329802 photo-component\"><div style=\"background-image:url(/assets/hero_cover.jpeg);border-radius:0px \n                  0px \n                  0px \n                  0px\" class=\"jsx-1944329802 photo-bg-wrap\"></div></div></div></div></div><div data-node-id=\"uFOFaa4Mz-\" style=\"position:absolute;top:4433.75px;left:8.6px;width:483.4px;height:auto;z-index:13;cursor:default;transform:rotate(0deg)\" class=\"jsx-1828971989 text-box-component \"><div data-transition-key=\"uFOFaa4Mz--slide-up-1.3-0-ease-out-false\" data-node-id=\"uFOFaa4Mz-\" style=\"transition:all 1.3s ease-out 0s;transform:translateY(50px);opacity:0;width:100%;height:100%\"><div style=\"position:relative;width:100%;height:100%;padding:0px 0px 0px 0px;border-radius:0px \n            0px \n            0px \n            0px;box-shadow:none;background-color:transparent;display:flex;align-items:center;justify-content:center;box-sizing:border-box;opacity:1;border:0px solid\" class=\"jsx-1828971989\"><div disabled=\"\" style=\"height:auto;width:100%;min-width:20px;color:#880505;font-size:24px;text-shadow:0px 0px 2px rgba(0,0,0,0);font-weight:500;font-family:'Quicksand',serif;text-align:center;line-height:normal;letter-spacing:0px;text-transform:none;text-decoration:none;font-style:normal;pointer-events:none;overflow:hidden;word-break:break-word\" contentEditable=\"false\">&nbsp;FALL IN&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; LOVE&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; WITH&nbsp; YOU</div></div></div></div><div data-node-id=\"8HPE3hGl8U\" style=\"position:absolute;top:4803.1px;left:98.45px;width:313.9px;height:89.4615px;z-index:14;cursor:default;transform:rotate(0deg) scale(1, 1)\" class=\"jsx-1944329802\"><div data-transition-key=\"8HPE3hGl8U-slide-up-1.3-0.2-ease-out-false\" data-node-id=\"8HPE3hGl8U\" style=\"transition:all 1.3s ease-out 0.2s;transform:translateY(50px);opacity:0;width:100%;height:100%\"><div style=\"position:relative;width:100%;height:100%;display:flex;align-items:center;justify-content:center;box-sizing:border-box;border:0px solid;padding:0px 0px 0px 0px;background-color:transparent;text-shadow:0px 0px 2px rgba(0,0,0,0);opacity:1;box-shadow:none;border-radius:0px \n              0px \n              0px \n              0px\" class=\"jsx-1944329802\"><div style=\"-webkit-mask-box-image-source:none;-webkit-mask-box-image-slice:0 fill;mask-image:none;mask-size:100% 100%;mask-repeat:no-repeat\" class=\"jsx-1944329802 photo-component\"><div style=\"background-image:url(/assets/dec_vintage_label.png);border-radius:0px \n                  0px \n                  0px \n                  0px\" class=\"jsx-1944329802 photo-bg-wrap\"></div></div></div></div></div><div data-node-id=\"qdyU6rdxfi\" style=\"position:absolute;top:4906.38px;left:69.6px;width:357.7px;height:auto;z-index:0;cursor:default;transform:rotate(0deg)\" class=\"jsx-1828971989 text-box-component \"><div data-transition-key=\"qdyU6rdxfi-slide-up-1.3-0-ease-out-false\" data-node-id=\"qdyU6rdxfi\" style=\"transition:all 1.3s ease-out 0s;transform:translateY(50px);opacity:0;width:100%;height:100%\"><div style=\"position:relative;width:100%;height:100%;padding:0px 0px 0px 0px;border-radius:0px \n            0px \n            0px \n            0px;box-shadow:none;background-color:transparent;display:flex;align-items:center;justify-content:center;box-sizing:border-box;opacity:1;border:0px solid\" class=\"jsx-1828971989\"><div disabled=\"\" style=\"height:auto;width:100%;min-width:20px;color:#000000;font-size:24px;text-shadow:0px 0px 2px rgba(0,0,0,0);font-weight:500;font-family:'Signora',serif;text-align:center;line-height:1.59;letter-spacing:0px;text-transform:none;text-decoration:none;font-style:normal;pointer-events:none;overflow:hidden;word-break:break-word\" contentEditable=\"false\"><p data-start=\"116\" data-end=\"187\">Ngày nắng đẹp, chợt muốn đi chơi&nbsp;</p><p data-start=\"116\" data-end=\"187\">Vào tiệm hoa, hái một cành xuân.&nbsp;</p><p data-start=\"116\" data-end=\"187\">Kịp gặp em khi tuổi còn trẻ&nbsp;</p><p data-start=\"116\" data-end=\"187\">Thú thật lòng, yêu em từ lâu</p></div></div></div></div><div data-node-id=\"M2vRCwKV-Y\" style=\"position:absolute;top:5125px;left:57.7px;width:385.2px;height:577.801px;z-index:15;cursor:default;transform:rotate(0deg) scale(1, 1)\" class=\"jsx-1944329802\"><div data-transition-key=\"M2vRCwKV-Y-slide-up-1.3-0.2-ease-out-false\" data-node-id=\"M2vRCwKV-Y\" style=\"transition:all 1.3s ease-out 0.2s;transform:translateY(50px);opacity:0;width:100%;height:100%\"><div style=\"position:relative;width:100%;height:100%;display:flex;align-items:center;justify-content:center;box-sizing:border-box;border:0px solid;padding:0px 0px 0px 0px;background-color:transparent;text-shadow:0px 0px 2px rgba(0,0,0,0);opacity:1;box-shadow:none;border-radius:0px \n              0px \n              0px \n              0px\" class=\"jsx-1944329802\"><div style=\"-webkit-mask-box-image-source:none;-webkit-mask-box-image-slice:0 fill;mask-image:none;mask-size:100% 100%;mask-repeat:no-repeat\" class=\"jsx-1944329802 photo-component\"><div style=\"background-image:url(/assets/poem_portrait.jpeg);border-radius:0px \n                  0px \n                  0px \n                  0px\" class=\"jsx-1944329802 photo-bg-wrap\"></div></div></div></div></div><div data-node-id=\"qXTdE2oqOy\" style=\"position:absolute;top:5423.7px;left:11.05px;width:486px;height:390.898px;z-index:16;cursor:default;transform:rotate(0deg) scale(1, 1)\" class=\"jsx-3557960200\"><div data-transition-key=\"qXTdE2oqOy-slide-up-1.3-0.2-ease-out-false\" data-node-id=\"qXTdE2oqOy\" style=\"transition:all 1.3s ease-out 0.2s;transform:translateY(50px);opacity:0;width:100%;height:100%\"><div style=\"position:relative;width:100%;height:100%;display:flex;align-items:center;justify-content:center;box-sizing:border-box;background-color:transparent;text-shadow:0px 0px 2px rgba(0,0,0,0);opacity:0.68\" class=\"jsx-3557960200\"><div class=\"jsx-3557960200 material-component\"></div></div></div></div><div data-node-id=\"cXbk0oWwhs\" style=\"position:absolute;top:5398.23px;left:208.208px;width:88.2px;height:72.765px;z-index:17;cursor:default;transform:rotate(0deg) scale(1, 1)\" class=\"jsx-1944329802\"><div data-transition-key=\"cXbk0oWwhs-slide-up-1.3-0.2-ease-out-false\" data-node-id=\"cXbk0oWwhs\" style=\"transition:all 1.3s ease-out 0.2s;transform:translateY(50px);opacity:0;width:100%;height:100%\"><div style=\"position:relative;width:100%;height:100%;display:flex;align-items:center;justify-content:center;box-sizing:border-box;border:0px solid;padding:0px 0px 0px 0px;background-color:transparent;text-shadow:0px 0px 2px rgba(0,0,0,0);opacity:1;box-shadow:none;border-radius:0px \n              0px \n              0px \n              0px\" class=\"jsx-1944329802\"><div style=\"-webkit-mask-box-image-source:none;-webkit-mask-box-image-slice:0 fill;mask-image:none;mask-size:100% 100%;mask-repeat:no-repeat\" class=\"jsx-1944329802 photo-component\"><div style=\"background-image:url(/assets/dec_heart_ornament.png);border-radius:0px \n                  0px \n                  0px \n                  0px\" class=\"jsx-1944329802 photo-bg-wrap\"></div></div></div></div></div><div data-node-id=\"NNwH0FY9SJ\" style=\"position:absolute;top:5496px;left:60px;width:380px;height:auto;z-index:18;cursor:default;transform:rotate(0deg)\" class=\"jsx-1828971989 text-box-component \"><div data-transition-key=\"NNwH0FY9SJ-slide-up-1.3-0-ease-out-false\" data-node-id=\"NNwH0FY9SJ\" style=\"transition:all 1.3s ease-out 0s;transform:translateY(50px);opacity:0;width:100%;height:100%\"><div style=\"position:relative;width:100%;height:100%;padding:0px 0px 0px 0px;border-radius:0px \n            0px \n            0px \n            0px;box-shadow:none;background-color:transparent;display:flex;align-items:center;justify-content:center;box-sizing:border-box;opacity:1;border:0px solid\" class=\"jsx-1828971989\"><div disabled=\"\" style=\"height:auto;width:100%;min-width:20px;color:#000000;font-size:20px;text-shadow:0px 0px 2px rgba(0,0,0,0);font-weight:500;font-family:'Signora',serif;text-align:center;line-height:1.59;letter-spacing:0px;text-transform:none;text-decoration:none;font-style:normal;pointer-events:none;overflow:hidden;word-break:break-word\" contentEditable=\"false\"><p data-start=\"116\" data-end=\"187\">Ngày vui đã chọn, trân trọng mời bạn</p></div></div></div></div><div data-node-id=\"m3HJYIdqgJ\" style=\"position:absolute;top:5547.08px;left:143.272px;width:231.152px;height:260.687px;z-index:19;cursor:default;transform:rotate(0deg)\"><div data-transition-key=\"m3HJYIdqgJ-slide-up-1.3-0.3-ease-out-false\" data-node-id=\"m3HJYIdqgJ\" style=\"transition:all 1.3s ease-out 0.3s;transform:translateY(50px);opacity:0;width:100%;height:100%\"><div style=\"position:relative;width:100%;height:100%;display:flex;align-items:center;justify-content:center;box-sizing:border-box;border:0px solid;padding:0px 0px 0px 0px;background-color:transparent;text-shadow:0px 0px 2px rgba(0,0,0,0);opacity:1;border-radius:0px \n              0px \n              0px \n              0px;box-shadow:none\"><div class=\"calendar componentBOX\" style=\"opacity:1;z-index:154;border-radius:0;width:100%;height:100%;color:#880505;font-size:14px;font-family:Arial\"><div class=\"template-three\"><div><div>1</div></div><div><div>2</div></div><div><div>3</div></div><div><div>4</div></div><div><div>5</div></div><div><div>6</div></div><div><div>7</div></div><div><div>8</div></div><div><div>9</div></div><div><div>10</div></div><div><div>11</div></div><div><div>12</div></div><div><div>13</div></div><div><div>14</div></div><div><div>15</div></div><div><div>16</div></div><div><div>17</div></div><div><div>18</div></div><div><div>19</div></div><div><img class=\"heart-date\" src=\"/assets/calen_heart.png\" alt=\"heart\"/><div class=\"colorF\">20</div></div><div><div>21</div></div><div><div>22</div></div><div><div>23</div></div><div><div>24</div></div><div><div>25</div></div><div><div>26</div></div><div><div>27</div></div><div><div>28</div></div><div><div>29</div></div><div><div>30</div></div></div></div></div></div></div><div data-node-id=\"4Z9APOIBot\" style=\"position:absolute;top:5845.93px;left:111.05px;width:245.3px;height:auto;z-index:19;cursor:default;transform:rotate(0deg)\" class=\"jsx-1828971989 text-box-component \"><div data-transition-key=\"4Z9APOIBot-slide-up-1.3-0-ease-out-false\" data-node-id=\"4Z9APOIBot\" style=\"transition:all 1.3s ease-out 0s;transform:translateY(50px);opacity:0;width:100%;height:100%\"><div style=\"position:relative;width:100%;height:100%;padding:0px 0px 0px 0px;border-radius:0px \n            0px \n            0px \n            0px;box-shadow:none;background-color:transparent;display:flex;align-items:center;justify-content:flex-end;box-sizing:border-box;opacity:1;border:0px solid\" class=\"jsx-1828971989\"><div disabled=\"\" style=\"height:auto;width:100%;min-width:20px;color:#000000;font-size:20px;text-shadow:0px 0px 2px rgba(0,0,0,0);font-weight:500;font-family:'Signora',serif;text-align:right;line-height:1.59;letter-spacing:0px;text-transform:none;text-decoration:none;font-style:normal;pointer-events:none;overflow:hidden;word-break:break-word\" contentEditable=\"false\"><p data-start=\"116\" data-end=\"187\">Thứ 7 ngày 20 tháng 09 năm 2025<br>Ngày 08 tháng 08 âm lịch 12:00PM</p></div></div></div></div><div data-node-id=\"6Tgbfoeqon\" style=\"position:absolute;top:5947.7px;left:157.7px;width:191.9px;height:52.7725px;z-index:20;cursor:default;transform:rotate(0deg) scale(1, 1)\" class=\"jsx-1944329802\"><div data-transition-key=\"6Tgbfoeqon-slide-up-1.3-0.2-ease-out-false\" data-node-id=\"6Tgbfoeqon\" style=\"transition:all 1.3s ease-out 0.2s;transform:translateY(50px);opacity:0;width:100%;height:100%\"><div style=\"position:relative;width:100%;height:100%;display:flex;align-items:center;justify-content:center;box-sizing:border-box;border:0px solid;padding:0px 0px 0px 0px;background-color:transparent;text-shadow:0px 0px 2px rgba(0,0,0,0);opacity:1;box-shadow:none;border-radius:0px \n              0px \n              0px \n              0px\" class=\"jsx-1944329802\"><div style=\"-webkit-mask-box-image-source:none;-webkit-mask-box-image-slice:0 fill;mask-image:none;mask-size:100% 100%;mask-repeat:no-repeat\" class=\"jsx-1944329802 photo-component\"><div style=\"background-image:url(/assets/dec_ribbon.png);border-radius:0px \n                  0px \n                  0px \n                  0px\" class=\"jsx-1944329802 photo-bg-wrap\"></div></div></div></div></div><div style=\"position:absolute;top:6005.3px;left:57.2655px;width:370.2px;height:223.329px;transform:rotate(0deg);z-index:21\" class=\"relative\"><div data-transition-key=\"f8-eeKrHHA-slide-up-1.3-0.3-ease-out-false\" data-node-id=\"f8-eeKrHHA\" style=\"transition:all 1.3s ease-out 0.3s;transform:translateY(50px);opacity:0;width:100%;height:100%\"><div style=\"position:relative;width:100%;height:100%;opacity:1;padding:6px 6px 6px 6px;border-radius:6px 6px 6px 6px;border:0px solid;box-shadow:none;background-color:#fffffc\"><div style=\"position:relative;width:100%;height:100%\"><div style=\"width:100%;height:100%\" class=\"jsx-1691086756 simple-map-container\"><iframe width=\"100%\" height=\"100%\" frameBorder=\"0\" style=\"border:0;border-radius:6px 6px 6px 6px\" src=\"https://maps.google.com/maps?q=52%20Mi%E1%BA%BFu%20%C4%90%E1%BA%A7m%2C%20M%E1%BB%85%20Tr%C3%AC%2C%20Nam%20T%E1%BB%AB%20Li%C3%AAm%2C%20H%C3%A0%20N%E1%BB%99i&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=&amp;output=embed\" allowFullScreen=\"\" class=\"jsx-1691086756\"></iframe></div></div></div></div></div><div data-node-id=\"AYkVTjCrHX\" style=\"position:absolute;top:6234.2px;left:90.15px;width:319.3px;height:auto;z-index:20;cursor:default;transform:rotate(0deg)\" class=\"jsx-1828971989 text-box-component \"><div data-transition-key=\"AYkVTjCrHX-slide-up-1.3-0-ease-out-false\" data-node-id=\"AYkVTjCrHX\" style=\"transition:all 1.3s ease-out 0s;transform:translateY(50px);opacity:0;width:100%;height:100%\"><div style=\"position:relative;width:100%;height:100%;padding:0px 0px 0px 0px;border-radius:0px \n            0px \n            0px \n            0px;box-shadow:none;background-color:transparent;display:flex;align-items:center;justify-content:center;box-sizing:border-box;opacity:1;border:0px solid\" class=\"jsx-1828971989\"><div disabled=\"\" style=\"height:auto;width:100%;min-width:20px;color:#000000;font-size:20px;text-shadow:0px 0px 2px rgba(0,0,0,0);font-weight:500;font-family:'Signora',serif;text-align:center;line-height:1.59;letter-spacing:0px;text-transform:none;text-decoration:none;font-style:normal;pointer-events:none;overflow:hidden;word-break:break-word\" contentEditable=\"false\"><p data-start=\"116\" data-end=\"187\">52 Miếu Đầm, Mễ Trì, Nam Từ Liêm, Hà Nội</p></div></div></div></div><div data-node-id=\"6gDWiXyq82\" style=\"position:absolute;top:6308px;left:11.600000000000001px;width:232.2px;height:348.301px;z-index:22;cursor:default;transform:rotate(0deg) scale(1, 1)\" class=\"jsx-1944329802\"><div data-transition-key=\"6gDWiXyq82-slide-right-1.3-0.2-ease-out-false\" data-node-id=\"6gDWiXyq82\" style=\"transition:all 1.3s ease-out 0.2s;transform:translateX(-50px);opacity:0;width:100%;height:100%\"><div style=\"position:relative;width:100%;height:100%;display:flex;align-items:center;justify-content:center;box-sizing:border-box;border:0px solid;padding:0px 0px 0px 0px;background-color:transparent;text-shadow:0px 0px 2px rgba(0,0,0,0);opacity:1;box-shadow:none;border-radius:0px \n              0px \n              0px \n              0px\" class=\"jsx-1944329802\"><div style=\"-webkit-mask-box-image-source:none;-webkit-mask-box-image-slice:0 fill;mask-image:none;mask-size:100% 100%;mask-repeat:no-repeat\" class=\"jsx-1944329802 photo-component\"><div style=\"background-image:url(/assets/gallery_1.jpeg);border-radius:0px \n                  0px \n                  0px \n                  0px\" class=\"jsx-1944329802 photo-bg-wrap\"></div></div></div></div></div><div data-node-id=\"kg2_b0R-sN\" style=\"position:absolute;top:6308px;left:253.4px;width:232.6px;height:348.901px;z-index:23;cursor:default;transform:rotate(0deg) scale(1, 1)\" class=\"jsx-1944329802\"><div data-transition-key=\"kg2_b0R-sN-slide-left-1.3-0.2-ease-out-false\" data-node-id=\"kg2_b0R-sN\" style=\"transition:all 1.3s ease-out 0.2s;transform:translateX(50px);opacity:0;width:100%;height:100%\"><div style=\"position:relative;width:100%;height:100%;display:flex;align-items:center;justify-content:center;box-sizing:border-box;border:0px solid;padding:0px 0px 0px 0px;background-color:transparent;text-shadow:0px 0px 2px rgba(0,0,0,0);opacity:1;box-shadow:none;border-radius:0px \n              0px \n              0px \n              0px\" class=\"jsx-1944329802\"><div style=\"-webkit-mask-box-image-source:none;-webkit-mask-box-image-slice:0 fill;mask-image:none;mask-size:100% 100%;mask-repeat:no-repeat\" class=\"jsx-1944329802 photo-component\"><div style=\"background-image:url(/assets/gallery_2.jpeg);border-radius:0px \n                  0px \n                  0px \n                  0px\" class=\"jsx-1944329802 photo-bg-wrap\"></div></div></div></div></div><div data-node-id=\"zhpjCtsbGN\" style=\"position:absolute;top:6703.39px;left:25px;width:450px;height:auto;z-index:20;cursor:default;transform:rotate(0deg)\" class=\"jsx-1828971989 text-box-component \"><div data-transition-key=\"zhpjCtsbGN-slide-up-1.3-0-ease-out-false\" data-node-id=\"zhpjCtsbGN\" style=\"transition:all 1.3s ease-out 0s;transform:translateY(50px);opacity:0;width:100%;height:100%\"><div style=\"position:relative;width:100%;height:100%;padding:0px 0px 0px 0px;border-radius:0px \n            0px \n            0px \n            0px;box-shadow:none;background-color:transparent;display:flex;align-items:center;justify-content:center;box-sizing:border-box;opacity:1;border:0px solid\" class=\"jsx-1828971989\"><div disabled=\"\" style=\"height:auto;width:100%;min-width:20px;color:#000000;font-size:24px;text-shadow:0px 0px 2px rgba(0,0,0,0);font-weight:500;font-family:'Signora',serif;text-align:center;line-height:1.59;letter-spacing:0px;text-transform:none;text-decoration:none;font-style:normal;pointer-events:none;overflow:hidden;word-break:break-word\" contentEditable=\"false\"><p data-start=\"116\" data-end=\"187\">Bao ngày qua, lòng đầy biết ơn&nbsp;</p><p data-start=\"116\" data-end=\"187\">Gia đình thương, bạn bè luôn đồng hành.&nbsp;</p><p data-start=\"116\" data-end=\"187\">Ngày trọng đại, mong có bạn bên cạnh</p><p data-start=\"116\" data-end=\"187\">Cùng chúng mình khởi hành hành trình mới.</p></div></div></div></div><div data-node-id=\"L_4WMo4W0Q\" style=\"position:absolute;top:7430px;left:108.75px;width:293.3px;height:46.928px;z-index:25;cursor:default;transform:rotate(0deg) scale(1, 1)\" class=\"jsx-1944329802\"><div data-transition-key=\"L_4WMo4W0Q-slide-up-1.3-0.2-ease-out-false\" data-node-id=\"L_4WMo4W0Q\" style=\"transition:all 1.3s ease-out 0.2s;transform:translateY(50px);opacity:0;width:100%;height:100%\"><div style=\"position:relative;width:100%;height:100%;display:flex;align-items:center;justify-content:center;box-sizing:border-box;border:0px solid;padding:0px 0px 0px 0px;background-color:transparent;text-shadow:0px 0px 2px rgba(0,0,0,0);opacity:1;box-shadow:none;border-radius:0px \n              0px \n              0px \n              0px\" class=\"jsx-1944329802\"><div style=\"-webkit-mask-box-image-source:none;-webkit-mask-box-image-slice:0 fill;mask-image:none;mask-size:100% 100%;mask-repeat:no-repeat\" class=\"jsx-1944329802 photo-component\"><div style=\"background-image:url(/assets/dec_bottom_leaf.png);border-radius:0px \n                  0px \n                  0px \n                  0px\" class=\"jsx-1944329802 photo-bg-wrap\"></div></div></div></div></div><div style=\"width:400px;min-height:360px;position:absolute;top:6990px;left:50px;transform:rotate(0deg);cursor:default;z-index:24;--form-font-size:14\" data-node-id=\"a3HHnLck59\" class=\"jsx-1768321534 rsvp-form-container\"><div data-transition-key=\"a3HHnLck59-slide-up-1.3-0.3-ease-out-false\" data-node-id=\"a3HHnLck59\" style=\"transition:all 1.3s ease-out 0.3s;transform:translateY(50px);opacity:0;width:100%;height:100%\"><div style=\"width:100%;height:100%;position:relative;opacity:1\" class=\"jsx-1768321534\"><div class=\"rsvp-form\"><h3>Xác nhận tham dự</h3><div class=\"rsvp-subtitle\">Sự hiện diện của bạn là niềm vinh hạnh cho chúng mình</div><form style=\"display:flex;flex-direction:column;gap:15px;width:100%\"><div><label for=\"rsvp-name\">Họ và tên của bạn *</label><input type=\"text\" placeholder=\"Nhập tên của bạn (Ví dụ: Nguyễn Văn A)\" name=\"rsvp-name\" required value=\"\"/></div><div><label>Bạn sẽ tham dự chứ? *</label><div class=\"rsvp-radio-options\"><label class=\"rsvp-radio-card active\"><input type=\"radio\" name=\"rsvp-attendance\" checked=\"\" value=\"yes\" style=\"accent-color:#880505;width:16px;height:16px;cursor:pointer\"/><span>✨ Có, tôi sẽ tham dự cùng hai bạn</span></label><label class=\"rsvp-radio-card\"><input type=\"radio\" name=\"rsvp-attendance\" value=\"no\" style=\"accent-color:#880505;width:16px;height:16px;cursor:pointer\"/><span>💌 Rất tiếc, tôi bận không thể đến được</span></label></div></div><button type=\"submit\">Xác Nhận Tham Dự Ngay 💌</button></form></div></div></div></div><div data-node-id=\"ikMVw3_HRY\" style=\"position:absolute;top:7500px;left:134.35px;width:218.8px;height:auto;z-index:21;cursor:default;transform:rotate(0deg)\" class=\"jsx-1828971989 text-box-component \"><div data-transition-key=\"ikMVw3_HRY-slide-up-1.3-0-ease-out-false\" data-node-id=\"ikMVw3_HRY\" style=\"transition:all 1.3s ease-out 0s;transform:translateY(50px);opacity:0;width:100%;height:100%\"><div style=\"position:relative;width:100%;height:100%;padding:0px 0px 0px 0px;border-radius:0px \n            0px \n            0px \n            0px;box-shadow:none;background-color:transparent;display:flex;align-items:center;justify-content:center;box-sizing:border-box;opacity:1;border:0px solid\" class=\"jsx-1828971989\"><div disabled=\"\" style=\"height:auto;width:100%;min-width:20px;color:#880505;font-size:23px;text-shadow:0px 0px 2px rgba(0,0,0,0);font-weight:500;font-family:'Quicksand',serif;text-align:center;line-height:1.59;letter-spacing:3px;text-transform:none;text-decoration:none;font-style:normal;pointer-events:none;overflow:hidden;word-break:break-word\" contentEditable=\"false\"><p data-start=\"116\" data-end=\"187\">20.09.2025</p></div></div></div></div></div><span><div class=\"workarea-resize-handle\" style=\"position:absolute;user-select:none;width:100%;height:10px;bottom:-5px;left:0px;cursor:row-resize\"></div></span></div>";

export default function CineloveWedding28() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [likeCount, setLikeCount] = useState(36);
  const [showToolbar, setShowToolbar] = useState(true);
  const [isBankModalOpen, setIsBankModalOpen] = useState(false);
  const [activeBankTab, setActiveBankTab] = useState('groom');
  const [copiedBank, setCopiedBank] = useState(false);
  
  // Quick wish modal
  const [showWishModal, setShowWishModal] = useState(false);
  const [wishName, setWishName] = useState('');
  const [wishText, setWishText] = useState('');

  // Flying hearts particles
  const [flyingHearts, setFlyingHearts] = useState([]);

  // Master library of heartfelt blessings
  const defaultBlessings = [
    { name: 'Thu Hà 💐', text: 'Chúc cho tình yêu của hai bạn mỗi ngày một lớn mạnh!' },
    { name: 'Hoàng Dũng ✨', text: 'Chúc hai bạn luôn vui vẻ, thấu hiểu và nâng đỡ nhau!' },
    { name: 'Hà 🕊️', text: 'Tân hôn hạnh phúc, trăm năm bên nhau!' },
    { name: 'Ngọc 🥂', text: 'Tình yêu bền chặt, gia đình ấm êm sum vầy!' },
    { name: 'Minh Trí 💖', text: 'Chúc mừng ngày hạnh phúc nhất của hai bạn!' },
    { name: 'Phương Thảo 🌸', text: 'Chúc hai bạn nắm chặt tay nhau đi qua mọi thăng trầm!' },
    { name: 'Anh Tuấn 🎉', text: 'Chúc mừng hạnh phúc đôi bạn trẻ, sớm đón tin vui!' },
    { name: 'Thùy Linh 💍', text: 'Chúc cô dâu chú rể trăm năm viên mãn, vẹn tròn!' },
    { name: 'Đức Huy 🌟', text: 'Happy Wedding! Chúc hai bạn một đời an yên bên nhau!' },
    { name: 'Lan Hương 🌷', text: 'Chúc cho mái ấm nhỏ luôn tràn ngập tiếng cười hạnh phúc!' },
    { name: 'Quốc Bảo 🌺', text: 'Đồng tâm đồng lòng, cùng nhau xây đắp tương lai rực rỡ!' },
    { name: 'Thanh Hằng 💌', text: 'Chúc hai bạn mãi ngọt ngào và lãng mạn như thuở ban đầu!' },
    { name: 'Quang Minh 🌹', text: 'Trăm năm tình viên mãn, bạc đầu nghĩa phu thê!' },
    { name: 'Diệu Linh 🎈', text: 'Hạnh phúc trọn vẹn, yêu thương đong đầy từng phút giây!' },
    { name: 'Việt Hưng 🍀', text: 'May your love story be beautiful and endless!' },
    { name: 'Kim Ngân 💫', text: 'Chúc hai bạn sớm đón thêm thiên thần nhỏ đáng yêu!' },
    { name: 'Bích Ngọc 🌼', text: 'Hạnh phúc ngập tràn, vạn sự hanh thông cát tường!' },
    { name: 'Văn Nam 🎊', text: 'Chúc mừng ngày hai bạn chính thức về chung một nhà!' },
    { name: 'Thảo My 🎀', text: 'Chúc cho cuộc sống hôn nhân luôn tràn ngập tiếng cười!' },
    { name: 'Thanh Tùng 🎇', text: 'Chúc đôi bạn mãi gắn bó bền chặt keo sơn!' }
  ];

  const [blessingPool, setBlessingPool] = useState(defaultBlessings);
  const [visibleBlessings, setVisibleBlessings] = useState([
    { id: 1, name: 'Thu Hà 💐', text: 'Chúc cho tình yêu của hai bạn mỗi ngày một lớn mạnh!' },
    { id: 2, name: 'Hoàng Dũng ✨', text: 'Chúc hai bạn luôn vui vẻ, thấu hiểu và nâng đỡ nhau!' },
    { id: 3, name: 'Hà 🕊️', text: 'Tân hôn hạnh phúc, trăm năm bên nhau!' },
    { id: 4, name: 'Ngọc 🥂', text: 'Tình yêu bền chặt, gia đình ấm êm sum vầy!' },
    { id: 5, name: 'Minh Trí 💖', text: 'Chúc mừng ngày hạnh phúc nhất của hai bạn!' }
  ]);
  const blessingIdxRef = useRef(5);
  const [isSliding, setIsSliding] = useState(false);

  const audioRef = useRef(null);
  const canvasRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const [scale, setScale] = useState(() => {
    if (typeof window !== 'undefined') {
      const w = window.innerWidth;
      return w < 500 ? w / 500 : 1;
    }
    return 1;
  });

  // Dynamically calculate responsive scale factor so the 500px canvas fits any phone width perfectly
  useEffect(() => {
    const handleResize = () => {
      if (scrollContainerRef.current) {
        const w = scrollContainerRef.current.clientWidth;
        if (w > 0) {
          setScale(w < 500 ? w / 500 : 1);
        }
      } else if (typeof window !== 'undefined') {
        const w = window.innerWidth;
        setScale(w < 500 ? w / 500 : 1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  // Silky-smooth scroll-triggered entrance animations for text & images
  useEffect(() => {
    if (!canvasRef.current || !scrollContainerRef.current) return;

    const transitionElements = canvasRef.current.querySelectorAll('[data-transition-key]');
    if (!transitionElements.length) return;

    const revealElement = (el) => {
      el.classList.add('is-revealed');
    };

    // Check which elements are already visible immediately
    const checkVisible = () => {
      if (!scrollContainerRef.current) return;
      const containerRect = scrollContainerRef.current.getBoundingClientRect();
      transitionElements.forEach((el) => {
        if (!el.classList.contains('is-revealed')) {
          const rect = el.getBoundingClientRect();
          if (rect.top < containerRect.bottom + 80 && rect.bottom > containerRect.top - 80) {
            revealElement(el);
          }
        }
      });
    };

    let observer;
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              revealElement(entry.target);
              observer.unobserve(entry.target);
            }
          });
        },
        {
          root: scrollContainerRef.current,
          rootMargin: '80px 0px 80px 0px',
          threshold: 0.05
        }
      );

      transitionElements.forEach((el) => {
        observer.observe(el);
      });
    }

    // Run initial visible check on mount
    checkVisible();

    const scrollEl = scrollContainerRef.current;
    scrollEl.addEventListener('scroll', checkVisible, { passive: true });

    // Safety fallback: guarantee all elements are revealed after 4s
    const safetyTimer = setTimeout(() => {
      transitionElements.forEach(revealElement);
    }, 4000);

    return () => {
      if (observer) observer.disconnect();
      scrollEl.removeEventListener('scroll', checkVisible);
      clearTimeout(safetyTimer);
    };
  }, []);


  // Auto-play audio on first user gesture
  useEffect(() => {
    const handleGesture = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
      }
    };
    window.addEventListener('click', handleGesture, { once: true });
    window.addEventListener('touchstart', handleGesture, { once: true });
    return () => {
      window.removeEventListener('click', handleGesture);
      window.removeEventListener('touchstart', handleGesture);
    };
  }, [isPlaying]);

  // Silky-smooth rolling blessing stream: hardware-accelerated slide up & seamless reset
  useEffect(() => {
    let slideTimeout;
    const interval = setInterval(() => {
      setIsSliding(true);

      slideTimeout = setTimeout(() => {
        setBlessingPool(currentPool => {
          const nextItem = currentPool[blessingIdxRef.current % currentPool.length];
          blessingIdxRef.current += 1;

          setVisibleBlessings(prev => {
            const newEntry = {
              id: Date.now() + Math.random(),
              name: nextItem.name,
              text: nextItem.text
            };
            return [...prev.slice(1), newEntry];
          });

          return currentPool;
        });

        setIsSliding(false);
      }, 700);
    }, 3000);

    return () => {
      clearInterval(interval);
      if (slideTimeout) clearTimeout(slideTimeout);
    };
  }, []);

  // Update dynamic countdown and RSVP inside the rendered canvas
  useEffect(() => {
    if (!canvasRef.current) return;

    // Connect countdown timer
    let target = new Date('2025-09-20T12:00:00').getTime();
    const now = Date.now();
    if (target < now) {
      const nextDate = new Date();
      nextDate.setMonth(8); // September
      nextDate.setDate(20);
      nextDate.setHours(12, 0, 0, 0);
      if (nextDate.getTime() < now) {
        nextDate.setFullYear(nextDate.getFullYear() + 1);
      }
      target = nextDate.getTime();
    }

    const countdownBoxes = canvasRef.current.querySelectorAll('.countdown > div > div:first-child');
    const updateCountdown = () => {
      const diff = target - Date.now();
      if (diff > 0 && countdownBoxes.length >= 4) {
        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);

        countdownBoxes[0].textContent = d;
        countdownBoxes[1].textContent = h;
        countdownBoxes[2].textContent = m;
        countdownBoxes[3].textContent = s;
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    // Connect RSVP form submission
    const rsvpForm = canvasRef.current.querySelector('.rsvp-form form');
    if (rsvpForm) {
      // Toggle radio card active styling on selection
      const radioCards = rsvpForm.querySelectorAll('.rsvp-radio-card');
      const radioInputs = rsvpForm.querySelectorAll('input[name="rsvp-attendance"]');
      radioInputs.forEach(input => {
        input.addEventListener('change', () => {
          radioCards.forEach(c => c.classList.remove('active'));
          const parent = input.closest('.rsvp-radio-card');
          if (parent) parent.classList.add('active');
        });
      });

      rsvpForm.onsubmit = (e) => {
        e.preventDefault();
        const nameInput = rsvpForm.querySelector('input[name="rsvp-name"]');
        const name = nameInput ? nameInput.value.trim() : '';
        if (!name) return;

        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.7 }
          });
        } catch (e) {}

        const submitBtn = rsvpForm.querySelector('button[type="submit"]');
        if (submitBtn) {
          submitBtn.textContent = '✓ Đã Gửi Xác Nhận Tham Dự!';
          submitBtn.style.background = '#1e7e34';
          submitBtn.disabled = true;
        }
      };
    }

    return () => clearInterval(interval);
  }, []);

  const toggleAudio = (e) => {
    e.stopPropagation();
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(console.error);
    }
  };

  const handleShootHeart = (e) => {
    e.stopPropagation();
    setLikeCount(prev => prev + 1);
    
    // Create floating heart particles
    const newHearts = Array.from({ length: 4 }, (_, i) => ({
      id: Date.now() + Math.random(),
      left: Math.random() * 60 + 20,
      size: Math.random() * 12 + 18,
      color: ['#ff4d6d', '#ff758f', '#ff85a1', '#e63946'][Math.floor(Math.random() * 4)],
      delay: i * 70
    }));

    setFlyingHearts(prev => [...prev, ...newHearts]);
    setTimeout(() => {
      setFlyingHearts(prev => prev.filter(h => !newHearts.some(nh => nh.id === h.id)));
    }, 2000);
  };

  const handleSendWish = (e) => {
    e.preventDefault();
    if (!wishName.trim() || !wishText.trim()) return;

    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 }
      });
    } catch (e) {}

    const newWish = {
      id: Date.now(),
      name: `${wishName.trim()} 💌`,
      text: wishText.trim()
    };
    setBlessingPool(prev => [newWish, ...prev]);

    // Seamlessly slide user's wish into view
    setVisibleBlessings(prev => {
      const copy = [...prev];
      copy[copy.length - 1] = newWish;
      return copy;
    });
    setIsSliding(true);
    setTimeout(() => {
      setVisibleBlessings(prev => [...prev.slice(1), newWish]);
      setIsSliding(false);
    }, 700);

    setWishName('');
    setWishText('');
    setShowWishModal(false);
  };

  const handleCopyBank = () => {
    const person = activeBankTab === 'groom' ? weddingData.groom : weddingData.bride;
    navigator.clipboard.writeText(person.bank.accountNumber).then(() => {
      setCopiedBank(true);
      setTimeout(() => setCopiedBank(false), 2000);
    });
  };

  const currentBankPerson = activeBankTab === 'groom' ? weddingData.groom : weddingData.bride;

  return (
    <div className="pc-container" style={{ backgroundColor: '#f0f2f5', minHeight: '100vh', width: '100vw', paddingTop: '3vh', paddingBottom: '3vh', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
      
      {/* Falling petals romantic layer */}
      <FallingPetals />

      <audio ref={audioRef} src="/assets/wedding_music.mp3" preload="auto" loop />

      {/* PC Frame Container */}
      <div className="pc-content" style={{ width: '500px', height: '94vh', position: 'relative', border: '1px solid #e0e0e0', boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)', borderRadius: '12px', overflow: 'hidden', backgroundColor: '#fff' }}>
        
        <div id="app-view-index" className={showToolbar ? '' : 'hide-toolbar'} style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
          
          {/* Audio Control Top Right */}
          <div id="audio-control-wrapper" onClick={toggleAudio} style={{ position: 'absolute', right: '12px', top: '12px', zIndex: 1000, width: '32px', height: '32px', cursor: 'pointer' }}>
            <div className={`audio-toggle ${isPlaying ? 'mrotate' : ''}`} style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.4)', borderRadius: '50%', overflow: 'hidden' }}>
              <img src="/assets/audio-1.png" alt="music" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              {!isPlaying && (
                <div className="icon-cancel" style={{ position: 'absolute', width: '100%', height: '100%', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ transform: 'rotate(45deg)', width: '100%', height: '2px', background: '#fff' }}></div>
                </div>
              )}
            </div>
          </div>

          {/* Main Scrollable Canvas */}
          <div 
            id="main-scroll-container" 
            ref={scrollContainerRef}
            style={{ 
              width: '100%', 
              height: '100%', 
              overflowY: 'auto', 
              overflowX: 'hidden', 
              position: 'relative',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {/* Perfectly scaled wrapper to maintain aspect ratio and prevent horizontal overflow */}
            <div 
              className="canvas-scale-wrapper"
              style={{
                width: `${Math.round(500 * scale)}px`,
                height: `${Math.round(7680 * scale)}px`,
                margin: '0 auto',
                marginBottom: '80px',
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: '#f9f8f3'
              }}
            >
              {/* 1:1 Exact CineLove Canvas */}
              <div 
                id="root-page-container" 
                ref={canvasRef}
                style={{ 
                  backgroundColor: '#f9f8f3', 
                  width: '500px', 
                  height: '7680px', 
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  transform: `scale(${scale})`,
                  transformOrigin: 'top left',
                  willChange: 'transform'
                }}
                dangerouslySetInnerHTML={{ __html: canvasRawHtml }}
              />
            </div>
          </div>

          {/* Floating Live Blessings Stream (Smooth Sliding Track) */}
          <div id="blessing-box" style={{ opacity: showToolbar ? 1 : 0 }}>
            <div 
              className="blessing-track"
              style={{
                transform: isSliding ? 'translateY(-36px)' : 'translateY(0)',
                transition: isSliding ? 'transform 0.7s cubic-bezier(0.25, 1, 0.5, 1)' : 'none'
              }}
            >
              {visibleBlessings.map((item) => (
                <div key={item.id} className="blessing-message">
                  <span className="blessing-sender">{item.name}:</span>
                  <span className="blessing-text">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Bottom Toolbar */}
          <div id="cinelove-toolbar">
            <div className="toolbar">
              <button 
                type="button" 
                className="message-box-button"
                onClick={() => setShowWishModal(true)}
                style={{ border: 'none', cursor: 'pointer', outline: 'none' }}
              >
                <span>Gửi lời chúc...</span>
                <img src="/assets/message.png" alt="wish" style={{ height: '20px' }} />
              </button>

              <div className="toolbar-right">
                {/* Shoot Heart Button ("Bắn tim") */}
                <div 
                  id="animation-gift-preview-btn" 
                  onClick={handleShootHeart}
                  title="Bắn tim chúc mừng"
                >
                  <img src="/assets/biubiu.png" alt="Bắn tim" />
                  <span>Bắn tim</span>
                </div>

                {/* Gift Button */}
                <div 
                  id="cinelove-gift-button" 
                  onClick={() => setIsBankModalOpen(true)}
                  title="Gửi mừng hạnh phúc"
                />

                {/* Like Button */}
                <div 
                  id="cinelove-like-button" 
                  onClick={handleShootHeart}
                  title="Thích thiệp cưới"
                >
                  <span id="cinelove-like-count">{likeCount}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Heart Particles */}
          <div style={{ position: 'absolute', bottom: '70px', right: '20px', width: '120px', height: '350px', pointerEvents: 'none', zIndex: 9999999, overflow: 'visible' }}>
            {flyingHearts.map(heart => (
              <div
                key={heart.id}
                style={{
                  position: 'absolute',
                  bottom: '0px',
                  right: `${heart.left}px`,
                  color: heart.color,
                  animation: 'flyHeart 1.8s ease-out forwards',
                  animationDelay: `${heart.delay}ms`
                }}
              >
                <Heart size={heart.size} fill={heart.color} />
              </div>
            ))}
          </div>

          {/* Toolbar Collapse Toggle */}
          <div 
            className="toolbar-toggle-button toolbar-toggle-has-thumbnail" 
            onClick={() => setShowToolbar(prev => !prev)}
            title="Đóng / mở thanh tương tác"
          >
            <div className="toolbar-toggle-pill" style={{ height: showToolbar ? '68px' : '36px' }}>
              <img src="/assets/groom_avatar.jpeg" alt="avatar" className="thumbnail" />
              {showToolbar && (
                <div className="icon-svg" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <X size={15} color="#fff" />
                </div>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* Bank QR Modal */}
      {isBankModalOpen && (
        <div onClick={() => setIsBankModalOpen(false)} style={{ position: 'fixed', inset: 0, zIndex: 9999999, backgroundColor: 'rgba(0, 0, 0, 0.65)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }}>
          <div onClick={e => e.stopPropagation()} style={{ width: '100%', maxWidth: '380px', background: '#fff', borderRadius: '24px', padding: '24px 20px', boxShadow: '0 20px 50px rgba(0,0,0,0.3)', position: 'relative' }}>
            <button onClick={() => setIsBankModalOpen(false)} style={{ position: 'absolute', top: '16px', right: '16px', background: '#f4ede4', border: 'none', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <X size={18} />
            </button>
            <div style={{ textAlign: 'center', marginBottom: '16px' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', color: '#880505', fontWeight: 'bold' }}>Hộp Mừng Hạnh Phúc</h3>
              <p style={{ fontSize: '13px', color: '#666', marginTop: '4px' }}>Cảm ơn tình cảm chân thành của bạn!</p>
            </div>
            <div style={{ display: 'flex', background: '#f4efe8', borderRadius: '16px', padding: '4px', marginBottom: '16px' }}>
              <button onClick={() => { setActiveBankTab('groom'); setCopiedBank(false); }} style={{ flex: 1, padding: '8px 0', borderRadius: '12px', border: 'none', background: activeBankTab === 'groom' ? '#ffffff' : 'transparent', color: activeBankTab === 'groom' ? '#880505' : '#666', fontWeight: 'bold', fontSize: '14px', cursor: 'pointer' }}>
                Mừng Chú Rể
              </button>
              <button onClick={() => { setActiveBankTab('bride'); setCopiedBank(false); }} style={{ flex: 1, padding: '8px 0', borderRadius: '12px', border: 'none', background: activeBankTab === 'bride' ? '#ffffff' : 'transparent', color: activeBankTab === 'bride' ? '#880505' : '#666', fontWeight: 'bold', fontSize: '14px', cursor: 'pointer' }}>
                Mừng Cô Dâu
              </button>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '180px', height: '180px', margin: '0 auto 16px', padding: '8px', background: '#fff', borderRadius: '16px', border: '2px solid #e8e2d5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={currentBankPerson.bank.qrCodeUrl} alt="Mã QR" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ background: '#faf7f2', borderRadius: '14px', padding: '12px 14px', border: '1px solid #e8e2d5', marginBottom: '14px', textAlign: 'left', fontSize: '13px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <span style={{ color: '#777' }}>Ngân hàng:</span><strong>{currentBankPerson.bank.bankName}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <span style={{ color: '#777' }}>Chủ tài khoản:</span><strong>{currentBankPerson.bank.accountName}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#777' }}>Số tài khoản:</span><strong style={{ color: '#880505', fontSize: '15px' }}>{currentBankPerson.bank.accountNumber}</strong>
                </div>
              </div>
              <button onClick={handleCopyBank} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: copiedBank ? '#1e7e34' : '#880505', color: '#fff', border: 'none', borderRadius: '14px', padding: '12px', fontSize: '14px', fontWeight: '600', cursor: 'pointer' }}>
                {copiedBank ? <Check size={16} /> : <Copy size={16} />}
                <span>{copiedBank ? 'Đã Sao Chép Số Tài Khoản!' : 'Sao Chép Số Tài Khoản'}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Quick Wish Modal */}
      {showWishModal && (
        <div onClick={() => setShowWishModal(false)} style={{ position: 'fixed', inset: 0, zIndex: 9999999, backgroundColor: 'rgba(0, 0, 0, 0.65)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
          <div onClick={e => e.stopPropagation()} style={{ width: '100%', maxWidth: '500px', background: '#fff', borderRadius: '24px 24px 0 0', padding: '20px 18px 28px', boxShadow: '0 -10px 40px rgba(0,0,0,0.25)', position: 'relative' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', color: '#880505', fontWeight: 'bold' }}>Gửi Lời Chúc Mừng</h4>
              <button onClick={() => setShowWishModal(false)} style={{ background: '#f4ede4', border: 'none', borderRadius: '50%', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                <X size={16} />
              </button>
            </div>
            <form onSubmit={handleSendWish} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <input type="text" required placeholder="Tên của bạn..." value={wishName} onChange={e => setWishName(e.target.value)} style={{ padding: '10px 14px', borderRadius: '12px', border: '1px solid #dcd4c6', fontSize: '14px', outline: 'none' }} />
              <textarea required rows={3} placeholder="Gửi lời chúc đến đôi bạn trẻ..." value={wishText} onChange={e => setWishText(e.target.value)} style={{ padding: '10px 14px', borderRadius: '12px', border: '1px solid #dcd4c6', fontSize: '14px', outline: 'none', resize: 'none' }} />
              <button type="submit" style={{ background: '#880505', color: '#fff', border: 'none', borderRadius: '14px', padding: '12px', fontSize: '14px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <Send size={15} />
                <span>Gửi Lời Chúc Ngay</span>
              </button>
            </form>
          </div>
        </div>
      )}

      <style>{`
        @keyframes flyHeart {
          0% {
            opacity: 1;
            transform: translateY(0) scale(0.6) rotate(0deg);
          }
          50% {
            opacity: 0.9;
            transform: translateY(-220px) scale(1.2) rotate(-15deg);
          }
          100% {
            opacity: 0;
            transform: translateY(-440px) scale(1.4) rotate(20deg);
          }
        }
        @media (max-width: 800px) {
          .desktop-qr-widget, .desktop-top-left-actions {
            display: none !important;
          }
        }
        @media (max-width: 540px) {
          .pc-container {
            padding: 0 !important;
            height: 100vh !important;
            height: 100dvh !important;
            min-height: 100vh !important;
            min-height: 100dvh !important;
            width: 100vw !important;
            max-width: 100vw !important;
            background-color: #f9f8f3 !important;
          }
          .pc-content {
            width: 100vw !important;
            max-width: 100vw !important;
            height: 100vh !important;
            height: 100dvh !important;
            border-radius: 0 !important;
            border: none !important;
            box-shadow: none !important;
          }
        }
      `}</style>

    </div>
  );
}
