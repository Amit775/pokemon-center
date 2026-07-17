import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VersionGroupsWhereInput } from './version-groups-where.input';
import { Type } from 'class-transformer';
import { VersionGroupsUpdateWithoutPokedexVersionGroupsInput } from './version-groups-update-without-pokedex-version-groups.input';

@InputType()
export class VersionGroupsUpdateToOneWithWhereWithoutPokedexVersionGroupsInput {

    @Field(() => VersionGroupsWhereInput, {nullable:true})
    @Type(() => VersionGroupsWhereInput)
    where?: VersionGroupsWhereInput;

    @Field(() => VersionGroupsUpdateWithoutPokedexVersionGroupsInput, {nullable:false})
    @Type(() => VersionGroupsUpdateWithoutPokedexVersionGroupsInput)
    data!: VersionGroupsUpdateWithoutPokedexVersionGroupsInput;
}
