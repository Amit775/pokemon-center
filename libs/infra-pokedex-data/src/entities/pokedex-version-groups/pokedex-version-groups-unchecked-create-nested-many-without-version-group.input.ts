import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokedexVersionGroupsCreateWithoutVersionGroupInput } from './pokedex-version-groups-create-without-version-group.input';
import { Type } from 'class-transformer';
import { PokedexVersionGroupsCreateOrConnectWithoutVersionGroupInput } from './pokedex-version-groups-create-or-connect-without-version-group.input';
import { PokedexVersionGroupsCreateManyVersionGroupInputEnvelope } from './pokedex-version-groups-create-many-version-group-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PokedexVersionGroupsWhereUniqueInput } from './pokedex-version-groups-where-unique.input';

@InputType()
export class PokedexVersionGroupsUncheckedCreateNestedManyWithoutVersionGroupInput {

    @Field(() => [PokedexVersionGroupsCreateWithoutVersionGroupInput], {nullable:true})
    @Type(() => PokedexVersionGroupsCreateWithoutVersionGroupInput)
    create?: Array<PokedexVersionGroupsCreateWithoutVersionGroupInput>;

    @Field(() => [PokedexVersionGroupsCreateOrConnectWithoutVersionGroupInput], {nullable:true})
    @Type(() => PokedexVersionGroupsCreateOrConnectWithoutVersionGroupInput)
    connectOrCreate?: Array<PokedexVersionGroupsCreateOrConnectWithoutVersionGroupInput>;

    @Field(() => PokedexVersionGroupsCreateManyVersionGroupInputEnvelope, {nullable:true})
    @Type(() => PokedexVersionGroupsCreateManyVersionGroupInputEnvelope)
    createMany?: PokedexVersionGroupsCreateManyVersionGroupInputEnvelope;

    @Field(() => [PokedexVersionGroupsWhereUniqueInput], {nullable:true})
    @Type(() => PokedexVersionGroupsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PokedexVersionGroupsWhereUniqueInput, 'pokedex_id'>>;
}
