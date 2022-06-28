let handler = m => m

handler.before = function (m) {
	let inv = global.db.data.invmenu[m.sender]
	if (inv.durability === 0) {
	inv.hancur = true
        inv.rod = ''
	return true}
	else if (inv.durability < 0 ) {
		inv.hancur = true
		return true }
	else if (inv.durability > 0) {
		inv.hancur = false
		return true}
	}
module.exports = handler
