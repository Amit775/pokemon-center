import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { ItemsWhereUniqueInput } from './items-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { ItemsCreateWithoutPokemonItemsInput } from './items-create-without-pokemon-items.input';

@InputType()
export class ItemsCreateOrConnectWithoutPokemonItemsInput {

    @Field(() => ItemsWhereUniqueInput, {nullable:false})
    @Type(() => ItemsWhereUniqueInput)
    where!: Prisma.AtLeast<ItemsWhereUniqueInput, 'id'>;

    @Field(() => ItemsCreateWithoutPokemonItemsInput, {nullable:false})
    @Type(() => ItemsCreateWithoutPokemonItemsInput)
    create!: Identity<ItemsCreateWithoutPokemonItemsInput>;
}
