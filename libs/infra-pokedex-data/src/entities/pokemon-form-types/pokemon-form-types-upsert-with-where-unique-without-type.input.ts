import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonFormTypesWhereUniqueInput } from './pokemon-form-types-where-unique.input';
import { Type } from 'class-transformer';
import { PokemonFormTypesUpdateWithoutTypeInput } from './pokemon-form-types-update-without-type.input';
import { PokemonFormTypesCreateWithoutTypeInput } from './pokemon-form-types-create-without-type.input';

@InputType()
export class PokemonFormTypesUpsertWithWhereUniqueWithoutTypeInput {

    @Field(() => PokemonFormTypesWhereUniqueInput, {nullable:false})
    @Type(() => PokemonFormTypesWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonFormTypesWhereUniqueInput, 'pokemon_form_id_type_id'>;

    @Field(() => PokemonFormTypesUpdateWithoutTypeInput, {nullable:false})
    @Type(() => PokemonFormTypesUpdateWithoutTypeInput)
    update!: PokemonFormTypesUpdateWithoutTypeInput;

    @Field(() => PokemonFormTypesCreateWithoutTypeInput, {nullable:false})
    @Type(() => PokemonFormTypesCreateWithoutTypeInput)
    create!: PokemonFormTypesCreateWithoutTypeInput;
}
