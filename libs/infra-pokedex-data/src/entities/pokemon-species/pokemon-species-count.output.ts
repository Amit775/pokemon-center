import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PokemonSpeciesCount {

    @Field(() => Int, {nullable:false})
    evolvesTo?: number;

    @Field(() => Int, {nullable:false})
    pokemon?: number;

    @Field(() => Int, {nullable:false})
    eggGroups?: number;

    @Field(() => Int, {nullable:false})
    dexNumbers?: number;

    @Field(() => Int, {nullable:false})
    evolution?: number;

    @Field(() => Int, {nullable:false})
    partySpecies?: number;

    @Field(() => Int, {nullable:false})
    tradeSpecies?: number;
}
