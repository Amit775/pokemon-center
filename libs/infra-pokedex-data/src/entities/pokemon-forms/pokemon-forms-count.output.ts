import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PokemonFormsCount {

    @Field(() => Int, {nullable:false})
    generations?: number;

    @Field(() => Int, {nullable:false})
    types?: number;
}
