import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonWhereInput } from './pokemon-where.input';
import { Type } from 'class-transformer';
import { PokemonUpdateWithoutGameIndicesInput } from './pokemon-update-without-game-indices.input';

@InputType()
export class PokemonUpdateToOneWithWhereWithoutGameIndicesInput {

    @Field(() => PokemonWhereInput, {nullable:true})
    @Type(() => PokemonWhereInput)
    where?: Identity<PokemonWhereInput>;

    @Field(() => PokemonUpdateWithoutGameIndicesInput, {nullable:false})
    @Type(() => PokemonUpdateWithoutGameIndicesInput)
    data!: Identity<PokemonUpdateWithoutGameIndicesInput>;
}
