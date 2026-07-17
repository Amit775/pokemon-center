import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class PokedexVersionGroupsUncheckedUpdateManyWithoutPokedexInput {

    @Field(() => Int, {nullable:true})
    version_group_id?: number;
}
