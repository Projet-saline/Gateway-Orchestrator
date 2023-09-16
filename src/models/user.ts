import { Table, Model, Column, DataType, CreatedAt, UpdatedAt } from "sequelize-typescript";

@Table({
    timestamps: true,
    tableName: 'users',
    modelName: 'User'
})

class User extends Model {
    @Column({
        primaryKey: true,
        type: DataType.UUID,
        autoIncrement: true,
        allowNull: false,
        defaultValue: DataType.UUIDV4
    })
    id!: number;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    username!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    email!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    password!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    role!: string;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false
    })
    is_premium!: boolean;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false
    })
    is_admin!: boolean;

    @CreatedAt
    created_at!: Date;

    @UpdatedAt
    updated_at!: Date;
}

export default User;