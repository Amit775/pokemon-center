import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokedexesWhereInput } from './pokedexes-where.input';
import { Type } from 'class-transformer';
import { PokedexesUpdateWithoutVersionGroupsInput } from './pokedexes-update-without-version-groups.input';

@InputType()
export class PokedexesUpdateToOneWithWhereWithoutVersionGroupsInput {

    @Field(() => PokedexesWhereInput, {nullable:true})
    @Type(() => PokedexesWhereInput)
    where?: PokedexesWhereInput;

    @Field(() => PokedexesUpdateWithoutVersionGroupsInput, {nullable:false})
    @Type(() => PokedexesUpdateWithoutVersionGroupsInput)
    data!: PokedexesUpdateWithoutVersionGroupsInput;
}
