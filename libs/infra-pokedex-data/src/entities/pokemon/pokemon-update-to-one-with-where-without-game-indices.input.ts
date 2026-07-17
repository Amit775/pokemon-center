import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonWhereInput } from './pokemon-where.input';
import { Type } from 'class-transformer';
import { PokemonUpdateWithoutGameIndicesInput } from './pokemon-update-without-game-indices.input';

@InputType()
export class PokemonUpdateToOneWithWhereWithoutGameIndicesInput {

    @Field(() => PokemonWhereInput, {nullable:true})
    @Type(() => PokemonWhereInput)
    where?: PokemonWhereInput;

    @Field(() => PokemonUpdateWithoutGameIndicesInput, {nullable:false})
    @Type(() => PokemonUpdateWithoutGameIndicesInput)
    data!: PokemonUpdateWithoutGameIndicesInput;
}
