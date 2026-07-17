import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonColorsWhereUniqueInput } from './pokemon-colors-where-unique.input';
import { Type } from 'class-transformer';
import { PokemonColorsCreateInput } from './pokemon-colors-create.input';
import { PokemonColorsUpdateInput } from './pokemon-colors-update.input';

@ArgsType()
export class UpsertOnePokemonColorsArgs {

    @Field(() => PokemonColorsWhereUniqueInput, {nullable:false})
    @Type(() => PokemonColorsWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonColorsWhereUniqueInput, 'id'>;

    @Field(() => PokemonColorsCreateInput, {nullable:false})
    @Type(() => PokemonColorsCreateInput)
    create!: PokemonColorsCreateInput;

    @Field(() => PokemonColorsUpdateInput, {nullable:false})
    @Type(() => PokemonColorsUpdateInput)
    update!: PokemonColorsUpdateInput;
}
