import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonWhereUniqueInput } from './pokemon-where-unique.input';
import { Type } from 'class-transformer';
import { PokemonCreateWithoutItemsInput } from './pokemon-create-without-items.input';

@InputType()
export class PokemonCreateOrConnectWithoutItemsInput {

    @Field(() => PokemonWhereUniqueInput, {nullable:false})
    @Type(() => PokemonWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonWhereUniqueInput, 'id'>;

    @Field(() => PokemonCreateWithoutItemsInput, {nullable:false})
    @Type(() => PokemonCreateWithoutItemsInput)
    create!: PokemonCreateWithoutItemsInput;
}
