import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PokedexVersionGroupsSumAggregate {

    @Field(() => Int, {nullable:true})
    pokedex_id?: number;

    @Field(() => Int, {nullable:true})
    version_group_id?: number;
}
