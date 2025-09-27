import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Items } from '../items/items.model';
import { PokemonSpecies } from '../pokemon-species/pokemon-species.model';
import { EvolutionChainsCount } from './evolution-chains-count.output';

/**
 * @@TypeGraphQL.type(name: "EvolutionChain")
 */
@ObjectType({description:'@@TypeGraphQL.type(name: "EvolutionChain")'})
export class EvolutionChains {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:true})
    baby_trigger_item_id!: number | null;

    @Field(() => Items, {nullable:true})
    babyTriggerItem?: Items | null;

    @Field(() => [PokemonSpecies], {nullable:true})
    species?: Array<PokemonSpecies>;

    @Field(() => EvolutionChainsCount, {nullable:false})
    _count?: EvolutionChainsCount;
}
