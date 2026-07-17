import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonWhereUniqueInput } from './pokemon-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { PokemonCreateWithoutEncountersInput } from './pokemon-create-without-encounters.input';

@InputType()
export class PokemonCreateOrConnectWithoutEncountersInput {

    @Field(() => PokemonWhereUniqueInput, {nullable:false})
    @Type(() => PokemonWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonWhereUniqueInput, 'id'>;

    @Field(() => PokemonCreateWithoutEncountersInput, {nullable:false})
    @Type(() => PokemonCreateWithoutEncountersInput)
    create!: Identity<PokemonCreateWithoutEncountersInput>;
}
