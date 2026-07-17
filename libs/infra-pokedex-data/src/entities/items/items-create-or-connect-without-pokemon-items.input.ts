import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ItemsWhereUniqueInput } from './items-where-unique.input';
import { Type } from 'class-transformer';
import { ItemsCreateWithoutPokemonItemsInput } from './items-create-without-pokemon-items.input';

@InputType()
export class ItemsCreateOrConnectWithoutPokemonItemsInput {

    @Field(() => ItemsWhereUniqueInput, {nullable:false})
    @Type(() => ItemsWhereUniqueInput)
    where!: Prisma.AtLeast<ItemsWhereUniqueInput, 'id'>;

    @Field(() => ItemsCreateWithoutPokemonItemsInput, {nullable:false})
    @Type(() => ItemsCreateWithoutPokemonItemsInput)
    create!: ItemsCreateWithoutPokemonItemsInput;
}
