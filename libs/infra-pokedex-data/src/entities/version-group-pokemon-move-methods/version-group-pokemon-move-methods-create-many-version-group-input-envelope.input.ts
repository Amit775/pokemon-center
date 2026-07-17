import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VersionGroupPokemonMoveMethodsCreateManyVersionGroupInput } from './version-group-pokemon-move-methods-create-many-version-group.input';
import { Type } from 'class-transformer';

@InputType()
export class VersionGroupPokemonMoveMethodsCreateManyVersionGroupInputEnvelope {

    @Field(() => [VersionGroupPokemonMoveMethodsCreateManyVersionGroupInput], {nullable:false})
    @Type(() => VersionGroupPokemonMoveMethodsCreateManyVersionGroupInput)
    data!: Array<VersionGroupPokemonMoveMethodsCreateManyVersionGroupInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
