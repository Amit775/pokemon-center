import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { PokemonEvolution } from '../pokemon-evolution/pokemon-evolution.model';
import { GendersCount } from './genders-count.output';

/**
 * @@TypeGraphQL.type(name: "Gender")
 */
@ObjectType({description:'@@TypeGraphQL.type(name: "Gender")'})
export class Genders {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => [PokemonEvolution], {nullable:true})
    evolution?: Array<PokemonEvolution>;

    @Field(() => GendersCount, {nullable:false})
    _count?: GendersCount;
}
