import { Injectable } from '@nestjs/common';
import { Ability, Proficiencies, SavingThrow, Skill } from 'src/common/constants';
import { AbilityBoost, Boost } from 'src/common/models/Boost.model';
import { ClassService } from './class.service';
import { CreateClassDto } from './dto/create-class.dto';

@Injectable()
export class ClassSeeder {
  constructor(private classService: ClassService) {}

  async seed() {
    let className = 'Alchemist';

    const alc = new CreateClassDto(className, Ability.int, 8, [
      // Ability Boosts
      new AbilityBoost(Ability.int, 1, true, className),
      // Save Boosts
      new Boost('save', SavingThrow.for, Proficiencies.tra, 1, true, className),
      new Boost('save', SavingThrow.ref, Proficiencies.tra, 1, true, className),
      new Boost('save', SavingThrow.wil, Proficiencies.exp, 1, true, className),
      new Boost('save', SavingThrow.ref, Proficiencies.exp, 5, true, className),
      new Boost('save', SavingThrow.for, Proficiencies.exp, 9, true, className),
      new Boost('save', SavingThrow.wil, Proficiencies.mas, 17, true, className),
      // Perception Boosts
      new Boost('skill', Skill.prc, Proficiencies.tra, 1, true, className),
      new Boost('skill', Skill.prc, Proficiencies.exp, 1, true, className),
      // Skill Boosts
      new Boost('skill', Skill.crf, Proficiencies.tra, 1, true, className),
      new Boost('skill', Skill.free, Proficiencies.tra, 1, false, className),
      new Boost('skill', Skill.free, Proficiencies.tra, 1, false, className),
      new Boost('skill', Skill.free, Proficiencies.tra, 1, false, className),
    ]);

    await this.classService.create(alc);

    className = 'Barbarian';
    const barb = new CreateClassDto(className, Ability.str, 12, [
      // Ability Boosts
      new AbilityBoost(Ability.str, 1, true, className),
      // Save Boosts
      new Boost('save', SavingThrow.for, Proficiencies.exp, 1, true, className),
      new Boost('save', SavingThrow.ref, Proficiencies.tra, 1, true, className),
      new Boost('save', SavingThrow.wil, Proficiencies.exp, 1, true, className),
      new Boost('save', SavingThrow.for, Proficiencies.mas, 7, true, className),
      new Boost('save', SavingThrow.ref, Proficiencies.exp, 9, true, className),
      new Boost('save', SavingThrow.for, Proficiencies.leg, 13, true, className),
      new Boost('save', SavingThrow.wil, Proficiencies.mas, 15, true, className),
      // Perception Boosts
      new Boost('skill', Skill.prc, Proficiencies.exp, 1, true, className),
      new Boost('skill', Skill.prc, Proficiencies.mas, 17, true, className),
      // Skill Boosts
      new Boost('skill', Skill.ath, Proficiencies.tra, 1, true, className),
      new Boost('skill', Skill.free, Proficiencies.tra, 1, false, className),
      new Boost('skill', Skill.free, Proficiencies.tra, 1, false, className),
      new Boost('skill', Skill.free, Proficiencies.tra, 1, false, className),
    ]);

    await this.classService.create(barb);

    className = 'Bard';
    const bard = new CreateClassDto(className, Ability.cha, 8, [
      // Ability Boosts
      new AbilityBoost(Ability.cha, 1, true, className),
      // Save Boosts
      new Boost('save', SavingThrow.for, Proficiencies.tra, 1, true, className),
      new Boost('save', SavingThrow.ref, Proficiencies.tra, 1, true, className),
      new Boost('save', SavingThrow.wil, Proficiencies.exp, 1, true, className),
      new Boost('save', SavingThrow.ref, Proficiencies.exp, 3, true, className),
      new Boost('save', SavingThrow.wil, Proficiencies.mas, 9, true, className),
      new Boost('save', SavingThrow.for, Proficiencies.exp, 9, true, className),
      new Boost('save', SavingThrow.wil, Proficiencies.leg, 17, true, className),
      // Perception Boosts
      new Boost('skill', Skill.prc, Proficiencies.exp, 1, true, className),
      new Boost('skill', Skill.prc, Proficiencies.mas, 11, true, className),
      // Skill Boosts
      new Boost('skill', Skill.occ, Proficiencies.tra, 1, true, className),
      new Boost('skill', Skill.prf, Proficiencies.tra, 1, true, className),
      new Boost('skill', Skill.free, Proficiencies.tra, 1, false, className),
      new Boost('skill', Skill.free, Proficiencies.tra, 1, false, className),
      new Boost('skill', Skill.free, Proficiencies.tra, 1, false, className),
      new Boost('skill', Skill.free, Proficiencies.tra, 1, false, className),
    ]);

    await this.classService.create(bard);

    className = 'Champion';
    const champion = new CreateClassDto(className, Ability.str, 10, [
      // Ability Boosts
      new AbilityBoost(Ability.cha, 1, true, className),
      // Save Boosts
      new Boost('save', SavingThrow.for, Proficiencies.exp, 1, true, className),
      new Boost('save', SavingThrow.ref, Proficiencies.tra, 1, true, className),
      new Boost('save', SavingThrow.wil, Proficiencies.exp, 1, true, className),
      new Boost('save', SavingThrow.ref, Proficiencies.exp, 9, true, className),
      new Boost('save', SavingThrow.for, Proficiencies.mas, 9, true, className),
      new Boost('save', SavingThrow.wil, Proficiencies.mas, 11, true, className),
      // Perception Boosts
      new Boost('skill', Skill.prc, Proficiencies.exp, 1, true, className),
      new Boost('skill', Skill.prc, Proficiencies.mas, 11, true, className),
      // Skill Boosts
      new Boost('skill', Skill.rel, Proficiencies.tra, 1, true, className),
      new Boost('skill', Skill.free, Proficiencies.tra, 1, false, className),
      new Boost('skill', Skill.free, Proficiencies.tra, 1, false, className),
    ]);

    await this.classService.create(champion);

    className = 'Cleric';
    const cleric = new CreateClassDto(className, Ability.wis, 8, [
      // Ability Boosts
      new AbilityBoost(Ability.wis, 1, true, className),
      // Save Boosts
      new Boost('save', SavingThrow.for, Proficiencies.tra, 1, true, className),
      new Boost('save', SavingThrow.ref, Proficiencies.tra, 1, true, className),
      new Boost('save', SavingThrow.wil, Proficiencies.exp, 1, true, className),
      new Boost('save', SavingThrow.wil, Proficiencies.mas, 9, true, className),
      new Boost('save', SavingThrow.ref, Proficiencies.exp, 11, true, className),
      // Perception Boosts
      new Boost('skill', Skill.prc, Proficiencies.tra, 1, true, className),
      new Boost('skill', Skill.prc, Proficiencies.exp, 5, true, className),
      // Skill Boosts
      new Boost('skill', Skill.rel, Proficiencies.tra, 1, true, className),
      new Boost('skill', Skill.free, Proficiencies.tra, 1, false, className),
      new Boost('skill', Skill.free, Proficiencies.tra, 1, false, className),
    ]);

    await this.classService.create(cleric);

    className = 'Druid';
    const druid = new CreateClassDto(className, Ability.wis, 8, [
      // Ability Boosts
      new AbilityBoost(Ability.wis, 1, true, className),
      // Save Boosts
      new Boost('save', SavingThrow.for, Proficiencies.tra, 1, true, className),
      new Boost('save', SavingThrow.ref, Proficiencies.tra, 1, true, className),
      new Boost('save', SavingThrow.wil, Proficiencies.exp, 1, true, className),
      new Boost('save', SavingThrow.for, Proficiencies.exp, 3, true, className),
      new Boost('save', SavingThrow.ref, Proficiencies.exp, 5, true, className),
      new Boost('save', SavingThrow.wil, Proficiencies.mas, 11, true, className),
      // Perception Boosts
      new Boost('skill', Skill.prc, Proficiencies.tra, 1, true, className),
      new Boost('skill', Skill.prc, Proficiencies.exp, 3, true, className),
      // Skill Boosts
      new Boost('skill', Skill.nat, Proficiencies.tra, 1, true, className),
      new Boost('skill', Skill.free, Proficiencies.tra, 1, false, className),
      new Boost('skill', Skill.free, Proficiencies.tra, 1, false, className),
      new Boost('skill', Skill.free, Proficiencies.tra, 1, false, className),
    ]);

    await this.classService.create(druid);

    className = 'Fighter';
    const fighter = new CreateClassDto(className, Ability.str, 10, [
      // Ability Boosts
      new AbilityBoost([Ability.str, Ability.dex], 1, false, className),
      // Save Boosts
      new Boost('save', SavingThrow.for, Proficiencies.exp, 1, true, className),
      new Boost('save', SavingThrow.ref, Proficiencies.exp, 1, true, className),
      new Boost('save', SavingThrow.wil, Proficiencies.tra, 1, true, className),
      new Boost('save', SavingThrow.wil, Proficiencies.exp, 3, true, className),
      new Boost('save', SavingThrow.for, Proficiencies.mas, 9, true, className),
      new Boost('save', SavingThrow.ref, Proficiencies.mas, 15, true, className),
      // Perception Boosts
      new Boost('skill', Skill.prc, Proficiencies.exp, 1, true, className),
      new Boost('skill', Skill.prc, Proficiencies.mas, 7, true, className),
      // Skill Boosts
      new Boost('skill', Skill.nat, Proficiencies.tra, 1, true, className),
      new Boost('skill', Skill.free, Proficiencies.tra, 1, false, className),
      new Boost('skill', Skill.free, Proficiencies.tra, 1, false, className),
      new Boost('skill', Skill.free, Proficiencies.tra, 1, false, className),
    ]);

    await this.classService.create(fighter);

    className = 'Investigator';
    const Investigator = new CreateClassDto(className, Ability.int, 8, [
      // Ability Boosts
      new AbilityBoost(Ability.int, 1, true, className),
      // Save Boosts
      new Boost('save', SavingThrow.for, Proficiencies.tra, 1, true, className),
      new Boost('save', SavingThrow.ref, Proficiencies.exp, 1, true, className),
      new Boost('save', SavingThrow.wil, Proficiencies.exp, 1, true, className),
      new Boost('save', SavingThrow.for, Proficiencies.exp, 9, true, className),
      new Boost('save', SavingThrow.wil, Proficiencies.mas, 11, true, className),
      new Boost('save', SavingThrow.ref, Proficiencies.mas, 15, true, className),
      new Boost('save', SavingThrow.wil, Proficiencies.mas, 17, true, className),
      // Perception Boosts
      new Boost('skill', Skill.prc, Proficiencies.exp, 1, true, className),
      new Boost('skill', Skill.prc, Proficiencies.mas, 7, true, className),
      new Boost('skill', Skill.prc, Proficiencies.leg, 13, true, className),
      // Skill Boosts
      new Boost('skill', Skill.soc, Proficiencies.tra, 1, true, className),
      new Boost('skill', Skill.free, Proficiencies.tra, 1, false, className),
      new Boost('skill', Skill.free, Proficiencies.tra, 1, false, className),
      new Boost('skill', Skill.free, Proficiencies.tra, 1, false, className),
      new Boost('skill', Skill.free, Proficiencies.tra, 1, false, className),
    ]);

    await this.classService.create(Investigator);

    className = 'Monk';
    const Monk = new CreateClassDto(className, [Ability.str, Ability.dex], 10, [
      // Ability Boosts
      new AbilityBoost([Ability.str, Ability.dex], 1, false, className),
      // Save Boosts
      new Boost('save', SavingThrow.for, Proficiencies.exp, 1, true, className),
      new Boost('save', SavingThrow.ref, Proficiencies.exp, 1, true, className),
      new Boost('save', SavingThrow.wil, Proficiencies.exp, 1, true, className),
      // Perception Boosts
      new Boost('skill', Skill.prc, Proficiencies.exp, 1, true, className),
      new Boost('skill', Skill.prc, Proficiencies.mas, 7, true, className),
      new Boost('skill', Skill.prc, Proficiencies.leg, 13, true, className),
      // Skill Boosts
      new Boost('skill', Skill.soc, Proficiencies.tra, 1, true, className),
      new Boost('skill', Skill.free, Proficiencies.tra, 1, false, className),
      new Boost('skill', Skill.free, Proficiencies.tra, 1, false, className),
      new Boost('skill', Skill.free, Proficiencies.tra, 1, false, className),
      new Boost('skill', Skill.free, Proficiencies.tra, 1, false, className),
    ]);

    await this.classService.create(Monk);

    className = 'Oracle';
    const Oracle = new CreateClassDto(className, Ability.cha, 8, [
      // Ability Boosts
      new AbilityBoost(Ability.cha, 1, true, className),
      // Save Boosts
      new Boost('save', SavingThrow.for, Proficiencies.tra, 1, true, className),
      new Boost('save', SavingThrow.ref, Proficiencies.tra, 1, true, className),
      new Boost('save', SavingThrow.wil, Proficiencies.exp, 1, true, className),
      new Boost('save', SavingThrow.wil, Proficiencies.mas, 7, true, className),
      new Boost('save', SavingThrow.for, Proficiencies.exp, 9, true, className),
      new Boost('save', SavingThrow.ref, Proficiencies.exp, 13, true, className),
      new Boost('save', SavingThrow.wil, Proficiencies.leg, 17, true, className),
      // Perception Boosts
      new Boost('skill', Skill.prc, Proficiencies.tra, 1, true, className),
      new Boost('skill', Skill.prc, Proficiencies.exp, 11, true, className),
      // Skill Boosts
      new Boost('skill', Skill.rel, Proficiencies.tra, 1, true, className),
      new Boost('skill', Skill.free, Proficiencies.tra, 1, false, className),
      new Boost('skill', Skill.free, Proficiencies.tra, 1, false, className),
      new Boost('skill', Skill.free, Proficiencies.tra, 1, false, className),
      new Boost('skill', Skill.free, Proficiencies.tra, 1, false, className),
    ]);

    await this.classService.create(Oracle);

    className = 'Ranger';
    const Ranger = new CreateClassDto(className, Ability.wis, 10, [
      // Ability Boosts
      new AbilityBoost([Ability.str, Ability.dex], 1, false, className),
      // Save Boosts
      new Boost('save', SavingThrow.for, Proficiencies.exp, 1, true, className),
      new Boost('save', SavingThrow.ref, Proficiencies.exp, 1, true, className),
      new Boost('save', SavingThrow.wil, Proficiencies.tra, 1, true, className),
      new Boost('save', SavingThrow.wil, Proficiencies.exp, 3, true, className),
      new Boost('save', SavingThrow.ref, Proficiencies.mas, 7, true, className),
      new Boost('save', SavingThrow.for, Proficiencies.mas, 11, true, className),
      // Perception Boosts
      new Boost('skill', Skill.prc, Proficiencies.exp, 1, true, className),
      new Boost('skill', Skill.prc, Proficiencies.mas, 7, true, className),
      new Boost('skill', Skill.prc, Proficiencies.leg, 15, true, className),
      // Skill Boosts
      new Boost('skill', Skill.nat, Proficiencies.tra, 1, true, className),
      new Boost('skill', Skill.sur, Proficiencies.tra, 1, true, className),
      new Boost('skill', Skill.free, Proficiencies.tra, 1, false, className),
      new Boost('skill', Skill.free, Proficiencies.tra, 1, false, className),
      new Boost('skill', Skill.free, Proficiencies.tra, 1, false, className),
      new Boost('skill', Skill.free, Proficiencies.tra, 1, false, className),
    ]);

    await this.classService.create(Ranger);

    className = 'Rogue';
    const Rogue = new CreateClassDto(className, Ability.dex, 8, [
      // Ability Boosts
      new AbilityBoost([Ability.str, Ability.dex, Ability.cha], 1, false, className),
      // Save Boosts
      new Boost('save', SavingThrow.for, Proficiencies.tra, 1, true, className),
      new Boost('save', SavingThrow.ref, Proficiencies.exp, 1, true, className),
      new Boost('save', SavingThrow.wil, Proficiencies.exp, 1, true, className),
      new Boost('save', SavingThrow.ref, Proficiencies.mas, 7, true, className),
      new Boost('save', SavingThrow.for, Proficiencies.exp, 9, true, className),
      new Boost('save', SavingThrow.ref, Proficiencies.leg, 13, true, className),
      new Boost('save', SavingThrow.wil, Proficiencies.mas, 17, true, className),
      // Perception Boosts
      new Boost('skill', Skill.prc, Proficiencies.exp, 1, true, className),
      new Boost('skill', Skill.prc, Proficiencies.mas, 7, true, className),
      new Boost('skill', Skill.prc, Proficiencies.leg, 13, true, className),
      // Skill Boosts
      new Boost('skill', Skill.ste, Proficiencies.tra, 1, true, className),
      new Boost('skill', Skill.free, Proficiencies.tra, 1, false, className),
      new Boost('skill', Skill.free, Proficiencies.tra, 1, false, className),
      new Boost('skill', Skill.free, Proficiencies.tra, 1, false, className),
      new Boost('skill', Skill.free, Proficiencies.tra, 1, false, className),
      new Boost('skill', Skill.free, Proficiencies.tra, 1, false, className),
      new Boost('skill', Skill.free, Proficiencies.tra, 1, false, className),
      new Boost('skill', Skill.free, Proficiencies.tra, 1, false, className),
      new Boost('skill', Skill.free, Proficiencies.tra, 2, false, className),
      new Boost('skill', Skill.free, Proficiencies.tra, 4, false, className),
      new Boost('skill', Skill.free, Proficiencies.tra, 6, false, className),
      new Boost('skill', Skill.free, Proficiencies.tra, 8, false, className),
      new Boost('skill', Skill.free, Proficiencies.tra, 10, false, className),
      new Boost('skill', Skill.free, Proficiencies.tra, 12, false, className),
      new Boost('skill', Skill.free, Proficiencies.tra, 14, false, className),
      new Boost('skill', Skill.free, Proficiencies.tra, 16, false, className),
      new Boost('skill', Skill.free, Proficiencies.tra, 18, false, className),
      new Boost('skill', Skill.free, Proficiencies.tra, 20, false, className),
    ]);

    await this.classService.create(Rogue);

    className = 'Sorcerer';
    const Sorcerer = new CreateClassDto(className, Ability.cha, 6, [
      // Ability Boosts
      new AbilityBoost(Ability.cha, 1, false, className),
      // Save Boosts
      new Boost('save', SavingThrow.for, Proficiencies.tra, 1, true, className),
      new Boost('save', SavingThrow.ref, Proficiencies.tra, 1, true, className),
      new Boost('save', SavingThrow.wil, Proficiencies.exp, 1, true, className),
      new Boost('save', SavingThrow.for, Proficiencies.exp, 5, true, className),
      new Boost('save', SavingThrow.ref, Proficiencies.exp, 9, true, className),
      new Boost('save', SavingThrow.ref, Proficiencies.mas, 17, true, className),
      // Perception Boosts
      new Boost('skill', Skill.prc, Proficiencies.tra, 1, true, className),
      new Boost('skill', Skill.prc, Proficiencies.exp, 11, true, className),
      // Skill Boosts
      new Boost('skill', Skill.ste, Proficiencies.tra, 1, true, className),
      new Boost('skill', Skill.free, Proficiencies.tra, 1, false, className),
    ]);

    await this.classService.create(Sorcerer);

    className = 'Swashbuckler';
    const Swashbuckler = new CreateClassDto(className, Ability.dex, 10, [
      // Ability Boosts
      new AbilityBoost(Ability.dex, 1, false, className),
      // Save Boosts
      new Boost('save', SavingThrow.for, Proficiencies.tra, 1, true, className),
      new Boost('save', SavingThrow.ref, Proficiencies.exp, 1, true, className),
      new Boost('save', SavingThrow.wil, Proficiencies.exp, 1, true, className),
      new Boost('save', SavingThrow.for, Proficiencies.exp, 3, true, className),
      new Boost('save', SavingThrow.ref, Proficiencies.mas, 7, true, className),
      new Boost('save', SavingThrow.ref, Proficiencies.leg, 13, true, className),
      // Perception Boosts
      new Boost('skill', Skill.prc, Proficiencies.exp, 1, true, className),
      new Boost('skill', Skill.prc, Proficiencies.mas, 11, true, className),
      // Skill Boosts
      new Boost('skill', Skill.acr, Proficiencies.tra, 1, true, className),
      new Boost('skill', Skill.free, Proficiencies.tra, 1, false, className),
      new Boost('skill', Skill.free, Proficiencies.tra, 1, false, className),
      new Boost('skill', Skill.free, Proficiencies.tra, 1, false, className),
      new Boost('skill', Skill.free, Proficiencies.tra, 1, false, className),
    ]);

    await this.classService.create(Swashbuckler);

    className = 'Witch';
    const Witch = new CreateClassDto(className, Ability.int, 6, [
      // Ability Boosts
      new AbilityBoost(Ability.int, 1, false, className),
      // Save Boosts
      new Boost('save', SavingThrow.for, Proficiencies.tra, 1, true, className),
      new Boost('save', SavingThrow.ref, Proficiencies.tra, 1, true, className),
      new Boost('save', SavingThrow.wil, Proficiencies.exp, 1, true, className),
      new Boost('save', SavingThrow.for, Proficiencies.exp, 5, true, className),
      new Boost('save', SavingThrow.ref, Proficiencies.exp, 9, true, className),
      new Boost('save', SavingThrow.wil, Proficiencies.mas, 17, true, className),
      // Perception Boosts
      new Boost('skill', Skill.prc, Proficiencies.tra, 1, true, className),
      new Boost('skill', Skill.prc, Proficiencies.exp, 11, true, className),
      // Skill Boosts
      new Boost('skill', Skill.free, Proficiencies.tra, 1, false, className),
      new Boost('skill', Skill.free, Proficiencies.tra, 1, false, className),
      new Boost('skill', Skill.free, Proficiencies.tra, 1, false, className),
    ]);

    await this.classService.create(Witch);

    className = 'Wizard';
    const Wizard = new CreateClassDto(className, Ability.int, 6, [
      // Ability Boosts
      new AbilityBoost(Ability.int, 1, false, className),
      // Save Boosts
      new Boost('save', SavingThrow.for, Proficiencies.tra, 1, true, className),
      new Boost('save', SavingThrow.ref, Proficiencies.tra, 1, true, className),
      new Boost('save', SavingThrow.wil, Proficiencies.exp, 1, true, className),
      new Boost('save', SavingThrow.ref, Proficiencies.exp, 5, true, className),
      new Boost('save', SavingThrow.for, Proficiencies.exp, 9, true, className),
      new Boost('save', SavingThrow.wil, Proficiencies.exp, 17, true, className),
      // Perception Boosts
      new Boost('skill', Skill.prc, Proficiencies.tra, 1, true, className),
      new Boost('skill', Skill.prc, Proficiencies.exp, 11, true, className),
      // Skill Boosts
      // Arcana + 2
      new Boost('skill', Skill.arc, Proficiencies.tra, 1, true, className),
      new Boost('skill', Skill.free, Proficiencies.tra, 1, false, className),
      new Boost('skill', Skill.free, Proficiencies.tra, 1, false, className),
    ]);

    await this.classService.create(Wizard);
  }
}
