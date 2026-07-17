import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { VersionGroupsWhereUniqueInput } from './version-groups-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { VersionGroupsCreateWithoutPokedexVersionGroupsInput } from './version-groups-create-without-pokedex-version-groups.input';

@InputType()
export class VersionGroupsCreateOrConnectWithoutPokedexVersionGroupsInput {

    @Field(() => VersionGroupsWhereUniqueInput, {nullable:false})
    @Type(() => VersionGroupsWhereUniqueInput)
    where!: Prisma.AtLeast<VersionGroupsWhereUniqueInput, 'id'>;

    @Field(() => VersionGroupsCreateWithoutPokedexVersionGroupsInput, {nullable:false})
    @Type(() => VersionGroupsCreateWithoutPokedexVersionGroupsInput)
    create!: Identity<VersionGroupsCreateWithoutPokedexVersionGroupsInput>;
}
