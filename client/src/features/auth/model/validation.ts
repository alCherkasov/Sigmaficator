export function validateEmail(email: string): string | null {
	if(!email.trim()) return 'Обязательное поле'
	const re = /\S+@\S+\.\S+/
	if(!re.test(email)) return 'Неверный формат'
	return null
}

export function validatePassword(pass: string): string | null {
	if(!pass.trim()) return 'Обязательное поле'
	if(pass.length < 8) return 'Минимальная длина 8 символов'
	return null
}

export function validateName(name: string): string | null {
	if(!name.trim()) return 'Обязательное поле'
	return null
}

export function validateConfirmedPassword(oldPass: string, pass: string): string | null {
	if(!pass.trim()) return 'Обязательное поле'
	if(oldPass !== pass) return 'Пароли не совпадают'
	return null
}