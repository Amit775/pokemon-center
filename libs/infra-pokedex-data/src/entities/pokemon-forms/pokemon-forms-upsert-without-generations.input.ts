import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonFormsUpdateWithoutGenerationsInput } from './pokemon-forms-update-without-generations.input';
import { Type } from 'class-transformer';
import { PokemonFormsCreateWithoutGenerationsInput } from './pokemon-forms-create-without-generations.input';
import { PokemonFormsWhereInput } from './pokemon-forms-where.input';

@InputType()
export class PokemonFormsUpsertWithoutGenerationsInput {

    @Field(() => PokemonFormsUpdateWithoutGenerationsInput, {nullable:false})
    @Type(() => PokemonFormsUpdateWithoutGenerationsInput)
    update!: PokemonFormsUpdateWithoutGenerationsInput;

    @Field(() => PokemonFormsCreateWithoutGenerationsInput, {nullable:false})
    @Type(() => PokemonFormsCreateWithoutGenerationsInput)
    create!: PokemonFormsCreateWithoutGenerationsInput;

    @Field(() => PokemonFormsWhereInput, {nullable:true})
    @Type(() => PokemonFormsWhereInput)
    where?: PokemonFormsWhereInput;
}
