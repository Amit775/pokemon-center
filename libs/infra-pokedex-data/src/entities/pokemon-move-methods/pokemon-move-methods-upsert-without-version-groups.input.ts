import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonMoveMethodsUpdateWithoutVersionGroupsInput } from './pokemon-move-methods-update-without-version-groups.input';
import { Type } from 'class-transformer';
import { PokemonMoveMethodsCreateWithoutVersionGroupsInput } from './pokemon-move-methods-create-without-version-groups.input';
import { PokemonMoveMethodsWhereInput } from './pokemon-move-methods-where.input';

@InputType()
export class PokemonMoveMethodsUpsertWithoutVersionGroupsInput {

    @Field(() => PokemonMoveMethodsUpdateWithoutVersionGroupsInput, {nullable:false})
    @Type(() => PokemonMoveMethodsUpdateWithoutVersionGroupsInput)
    update!: PokemonMoveMethodsUpdateWithoutVersionGroupsInput;

    @Field(() => PokemonMoveMethodsCreateWithoutVersionGroupsInput, {nullable:false})
    @Type(() => PokemonMoveMethodsCreateWithoutVersionGroupsInput)
    create!: PokemonMoveMethodsCreateWithoutVersionGroupsInput;

    @Field(() => PokemonMoveMethodsWhereInput, {nullable:true})
    @Type(() => PokemonMoveMethodsWhereInput)
    where?: PokemonMoveMethodsWhereInput;
}
