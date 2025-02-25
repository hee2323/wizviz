import Image from "next/image";
import {
  about_img1,
  about_img2,
  about_img3,
  about_img4,
} from "@/assets/images/@index";
//문자스타일
const textStyles = {
  sectionTitle: "text-ELSE-EC0 text-3xl font-bold leading-relaxed text-left", //제목 textStyles
  paragraph:
    "text-ELSE-11 text-base font-normal leading-6 text-justify pt-4 pb-7", //본문 textStyles
  divider: "bg-ELSE-EC0 h-[3px] mt-6 mb-7 w-10", //구분선
};
export default function page() {
  return (
    <div className="pt-20 w-[1100px] box-border">
      <div className="pb-16">
        <Image
          src={about_img1}
          alt="KTWiz_insignia"
          width={1100}
          height={300}
        />
      </div>
      {/* 구단소개 내용 */}
      <div className="pb-24">
        <p className={textStyles.sectionTitle}>
          신비롭고 강력한 힘, 상상의 야구 실현
        </p>
        <div className={textStyles.divider} />
        <p className={textStyles.paragraph}>
          kt wiz는 2013년, 제 10군단에 대한 국민들의 강한열망, 경기도 및 수원시
          그리고 KT그룹의 뜨거운 유치 열정으로 비상한 솜씨와 비범한 재능을 가진
          마법사, <br /> wiz라는 이름으로 신비롭고 강력한 힘으로 상상의 야구를
          실현하겠다는 의지를 가지고 새롭게 출범하였습니다.
        </p>
      </div>
      <div className="pr-[520px] relative box-border h-[422px]">
        <p className={textStyles.sectionTitle}>명문구단을 위한 철저한 플랜!</p>
        <div className={textStyles.divider} />
        <p className={textStyles.paragraph}>
          명문구단이 되기 위한 철저한 중장기 플랜을 통해 kt wiz의 감독 및 코칭
          스태프, 선수들을 구성하고 있습니다. <br />
          기존 수원야구장을 대규모로 중축하고 리모델링하여 최적의 야구관람
          시설을 갖추었습니다. 굵은 땀방울과 함께 전지 훈련을 수행하고 2014년
          퓨처스리그에 출전하여 기량을 쌓은 후, 2015년 1군 리그에 성공적으로
          데뷔하여 야구 팬들에게 kt wiz 이름 그대로 마법과 같은 야구를
          펼쳐보이기 위해 노력을 다하고 있습니다.
        </p>
        <div className="block absolute top-0 right-0">
          <Image
            src={about_img2}
            alt="professional_baseball_team_KTWiz"
            width={485}
            height={422}
          />
        </div>
      </div>
      <div className="pb-24 pt-16">
        <div className="pl-[600px] relative box-border h-[300px]">
          <p className={textStyles.sectionTitle}>
            복합 문화공간의 첨단 야구장!
          </p>
          <div className={textStyles.divider} />
          <p className={textStyles.paragraph}>
            kt그룹의 우수한 ICT기술을 활용한 빅 테인먼트(BIC Tainment) 기술을
            적극 활용하여 야구를 사랑하는 팬 여러분께 차별화된 야구 콘텐츠를
            제공하고 남녀노소 누구나 즐겁고 편하게 야구를 즐길 수 있는 복합
            문화공간의 첨단 야구장을 만들 예정입니다.
          </p>
          <div className="block absolute top-0 left-0">
            <Image
              src={about_img3}
              alt="Suwon_KTWiz_park"
              width={550}
              height={300}
            />
          </div>
        </div>
      </div>
      <div className="pb-24">
        <p className={textStyles.sectionTitle}>
          재미와 즐거움을 추구하는 근성 있는 구단!
        </p>
        <div className={textStyles.divider} />
        <p className={textStyles.paragraph}>
          창단 과정에서 경기도민과 수원시민들이 보내주신 성원과 기대에 보답하기
          위해 앞으로도 야구를 통한 즐거운 여가 문화를 제공할 것이며 팬들과 함께
          할 수 있는 새롭고 다양한 마케팅을 전개해 나가 재미와 즐거움을 추구하는
          근성있는 구단이라는 kt sports의 확고한 비전을 실행하고 다년간 쌓인
          스포츠 구단 운영 노하우로&nbsp;
          <span className="text-ELSE-EC0">
            그라우드 안팎에서 그 동안 없던 새로운 야구를 kt wiz가 이루어
            가겠습니다.
          </span>
        </p>
      </div>
      {/* 하단 선수들 이미지 */}
      <Image src={about_img4} alt="KTWiz_players" width={1660} height={510} />
    </div>
  );
}
