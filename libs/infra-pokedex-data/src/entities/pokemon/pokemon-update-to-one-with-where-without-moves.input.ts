import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonWhereInput } from './pokemon-where.input';
import { Type } from 'class-transformer';
import { PokemonUpdateWithoutMovesInput } from './pokemon-update-without-moves.input';

@InputType()
export class PokemonUpdateToOneWithWhereWithoutMovesInput {

    @Field(() => PokemonWhereInput, {nullable:true})
    @Type(() => PokemonWhereInput)
    where?: Identity<PokemonWhereInput>;

    @Field(() => PokemonUpdateWithoutMovesInput, {nullable:false})
    @Type(() => PokemonUpdateWithoutMovesInput)
    data!: Identity<PokemonUpdateWithoutMovesInput>;
}
