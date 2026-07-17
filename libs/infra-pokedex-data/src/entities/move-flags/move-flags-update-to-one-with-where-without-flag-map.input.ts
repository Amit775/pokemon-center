import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoveFlagsWhereInput } from './move-flags-where.input';
import { Type } from 'class-transformer';
import { MoveFlagsUpdateWithoutFlagMapInput } from './move-flags-update-without-flag-map.input';

@InputType()
export class MoveFlagsUpdateToOneWithWhereWithoutFlagMapInput {

    @Field(() => MoveFlagsWhereInput, {nullable:true})
    @Type(() => MoveFlagsWhereInput)
    where?: MoveFlagsWhereInput;

    @Field(() => MoveFlagsUpdateWithoutFlagMapInput, {nullable:false})
    @Type(() => MoveFlagsUpdateWithoutFlagMapInput)
    data!: MoveFlagsUpdateWithoutFlagMapInput;
}
