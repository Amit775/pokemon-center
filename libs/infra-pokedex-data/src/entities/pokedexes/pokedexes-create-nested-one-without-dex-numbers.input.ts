import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokedexesCreateWithoutDexNumbersInput } from './pokedexes-create-without-dex-numbers.input';
import { Type } from 'class-transformer';
import { PokedexesCreateOrConnectWithoutDexNumbersInput } from './pokedexes-create-or-connect-without-dex-numbers.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokedexesWhereUniqueInput } from './pokedexes-where-unique.input';

@InputType()
export class PokedexesCreateNestedOneWithoutDexNumbersInput {

    @Field(() => PokedexesCreateWithoutDexNumbersInput, {nullable:true})
    @Type(() => PokedexesCreateWithoutDexNumbersInput)
    create?: Identity<PokedexesCreateWithoutDexNumbersInput>;

    @Field(() => PokedexesCreateOrConnectWithoutDexNumbersInput, {nullable:true})
    @Type(() => PokedexesCreateOrConnectWithoutDexNumbersInput)
    connectOrCreate?: Identity<PokedexesCreateOrConnectWithoutDexNumbersInput>;

    @Field(() => PokedexesWhereUniqueInput, {nullable:true})
    @Type(() => PokedexesWhereUniqueInput)
    connect?: Prisma.AtLeast<PokedexesWhereUniqueInput, 'id'>;
}
