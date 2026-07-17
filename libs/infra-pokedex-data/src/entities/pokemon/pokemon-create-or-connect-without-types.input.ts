import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonWhereUniqueInput } from './pokemon-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { PokemonCreateWithoutTypesInput } from './pokemon-create-without-types.input';

@InputType()
export class PokemonCreateOrConnectWithoutTypesInput {

    @Field(() => PokemonWhereUniqueInput, {nullable:false})
    @Type(() => PokemonWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonWhereUniqueInput, 'id'>;

    @Field(() => PokemonCreateWithoutTypesInput, {nullable:false})
    @Type(() => PokemonCreateWithoutTypesInput)
    create!: Identity<PokemonCreateWithoutTypesInput>;
}
