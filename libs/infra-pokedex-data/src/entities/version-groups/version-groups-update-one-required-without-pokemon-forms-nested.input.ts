import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionGroupsCreateWithoutPokemonFormsInput } from './version-groups-create-without-pokemon-forms.input';
import { Type } from 'class-transformer';
import { VersionGroupsCreateOrConnectWithoutPokemonFormsInput } from './version-groups-create-or-connect-without-pokemon-forms.input';
import { VersionGroupsUpsertWithoutPokemonFormsInput } from './version-groups-upsert-without-pokemon-forms.input';
import { Prisma } from '@pokemon-center/prisma';
import { VersionGroupsWhereUniqueInput } from './version-groups-where-unique.input';
import { VersionGroupsUpdateToOneWithWhereWithoutPokemonFormsInput } from './version-groups-update-to-one-with-where-without-pokemon-forms.input';

@InputType()
export class VersionGroupsUpdateOneRequiredWithoutPokemonFormsNestedInput {

    @Field(() => VersionGroupsCreateWithoutPokemonFormsInput, {nullable:true})
    @Type(() => VersionGroupsCreateWithoutPokemonFormsInput)
    create?: Identity<VersionGroupsCreateWithoutPokemonFormsInput>;

    @Field(() => VersionGroupsCreateOrConnectWithoutPokemonFormsInput, {nullable:true})
    @Type(() => VersionGroupsCreateOrConnectWithoutPokemonFormsInput)
    connectOrCreate?: Identity<VersionGroupsCreateOrConnectWithoutPokemonFormsInput>;

    @Field(() => VersionGroupsUpsertWithoutPokemonFormsInput, {nullable:true})
    @Type(() => VersionGroupsUpsertWithoutPokemonFormsInput)
    upsert?: Identity<VersionGroupsUpsertWithoutPokemonFormsInput>;

    @Field(() => VersionGroupsWhereUniqueInput, {nullable:true})
    @Type(() => VersionGroupsWhereUniqueInput)
    connect?: Prisma.AtLeast<VersionGroupsWhereUniqueInput, 'id'>;

    @Field(() => VersionGroupsUpdateToOneWithWhereWithoutPokemonFormsInput, {nullable:true})
    @Type(() => VersionGroupsUpdateToOneWithWhereWithoutPokemonFormsInput)
    update?: Identity<VersionGroupsUpdateToOneWithWhereWithoutPokemonFormsInput>;
}
