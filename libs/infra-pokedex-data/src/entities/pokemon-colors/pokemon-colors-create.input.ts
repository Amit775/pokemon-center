import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonSpeciesCreateNestedManyWithoutColorInput } from '../pokemon-species/pokemon-species-create-nested-many-without-color.input';

@InputType()
export class PokemonColorsCreateInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => PokemonSpeciesCreateNestedManyWithoutColorInput, {nullable:true})
    species?: Identity<PokemonSpeciesCreateNestedManyWithoutColorInput>;
}
