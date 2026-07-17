import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonFormsWhereInput } from './pokemon-forms-where.input';
import { Type } from 'class-transformer';
import { PokemonFormsUpdateWithoutGenerationsInput } from './pokemon-forms-update-without-generations.input';

@InputType()
export class PokemonFormsUpdateToOneWithWhereWithoutGenerationsInput {

    @Field(() => PokemonFormsWhereInput, {nullable:true})
    @Type(() => PokemonFormsWhereInput)
    where?: PokemonFormsWhereInput;

    @Field(() => PokemonFormsUpdateWithoutGenerationsInput, {nullable:false})
    @Type(() => PokemonFormsUpdateWithoutGenerationsInput)
    data!: PokemonFormsUpdateWithoutGenerationsInput;
}
