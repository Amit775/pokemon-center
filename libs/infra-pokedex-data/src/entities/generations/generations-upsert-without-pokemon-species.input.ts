import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenerationsUpdateWithoutPokemonSpeciesInput } from './generations-update-without-pokemon-species.input';
import { Type } from 'class-transformer';
import { GenerationsCreateWithoutPokemonSpeciesInput } from './generations-create-without-pokemon-species.input';
import { GenerationsWhereInput } from './generations-where.input';

@InputType()
export class GenerationsUpsertWithoutPokemonSpeciesInput {

    @Field(() => GenerationsUpdateWithoutPokemonSpeciesInput, {nullable:false})
    @Type(() => GenerationsUpdateWithoutPokemonSpeciesInput)
    update!: GenerationsUpdateWithoutPokemonSpeciesInput;

    @Field(() => GenerationsCreateWithoutPokemonSpeciesInput, {nullable:false})
    @Type(() => GenerationsCreateWithoutPokemonSpeciesInput)
    create!: GenerationsCreateWithoutPokemonSpeciesInput;

    @Field(() => GenerationsWhereInput, {nullable:true})
    @Type(() => GenerationsWhereInput)
    where?: GenerationsWhereInput;
}
