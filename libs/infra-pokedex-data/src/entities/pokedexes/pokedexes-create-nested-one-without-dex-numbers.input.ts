import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokedexesCreateWithoutDexNumbersInput } from './pokedexes-create-without-dex-numbers.input';
import { Type } from 'class-transformer';
import { PokedexesCreateOrConnectWithoutDexNumbersInput } from './pokedexes-create-or-connect-without-dex-numbers.input';
import { Prisma } from '@prisma/client';
import { PokedexesWhereUniqueInput } from './pokedexes-where-unique.input';

@InputType()
export class PokedexesCreateNestedOneWithoutDexNumbersInput {

    @Field(() => PokedexesCreateWithoutDexNumbersInput, {nullable:true})
    @Type(() => PokedexesCreateWithoutDexNumbersInput)
    create?: PokedexesCreateWithoutDexNumbersInput;

    @Field(() => PokedexesCreateOrConnectWithoutDexNumbersInput, {nullable:true})
    @Type(() => PokedexesCreateOrConnectWithoutDexNumbersInput)
    connectOrCreate?: PokedexesCreateOrConnectWithoutDexNumbersInput;

    @Field(() => PokedexesWhereUniqueInput, {nullable:true})
    @Type(() => PokedexesWhereUniqueInput)
    connect?: Prisma.AtLeast<PokedexesWhereUniqueInput, 'id'>;
}
