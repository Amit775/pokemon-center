import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonFormTypesWhereUniqueInput } from './pokemon-form-types-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { PokemonFormTypesUpdateWithoutPokemonFormInput } from './pokemon-form-types-update-without-pokemon-form.input';

@InputType()
export class PokemonFormTypesUpdateWithWhereUniqueWithoutPokemonFormInput {

    @Field(() => PokemonFormTypesWhereUniqueInput, {nullable:false})
    @Type(() => PokemonFormTypesWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonFormTypesWhereUniqueInput, 'pokemon_form_id_type_id'>;

    @Field(() => PokemonFormTypesUpdateWithoutPokemonFormInput, {nullable:false})
    @Type(() => PokemonFormTypesUpdateWithoutPokemonFormInput)
    data!: Identity<PokemonFormTypesUpdateWithoutPokemonFormInput>;
}
