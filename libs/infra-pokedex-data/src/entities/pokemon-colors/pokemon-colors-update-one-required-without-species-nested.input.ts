import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonColorsCreateWithoutSpeciesInput } from './pokemon-colors-create-without-species.input';
import { Type } from 'class-transformer';
import { PokemonColorsCreateOrConnectWithoutSpeciesInput } from './pokemon-colors-create-or-connect-without-species.input';
import { PokemonColorsUpsertWithoutSpeciesInput } from './pokemon-colors-upsert-without-species.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonColorsWhereUniqueInput } from './pokemon-colors-where-unique.input';
import { PokemonColorsUpdateToOneWithWhereWithoutSpeciesInput } from './pokemon-colors-update-to-one-with-where-without-species.input';

@InputType()
export class PokemonColorsUpdateOneRequiredWithoutSpeciesNestedInput {

    @Field(() => PokemonColorsCreateWithoutSpeciesInput, {nullable:true})
    @Type(() => PokemonColorsCreateWithoutSpeciesInput)
    create?: Identity<PokemonColorsCreateWithoutSpeciesInput>;

    @Field(() => PokemonColorsCreateOrConnectWithoutSpeciesInput, {nullable:true})
    @Type(() => PokemonColorsCreateOrConnectWithoutSpeciesInput)
    connectOrCreate?: Identity<PokemonColorsCreateOrConnectWithoutSpeciesInput>;

    @Field(() => PokemonColorsUpsertWithoutSpeciesInput, {nullable:true})
    @Type(() => PokemonColorsUpsertWithoutSpeciesInput)
    upsert?: Identity<PokemonColorsUpsertWithoutSpeciesInput>;

    @Field(() => PokemonColorsWhereUniqueInput, {nullable:true})
    @Type(() => PokemonColorsWhereUniqueInput)
    connect?: Prisma.AtLeast<PokemonColorsWhereUniqueInput, 'id'>;

    @Field(() => PokemonColorsUpdateToOneWithWhereWithoutSpeciesInput, {nullable:true})
    @Type(() => PokemonColorsUpdateToOneWithWhereWithoutSpeciesInput)
    update?: Identity<PokemonColorsUpdateToOneWithWhereWithoutSpeciesInput>;
}
