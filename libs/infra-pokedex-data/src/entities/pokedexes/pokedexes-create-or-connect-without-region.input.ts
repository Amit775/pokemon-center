import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { PokedexesWhereUniqueInput } from './pokedexes-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { PokedexesCreateWithoutRegionInput } from './pokedexes-create-without-region.input';

@InputType()
export class PokedexesCreateOrConnectWithoutRegionInput {

    @Field(() => PokedexesWhereUniqueInput, {nullable:false})
    @Type(() => PokedexesWhereUniqueInput)
    where!: Prisma.AtLeast<PokedexesWhereUniqueInput, 'id'>;

    @Field(() => PokedexesCreateWithoutRegionInput, {nullable:false})
    @Type(() => PokedexesCreateWithoutRegionInput)
    create!: Identity<PokedexesCreateWithoutRegionInput>;
}
