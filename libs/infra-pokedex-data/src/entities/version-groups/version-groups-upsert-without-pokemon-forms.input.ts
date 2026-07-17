import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionGroupsUpdateWithoutPokemonFormsInput } from './version-groups-update-without-pokemon-forms.input';
import { Type } from 'class-transformer';
import { VersionGroupsCreateWithoutPokemonFormsInput } from './version-groups-create-without-pokemon-forms.input';
import { VersionGroupsWhereInput } from './version-groups-where.input';

@InputType()
export class VersionGroupsUpsertWithoutPokemonFormsInput {

    @Field(() => VersionGroupsUpdateWithoutPokemonFormsInput, {nullable:false})
    @Type(() => VersionGroupsUpdateWithoutPokemonFormsInput)
    update!: Identity<VersionGroupsUpdateWithoutPokemonFormsInput>;

    @Field(() => VersionGroupsCreateWithoutPokemonFormsInput, {nullable:false})
    @Type(() => VersionGroupsCreateWithoutPokemonFormsInput)
    create!: Identity<VersionGroupsCreateWithoutPokemonFormsInput>;

    @Field(() => VersionGroupsWhereInput, {nullable:true})
    @Type(() => VersionGroupsWhereInput)
    where?: Identity<VersionGroupsWhereInput>;
}
