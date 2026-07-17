import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionGroupsCreateWithoutPokedexVersionGroupsInput } from './version-groups-create-without-pokedex-version-groups.input';
import { Type } from 'class-transformer';
import { VersionGroupsCreateOrConnectWithoutPokedexVersionGroupsInput } from './version-groups-create-or-connect-without-pokedex-version-groups.input';
import { Prisma } from '@pokemon-center/prisma';
import { VersionGroupsWhereUniqueInput } from './version-groups-where-unique.input';

@InputType()
export class VersionGroupsCreateNestedOneWithoutPokedexVersionGroupsInput {

    @Field(() => VersionGroupsCreateWithoutPokedexVersionGroupsInput, {nullable:true})
    @Type(() => VersionGroupsCreateWithoutPokedexVersionGroupsInput)
    create?: Identity<VersionGroupsCreateWithoutPokedexVersionGroupsInput>;

    @Field(() => VersionGroupsCreateOrConnectWithoutPokedexVersionGroupsInput, {nullable:true})
    @Type(() => VersionGroupsCreateOrConnectWithoutPokedexVersionGroupsInput)
    connectOrCreate?: Identity<VersionGroupsCreateOrConnectWithoutPokedexVersionGroupsInput>;

    @Field(() => VersionGroupsWhereUniqueInput, {nullable:true})
    @Type(() => VersionGroupsWhereUniqueInput)
    connect?: Prisma.AtLeast<VersionGroupsWhereUniqueInput, 'id'>;
}
