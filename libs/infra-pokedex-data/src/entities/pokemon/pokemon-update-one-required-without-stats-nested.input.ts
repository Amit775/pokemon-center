import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonCreateWithoutStatsInput } from './pokemon-create-without-stats.input';
import { Type } from 'class-transformer';
import { PokemonCreateOrConnectWithoutStatsInput } from './pokemon-create-or-connect-without-stats.input';
import { PokemonUpsertWithoutStatsInput } from './pokemon-upsert-without-stats.input';
import { Prisma } from '@prisma/client';
import { PokemonWhereUniqueInput } from './pokemon-where-unique.input';
import { PokemonUpdateToOneWithWhereWithoutStatsInput } from './pokemon-update-to-one-with-where-without-stats.input';

@InputType()
export class PokemonUpdateOneRequiredWithoutStatsNestedInput {

    @Field(() => PokemonCreateWithoutStatsInput, {nullable:true})
    @Type(() => PokemonCreateWithoutStatsInput)
    create?: PokemonCreateWithoutStatsInput;

    @Field(() => PokemonCreateOrConnectWithoutStatsInput, {nullable:true})
    @Type(() => PokemonCreateOrConnectWithoutStatsInput)
    connectOrCreate?: PokemonCreateOrConnectWithoutStatsInput;

    @Field(() => PokemonUpsertWithoutStatsInput, {nullable:true})
    @Type(() => PokemonUpsertWithoutStatsInput)
    upsert?: PokemonUpsertWithoutStatsInput;

    @Field(() => PokemonWhereUniqueInput, {nullable:true})
    @Type(() => PokemonWhereUniqueInput)
    connect?: Prisma.AtLeast<PokemonWhereUniqueInput, 'id'>;

    @Field(() => PokemonUpdateToOneWithWhereWithoutStatsInput, {nullable:true})
    @Type(() => PokemonUpdateToOneWithWhereWithoutStatsInput)
    update?: PokemonUpdateToOneWithWhereWithoutStatsInput;
}
