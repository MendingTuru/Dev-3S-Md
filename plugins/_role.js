const roles = {
  /*
  'Role Name': <Minimal Level To Obtain this Role>
  */
  'Beginner': 0,
  'Warrior': 11,
  'Elite': 21,
  'Master': 31,
  'Grandmaster': 41,
  'Epic': 51,
  'Legend': 61,
  'Mythic': 101,
  'Mythic Glory': 151
}

module.exports = {
  before(m) {
    let user = global.db.data.users[m.sender]
    let level = user.level
    let role = (Object.entries(roles).sort((a, b) => b[1] - a[1]).find(([,minLevel]) => level >= minLevel) || Object.entries(roles)[0])[0]
    user.role = role
    return true
  }
}
