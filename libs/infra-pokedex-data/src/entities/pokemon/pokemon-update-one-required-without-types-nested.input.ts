import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonCreateWithoutTypesInput } from './pokemon-create-without-types.input';
import { Type } from 'class-transformer';
import { PokemonCreateOrConnectWithoutTypesInput } from './pokemon-create-or-connect-without-types.input';
import { PokemonUpsertWithoutTypesInput } from './pokemon-upsert-without-types.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonWhereUniqueInput } from './pokemon-where-unique.input';
import { PokemonUpdateToOneWithWhereWithoutTypesInput } from './pokemon-update-to-one-with-where-without-types.input';

@InputType()
export class PokemonUpdateOneRequiredWithoutTypesNestedInput {

    @Field(() => PokemonCreateWithoutTypesInput, {nullable:true})
    @Type(() => PokemonCreateWithoutTypesInput)
    create?: Identity<PokemonCreateWithoutTypesInput>;

    @Field(() => PokemonCreateOrConnectWithoutTypesInput, {nullable:true})
    @Type(() => PokemonCreateOrConnectWithoutTypesInput)
    connectOrCreate?: Identity<PokemonCreateOrConnectWithoutTypesInput>;

    @Field(() => PokemonUpsertWithoutTypesInput, {nullable:true})
    @Type(() => PokemonUpsertWithoutTypesInput)
    upsert?: Identity<PokemonUpsertWithoutTypesInput>;

    @Field(() => PokemonWhereUniqueInput, {nullable:true})
    @Type(() => PokemonWhereUniqueInput)
    connect?: Prisma.AtLeast<PokemonWhereUniqueInput, 'id'>;

    @Field(() => PokemonUpdateToOneWithWhereWithoutTypesInput, {nullable:true})
    @Type(() => PokemonUpdateToOneWithWhereWithoutTypesInput)
    update?: Identity<PokemonUpdateToOneWithWhereWithoutTypesInput>;
}
