import Sequelize from 'sequelize';
//auditoria2020-11-17
/* const sequelize = new Sequelize('test', 'sistema', 'se.3628', {
    host: '192.168.1.102',
    dialect:'postgres', // one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' 
    define: {
        charset: 'utf8mb4', //'UTF-8', //'SQL_ASCII',
        collate: "utf8_unicode_ci",//"ascii_bin",
        freezeTableName: true,
        schema: "unicen"
    }
}  
); */

const sequelize = new Sequelize('base_de_prueba', 'postgres', 'unicen_root', {
    host: '190.104.11.190',  //'localhost',
    dialect: 'postgres',
    define: {
        freezeTableName: true,
        schema: "public",
    },
    //logging: false
});

export default sequelize;