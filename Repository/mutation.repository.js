const { connect } = require('../Config/db.config');
const logger = require('../Logger/api.logger');

class MutationRepository {
    db = {};
    constructor() {
        this.db = connect();
    }

    async getAllEndpointsMutation() {
        try {
            const mutations = await this.db.mutations.findAll();
            console.log('Mutation :::', mutations);
            return mutations;
        } catch (err) {
            console.log(err);
            return err;
        }
    }

    async createEndpointMutation(mutation) {
        let data = {};
        try {
            mutation.createdate = new Date().toISOString();
            mutation.mutation_script = JSON.stringify(mutation.mutation_script)
            data = await this.db.mutations.create(mutation);
        } catch (err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async updateEnpointMutation(mutation) {
        let data = {};
        try {
            mutation.updateddate = new Date().toISOString();
            mutation.mutation_script = JSON.stringify(mutation.mutation_script)
            data = await this.db.mutations.update({ ...mutation }, {
                where: {
                    id: mutation.id
                }
            });
        } catch (err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async deleteEndpointMutation(mutationId) {
        let data = {};
        try {
            data = await this.db.mutations.destroy({
                where: {
                    id: mutationId
                }
            });
        } catch (err) {
            logger.error('Error::' + err);
        }
        return data;
        return { status: `${data.deletedCount > 0 ? true : false}` };
    }

}

module.exports = new MutationRepository();