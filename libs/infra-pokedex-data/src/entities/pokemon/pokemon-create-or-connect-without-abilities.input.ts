import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonWhereUniqueInput } from './pokemon-where-unique.input';
import { Type } from 'class-transformer';
import { PokemonCreateWithoutAbilitiesInput } from './pokemon-create-without-abilities.input';

@InputType()
export class PokemonCreateOrConnectWithoutAbilitiesInput {

    @Field(() => PokemonWhereUniqueInput, {nullable:false})
    @Type(() => PokemonWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonWhereUniqueInput, 'id'>;

    @Field(() => PokemonCreateWithoutAbilitiesInput, {nullable:false})
    @Type(() => PokemonCreateWithoutAbilitiesInput)
    create!: PokemonCreateWithoutAbilitiesInput;
}
