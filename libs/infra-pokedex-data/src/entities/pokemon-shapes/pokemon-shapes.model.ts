import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { PokemonSpecies } from '../pokemon-species/pokemon-species.model';
import { PokemonShapesCount } from './pokemon-shapes-count.output';
import type { Identity } from 'identity-type';

/**
 * @@TypeGraphQL.type(name: "PokemonShape")
 */
@ObjectType({description:'@@TypeGraphQL.type(name: "PokemonShape")'})
export class PokemonShapes {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => [PokemonSpecies], {nullable:false})
    species?: Array<PokemonSpecies>;

    @Field(() => PokemonShapesCount, {nullable:false})
    _count?: Identity<PokemonShapesCount>;
}
