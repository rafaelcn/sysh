package main

const (
	AddUser = `
		INSERT INTO TB_USER VALUES(?, ?, ?, ?, ?)
	`
	RemoveUser = `
		DELETE FROM TB_USER WHERE USER_ID = ?
	`
	UpdateUser = `
		UPDATE TB_USER SET 
			USER_NAME = ?,
			USER_MAIL = ?,
			USER_PASSWORD = ?,
			USER_PHONE = ?,
			USER_BIRTH = ?
		WHERE USER_ID = ?
	`

	AddObject = `
		INSERT INTO TB_OBJECT VALUES(?, ?, ?, ?)
	`
	RemoveObject = `
		DELETE FROM TB_OBJECT WHERE OBJECT_ID = ?
	`
	SelectObject = `
		SELECT * FROM TB_OBJECT WHERE OBJECT_ID = ?
	`

	SetStateObject = `
		UPDATE TB_OBJECT SET OBJECT_STATUS = ?
		WHERE OBJECT_ID = ?
	`

	SetAttrLight = `
		UPDATE TB_OBJECT SET OBJECT_ATTR_INTENSITY = ? 
		WHERE OBJECT_ID = ?
	`
	SetAttrSound = `
		UPDATE TB_OBJECT SET OBJECT_ATTR_VOLUME = ? 
		WHERE OBJECT_ID = ?
	`

	SetAttrSensor = `
		UPDATE TB_OBJECT SET OBJECT_ATTR_DISTANCE = ? 
		WHERE OBJECT_ID = ?
	`
	SetAttrAirConditioner = `
		UPDATE TB_OBJECT SET OBJECT_ATTR_TEMPERATURE = ? 
		WHERE OBJECT_ID = ?
	`
)
