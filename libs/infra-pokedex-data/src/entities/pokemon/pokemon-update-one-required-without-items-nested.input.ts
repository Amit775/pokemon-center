import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonCreateWithoutItemsInput } from './pokemon-create-without-items.input';
import { Type } from 'class-transformer';
import { PokemonCreateOrConnectWithoutItemsInput } from './pokemon-create-or-connect-without-items.input';
import { PokemonUpsertWithoutItemsInput } from './pokemon-upsert-without-items.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonWhereUniqueInput } from './pokemon-where-unique.input';
import { PokemonUpdateToOneWithWhereWithoutItemsInput } from './pokemon-update-to-one-with-where-without-items.input';

@InputType()
export class PokemonUpdateOneRequiredWithoutItemsNestedInput {

    @Field(() => PokemonCreateWithoutItemsInput, {nullable:true})
    @Type(() => PokemonCreateWithoutItemsInput)
    create?: Identity<PokemonCreateWithoutItemsInput>;

    @Field(() => PokemonCreateOrConnectWithoutItemsInput, {nullable:true})
    @Type(() => PokemonCreateOrConnectWithoutItemsInput)
    connectOrCreate?: Identity<PokemonCreateOrConnectWithoutItemsInput>;

    @Field(() => PokemonUpsertWithoutItemsInput, {nullable:true})
    @Type(() => PokemonUpsertWithoutItemsInput)
    upsert?: Identity<PokemonUpsertWithoutItemsInput>;

    @Field(() => PokemonWhereUniqueInput, {nullable:true})
    @Type(() => PokemonWhereUniqueInput)
    connect?: Prisma.AtLeast<PokemonWhereUniqueInput, 'id'>;

    @Field(() => PokemonUpdateToOneWithWhereWithoutItemsInput, {nullable:true})
    @Type(() => PokemonUpdateToOneWithWhereWithoutItemsInput)
    update?: Identity<PokemonUpdateToOneWithWhereWithoutItemsInput>;
}
