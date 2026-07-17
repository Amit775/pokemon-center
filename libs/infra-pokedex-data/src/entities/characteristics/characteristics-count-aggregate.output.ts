import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CharacteristicsCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    stat_id!: number;

    @Field(() => Int, {nullable:false})
    gene_mod_5!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
