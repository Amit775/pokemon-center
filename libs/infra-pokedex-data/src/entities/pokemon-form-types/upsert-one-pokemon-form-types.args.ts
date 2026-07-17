import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonFormTypesWhereUniqueInput } from './pokemon-form-types-where-unique.input';
import { Type } from 'class-transformer';
import { PokemonFormTypesCreateInput } from './pokemon-form-types-create.input';
import { PokemonFormTypesUpdateInput } from './pokemon-form-types-update.input';

@ArgsType()
export class UpsertOnePokemonFormTypesArgs {

    @Field(() => PokemonFormTypesWhereUniqueInput, {nullable:false})
    @Type(() => PokemonFormTypesWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonFormTypesWhereUniqueInput, 'pokemon_form_id_type_id'>;

    @Field(() => PokemonFormTypesCreateInput, {nullable:false})
    @Type(() => PokemonFormTypesCreateInput)
    create!: PokemonFormTypesCreateInput;

    @Field(() => PokemonFormTypesUpdateInput, {nullable:false})
    @Type(() => PokemonFormTypesUpdateInput)
    update!: PokemonFormTypesUpdateInput;
}
