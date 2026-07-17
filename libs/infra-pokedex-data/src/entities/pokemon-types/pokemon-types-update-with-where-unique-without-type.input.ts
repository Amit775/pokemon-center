import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonTypesWhereUniqueInput } from './pokemon-types-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { PokemonTypesUpdateWithoutTypeInput } from './pokemon-types-update-without-type.input';

@InputType()
export class PokemonTypesUpdateWithWhereUniqueWithoutTypeInput {

    @Field(() => PokemonTypesWhereUniqueInput, {nullable:false})
    @Type(() => PokemonTypesWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonTypesWhereUniqueInput, 'pokemon_id_type_id'>;

    @Field(() => PokemonTypesUpdateWithoutTypeInput, {nullable:false})
    @Type(() => PokemonTypesUpdateWithoutTypeInput)
    data!: Identity<PokemonTypesUpdateWithoutTypeInput>;
}
