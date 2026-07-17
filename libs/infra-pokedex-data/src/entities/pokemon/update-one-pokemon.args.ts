import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonUpdateInput } from './pokemon-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonWhereUniqueInput } from './pokemon-where-unique.input';

@ArgsType()
export class UpdateOnePokemonArgs {

    @Field(() => PokemonUpdateInput, {nullable:false})
    @Type(() => PokemonUpdateInput)
    data!: Identity<PokemonUpdateInput>;

    @Field(() => PokemonWhereUniqueInput, {nullable:false})
    @Type(() => PokemonWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonWhereUniqueInput, 'id'>;
}
