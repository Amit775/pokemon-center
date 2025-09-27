import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { PokemonEvolution } from '../pokemon-evolution/pokemon-evolution.model';
import { EvolutionTriggersCount } from './evolution-triggers-count.output';

/**
 * @@TypeGraphQL.type(name: "EvolutionTrigger")
 */
@ObjectType({description:'@@TypeGraphQL.type(name: "EvolutionTrigger")'})
export class EvolutionTriggers {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => [PokemonEvolution], {nullable:true})
    evolution?: Array<PokemonEvolution>;

    @Field(() => EvolutionTriggersCount, {nullable:false})
    _count?: EvolutionTriggersCount;
}
