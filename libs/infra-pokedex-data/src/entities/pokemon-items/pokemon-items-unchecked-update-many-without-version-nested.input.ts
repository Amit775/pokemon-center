import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonItemsCreateWithoutVersionInput } from './pokemon-items-create-without-version.input';
import { Type } from 'class-transformer';
import { PokemonItemsCreateOrConnectWithoutVersionInput } from './pokemon-items-create-or-connect-without-version.input';
import { PokemonItemsUpsertWithWhereUniqueWithoutVersionInput } from './pokemon-items-upsert-with-where-unique-without-version.input';
import type { Identity } from 'identity-type';
import { PokemonItemsCreateManyVersionInputEnvelope } from './pokemon-items-create-many-version-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonItemsWhereUniqueInput } from './pokemon-items-where-unique.input';
import { PokemonItemsUpdateWithWhereUniqueWithoutVersionInput } from './pokemon-items-update-with-where-unique-without-version.input';
import { PokemonItemsUpdateManyWithWhereWithoutVersionInput } from './pokemon-items-update-many-with-where-without-version.input';
import { PokemonItemsScalarWhereInput } from './pokemon-items-scalar-where.input';

@InputType()
export class PokemonItemsUncheckedUpdateManyWithoutVersionNestedInput {

    @Field(() => [PokemonItemsCreateWithoutVersionInput], {nullable:true})
    @Type(() => PokemonItemsCreateWithoutVersionInput)
    create?: Array<PokemonItemsCreateWithoutVersionInput>;

    @Field(() => [PokemonItemsCreateOrConnectWithoutVersionInput], {nullable:true})
    @Type(() => PokemonItemsCreateOrConnectWithoutVersionInput)
    connectOrCreate?: Array<PokemonItemsCreateOrConnectWithoutVersionInput>;

    @Field(() => [PokemonItemsUpsertWithWhereUniqueWithoutVersionInput], {nullable:true})
    @Type(() => PokemonItemsUpsertWithWhereUniqueWithoutVersionInput)
    upsert?: Array<PokemonItemsUpsertWithWhereUniqueWithoutVersionInput>;

    @Field(() => PokemonItemsCreateManyVersionInputEnvelope, {nullable:true})
    @Type(() => PokemonItemsCreateManyVersionInputEnvelope)
    createMany?: Identity<PokemonItemsCreateManyVersionInputEnvelope>;

    @Field(() => [PokemonItemsWhereUniqueInput], {nullable:true})
    @Type(() => PokemonItemsWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PokemonItemsWhereUniqueInput, 'pokemon_id_version_id_item_id'>>;

    @Field(() => [PokemonItemsWhereUniqueInput], {nullable:true})
    @Type(() => PokemonItemsWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PokemonItemsWhereUniqueInput, 'pokemon_id_version_id_item_id'>>;

    @Field(() => [PokemonItemsWhereUniqueInput], {nullable:true})
    @Type(() => PokemonItemsWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PokemonItemsWhereUniqueInput, 'pokemon_id_version_id_item_id'>>;

    @Field(() => [PokemonItemsWhereUniqueInput], {nullable:true})
    @Type(() => PokemonItemsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokemonItemsWhereUniqueInput, 'pokemon_id_version_id_item_id'>>;

    @Field(() => [PokemonItemsUpdateWithWhereUniqueWithoutVersionInput], {nullable:true})
    @Type(() => PokemonItemsUpdateWithWhereUniqueWithoutVersionInput)
    update?: Array<PokemonItemsUpdateWithWhereUniqueWithoutVersionInput>;

    @Field(() => [PokemonItemsUpdateManyWithWhereWithoutVersionInput], {nullable:true})
    @Type(() => PokemonItemsUpdateManyWithWhereWithoutVersionInput)
    updateMany?: Array<PokemonItemsUpdateManyWithWhereWithoutVersionInput>;

    @Field(() => [PokemonItemsScalarWhereInput], {nullable:true})
    @Type(() => PokemonItemsScalarWhereInput)
    deleteMany?: Array<PokemonItemsScalarWhereInput>;
}
