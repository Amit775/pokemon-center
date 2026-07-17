import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonSpeciesCreateWithoutPartySpeciesInput } from './pokemon-species-create-without-party-species.input';
import { Type } from 'class-transformer';
import { PokemonSpeciesCreateOrConnectWithoutPartySpeciesInput } from './pokemon-species-create-or-connect-without-party-species.input';
import { PokemonSpeciesUpsertWithoutPartySpeciesInput } from './pokemon-species-upsert-without-party-species.input';
import { PokemonSpeciesWhereInput } from './pokemon-species-where.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonSpeciesWhereUniqueInput } from './pokemon-species-where-unique.input';
import { PokemonSpeciesUpdateToOneWithWhereWithoutPartySpeciesInput } from './pokemon-species-update-to-one-with-where-without-party-species.input';

@InputType()
export class PokemonSpeciesUpdateOneWithoutPartySpeciesNestedInput {

    @Field(() => PokemonSpeciesCreateWithoutPartySpeciesInput, {nullable:true})
    @Type(() => PokemonSpeciesCreateWithoutPartySpeciesInput)
    create?: Identity<PokemonSpeciesCreateWithoutPartySpeciesInput>;

    @Field(() => PokemonSpeciesCreateOrConnectWithoutPartySpeciesInput, {nullable:true})
    @Type(() => PokemonSpeciesCreateOrConnectWithoutPartySpeciesInput)
    connectOrCreate?: Identity<PokemonSpeciesCreateOrConnectWithoutPartySpeciesInput>;

    @Field(() => PokemonSpeciesUpsertWithoutPartySpeciesInput, {nullable:true})
    @Type(() => PokemonSpeciesUpsertWithoutPartySpeciesInput)
    upsert?: Identity<PokemonSpeciesUpsertWithoutPartySpeciesInput>;

    @Field(() => PokemonSpeciesWhereInput, {nullable:true})
    @Type(() => PokemonSpeciesWhereInput)
    disconnect?: Identity<PokemonSpeciesWhereInput>;

    @Field(() => PokemonSpeciesWhereInput, {nullable:true})
    @Type(() => PokemonSpeciesWhereInput)
    delete?: Identity<PokemonSpeciesWhereInput>;

    @Field(() => PokemonSpeciesWhereUniqueInput, {nullable:true})
    @Type(() => PokemonSpeciesWhereUniqueInput)
    connect?: Prisma.AtLeast<PokemonSpeciesWhereUniqueInput, 'id'>;

    @Field(() => PokemonSpeciesUpdateToOneWithWhereWithoutPartySpeciesInput, {nullable:true})
    @Type(() => PokemonSpeciesUpdateToOneWithWhereWithoutPartySpeciesInput)
    update?: Identity<PokemonSpeciesUpdateToOneWithWhereWithoutPartySpeciesInput>;
}
