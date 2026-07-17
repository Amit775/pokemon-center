import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemsCreateWithoutPokemonItemsInput } from './items-create-without-pokemon-items.input';
import { Type } from 'class-transformer';
import { ItemsCreateOrConnectWithoutPokemonItemsInput } from './items-create-or-connect-without-pokemon-items.input';
import { ItemsUpsertWithoutPokemonItemsInput } from './items-upsert-without-pokemon-items.input';
import { Prisma } from '@pokemon-center/prisma';
import { ItemsWhereUniqueInput } from './items-where-unique.input';
import { ItemsUpdateToOneWithWhereWithoutPokemonItemsInput } from './items-update-to-one-with-where-without-pokemon-items.input';

@InputType()
export class ItemsUpdateOneRequiredWithoutPokemonItemsNestedInput {

    @Field(() => ItemsCreateWithoutPokemonItemsInput, {nullable:true})
    @Type(() => ItemsCreateWithoutPokemonItemsInput)
    create?: Identity<ItemsCreateWithoutPokemonItemsInput>;

    @Field(() => ItemsCreateOrConnectWithoutPokemonItemsInput, {nullable:true})
    @Type(() => ItemsCreateOrConnectWithoutPokemonItemsInput)
    connectOrCreate?: Identity<ItemsCreateOrConnectWithoutPokemonItemsInput>;

    @Field(() => ItemsUpsertWithoutPokemonItemsInput, {nullable:true})
    @Type(() => ItemsUpsertWithoutPokemonItemsInput)
    upsert?: Identity<ItemsUpsertWithoutPokemonItemsInput>;

    @Field(() => ItemsWhereUniqueInput, {nullable:true})
    @Type(() => ItemsWhereUniqueInput)
    connect?: Prisma.AtLeast<ItemsWhereUniqueInput, 'id'>;

    @Field(() => ItemsUpdateToOneWithWhereWithoutPokemonItemsInput, {nullable:true})
    @Type(() => ItemsUpdateToOneWithWhereWithoutPokemonItemsInput)
    update?: Identity<ItemsUpdateToOneWithWhereWithoutPokemonItemsInput>;
}
