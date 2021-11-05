import { Ability } from 'src/common/constants';
import { IBoost } from 'src/common/models/Boost.model';

export class CreateClassDto {
  constructor(
    public name: string,
    public keyAbility: Ability | Ability[],
    public hp: number,
    public boosts: IBoost[],
  ) {}
}
