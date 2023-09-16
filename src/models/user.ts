import { Table, Model, Column, DataType, CreatedAt, UpdatedAt } from "sequelize-typescript";

@Table({
    timestamps: false,
    tableName: 'users',
})

class User extends Model {
    @Column({
        primaryKey: true,
        type: DataType.INTEGER.UNSIGNED,
        autoIncrement: true,
        allowNull: false,
        // defaultValue: DataType.UUIDV4
    })
    declare idUser: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare username: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare email: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare password: string;

    // @Column({
    //     type: DataType.STRING,
    //     allowNull: false
    // })
    // role!: string;
    //
    // @Column({
    //     type: DataType.BOOLEAN,
    //     allowNull: false
    // })
    // is_premium!: boolean;
    //
    // @Column({
    //     type: DataType.BOOLEAN,
    //     allowNull: false
    // })
    // is_admin!: boolean;
    //
    // @CreatedAt
    // created_at!: Date;
    //
    // @UpdatedAt
    // updated_at!: Date;
}

// User.init({
//     id: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         primaryKey: true
//     }
// }, { sequelize });

export default User;