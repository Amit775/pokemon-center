import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonSpeciesUncheckedCreateNestedManyWithoutColorInput } from '../pokemon-species/pokemon-species-unchecked-create-nested-many-without-color.input';

@InputType()
export class PokemonColorsUncheckedCreateInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => PokemonSpeciesUncheckedCreateNestedManyWithoutColorInput, {nullable:true})
    species?: Identity<PokemonSpeciesUncheckedCreateNestedManyWithoutColorInput>;
}
