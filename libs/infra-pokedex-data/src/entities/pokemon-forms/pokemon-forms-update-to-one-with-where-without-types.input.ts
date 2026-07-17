import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonFormsWhereInput } from './pokemon-forms-where.input';
import { Type } from 'class-transformer';
import { PokemonFormsUpdateWithoutTypesInput } from './pokemon-forms-update-without-types.input';

@InputType()
export class PokemonFormsUpdateToOneWithWhereWithoutTypesInput {

    @Field(() => PokemonFormsWhereInput, {nullable:true})
    @Type(() => PokemonFormsWhereInput)
    where?: Identity<PokemonFormsWhereInput>;

    @Field(() => PokemonFormsUpdateWithoutTypesInput, {nullable:false})
    @Type(() => PokemonFormsUpdateWithoutTypesInput)
    data!: Identity<PokemonFormsUpdateWithoutTypesInput>;
}
