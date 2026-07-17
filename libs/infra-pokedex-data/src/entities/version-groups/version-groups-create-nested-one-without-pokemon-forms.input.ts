import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VersionGroupsCreateWithoutPokemonFormsInput } from './version-groups-create-without-pokemon-forms.input';
import { Type } from 'class-transformer';
import { VersionGroupsCreateOrConnectWithoutPokemonFormsInput } from './version-groups-create-or-connect-without-pokemon-forms.input';
import { Prisma } from '@prisma/client';
import { VersionGroupsWhereUniqueInput } from './version-groups-where-unique.input';

@InputType()
export class VersionGroupsCreateNestedOneWithoutPokemonFormsInput {

    @Field(() => VersionGroupsCreateWithoutPokemonFormsInput, {nullable:true})
    @Type(() => VersionGroupsCreateWithoutPokemonFormsInput)
    create?: VersionGroupsCreateWithoutPokemonFormsInput;

    @Field(() => VersionGroupsCreateOrConnectWithoutPokemonFormsInput, {nullable:true})
    @Type(() => VersionGroupsCreateOrConnectWithoutPokemonFormsInput)
    connectOrCreate?: VersionGroupsCreateOrConnectWithoutPokemonFormsInput;

    @Field(() => VersionGroupsWhereUniqueInput, {nullable:true})
    @Type(() => VersionGroupsWhereUniqueInput)
    connect?: Prisma.AtLeast<VersionGroupsWhereUniqueInput, 'id'>;
}
