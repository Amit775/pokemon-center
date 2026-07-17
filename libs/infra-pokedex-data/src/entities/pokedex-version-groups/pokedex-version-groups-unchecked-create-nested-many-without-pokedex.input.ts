import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokedexVersionGroupsCreateWithoutPokedexInput } from './pokedex-version-groups-create-without-pokedex.input';
import { Type } from 'class-transformer';
import { PokedexVersionGroupsCreateOrConnectWithoutPokedexInput } from './pokedex-version-groups-create-or-connect-without-pokedex.input';
import { PokedexVersionGroupsCreateManyPokedexInputEnvelope } from './pokedex-version-groups-create-many-pokedex-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PokedexVersionGroupsWhereUniqueInput } from './pokedex-version-groups-where-unique.input';

@InputType()
export class PokedexVersionGroupsUncheckedCreateNestedManyWithoutPokedexInput {

    @Field(() => [PokedexVersionGroupsCreateWithoutPokedexInput], {nullable:true})
    @Type(() => PokedexVersionGroupsCreateWithoutPokedexInput)
    create?: Array<PokedexVersionGroupsCreateWithoutPokedexInput>;

    @Field(() => [PokedexVersionGroupsCreateOrConnectWithoutPokedexInput], {nullable:true})
    @Type(() => PokedexVersionGroupsCreateOrConnectWithoutPokedexInput)
    connectOrCreate?: Array<PokedexVersionGroupsCreateOrConnectWithoutPokedexInput>;

    @Field(() => PokedexVersionGroupsCreateManyPokedexInputEnvelope, {nullable:true})
    @Type(() => PokedexVersionGroupsCreateManyPokedexInputEnvelope)
    createMany?: PokedexVersionGroupsCreateManyPokedexInputEnvelope;

    @Field(() => [PokedexVersionGroupsWhereUniqueInput], {nullable:true})
    @Type(() => PokedexVersionGroupsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokedexVersionGroupsWhereUniqueInput, 'pokedex_id'>>;
}
