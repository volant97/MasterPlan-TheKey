// 용의자
export interface Suspect {
  name: string;
  description: string;
  details: string;
  attributes: string;
}

// 장소
export interface Place {
  name: string;
  type: string;
  description: string;
}

// 무기
export interface Weapon {
  name: string;
  weight: string;
  description: string;
}

// 진술
export interface Statement {
  person: string;
  text: string;
}

// 정답
export interface Answers {
  who: string;
  what: string;
  where: string;
}

// 체크보드 정답
export interface CheckboardAnswers {
  answer1: number[];
  answer2: number[];
  answer3: number[];
}

// 사건 데이터
export interface CaseData {
  case: string;
  description: string;
  suspects: Suspect[];
  places: Place[];
  weapons: Weapon[];
  clues: string[];
  statements: Statement[];
  answers: Answers;
  checkboardAnswers: CheckboardAnswers;
}

// 전체 JSON 데이터 타입
export interface JsonData {
  [key: string]: CaseData; // 문자열 키로 인덱싱 가능
}
