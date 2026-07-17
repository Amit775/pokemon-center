import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonUpdateWithoutItemsInput } from './pokemon-update-without-items.input';
import { Type } from 'class-transformer';
import { PokemonCreateWithoutItemsInput } from './pokemon-create-without-items.input';
import { PokemonWhereInput } from './pokemon-where.input';

@InputType()
export class PokemonUpsertWithoutItemsInput {

    @Field(() => PokemonUpdateWithoutItemsInput, {nullable:false})
    @Type(() => PokemonUpdateWithoutItemsInput)
    update!: Identity<PokemonUpdateWithoutItemsInput>;

    @Field(() => PokemonCreateWithoutItemsInput, {nullable:false})
    @Type(() => PokemonCreateWithoutItemsInput)
    create!: Identity<PokemonCreateWithoutItemsInput>;

    @Field(() => PokemonWhereInput, {nullable:true})
    @Type(() => PokemonWhereInput)
    where?: Identity<PokemonWhereInput>;
}
