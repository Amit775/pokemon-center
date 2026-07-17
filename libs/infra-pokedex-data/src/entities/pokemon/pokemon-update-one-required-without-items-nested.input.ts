import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonCreateWithoutItemsInput } from './pokemon-create-without-items.input';
import { Type } from 'class-transformer';
import { PokemonCreateOrConnectWithoutItemsInput } from './pokemon-create-or-connect-without-items.input';
import { PokemonUpsertWithoutItemsInput } from './pokemon-upsert-without-items.input';
import { Prisma } from '@prisma/client';
import { PokemonWhereUniqueInput } from './pokemon-where-unique.input';
import { PokemonUpdateToOneWithWhereWithoutItemsInput } from './pokemon-update-to-one-with-where-without-items.input';

@InputType()
export class PokemonUpdateOneRequiredWithoutItemsNestedInput {

    @Field(() => PokemonCreateWithoutItemsInput, {nullable:true})
    @Type(() => PokemonCreateWithoutItemsInput)
    create?: PokemonCreateWithoutItemsInput;

    @Field(() => PokemonCreateOrConnectWithoutItemsInput, {nullable:true})
    @Type(() => PokemonCreateOrConnectWithoutItemsInput)
    connectOrCreate?: PokemonCreateOrConnectWithoutItemsInput;

    @Field(() => PokemonUpsertWithoutItemsInput, {nullable:true})
    @Type(() => PokemonUpsertWithoutItemsInput)
    upsert?: PokemonUpsertWithoutItemsInput;

    @Field(() => PokemonWhereUniqueInput, {nullable:true})
    @Type(() => PokemonWhereUniqueInput)
    connect?: Prisma.AtLeast<PokemonWhereUniqueInput, 'id'>;

    @Field(() => PokemonUpdateToOneWithWhereWithoutItemsInput, {nullable:true})
    @Type(() => PokemonUpdateToOneWithWhereWithoutItemsInput)
    update?: PokemonUpdateToOneWithWhereWithoutItemsInput;
}
