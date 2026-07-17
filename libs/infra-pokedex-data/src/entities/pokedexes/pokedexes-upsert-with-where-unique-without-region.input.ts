import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokedexesWhereUniqueInput } from './pokedexes-where-unique.input';
import { Type } from 'class-transformer';
import { PokedexesUpdateWithoutRegionInput } from './pokedexes-update-without-region.input';
import { PokedexesCreateWithoutRegionInput } from './pokedexes-create-without-region.input';

@InputType()
export class PokedexesUpsertWithWhereUniqueWithoutRegionInput {

    @Field(() => PokedexesWhereUniqueInput, {nullable:false})
    @Type(() => PokedexesWhereUniqueInput)
    where!: Prisma.AtLeast<PokedexesWhereUniqueInput, 'id'>;

    @Field(() => PokedexesUpdateWithoutRegionInput, {nullable:false})
    @Type(() => PokedexesUpdateWithoutRegionInput)
    update!: PokedexesUpdateWithoutRegionInput;

    @Field(() => PokedexesCreateWithoutRegionInput, {nullable:false})
    @Type(() => PokedexesCreateWithoutRegionInput)
    create!: PokedexesCreateWithoutRegionInput;
}
