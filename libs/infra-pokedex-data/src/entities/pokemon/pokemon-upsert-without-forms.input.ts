import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonUpdateWithoutFormsInput } from './pokemon-update-without-forms.input';
import { Type } from 'class-transformer';
import { PokemonCreateWithoutFormsInput } from './pokemon-create-without-forms.input';
import { PokemonWhereInput } from './pokemon-where.input';

@InputType()
export class PokemonUpsertWithoutFormsInput {

    @Field(() => PokemonUpdateWithoutFormsInput, {nullable:false})
    @Type(() => PokemonUpdateWithoutFormsInput)
    update!: PokemonUpdateWithoutFormsInput;

    @Field(() => PokemonCreateWithoutFormsInput, {nullable:false})
    @Type(() => PokemonCreateWithoutFormsInput)
    create!: PokemonCreateWithoutFormsInput;

    @Field(() => PokemonWhereInput, {nullable:true})
    @Type(() => PokemonWhereInput)
    where?: PokemonWhereInput;
}
