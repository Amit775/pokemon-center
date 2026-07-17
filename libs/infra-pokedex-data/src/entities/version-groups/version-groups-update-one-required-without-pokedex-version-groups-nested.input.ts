import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionGroupsCreateWithoutPokedexVersionGroupsInput } from './version-groups-create-without-pokedex-version-groups.input';
import { Type } from 'class-transformer';
import { VersionGroupsCreateOrConnectWithoutPokedexVersionGroupsInput } from './version-groups-create-or-connect-without-pokedex-version-groups.input';
import { VersionGroupsUpsertWithoutPokedexVersionGroupsInput } from './version-groups-upsert-without-pokedex-version-groups.input';
import { Prisma } from '@pokemon-center/prisma';
import { VersionGroupsWhereUniqueInput } from './version-groups-where-unique.input';
import { VersionGroupsUpdateToOneWithWhereWithoutPokedexVersionGroupsInput } from './version-groups-update-to-one-with-where-without-pokedex-version-groups.input';

@InputType()
export class VersionGroupsUpdateOneRequiredWithoutPokedexVersionGroupsNestedInput {

    @Field(() => VersionGroupsCreateWithoutPokedexVersionGroupsInput, {nullable:true})
    @Type(() => VersionGroupsCreateWithoutPokedexVersionGroupsInput)
    create?: Identity<VersionGroupsCreateWithoutPokedexVersionGroupsInput>;

    @Field(() => VersionGroupsCreateOrConnectWithoutPokedexVersionGroupsInput, {nullable:true})
    @Type(() => VersionGroupsCreateOrConnectWithoutPokedexVersionGroupsInput)
    connectOrCreate?: Identity<VersionGroupsCreateOrConnectWithoutPokedexVersionGroupsInput>;

    @Field(() => VersionGroupsUpsertWithoutPokedexVersionGroupsInput, {nullable:true})
    @Type(() => VersionGroupsUpsertWithoutPokedexVersionGroupsInput)
    upsert?: Identity<VersionGroupsUpsertWithoutPokedexVersionGroupsInput>;

    @Field(() => VersionGroupsWhereUniqueInput, {nullable:true})
    @Type(() => VersionGroupsWhereUniqueInput)
    connect?: Prisma.AtLeast<VersionGroupsWhereUniqueInput, 'id'>;

    @Field(() => VersionGroupsUpdateToOneWithWhereWithoutPokedexVersionGroupsInput, {nullable:true})
    @Type(() => VersionGroupsUpdateToOneWithWhereWithoutPokedexVersionGroupsInput)
    update?: Identity<VersionGroupsUpdateToOneWithWhereWithoutPokedexVersionGroupsInput>;
}
