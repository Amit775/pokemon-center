import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemsCreateWithoutPokemonItemsInput } from './items-create-without-pokemon-items.input';
import { Type } from 'class-transformer';
import { ItemsCreateOrConnectWithoutPokemonItemsInput } from './items-create-or-connect-without-pokemon-items.input';
import { Prisma } from '@pokemon-center/prisma';
import { ItemsWhereUniqueInput } from './items-where-unique.input';

@InputType()
export class ItemsCreateNestedOneWithoutPokemonItemsInput {

    @Field(() => ItemsCreateWithoutPokemonItemsInput, {nullable:true})
    @Type(() => ItemsCreateWithoutPokemonItemsInput)
    create?: Identity<ItemsCreateWithoutPokemonItemsInput>;

    @Field(() => ItemsCreateOrConnectWithoutPokemonItemsInput, {nullable:true})
    @Type(() => ItemsCreateOrConnectWithoutPokemonItemsInput)
    connectOrCreate?: Identity<ItemsCreateOrConnectWithoutPokemonItemsInput>;

    @Field(() => ItemsWhereUniqueInput, {nullable:true})
    @Type(() => ItemsWhereUniqueInput)
    connect?: Prisma.AtLeast<ItemsWhereUniqueInput, 'id'>;
}
