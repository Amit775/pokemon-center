import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VersionGroupPokemonMoveMethodsScalarWhereInput } from './version-group-pokemon-move-methods-scalar-where.input';
import { Type } from 'class-transformer';
import { VersionGroupPokemonMoveMethodsUncheckedUpdateManyWithoutVersionGroupInput } from './version-group-pokemon-move-methods-unchecked-update-many-without-version-group.input';

@InputType()
export class VersionGroupPokemonMoveMethodsUpdateManyWithWhereWithoutVersionGroupInput {

    @Field(() => VersionGroupPokemonMoveMethodsScalarWhereInput, {nullable:false})
    @Type(() => VersionGroupPokemonMoveMethodsScalarWhereInput)
    where!: VersionGroupPokemonMoveMethodsScalarWhereInput;

    @Field(() => VersionGroupPokemonMoveMethodsUncheckedUpdateManyWithoutVersionGroupInput, {nullable:false})
    @Type(() => VersionGroupPokemonMoveMethodsUncheckedUpdateManyWithoutVersionGroupInput)
    data!: VersionGroupPokemonMoveMethodsUncheckedUpdateManyWithoutVersionGroupInput;
}
