import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VersionGroupsCreateWithoutPokedexVersionGroupsInput } from './version-groups-create-without-pokedex-version-groups.input';
import { Type } from 'class-transformer';
import { VersionGroupsCreateOrConnectWithoutPokedexVersionGroupsInput } from './version-groups-create-or-connect-without-pokedex-version-groups.input';
import { VersionGroupsUpsertWithoutPokedexVersionGroupsInput } from './version-groups-upsert-without-pokedex-version-groups.input';
import { Prisma } from '@prisma/client';
import { VersionGroupsWhereUniqueInput } from './version-groups-where-unique.input';
import { VersionGroupsUpdateToOneWithWhereWithoutPokedexVersionGroupsInput } from './version-groups-update-to-one-with-where-without-pokedex-version-groups.input';

@InputType()
export class VersionGroupsUpdateOneRequiredWithoutPokedexVersionGroupsNestedInput {

    @Field(() => VersionGroupsCreateWithoutPokedexVersionGroupsInput, {nullable:true})
    @Type(() => VersionGroupsCreateWithoutPokedexVersionGroupsInput)
    create?: VersionGroupsCreateWithoutPokedexVersionGroupsInput;

    @Field(() => VersionGroupsCreateOrConnectWithoutPokedexVersionGroupsInput, {nullable:true})
    @Type(() => VersionGroupsCreateOrConnectWithoutPokedexVersionGroupsInput)
    connectOrCreate?: VersionGroupsCreateOrConnectWithoutPokedexVersionGroupsInput;

    @Field(() => VersionGroupsUpsertWithoutPokedexVersionGroupsInput, {nullable:true})
    @Type(() => VersionGroupsUpsertWithoutPokedexVersionGroupsInput)
    upsert?: VersionGroupsUpsertWithoutPokedexVersionGroupsInput;

    @Field(() => VersionGroupsWhereUniqueInput, {nullable:true})
    @Type(() => VersionGroupsWhereUniqueInput)
    connect?: Prisma.AtLeast<VersionGroupsWhereUniqueInput, 'id'>;

    @Field(() => VersionGroupsUpdateToOneWithWhereWithoutPokedexVersionGroupsInput, {nullable:true})
    @Type(() => VersionGroupsUpdateToOneWithWhereWithoutPokedexVersionGroupsInput)
    update?: VersionGroupsUpdateToOneWithWhereWithoutPokedexVersionGroupsInput;
}
