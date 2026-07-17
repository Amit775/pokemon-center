import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonFormsWhereInput } from './pokemon-forms-where.input';
import { Type } from 'class-transformer';
import { PokemonFormsUpdateWithoutGenerationsInput } from './pokemon-forms-update-without-generations.input';

@InputType()
export class PokemonFormsUpdateToOneWithWhereWithoutGenerationsInput {

    @Field(() => PokemonFormsWhereInput, {nullable:true})
    @Type(() => PokemonFormsWhereInput)
    where?: Identity<PokemonFormsWhereInput>;

    @Field(() => PokemonFormsUpdateWithoutGenerationsInput, {nullable:false})
    @Type(() => PokemonFormsUpdateWithoutGenerationsInput)
    data!: Identity<PokemonFormsUpdateWithoutGenerationsInput>;
}
