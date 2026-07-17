import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VersionGroupsWhereInput } from './version-groups-where.input';
import { Type } from 'class-transformer';
import { VersionGroupsUpdateWithoutVersionGroupPokemonMoveMethodsInput } from './version-groups-update-without-version-group-pokemon-move-methods.input';

@InputType()
export class VersionGroupsUpdateToOneWithWhereWithoutVersionGroupPokemonMoveMethodsInput {

    @Field(() => VersionGroupsWhereInput, {nullable:true})
    @Type(() => VersionGroupsWhereInput)
    where?: VersionGroupsWhereInput;

    @Field(() => VersionGroupsUpdateWithoutVersionGroupPokemonMoveMethodsInput, {nullable:false})
    @Type(() => VersionGroupsUpdateWithoutVersionGroupPokemonMoveMethodsInput)
    data!: VersionGroupsUpdateWithoutVersionGroupPokemonMoveMethodsInput;
}
