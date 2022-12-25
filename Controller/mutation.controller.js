const MutationService = require('../Service/mutation.service');
const logger = require('../Logger/api.logger');

class MutationController {
    async getAllEndpointsMutation() {
        logger.info('\n Controller: getAllEndpointsMutation \n')
        return await MutationService.getAllEndpointsMutation();
    }
    async createEndpointMutation(mutation) {
        logger.info('\n Controller: createEndpointMutation \n', mutation);
        return await MutationService.createEndpointMutation(mutation);
    }
    async updateEnpointMutation(mutation) {
        logger.info('\n Controller: updateEnpointMutation \n', mutation);
        return await MutationService.updateEnpointMutation(mutation);
    }
    async deleteEndpointMutation(mutationId) {
        logger.info('\n Controller: deleteEndpointMutation \n', mutationId);
        return await MutationService.deleteEndpointMutation(mutationId);
    }
}
module.exports = new MutationController();