import { defineMongooseConnection } from '#nuxt/mongoose';

const config = useRuntimeConfig();

export const connection = defineMongooseConnection(config.dbCluster);
