import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonSpeciesCreateWithoutEggGroupsInput } from './pokemon-species-create-without-egg-groups.input';
import { Type } from 'class-transformer';
import { PokemonSpeciesCreateOrConnectWithoutEggGroupsInput } from './pokemon-species-create-or-connect-without-egg-groups.input';
import { PokemonSpeciesUpsertWithoutEggGroupsInput } from './pokemon-species-upsert-without-egg-groups.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonSpeciesWhereUniqueInput } from './pokemon-species-where-unique.input';
import { PokemonSpeciesUpdateToOneWithWhereWithoutEggGroupsInput } from './pokemon-species-update-to-one-with-where-without-egg-groups.input';

@InputType()
export class PokemonSpeciesUpdateOneRequiredWithoutEggGroupsNestedInput {

    @Field(() => PokemonSpeciesCreateWithoutEggGroupsInput, {nullable:true})
    @Type(() => PokemonSpeciesCreateWithoutEggGroupsInput)
    create?: Identity<PokemonSpeciesCreateWithoutEggGroupsInput>;

    @Field(() => PokemonSpeciesCreateOrConnectWithoutEggGroupsInput, {nullable:true})
    @Type(() => PokemonSpeciesCreateOrConnectWithoutEggGroupsInput)
    connectOrCreate?: Identity<PokemonSpeciesCreateOrConnectWithoutEggGroupsInput>;

    @Field(() => PokemonSpeciesUpsertWithoutEggGroupsInput, {nullable:true})
    @Type(() => PokemonSpeciesUpsertWithoutEggGroupsInput)
    upsert?: Identity<PokemonSpeciesUpsertWithoutEggGroupsInput>;

    @Field(() => PokemonSpeciesWhereUniqueInput, {nullable:true})
    @Type(() => PokemonSpeciesWhereUniqueInput)
    connect?: Prisma.AtLeast<PokemonSpeciesWhereUniqueInput, 'id'>;

    @Field(() => PokemonSpeciesUpdateToOneWithWhereWithoutEggGroupsInput, {nullable:true})
    @Type(() => PokemonSpeciesUpdateToOneWithWhereWithoutEggGroupsInput)
    update?: Identity<PokemonSpeciesUpdateToOneWithWhereWithoutEggGroupsInput>;
}
