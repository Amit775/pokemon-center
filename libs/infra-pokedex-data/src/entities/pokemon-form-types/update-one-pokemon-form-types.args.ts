import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonFormTypesUpdateInput } from './pokemon-form-types-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { PokemonFormTypesWhereUniqueInput } from './pokemon-form-types-where-unique.input';

@ArgsType()
export class UpdateOnePokemonFormTypesArgs {

    @Field(() => PokemonFormTypesUpdateInput, {nullable:false})
    @Type(() => PokemonFormTypesUpdateInput)
    data!: PokemonFormTypesUpdateInput;

    @Field(() => PokemonFormTypesWhereUniqueInput, {nullable:false})
    @Type(() => PokemonFormTypesWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonFormTypesWhereUniqueInput, 'pokemon_form_id_type_id'>;
}
