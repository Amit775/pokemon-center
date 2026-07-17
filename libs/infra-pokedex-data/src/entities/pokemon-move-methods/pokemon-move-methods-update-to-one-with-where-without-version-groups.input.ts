import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonMoveMethodsWhereInput } from './pokemon-move-methods-where.input';
import { Type } from 'class-transformer';
import { PokemonMoveMethodsUpdateWithoutVersionGroupsInput } from './pokemon-move-methods-update-without-version-groups.input';

@InputType()
export class PokemonMoveMethodsUpdateToOneWithWhereWithoutVersionGroupsInput {

    @Field(() => PokemonMoveMethodsWhereInput, {nullable:true})
    @Type(() => PokemonMoveMethodsWhereInput)
    where?: PokemonMoveMethodsWhereInput;

    @Field(() => PokemonMoveMethodsUpdateWithoutVersionGroupsInput, {nullable:false})
    @Type(() => PokemonMoveMethodsUpdateWithoutVersionGroupsInput)
    data!: PokemonMoveMethodsUpdateWithoutVersionGroupsInput;
}
