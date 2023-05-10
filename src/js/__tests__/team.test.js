import Team from '../Team.js';

describe('Team', () => {
  it('should add a character to the team', () => {
    const team = new Team();
    const character = { name: 'John', level: 5};
    team.add(character);
    expect(team.members.size).toBe(1);
    expect(team.members.has(character)).toBeTruthy();
  });

  it('should throw an error if adding duplicate characters', () => {
    const team = new Team();
    const character1 = { name: 'John', level: 5};
    team.add(character1);
    expect(() => team.add(character1).toThrowError());
  });

  it('should add multiple characters to the team', () => {
    const team = new Team();
    const character1 = { name: 'John', level: 5};
    const character2 = { name: 'Ivan', level: 89};
    team.addAll(character1, character2);
    expect(team.members.size).toBe(2);
    expect(team.members.has(character1)).toBeTruthy();
    expect(team.members.has(character2)).toBeTruthy();
  });

  it('should not add duplicate members to the team', () => {
    const team = new Team();
    const character1 = { name: 'John', level: 5};
    const character2 = { name: 'Ivan', level: 89};
    team.addAll(character2, character2, character1);
    expect(team.members.size).toBe(2);
  });

  it('should convert the set to an array', () => {
    const team = new Team();
    const character1 = { name: 'John', level: 5};
    const character2 = { name: 'Ivan', level: 89};
    team.addAll(character1, character2);
    const arr = team.toArray();
    expect(arr.length).toBe(2);
    expect(arr).toContain(character2);
    expect(arr).toContain(character1);
  });
})
