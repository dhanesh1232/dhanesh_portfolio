export const extractSkills = (skillsObj: object) => {
  return Object.entries(skillsObj).flatMap(([category, items]) =>
    items.map((skill: object) => ({
      ...skill,
      category,
    }))
  );
};
