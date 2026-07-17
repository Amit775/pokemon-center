import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { TypesUpdateWithoutPokemonTypesInput } from './types-update-without-pokemon-types.input';
import { Type } from 'class-transformer';
import { TypesCreateWithoutPokemonTypesInput } from './types-create-without-pokemon-types.input';
import { TypesWhereInput } from './types-where.input';

@InputType()
export class TypesUpsertWithoutPokemonTypesInput {

    @Field(() => TypesUpdateWithoutPokemonTypesInput, {nullable:false})
    @Type(() => TypesUpdateWithoutPokemonTypesInput)
    update!: Identity<TypesUpdateWithoutPokemonTypesInput>;

    @Field(() => TypesCreateWithoutPokemonTypesInput, {nullable:false})
    @Type(() => TypesCreateWithoutPokemonTypesInput)
    create!: Identity<TypesCreateWithoutPokemonTypesInput>;

    @Field(() => TypesWhereInput, {nullable:true})
    @Type(() => TypesWhereInput)
    where?: Identity<TypesWhereInput>;
}
