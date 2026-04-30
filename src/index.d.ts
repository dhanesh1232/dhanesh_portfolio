declare global {
  type SkillCategory =
    | "Frontend"
    | "Backend & DB"
    | "DevOps"
    | "Marketing"
    | "AI & Automation";

  interface Skill {
    id: string;
    name: string;
    Icon: IconType;
    level: number;
    color: string;
    relay: string;
  }

  type SkillsRecord = Record<SkillCategory, Skill[]>;
}
export {};
