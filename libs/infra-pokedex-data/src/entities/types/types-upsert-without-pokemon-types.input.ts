import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypesUpdateWithoutPokemonTypesInput } from './types-update-without-pokemon-types.input';
import { Type } from 'class-transformer';
import { TypesCreateWithoutPokemonTypesInput } from './types-create-without-pokemon-types.input';
import { TypesWhereInput } from './types-where.input';

@InputType()
export class TypesUpsertWithoutPokemonTypesInput {

    @Field(() => TypesUpdateWithoutPokemonTypesInput, {nullable:false})
    @Type(() => TypesUpdateWithoutPokemonTypesInput)
    update!: TypesUpdateWithoutPokemonTypesInput;

    @Field(() => TypesCreateWithoutPokemonTypesInput, {nullable:false})
    @Type(() => TypesCreateWithoutPokemonTypesInput)
    create!: TypesCreateWithoutPokemonTypesInput;

    @Field(() => TypesWhereInput, {nullable:true})
    @Type(() => TypesWhereInput)
    where?: TypesWhereInput;
}
