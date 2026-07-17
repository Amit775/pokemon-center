import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VersionGroupsUpdateWithoutVersionGroupPokemonMoveMethodsInput } from './version-groups-update-without-version-group-pokemon-move-methods.input';
import { Type } from 'class-transformer';
import { VersionGroupsCreateWithoutVersionGroupPokemonMoveMethodsInput } from './version-groups-create-without-version-group-pokemon-move-methods.input';
import { VersionGroupsWhereInput } from './version-groups-where.input';

@InputType()
export class VersionGroupsUpsertWithoutVersionGroupPokemonMoveMethodsInput {

    @Field(() => VersionGroupsUpdateWithoutVersionGroupPokemonMoveMethodsInput, {nullable:false})
    @Type(() => VersionGroupsUpdateWithoutVersionGroupPokemonMoveMethodsInput)
    update!: VersionGroupsUpdateWithoutVersionGroupPokemonMoveMethodsInput;

    @Field(() => VersionGroupsCreateWithoutVersionGroupPokemonMoveMethodsInput, {nullable:false})
    @Type(() => VersionGroupsCreateWithoutVersionGroupPokemonMoveMethodsInput)
    create!: VersionGroupsCreateWithoutVersionGroupPokemonMoveMethodsInput;

    @Field(() => VersionGroupsWhereInput, {nullable:true})
    @Type(() => VersionGroupsWhereInput)
    where?: VersionGroupsWhereInput;
}
