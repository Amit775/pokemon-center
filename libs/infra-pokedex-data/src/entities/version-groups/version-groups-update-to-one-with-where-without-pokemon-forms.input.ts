import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VersionGroupsWhereInput } from './version-groups-where.input';
import { Type } from 'class-transformer';
import { VersionGroupsUpdateWithoutPokemonFormsInput } from './version-groups-update-without-pokemon-forms.input';

@InputType()
export class VersionGroupsUpdateToOneWithWhereWithoutPokemonFormsInput {

    @Field(() => VersionGroupsWhereInput, {nullable:true})
    @Type(() => VersionGroupsWhereInput)
    where?: VersionGroupsWhereInput;

    @Field(() => VersionGroupsUpdateWithoutPokemonFormsInput, {nullable:false})
    @Type(() => VersionGroupsUpdateWithoutPokemonFormsInput)
    data!: VersionGroupsUpdateWithoutPokemonFormsInput;
}
