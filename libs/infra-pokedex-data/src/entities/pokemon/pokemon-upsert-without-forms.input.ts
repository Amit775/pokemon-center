import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonUpdateWithoutFormsInput } from './pokemon-update-without-forms.input';
import { Type } from 'class-transformer';
import { PokemonCreateWithoutFormsInput } from './pokemon-create-without-forms.input';
import { PokemonWhereInput } from './pokemon-where.input';

@InputType()
export class PokemonUpsertWithoutFormsInput {

    @Field(() => PokemonUpdateWithoutFormsInput, {nullable:false})
    @Type(() => PokemonUpdateWithoutFormsInput)
    update!: Identity<PokemonUpdateWithoutFormsInput>;

    @Field(() => PokemonCreateWithoutFormsInput, {nullable:false})
    @Type(() => PokemonCreateWithoutFormsInput)
    create!: Identity<PokemonCreateWithoutFormsInput>;

    @Field(() => PokemonWhereInput, {nullable:true})
    @Type(() => PokemonWhereInput)
    where?: Identity<PokemonWhereInput>;
}
