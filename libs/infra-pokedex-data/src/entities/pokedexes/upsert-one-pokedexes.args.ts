import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokedexesWhereUniqueInput } from './pokedexes-where-unique.input';
import { Type } from 'class-transformer';
import { PokedexesCreateInput } from './pokedexes-create.input';
import { PokedexesUpdateInput } from './pokedexes-update.input';

@ArgsType()
export class UpsertOnePokedexesArgs {

    @Field(() => PokedexesWhereUniqueInput, {nullable:false})
    @Type(() => PokedexesWhereUniqueInput)
    where!: Prisma.AtLeast<PokedexesWhereUniqueInput, 'id'>;

    @Field(() => PokedexesCreateInput, {nullable:false})
    @Type(() => PokedexesCreateInput)
    create!: PokedexesCreateInput;

    @Field(() => PokedexesUpdateInput, {nullable:false})
    @Type(() => PokedexesUpdateInput)
    update!: PokedexesUpdateInput;
}
