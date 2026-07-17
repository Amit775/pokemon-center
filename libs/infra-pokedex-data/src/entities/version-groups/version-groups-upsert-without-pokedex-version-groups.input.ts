import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VersionGroupsUpdateWithoutPokedexVersionGroupsInput } from './version-groups-update-without-pokedex-version-groups.input';
import { Type } from 'class-transformer';
import { VersionGroupsCreateWithoutPokedexVersionGroupsInput } from './version-groups-create-without-pokedex-version-groups.input';
import { VersionGroupsWhereInput } from './version-groups-where.input';

@InputType()
export class VersionGroupsUpsertWithoutPokedexVersionGroupsInput {

    @Field(() => VersionGroupsUpdateWithoutPokedexVersionGroupsInput, {nullable:false})
    @Type(() => VersionGroupsUpdateWithoutPokedexVersionGroupsInput)
    update!: VersionGroupsUpdateWithoutPokedexVersionGroupsInput;

    @Field(() => VersionGroupsCreateWithoutPokedexVersionGroupsInput, {nullable:false})
    @Type(() => VersionGroupsCreateWithoutPokedexVersionGroupsInput)
    create!: VersionGroupsCreateWithoutPokedexVersionGroupsInput;

    @Field(() => VersionGroupsWhereInput, {nullable:true})
    @Type(() => VersionGroupsWhereInput)
    where?: VersionGroupsWhereInput;
}
