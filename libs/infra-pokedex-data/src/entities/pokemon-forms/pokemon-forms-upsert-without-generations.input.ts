import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonFormsUpdateWithoutGenerationsInput } from './pokemon-forms-update-without-generations.input';
import { Type } from 'class-transformer';
import { PokemonFormsCreateWithoutGenerationsInput } from './pokemon-forms-create-without-generations.input';
import { PokemonFormsWhereInput } from './pokemon-forms-where.input';

@InputType()
export class PokemonFormsUpsertWithoutGenerationsInput {

    @Field(() => PokemonFormsUpdateWithoutGenerationsInput, {nullable:false})
    @Type(() => PokemonFormsUpdateWithoutGenerationsInput)
    update!: Identity<PokemonFormsUpdateWithoutGenerationsInput>;

    @Field(() => PokemonFormsCreateWithoutGenerationsInput, {nullable:false})
    @Type(() => PokemonFormsCreateWithoutGenerationsInput)
    create!: Identity<PokemonFormsCreateWithoutGenerationsInput>;

    @Field(() => PokemonFormsWhereInput, {nullable:true})
    @Type(() => PokemonFormsWhereInput)
    where?: Identity<PokemonFormsWhereInput>;
}
