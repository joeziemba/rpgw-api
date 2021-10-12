import { Ability, Proficiencies, SavingThrow, Skill } from '../constants';

type BoostType = 'ability' | 'skill' | 'save';
type BoostProperty = Ability | Skill | SavingThrow | Ability[];

export interface IBoost {
  property: BoostProperty;
  source: string;
  isStatic: boolean;
  level: number;
  type: BoostType;
}

export class Boost implements IBoost {
  constructor(
    public type: BoostType,
    public property: BoostProperty,
    public value: Proficiencies,
    public level: number,
    public isStatic: boolean,
    public source: string,
  ) {}
}

export class AbilityBoost implements IBoost {
  public readonly type: BoostType;
  constructor(
    public property: BoostProperty,
    public level: number,
    public isStatic: boolean,
    public source: string,
  ) {
    this.type = 'ability';
  }
}
