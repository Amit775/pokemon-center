import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonWhereUniqueInput } from './pokemon-where-unique.input';
import { Type } from 'class-transformer';
import { PokemonCreateWithoutGameIndicesInput } from './pokemon-create-without-game-indices.input';

@InputType()
export class PokemonCreateOrConnectWithoutGameIndicesInput {

    @Field(() => PokemonWhereUniqueInput, {nullable:false})
    @Type(() => PokemonWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonWhereUniqueInput, 'id'>;

    @Field(() => PokemonCreateWithoutGameIndicesInput, {nullable:false})
    @Type(() => PokemonCreateWithoutGameIndicesInput)
    create!: PokemonCreateWithoutGameIndicesInput;
}
