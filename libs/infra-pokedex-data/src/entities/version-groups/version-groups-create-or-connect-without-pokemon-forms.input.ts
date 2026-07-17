import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VersionGroupsWhereUniqueInput } from './version-groups-where-unique.input';
import { Type } from 'class-transformer';
import { VersionGroupsCreateWithoutPokemonFormsInput } from './version-groups-create-without-pokemon-forms.input';

@InputType()
export class VersionGroupsCreateOrConnectWithoutPokemonFormsInput {

    @Field(() => VersionGroupsWhereUniqueInput, {nullable:false})
    @Type(() => VersionGroupsWhereUniqueInput)
    where!: Prisma.AtLeast<VersionGroupsWhereUniqueInput, 'id'>;

    @Field(() => VersionGroupsCreateWithoutPokemonFormsInput, {nullable:false})
    @Type(() => VersionGroupsCreateWithoutPokemonFormsInput)
    create!: VersionGroupsCreateWithoutPokemonFormsInput;
}
