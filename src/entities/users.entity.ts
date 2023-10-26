import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn,
    DeleteDateColumn, Entity,
    NumericType, PrimaryColumn,
     PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity('category',{schema:'ventas'})
export class CategoryEntity{
    @PrimaryGeneratedColumn('uuid')
    id:string;
    @CreateDateColumn({
        name:'create_at',
        type:'timestamp',
        default: ()=>'CURRENT_TIMESTAMP',
    })
    createAt: Date;

    @UpdateDateColumn({
        name:'update_at',
        type:'timestamp',
        default: ()=>'CURRENT_TIMESTAMP',
    })
    updateAt: Date;

    @DeleteDateColumn({
        name:'delete_at',
        type:'timestamp',
        nullable:true,
    })
    deleteAt: Date;

    @Column ('varchar', {
        name:'name',
        nullable:false,
        comment:'user name'
    })
    title:string;

    @Column ('varchar', {
        name:'profile',
        nullable:false,
        comment:'user profile'
    })
    description:string;

}

