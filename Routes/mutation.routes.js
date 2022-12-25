module.exports = app => {
    const mutationController = require("../Controller/mutation.controller.js");
    var router = require("express").Router();

    router.get('/', (req, res) => {
        mutationController.getAllEndpointsMutation().then(data => res.json(data));
    });
    router.post('/', (req, res) => {
        mutationController.createEndpointMutation(req.body).then(data => res.json(data));
    });
    router.put('/', (req, res) => {
        mutationController.updateEnpointMutation(req.body).then(data => res.json(data));
    });
    router.delete('/:id', (req, res) => {
        mutationController.deleteEndpointMutation(req.params.id).then(data => res.json(data));
    });

    app.use('/api/mutation', router);
};