export const state = () => ({
	data: [],
	item: {},
})

export const mutations = {
	// on récupère les donnnées dans payload
	initialize(state: { data: Array<any> }, payload: any) {
		state.data = payload
	},

	show(state: { data: Array<any>; item: any }, payload: number) {
		// on recherche un livre qui a un id identique au payload dans notre state.data
		state.item = state.data.find((book) => book.id == payload)
	},

	// suppression d'un livre
	delete(state: { data: Array<any> }, payload: number) {
		// on recherche un livre qui a un id identique au payload dans notre state.data
		const book = state.data.find((book) => book.id == payload)
		// splice => supprime élément d'un tableau, 1 permet de dire qu'on veut en supprimer qu'un seul, indexOf permet de récupéré l'emplacement de la donnée dans un tableau
		state.data.splice(state.data.indexOf(book), 1)
	},

	// déclaration du state, clef data qui contient un tableau de données indéfinies, payload => json : label et description
	store(state: { data: Array<any> }, payload: any) {
		// state point data tableau vide, on récupère les données actuelles et on y ajoute le payload(données reçus suite a la création du books )
		state.data = [...state.data, payload]
	},

	update(state: { data: Array<any>; item: any }) {
		const book = state.data.find((book) => book.id == state.item.id)
		state.data[state.data.indexOf(book)] = state.item
	},

	updatePicture(state: { data: Array<any>; item: any }, payload: any) {
		const book = state.data.find((book) => book.id == state.item.id)
		state.data[state.data.indexOf(book)] = payload
		state.item = payload
	},

	_UPDATE_LABEL(state: { item: any }, payload: any) {
		state.item.label = payload
	},

	_UPDATE_DESCRIPTION(state: { item: any }, payload: any) {
		state.item.description = payload
	},
}

export const actions = {
	// récupère toute les données
	async INDEX(this: any, { state, commit }: any) {
		if (state.data.length == 0) {
			const { data } = await this.$axios.get('/books')
			commit('initialize', data)
		}
	},

	async SHOW(this: any, { state, commit }: any, payload: number) {
		commit('show', payload)
	},

	// stock dans l'API récupère les données
	async STORE(this: any, { state, commit }: any, payload: any) {
		try {
			//stockage
			//stockage, transfert file picture
			const formData = new FormData()
			formData.append('picture', payload.picture)
			formData.append('module', 'book')

			// on récupère la picture
			const { data } = await this.$axios.post('/pictures', formData)
			// on crée le poème en ajoutant l'id de l'image
			const { data: book } = await this.$axios.post('/books', { ...payload, pictureId: data.id })

			// envoie les  nouvelles données vers les mutations
			commit('store', book)
			this.$router.push('/dashboard/book')
			this.$toast.success('Le livre a bien été créé ✔')
		} catch (error) {
			console.log(error)
			error.response.data.errors.forEach((error: any) => this.$toast.error(error.message))
		}
	},

	async UPDATE(this: any, { state, commit }: any, payload: any) {
		try {
			//stockage
			const { data } = await this.$axios.put('/books/' + state.item.id, state.item)
			// envoie les  nouvelles données vers les mutations
			commit('update', data)
			this.$router.push('/dashboard/book')
			this.$toast.success('Le livre a bien été mis à jour ✔')
		} catch (error) {
			error.response.data.errors.forEach((error: any) => this.$toast.error(error.message))
		}
	},

	async UPDATE_PICTURE(this: any, { state, commit }: any, payload: any) {
		try {
			const formData = new FormData()
			formData.append('picture', payload)
			formData.append('module', 'book')
			const { data } = await this.$axios.post('/pictures', formData)

			const { data: book } = await this.$axios.put('/books/' + state.item.id, { pictureId: data.id })

			// envoie les  nouvelles données vers les mutations
			commit('updatePicture', book)
			this.$toast.success("L'image du livre a bien été mis à jour ✔")
		} catch (error) {
			error.response.data.errors.forEach((error: any) => this.$toast.error(error.message))
		}
	},

	async DELETE(this: any, { state, commit }: any, payload: number) {
		try {
			// supprime en bdd la donnée
			await this.$axios.delete('/books/' + payload)
			// supprime en State la donnée
			commit('delete', payload)
			this.$toast.success('Le livre a bien été supprimé ✔')
		} catch (error) {
			error.response.data.errors.forEach((error: any) => this.$toast.error(error.message))
		}
	},
}
