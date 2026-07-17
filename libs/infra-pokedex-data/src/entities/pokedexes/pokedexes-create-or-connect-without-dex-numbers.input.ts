import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { PokedexesWhereUniqueInput } from './pokedexes-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { PokedexesCreateWithoutDexNumbersInput } from './pokedexes-create-without-dex-numbers.input';

@InputType()
export class PokedexesCreateOrConnectWithoutDexNumbersInput {

    @Field(() => PokedexesWhereUniqueInput, {nullable:false})
    @Type(() => PokedexesWhereUniqueInput)
    where!: Prisma.AtLeast<PokedexesWhereUniqueInput, 'id'>;

    @Field(() => PokedexesCreateWithoutDexNumbersInput, {nullable:false})
    @Type(() => PokedexesCreateWithoutDexNumbersInput)
    create!: Identity<PokedexesCreateWithoutDexNumbersInput>;
}
