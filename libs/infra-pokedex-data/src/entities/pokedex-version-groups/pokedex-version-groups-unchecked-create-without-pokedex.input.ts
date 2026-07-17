import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class PokedexVersionGroupsUncheckedCreateWithoutPokedexInput {

    @Field(() => Int, {nullable:false})
    version_group_id!: number;
}
