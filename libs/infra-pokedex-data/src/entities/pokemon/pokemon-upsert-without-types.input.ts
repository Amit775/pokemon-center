import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonUpdateWithoutTypesInput } from './pokemon-update-without-types.input';
import { Type } from 'class-transformer';
import { PokemonCreateWithoutTypesInput } from './pokemon-create-without-types.input';
import { PokemonWhereInput } from './pokemon-where.input';

@InputType()
export class PokemonUpsertWithoutTypesInput {

    @Field(() => PokemonUpdateWithoutTypesInput, {nullable:false})
    @Type(() => PokemonUpdateWithoutTypesInput)
    update!: Identity<PokemonUpdateWithoutTypesInput>;

    @Field(() => PokemonCreateWithoutTypesInput, {nullable:false})
    @Type(() => PokemonCreateWithoutTypesInput)
    create!: Identity<PokemonCreateWithoutTypesInput>;

    @Field(() => PokemonWhereInput, {nullable:true})
    @Type(() => PokemonWhereInput)
    where?: Identity<PokemonWhereInput>;
}
