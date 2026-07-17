import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PokemonCount {

    @Field(() => Int, {nullable:false})
    forms?: number;

    @Field(() => Int, {nullable:false})
    abilities?: number;

    @Field(() => Int, {nullable:false})
    moves?: number;

    @Field(() => Int, {nullable:false})
    stats?: number;

    @Field(() => Int, {nullable:false})
    types?: number;

    @Field(() => Int, {nullable:false})
    items?: number;

    @Field(() => Int, {nullable:false})
    gameIndices?: number;

    @Field(() => Int, {nullable:false})
    encounters?: number;
}
