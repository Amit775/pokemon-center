import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Stats } from '../stats/stats.model';

/**
 * @@TypeGraphQL.type(name: "Characteristic")
 */
@ObjectType({description:'@@TypeGraphQL.type(name: "Characteristic")'})
export class Characteristics {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    stat_id!: number;

    @Field(() => Int, {nullable:false})
    gene_mod_5!: number;

    @Field(() => Stats, {nullable:false})
    stat?: Stats;
}
