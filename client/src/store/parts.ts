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
		state.item = state.data.find((part) => part.id == payload)
	},

	// déclaration du state, clef data qui contient un tableau de données indéfinies, payload => json : label et description
	store(state: { data: Array<any> }, payload: any) {
		// state point data tableau vide, on récupère les données actuelles et on y ajoute le payload(données reçus suite a la création du books )
		state.data = [...state.data, payload]
	},

	update(state: { data: Array<any>; item: any }, payload: any) {
		const book = state.data.find((book) => book.id == state.item.id)
		state.data[state.data.indexOf(book)] = payload
	},

	_UPDATE_LABEL(state: { item: any }, payload: any) {
		state.item.label = payload
	},

	_UPDATE_DESCRIPTION(state: { item: any }, payload: any) {
		state.item.description = payload
	},

	_UPDATE_BOOKS(state: { item: any }, payload: any) {
		state.item.book_id = payload
	},

	delete(state: { data: Array<any> }, payload: number) {
		// on recherche un livre qui a un id identique au payload dans notre state.data
		const part = state.data.find((part) => part.id == payload)
		// splice => supprime élément d'un tableau, 1 permet de dire qu'on veut en supprimer qu'un seul, indexOf permet de récupéré l'emplacement de la donnée dans un tableau
		state.data.splice(state.data.indexOf(part), 1)
	},
}

export const actions = {
	// récupère toute les données
	async INDEX(this: any, { state, commit }: any) {
		if (state.data.length == 0) {
			const { data } = await this.$axios.get('/parts')
			commit('initialize', data)
		}
	},

	async SHOW(this: any, { state, commit }: any, payload: number) {
		commit('show', payload)
	},

	async STORE(this: any, { state, commit }: any, payload: any) {
		try {
			//stockage
			const { data } = await this.$axios.post('/parts', payload)
			// envoie les  nouvelles données vers les mutations
			commit('store', data)
			this.$router.push('/dashboard/part')
			this.$toast.success('La partie a bien été créé ✔')
		} catch (error) {
			error.response.data.errors.forEach((error: any) => this.$toast.error(error.message))
		}
	},

	async UPDATE(this: any, { state, commit }: any, payload: any) {
		try {
			//stockage
			const { data } = await this.$axios.put('/parts/' + state.item.id, state.item)
			
			// envoie les  nouvelles données vers les mutations
			commit('update', data)
			this.$router.push('/dashboard/part')
			this.$toast.success('La partie a bien été mis à jour ✔')
		} catch (error) {
			error.response.data.errors.forEach((error: any) => this.$toast.error(error.message))
		}
	},

	async DELETE(this: any, { state, commit }: any, payload: number) {
		try {
			// supprime en bdd la donnée
			await this.$axios.delete('/parts/' + payload)
			// supprime en State la donnée
			commit('delete', payload)
			this.$toast.success('La partie a bien été supprimé ✔')
		} catch (error) {
			error.response.data.errors.forEach((error: any) => this.$toast.error(error.message))
		}
	},
}
