const MutationRepository = require('../Repository/mutation.repository');

class MutationService {
    constructor() { }
    async getAllEndpointsMutation() {
        return await MutationRepository.getAllEndpointsMutation();
    }
    async createEndpointMutation(mutation) {
        return await MutationRepository.createEndpointMutation(mutation);
    }
    async updateEnpointMutation(mutation) {
        return await MutationRepository.updateEnpointMutation(mutation);
    }
    async deleteEndpointMutation(mutationId) {
        return await MutationRepository.deleteEndpointMutation(mutationId);
    }
}

module.exports = new MutationService();