import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokedexesCreateWithoutDexNumbersInput } from './pokedexes-create-without-dex-numbers.input';
import { Type } from 'class-transformer';
import { PokedexesCreateOrConnectWithoutDexNumbersInput } from './pokedexes-create-or-connect-without-dex-numbers.input';
import { PokedexesUpsertWithoutDexNumbersInput } from './pokedexes-upsert-without-dex-numbers.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokedexesWhereUniqueInput } from './pokedexes-where-unique.input';
import { PokedexesUpdateToOneWithWhereWithoutDexNumbersInput } from './pokedexes-update-to-one-with-where-without-dex-numbers.input';

@InputType()
export class PokedexesUpdateOneRequiredWithoutDexNumbersNestedInput {

    @Field(() => PokedexesCreateWithoutDexNumbersInput, {nullable:true})
    @Type(() => PokedexesCreateWithoutDexNumbersInput)
    create?: Identity<PokedexesCreateWithoutDexNumbersInput>;

    @Field(() => PokedexesCreateOrConnectWithoutDexNumbersInput, {nullable:true})
    @Type(() => PokedexesCreateOrConnectWithoutDexNumbersInput)
    connectOrCreate?: Identity<PokedexesCreateOrConnectWithoutDexNumbersInput>;

    @Field(() => PokedexesUpsertWithoutDexNumbersInput, {nullable:true})
    @Type(() => PokedexesUpsertWithoutDexNumbersInput)
    upsert?: Identity<PokedexesUpsertWithoutDexNumbersInput>;

    @Field(() => PokedexesWhereUniqueInput, {nullable:true})
    @Type(() => PokedexesWhereUniqueInput)
    connect?: Prisma.AtLeast<PokedexesWhereUniqueInput, 'id'>;

    @Field(() => PokedexesUpdateToOneWithWhereWithoutDexNumbersInput, {nullable:true})
    @Type(() => PokedexesUpdateToOneWithWhereWithoutDexNumbersInput)
    update?: Identity<PokedexesUpdateToOneWithWhereWithoutDexNumbersInput>;
}
