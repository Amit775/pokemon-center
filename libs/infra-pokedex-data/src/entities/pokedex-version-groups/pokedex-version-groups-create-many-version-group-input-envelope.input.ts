import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokedexVersionGroupsCreateManyVersionGroupInput } from './pokedex-version-groups-create-many-version-group.input';
import { Type } from 'class-transformer';

@InputType()
export class PokedexVersionGroupsCreateManyVersionGroupInputEnvelope {

    @Field(() => [PokedexVersionGroupsCreateManyVersionGroupInput], {nullable:false})
    @Type(() => PokedexVersionGroupsCreateManyVersionGroupInput)
    data!: Array<PokedexVersionGroupsCreateManyVersionGroupInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
