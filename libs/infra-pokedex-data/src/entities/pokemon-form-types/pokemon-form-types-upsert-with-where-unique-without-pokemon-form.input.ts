import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonFormTypesWhereUniqueInput } from './pokemon-form-types-where-unique.input';
import { Type } from 'class-transformer';
import { PokemonFormTypesUpdateWithoutPokemonFormInput } from './pokemon-form-types-update-without-pokemon-form.input';
import { PokemonFormTypesCreateWithoutPokemonFormInput } from './pokemon-form-types-create-without-pokemon-form.input';

@InputType()
export class PokemonFormTypesUpsertWithWhereUniqueWithoutPokemonFormInput {

    @Field(() => PokemonFormTypesWhereUniqueInput, {nullable:false})
    @Type(() => PokemonFormTypesWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonFormTypesWhereUniqueInput, 'pokemon_form_id_type_id'>;

    @Field(() => PokemonFormTypesUpdateWithoutPokemonFormInput, {nullable:false})
    @Type(() => PokemonFormTypesUpdateWithoutPokemonFormInput)
    update!: PokemonFormTypesUpdateWithoutPokemonFormInput;

    @Field(() => PokemonFormTypesCreateWithoutPokemonFormInput, {nullable:false})
    @Type(() => PokemonFormTypesCreateWithoutPokemonFormInput)
    create!: PokemonFormTypesCreateWithoutPokemonFormInput;
}
