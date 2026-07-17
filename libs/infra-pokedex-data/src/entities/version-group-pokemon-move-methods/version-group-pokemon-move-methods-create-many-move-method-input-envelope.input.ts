import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VersionGroupPokemonMoveMethodsCreateManyMoveMethodInput } from './version-group-pokemon-move-methods-create-many-move-method.input';
import { Type } from 'class-transformer';

@InputType()
export class VersionGroupPokemonMoveMethodsCreateManyMoveMethodInputEnvelope {

    @Field(() => [VersionGroupPokemonMoveMethodsCreateManyMoveMethodInput], {nullable:false})
    @Type(() => VersionGroupPokemonMoveMethodsCreateManyMoveMethodInput)
    data!: Array<VersionGroupPokemonMoveMethodsCreateManyMoveMethodInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
