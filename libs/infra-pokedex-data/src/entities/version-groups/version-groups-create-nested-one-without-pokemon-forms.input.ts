import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionGroupsCreateWithoutPokemonFormsInput } from './version-groups-create-without-pokemon-forms.input';
import { Type } from 'class-transformer';
import { VersionGroupsCreateOrConnectWithoutPokemonFormsInput } from './version-groups-create-or-connect-without-pokemon-forms.input';
import { Prisma } from '@pokemon-center/prisma';
import { VersionGroupsWhereUniqueInput } from './version-groups-where-unique.input';

@InputType()
export class VersionGroupsCreateNestedOneWithoutPokemonFormsInput {

    @Field(() => VersionGroupsCreateWithoutPokemonFormsInput, {nullable:true})
    @Type(() => VersionGroupsCreateWithoutPokemonFormsInput)
    create?: Identity<VersionGroupsCreateWithoutPokemonFormsInput>;

    @Field(() => VersionGroupsCreateOrConnectWithoutPokemonFormsInput, {nullable:true})
    @Type(() => VersionGroupsCreateOrConnectWithoutPokemonFormsInput)
    connectOrCreate?: Identity<VersionGroupsCreateOrConnectWithoutPokemonFormsInput>;

    @Field(() => VersionGroupsWhereUniqueInput, {nullable:true})
    @Type(() => VersionGroupsWhereUniqueInput)
    connect?: Prisma.AtLeast<VersionGroupsWhereUniqueInput, 'id'>;
}
