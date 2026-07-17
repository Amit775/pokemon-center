import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionGroupsUpdateWithoutPokedexVersionGroupsInput } from './version-groups-update-without-pokedex-version-groups.input';
import { Type } from 'class-transformer';
import { VersionGroupsCreateWithoutPokedexVersionGroupsInput } from './version-groups-create-without-pokedex-version-groups.input';
import { VersionGroupsWhereInput } from './version-groups-where.input';

@InputType()
export class VersionGroupsUpsertWithoutPokedexVersionGroupsInput {

    @Field(() => VersionGroupsUpdateWithoutPokedexVersionGroupsInput, {nullable:false})
    @Type(() => VersionGroupsUpdateWithoutPokedexVersionGroupsInput)
    update!: Identity<VersionGroupsUpdateWithoutPokedexVersionGroupsInput>;

    @Field(() => VersionGroupsCreateWithoutPokedexVersionGroupsInput, {nullable:false})
    @Type(() => VersionGroupsCreateWithoutPokedexVersionGroupsInput)
    create!: Identity<VersionGroupsCreateWithoutPokedexVersionGroupsInput>;

    @Field(() => VersionGroupsWhereInput, {nullable:true})
    @Type(() => VersionGroupsWhereInput)
    where?: Identity<VersionGroupsWhereInput>;
}
