import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonWhereInput } from './pokemon-where.input';
import { Type } from 'class-transformer';
import { PokemonUpdateWithoutItemsInput } from './pokemon-update-without-items.input';

@InputType()
export class PokemonUpdateToOneWithWhereWithoutItemsInput {

    @Field(() => PokemonWhereInput, {nullable:true})
    @Type(() => PokemonWhereInput)
    where?: Identity<PokemonWhereInput>;

    @Field(() => PokemonUpdateWithoutItemsInput, {nullable:false})
    @Type(() => PokemonUpdateWithoutItemsInput)
    data!: Identity<PokemonUpdateWithoutItemsInput>;
}
