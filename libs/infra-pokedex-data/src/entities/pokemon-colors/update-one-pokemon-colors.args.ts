import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonColorsUpdateInput } from './pokemon-colors-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonColorsWhereUniqueInput } from './pokemon-colors-where-unique.input';

@ArgsType()
export class UpdateOnePokemonColorsArgs {

    @Field(() => PokemonColorsUpdateInput, {nullable:false})
    @Type(() => PokemonColorsUpdateInput)
    data!: Identity<PokemonColorsUpdateInput>;

    @Field(() => PokemonColorsWhereUniqueInput, {nullable:false})
    @Type(() => PokemonColorsWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonColorsWhereUniqueInput, 'id'>;
}
