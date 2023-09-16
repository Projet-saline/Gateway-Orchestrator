import connection from "../config/database";
// import sequelize from "sequelize";
import { Table, Model, Column, DataType } from "sequelize-typescript";

// const { DataTypes } = sequelize;

@Table({
    timestamps: false,
    tableName: 'users'
})

export class User extends Model {
    @Column({
        type: DataType.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    })
    id!: number;

    @Column({
        type: DataType.STRING(255),
        allowNull: false,
        unique: true
    })
    email!: string;

    @Column({
        type: DataType.STRING(255),
        allowNull: false,
        unique: true
    })
    username!: string;

    @Column({
        type: DataType.STRING(255),
        allowNull: false
    })
    password!: string;
}

// Sans sequelize-typescript, avec sequelize:
// const User = connection.define('user', {
//     id: {
//         type: DataTypes.INTEGER.UNSIGNED,
//         primaryKey: true,
//         autoIncrement: true,
//         allowNull: false
//     },
//     email: {
//         type: DataTypes.STRING(255),
//         allowNull: false,
//         unique: true
//     },
//     username: {
//         type: DataTypes.STRING(255),
//         allowNull: false,
//         unique: true
//     },
//     password: {
//         // Password doit être un hash
//         type: DataTypes.STRING(255),
//         allowNull: false
//     }
// });
//
// export default User;

