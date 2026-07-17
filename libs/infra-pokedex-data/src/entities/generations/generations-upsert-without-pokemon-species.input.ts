import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { GenerationsUpdateWithoutPokemonSpeciesInput } from './generations-update-without-pokemon-species.input';
import { Type } from 'class-transformer';
import { GenerationsCreateWithoutPokemonSpeciesInput } from './generations-create-without-pokemon-species.input';
import { GenerationsWhereInput } from './generations-where.input';

@InputType()
export class GenerationsUpsertWithoutPokemonSpeciesInput {

    @Field(() => GenerationsUpdateWithoutPokemonSpeciesInput, {nullable:false})
    @Type(() => GenerationsUpdateWithoutPokemonSpeciesInput)
    update!: Identity<GenerationsUpdateWithoutPokemonSpeciesInput>;

    @Field(() => GenerationsCreateWithoutPokemonSpeciesInput, {nullable:false})
    @Type(() => GenerationsCreateWithoutPokemonSpeciesInput)
    create!: Identity<GenerationsCreateWithoutPokemonSpeciesInput>;

    @Field(() => GenerationsWhereInput, {nullable:true})
    @Type(() => GenerationsWhereInput)
    where?: Identity<GenerationsWhereInput>;
}
