import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonItemsCreateWithoutVersionInput } from './pokemon-items-create-without-version.input';
import { Type } from 'class-transformer';
import { PokemonItemsCreateOrConnectWithoutVersionInput } from './pokemon-items-create-or-connect-without-version.input';
import type { Identity } from 'identity-type';
import { PokemonItemsCreateManyVersionInputEnvelope } from './pokemon-items-create-many-version-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonItemsWhereUniqueInput } from './pokemon-items-where-unique.input';

@InputType()
export class PokemonItemsUncheckedCreateNestedManyWithoutVersionInput {

    @Field(() => [PokemonItemsCreateWithoutVersionInput], {nullable:true})
    @Type(() => PokemonItemsCreateWithoutVersionInput)
    create?: Array<PokemonItemsCreateWithoutVersionInput>;

    @Field(() => [PokemonItemsCreateOrConnectWithoutVersionInput], {nullable:true})
    @Type(() => PokemonItemsCreateOrConnectWithoutVersionInput)
    connectOrCreate?: Array<PokemonItemsCreateOrConnectWithoutVersionInput>;

    @Field(() => PokemonItemsCreateManyVersionInputEnvelope, {nullable:true})
    @Type(() => PokemonItemsCreateManyVersionInputEnvelope)
    createMany?: Identity<PokemonItemsCreateManyVersionInputEnvelope>;

    @Field(() => [PokemonItemsWhereUniqueInput], {nullable:true})
    @Type(() => PokemonItemsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokemonItemsWhereUniqueInput, 'pokemon_id_version_id_item_id'>>;
}
