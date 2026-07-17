import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VersionGroupPokemonMoveMethodsCreateManyInput } from './version-group-pokemon-move-methods-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyVersionGroupPokemonMoveMethodsArgs {

    @Field(() => [VersionGroupPokemonMoveMethodsCreateManyInput], {nullable:false})
    @Type(() => VersionGroupPokemonMoveMethodsCreateManyInput)
    data!: Array<VersionGroupPokemonMoveMethodsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
