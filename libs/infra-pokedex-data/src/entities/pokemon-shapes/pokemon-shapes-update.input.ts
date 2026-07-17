import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonSpeciesUpdateManyWithoutShapeNestedInput } from '../pokemon-species/pokemon-species-update-many-without-shape-nested.input';

@InputType()
export class PokemonShapesUpdateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => PokemonSpeciesUpdateManyWithoutShapeNestedInput, {nullable:true})
    species?: Identity<PokemonSpeciesUpdateManyWithoutShapeNestedInput>;
}
