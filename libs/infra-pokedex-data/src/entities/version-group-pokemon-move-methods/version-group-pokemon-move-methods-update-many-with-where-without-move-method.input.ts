import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionGroupPokemonMoveMethodsScalarWhereInput } from './version-group-pokemon-move-methods-scalar-where.input';
import { Type } from 'class-transformer';
import { VersionGroupPokemonMoveMethodsUncheckedUpdateManyWithoutMoveMethodInput } from './version-group-pokemon-move-methods-unchecked-update-many-without-move-method.input';

@InputType()
export class VersionGroupPokemonMoveMethodsUpdateManyWithWhereWithoutMoveMethodInput {

    @Field(() => VersionGroupPokemonMoveMethodsScalarWhereInput, {nullable:false})
    @Type(() => VersionGroupPokemonMoveMethodsScalarWhereInput)
    where!: Identity<VersionGroupPokemonMoveMethodsScalarWhereInput>;

    @Field(() => VersionGroupPokemonMoveMethodsUncheckedUpdateManyWithoutMoveMethodInput, {nullable:false})
    @Type(() => VersionGroupPokemonMoveMethodsUncheckedUpdateManyWithoutMoveMethodInput)
    data!: Identity<VersionGroupPokemonMoveMethodsUncheckedUpdateManyWithoutMoveMethodInput>;
}
