import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonFormTypesWhereUniqueInput } from './pokemon-form-types-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { PokemonFormTypesUpdateWithoutTypeInput } from './pokemon-form-types-update-without-type.input';
import { PokemonFormTypesCreateWithoutTypeInput } from './pokemon-form-types-create-without-type.input';

@InputType()
export class PokemonFormTypesUpsertWithWhereUniqueWithoutTypeInput {

    @Field(() => PokemonFormTypesWhereUniqueInput, {nullable:false})
    @Type(() => PokemonFormTypesWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonFormTypesWhereUniqueInput, 'pokemon_form_id_type_id'>;

    @Field(() => PokemonFormTypesUpdateWithoutTypeInput, {nullable:false})
    @Type(() => PokemonFormTypesUpdateWithoutTypeInput)
    update!: Identity<PokemonFormTypesUpdateWithoutTypeInput>;

    @Field(() => PokemonFormTypesCreateWithoutTypeInput, {nullable:false})
    @Type(() => PokemonFormTypesCreateWithoutTypeInput)
    create!: Identity<PokemonFormTypesCreateWithoutTypeInput>;
}
