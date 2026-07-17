import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AbilitiesCount {

    @Field(() => Int, {nullable:false})
    pokemonAbilities?: number;
}
