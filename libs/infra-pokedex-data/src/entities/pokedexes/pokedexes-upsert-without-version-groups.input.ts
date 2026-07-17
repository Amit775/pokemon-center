import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokedexesUpdateWithoutVersionGroupsInput } from './pokedexes-update-without-version-groups.input';
import { Type } from 'class-transformer';
import { PokedexesCreateWithoutVersionGroupsInput } from './pokedexes-create-without-version-groups.input';
import { PokedexesWhereInput } from './pokedexes-where.input';

@InputType()
export class PokedexesUpsertWithoutVersionGroupsInput {

    @Field(() => PokedexesUpdateWithoutVersionGroupsInput, {nullable:false})
    @Type(() => PokedexesUpdateWithoutVersionGroupsInput)
    update!: PokedexesUpdateWithoutVersionGroupsInput;

    @Field(() => PokedexesCreateWithoutVersionGroupsInput, {nullable:false})
    @Type(() => PokedexesCreateWithoutVersionGroupsInput)
    create!: PokedexesCreateWithoutVersionGroupsInput;

    @Field(() => PokedexesWhereInput, {nullable:true})
    @Type(() => PokedexesWhereInput)
    where?: PokedexesWhereInput;
}
