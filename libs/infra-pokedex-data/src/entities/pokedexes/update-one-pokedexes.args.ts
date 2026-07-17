import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokedexesUpdateInput } from './pokedexes-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { PokedexesWhereUniqueInput } from './pokedexes-where-unique.input';

@ArgsType()
export class UpdateOnePokedexesArgs {

    @Field(() => PokedexesUpdateInput, {nullable:false})
    @Type(() => PokedexesUpdateInput)
    data!: PokedexesUpdateInput;

    @Field(() => PokedexesWhereUniqueInput, {nullable:false})
    @Type(() => PokedexesWhereUniqueInput)
    where!: Prisma.AtLeast<PokedexesWhereUniqueInput, 'id'>;
}
