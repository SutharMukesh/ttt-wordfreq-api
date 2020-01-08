/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
const express = require('express');
const wordroute = express.Router();

wordroute.post('/wordfreq/:topn', async (req, res) => {
  try {
      if(req.params.topn){
        logger.info(`Routes/Words: Params: Get top most ${req.params.topn} frequent words`);
        // getTopN(req.params.topn)
        res.status(200).send({data:'topnwords'});
      }else if(Object.keys(req.body).length>0){
        logger.info(`Routes/Words: Body: Get top most ${req.body.topn} frequent words`);
        // getTopN(req.body.topn)
        res.status(200).send({data:'topnwords'});
      }else{
        logger.warn(`Routes/Words: topn variable not found in params or body`)
        res.status(401).send({message:'topn variable not found in params or body'});
      }
  } catch (error) {
    logger.error(`Routes/Words: Error while finding top frequent words: ${((error.stack) ? error.stack : error)}`);
    res.status(401).send({message:`Error while finding top frequent words: ${error}`});
  }
});

module.exports = wordroute;
