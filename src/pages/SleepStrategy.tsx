import { Moon, Sun, Sunrise, Sunset, Coffee, Bed, Clock, Thermometer, Wind, Eye, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import bayerLogo from "@/assets/bayer-logo.png";

const TimeBlock = ({ 
  time, 
  title, 
  purpose, 
  items, 
  icon: Icon, 
  colorClass,
  delay = 0 
}: { 
  time: string;
  title: string;
  purpose: string;
  items: string[];
  icon: React.ElementType;
  colorClass: string;
  delay?: number;
}) => (
  <div 
    className="animate-fade-up bg-card rounded-2xl p-5 soft-shadow border border-border/50"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="flex items-start gap-4">
      <div className={`w-12 h-12 ${colorClass} rounded-xl flex items-center justify-center flex-shrink-0`}>
        <Icon className="w-6 h-6 text-foreground/70" />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-medium text-muted-foreground">{time}</span>
        </div>
        <h3 className="font-bold text-foreground mb-1">{title}</h3>
        <p className="text-xs text-primary font-medium mb-3">{purpose}</p>
        <ul className="space-y-2">
          {items.map((item, idx) => (
            <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const SleepStrategy = () => {
  const strategies = [
    {
      time: "기상 직후 0-30분",
      title: "리듬 스위치 켜기",
      purpose: "코르티솔 각성 반응 정상화 → 하루 에너지 안정화",
      icon: Sunrise,
      colorClass: "bg-warm-yellow",
      items: [
        "기상 직후 5분 안에 커튼 열기 - 자연광은 하루 리듬의 시작 신호",
        "침대에서 바로 일어나기 - 뒤척이며 누워있으면 생체시계가 흐려집니다",
        "가벼운 물 한 컵 - 밤새 떨어진 혈류와 체온을 회복",
        "10분의 가벼운 움직임 - 스트레칭, 창문 열기, 간단한 집안 정리"
      ]
    },
    {
      time: "기상 후 1시간 이내",
      title: "첫 번째 안정 구간",
      purpose: "뇌의 각성 시스템을 부드럽게 켜기",
      icon: Coffee,
      colorClass: "bg-warm-coral/40",
      items: [
        "카페인은 기상 후 60~90분 이후에 마시기",
        "단순 탄수화물 아침은 피하고 단백질 포함"
      ]
    },
    {
      time: "오전 (기상 후 1~4시간)",
      title: "'깊은 잠'의 바탕 만들기",
      purpose: "낮 동안 졸림 억제 → 밤 수면 압력 증가",
      icon: Sun,
      colorClass: "bg-warm-yellow",
      items: [
        "햇빛 20-30분 - 밤 멜라토닌의 질을 결정",
        "빠른 걸음 10-20분 - 밤 수면 압력을 높임",
        "집중 업무는 오전에 배치 - 뇌가 가장 효율적인 시간"
      ]
    },
    {
      time: "오후 (기상 후 4~10시간)",
      title: "낮 피로 관리",
      purpose: "저녁 각성도 과도 상승 방지",
      icon: Clock,
      colorClass: "bg-warm-mint",
      items: [
        "카페인은 기상 후 6시간 이후 금지",
        "15~20분 짧은 낮잠 가능 (오후 3시 이전)",
        "3~5분의 미니 휴식을 자주 - 과각성 상태 감소"
      ]
    },
    {
      time: "오후~저녁 (기상 후 8~12시간)",
      title: "회복 모드로 전환",
      purpose: "교감신경(각성) → 부교감신경(안정) 전환",
      icon: Sunset,
      colorClass: "bg-warm-coral/40",
      items: [
        "저녁 운동은 기상 후 8-10시간 사이가 가장 좋음",
        "운동은 너무 강하지 않게 - 격한 운동은 잠을 늦춤",
        "저녁 식사는 자기 전 3시간 전에 마무리"
      ]
    },
    {
      time: "취침 2~3시간 전",
      title: "수면 진입 환경 만들기",
      purpose: "체온 하강 → 깊은 잠 유도",
      icon: Thermometer,
      colorClass: "bg-warm-lavender/60",
      items: [
        "샤워는 자기 전 1.5~2시간에 끝내기",
        "밝은 화면·자극적 콘텐츠 최소화",
        "조명은 따뜻한 색으로 낮추기"
      ]
    },
    {
      time: "취침 1시간 전",
      title: "전환 루틴 (Transition Routine)",
      purpose: "뇌가 '이제 안전하다 → 내려가자'라고 느끼게 만들기",
      icon: Wind,
      colorClass: "bg-warm-mint",
      items: [
        "아직 침대에 가지 말기",
        "가능한 행동: 조용한 정리, 가벼운 스트레칭, 따뜻한 허브티, 명상 5분",
        "피해야 하는 행동: 과식, 강한 대화, 업무 마무리, 자극적 콘텐츠"
      ]
    },
    {
      time: "취침 30분 전",
      title: "실제 수면 준비",
      purpose: "뇌의 마지막 각성 요소 제거",
      icon: Eye,
      colorClass: "bg-warm-lavender/60",
      items: [
        "전등 30~40% 밝기로 조절",
        "침실 온도 18-20℃ 조정",
        "침대는 오직 잠과 휴식을 위한 공간으로"
      ]
    },
    {
      time: "잠자기 직전",
      title: "뇌를 그대로 내려놓기",
      purpose: "잠들기까지 걸리는 시간 줄이기",
      icon: Moon,
      colorClass: "bg-sleep-deep/30",
      items: [
        "4-7-8 호흡 또는 6초 들숨·6초 날숨",
        "구강호흡이 있다면 코 확보 필수",
        "스스로를 잠들게 하려 하지 않기"
      ]
    },
    {
      time: "수면 중",
      title: "깊은 잠을 유지하는 조건",
      purpose: "수면 단계가 끊기지 않도록 하기",
      icon: Bed,
      colorClass: "bg-sleep-rem/30",
      items: [
        "실내 온도 일정 유지, 빛·소음 최소화",
        "구강호흡 방지 (습도·코막힘 관리)",
        "야간 화장실 횟수 줄이기 - 자기 2시간 전 물 섭취 중단"
      ]
    },
    {
      time: "기상 직후 (다음 날)",
      title: "다음 날의 와해를 막는 루틴",
      purpose: "생체시계가 매일 같은 위치에서 시작되게 하기",
      icon: Sunrise,
      colorClass: "bg-warm-yellow",
      items: [
        "기상 시간 고정 (주말 포함)",
        "바로 햇빛 보기",
        "침대에서 오래 머물지 않기"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">돌아가기</span>
          </Link>
          <img src={bayerLogo} alt="Bayer" className="h-8 w-auto" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-12 px-4 overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute top-8 left-[5%] w-20 h-20 rounded-full bg-warm-lavender animate-float opacity-20" />
        <div className="absolute top-16 right-[10%] w-14 h-14 rounded-full bg-warm-coral animate-float delay-200 opacity-15" />
        <div className="absolute bottom-8 left-[15%] w-16 h-16 rounded-full bg-warm-yellow animate-float delay-300 opacity-15" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="animate-fade-up text-2xl md:text-4xl font-bold text-foreground mb-4">
            🌙 깊은 잠·꿀잠
            <br />
            <span className="text-primary">24시간 전략</span>
          </h1>
          
          <p className="animate-fade-up delay-200 text-sm md:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
            단순 루틴이 아닌, <strong className="text-foreground">생체리듬·호르몬·호흡 안정·신경계 회복</strong> 기준으로 설계된 전략입니다.
            <br />
            누구나 따라 하면 깊은 잠(N3)과 안정된 REM 수면 확률을 최대화할 수 있습니다.
          </p>
        </div>
      </section>

      {/* Strategy Cards */}
      <section className="px-4 pb-12">
        <div className="max-w-4xl mx-auto grid gap-4 md:grid-cols-2">
          {strategies.map((strategy, idx) => (
            <TimeBlock
              key={idx}
              {...strategy}
              delay={idx * 50}
            />
          ))}
        </div>
      </section>

      {/* Summary Section */}
      <section className="px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-up bg-gradient-to-br from-primary/10 to-warm-lavender/30 rounded-3xl p-6 md:p-8 text-center">
            <div className="text-3xl mb-4">⭐</div>
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">핵심 정리</h2>
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">깊은 잠은 "밤에만" 만드는 것이 아닙니다.</strong>
              <br />
              <span className="text-primary font-medium">24시간의 리듬을 관리해야 매일 깊어지는 수면이 만들어집니다.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Wave */}
      <div className="h-32 overflow-hidden relative">
        <svg 
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1440 120" 
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,120 L0,120 Z"
            fill="hsl(270 40% 85% / 0.35)"
            className="animate-wave"
          />
          <path
            d="M0,60 C240,20 480,100 720,60 C960,20 1200,100 1440,60 L1440,120 L0,120 Z"
            fill="hsl(210 50% 80% / 0.3)"
            className="animate-wave-slow"
          />
          <path
            d="M0,80 C240,100 480,60 720,80 C960,100 1200,60 1440,80 L1440,120 L0,120 Z"
            fill="hsl(15 70% 75% / 0.25)"
            className="animate-wave-slower"
          />
        </svg>
      </div>
    </main>
  );
};

export default SleepStrategy;
