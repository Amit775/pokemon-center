import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VersionGroupsCreateWithoutPokedexVersionGroupsInput } from './version-groups-create-without-pokedex-version-groups.input';
import { Type } from 'class-transformer';
import { VersionGroupsCreateOrConnectWithoutPokedexVersionGroupsInput } from './version-groups-create-or-connect-without-pokedex-version-groups.input';
import { Prisma } from '@prisma/client';
import { VersionGroupsWhereUniqueInput } from './version-groups-where-unique.input';

@InputType()
export class VersionGroupsCreateNestedOneWithoutPokedexVersionGroupsInput {

    @Field(() => VersionGroupsCreateWithoutPokedexVersionGroupsInput, {nullable:true})
    @Type(() => VersionGroupsCreateWithoutPokedexVersionGroupsInput)
    create?: VersionGroupsCreateWithoutPokedexVersionGroupsInput;

    @Field(() => VersionGroupsCreateOrConnectWithoutPokedexVersionGroupsInput, {nullable:true})
    @Type(() => VersionGroupsCreateOrConnectWithoutPokedexVersionGroupsInput)
    connectOrCreate?: VersionGroupsCreateOrConnectWithoutPokedexVersionGroupsInput;

    @Field(() => VersionGroupsWhereUniqueInput, {nullable:true})
    @Type(() => VersionGroupsWhereUniqueInput)
    connect?: Prisma.AtLeast<VersionGroupsWhereUniqueInput, 'id'>;
}
