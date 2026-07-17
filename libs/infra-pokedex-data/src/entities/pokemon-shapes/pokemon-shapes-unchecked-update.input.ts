import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonSpeciesUncheckedUpdateManyWithoutShapeNestedInput } from '../pokemon-species/pokemon-species-unchecked-update-many-without-shape-nested.input';

@InputType()
export class PokemonShapesUncheckedUpdateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => PokemonSpeciesUncheckedUpdateManyWithoutShapeNestedInput, {nullable:true})
    species?: Identity<PokemonSpeciesUncheckedUpdateManyWithoutShapeNestedInput>;
}
