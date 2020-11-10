export const state = () => ({
	data: [],
	item: {},
})

export const mutations = {
	// on récupère les donnnées dans payload
	initialize(state: { data: Array<any> }, payload: any) {
		state.data = payload
	},

	// déclaration du state, clef data qui contient un tableau de données indéfinies, payload => json : label et description
	store(state: { data: Array<any> }, payload: any) {
		// state point data tableau vide, on récupère les données actuelles et on y ajoute le payload(données reçus suite a la création du books )
		state.data = [...state.data, payload]
	},

	// suppression d'un livre
	delete(state: { data: Array<any> }, payload: number) {
		// on recherche un livre qui a un id identique au payload dans notre state.data
		const poeme = state.data.find((poeme) => poeme.id == payload)
		// splice => supprime élément d'un tableau, 1 permet de dire qu'on veut en supprimer qu'un seul, indexOf permet de récupéré l'emplacement de la donnée dans un tableau
		state.data.splice(state.data.indexOf(poeme), 1)
	},
}

export const actions = {
	// récupère toute les données
	async INDEX(this: any, { state, commit }: any) {
		if (state.data.length == 0) {
			const { data } = await this.$axios.get('/poemes')
			commit('initialize', data)
		}
	},

	async STORE(this: any, { state, commit }: any, payload: any) {
		try {
			//stockage
			const { data } = await this.$axios.post('/poemes', payload)
			// envoie les  nouvelles données vers les mutations
			commit('store', data)
			this.$toast.success('Le poème a bien été créé ✔')
		} catch (error) {
			error.response.data.errors.forEach((error: any) => this.$toast.error(error.message))
		}
	},

	async DELETE(this: any, { state, commit }: any, payload: number) {
		try {
			// supprime en bdd la donnée
			await this.$axios.delete('/poemes/' + payload)
			// supprime en State la donnée
			commit('delete', payload)
			this.$toast.success('Le poème a bien été supprimé ✔')
		} catch (error) {
			error.response.data.errors.forEach((error: any) => this.$toast.error(error.message))
		}
	},
}
