import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonFormsUpdateWithoutTypesInput } from './pokemon-forms-update-without-types.input';
import { Type } from 'class-transformer';
import { PokemonFormsCreateWithoutTypesInput } from './pokemon-forms-create-without-types.input';
import { PokemonFormsWhereInput } from './pokemon-forms-where.input';

@InputType()
export class PokemonFormsUpsertWithoutTypesInput {

    @Field(() => PokemonFormsUpdateWithoutTypesInput, {nullable:false})
    @Type(() => PokemonFormsUpdateWithoutTypesInput)
    update!: Identity<PokemonFormsUpdateWithoutTypesInput>;

    @Field(() => PokemonFormsCreateWithoutTypesInput, {nullable:false})
    @Type(() => PokemonFormsCreateWithoutTypesInput)
    create!: Identity<PokemonFormsCreateWithoutTypesInput>;

    @Field(() => PokemonFormsWhereInput, {nullable:true})
    @Type(() => PokemonFormsWhereInput)
    where?: Identity<PokemonFormsWhereInput>;
}
