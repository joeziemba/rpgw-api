export enum Skill {
  acr = 'Acrobatics',
  arc = 'Arcana',
  ath = 'Athletics',
  crf = 'Craft',
  dec = 'Deception',
  dip = 'Diplomacy',
  int = 'Intimidation',
  lor = 'Lore',
  med = 'Medicine',
  nat = 'Nature',
  occ = 'Occultism',
  prc = 'Perception',
  prf = 'Performance',
  rel = 'Religion',
  soc = 'Society',
  ste = 'Stealth',
  sur = 'Survival',
  thi = 'Thievery',
  free = 'Free',
}

export enum Ability {
  str = 'Strength',
  dex = 'Dexterity',
  con = 'Constitution',
  int = 'Intelligence',
  wis = 'Wisdom',
  cha = 'Charisma',
}

export enum SkillAbilityMod {
  acr = Ability.dex,
  arc = Ability.int,
  ath = Ability.str,
  crf = Ability.int,
  dec = Ability.cha,
  dip = Ability.cha,
  int = Ability.cha,
  lor = Ability.int,
  med = Ability.wis,
  nat = Ability.wis,
  occ = Ability.int,
  per = Ability.cha,
  rel = Ability.wis,
  soc = Ability.int,
  ste = Ability.dex,
  sur = Ability.wis,
  thi = Ability.dex,
}

export enum Proficiencies {
  unt = 0,
  tra = 2,
  exp = 4,
  mas = 6,
  leg = 8,
}

export enum SavingThrow {
  for = 'Fortitude',
  ref = 'Reflex',
  wil = 'Will',
}
