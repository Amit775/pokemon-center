import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonUpdateInput } from './pokemon-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { PokemonWhereUniqueInput } from './pokemon-where-unique.input';

@ArgsType()
export class UpdateOnePokemonArgs {

    @Field(() => PokemonUpdateInput, {nullable:false})
    @Type(() => PokemonUpdateInput)
    data!: PokemonUpdateInput;

    @Field(() => PokemonWhereUniqueInput, {nullable:false})
    @Type(() => PokemonWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonWhereUniqueInput, 'id'>;
}
