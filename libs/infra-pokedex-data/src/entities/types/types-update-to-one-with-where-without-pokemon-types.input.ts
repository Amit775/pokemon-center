import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypesWhereInput } from './types-where.input';
import { Type } from 'class-transformer';
import { TypesUpdateWithoutPokemonTypesInput } from './types-update-without-pokemon-types.input';

@InputType()
export class TypesUpdateToOneWithWhereWithoutPokemonTypesInput {

    @Field(() => TypesWhereInput, {nullable:true})
    @Type(() => TypesWhereInput)
    where?: TypesWhereInput;

    @Field(() => TypesUpdateWithoutPokemonTypesInput, {nullable:false})
    @Type(() => TypesUpdateWithoutPokemonTypesInput)
    data!: TypesUpdateWithoutPokemonTypesInput;
}
