import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokedexesCreateWithoutDexNumbersInput } from './pokedexes-create-without-dex-numbers.input';
import { Type } from 'class-transformer';
import { PokedexesCreateOrConnectWithoutDexNumbersInput } from './pokedexes-create-or-connect-without-dex-numbers.input';
import { PokedexesUpsertWithoutDexNumbersInput } from './pokedexes-upsert-without-dex-numbers.input';
import { Prisma } from '@prisma/client';
import { PokedexesWhereUniqueInput } from './pokedexes-where-unique.input';
import { PokedexesUpdateToOneWithWhereWithoutDexNumbersInput } from './pokedexes-update-to-one-with-where-without-dex-numbers.input';

@InputType()
export class PokedexesUpdateOneRequiredWithoutDexNumbersNestedInput {

    @Field(() => PokedexesCreateWithoutDexNumbersInput, {nullable:true})
    @Type(() => PokedexesCreateWithoutDexNumbersInput)
    create?: PokedexesCreateWithoutDexNumbersInput;

    @Field(() => PokedexesCreateOrConnectWithoutDexNumbersInput, {nullable:true})
    @Type(() => PokedexesCreateOrConnectWithoutDexNumbersInput)
    connectOrCreate?: PokedexesCreateOrConnectWithoutDexNumbersInput;

    @Field(() => PokedexesUpsertWithoutDexNumbersInput, {nullable:true})
    @Type(() => PokedexesUpsertWithoutDexNumbersInput)
    upsert?: PokedexesUpsertWithoutDexNumbersInput;

    @Field(() => PokedexesWhereUniqueInput, {nullable:true})
    @Type(() => PokedexesWhereUniqueInput)
    connect?: Prisma.AtLeast<PokedexesWhereUniqueInput, 'id'>;

    @Field(() => PokedexesUpdateToOneWithWhereWithoutDexNumbersInput, {nullable:true})
    @Type(() => PokedexesUpdateToOneWithWhereWithoutDexNumbersInput)
    update?: PokedexesUpdateToOneWithWhereWithoutDexNumbersInput;
}
