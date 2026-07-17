import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class MoveFlagMapScalarWhereInput {

    @Field(() => [MoveFlagMapScalarWhereInput], {nullable:true})
    AND?: Array<MoveFlagMapScalarWhereInput>;

    @Field(() => [MoveFlagMapScalarWhereInput], {nullable:true})
    OR?: Array<MoveFlagMapScalarWhereInput>;

    @Field(() => [MoveFlagMapScalarWhereInput], {nullable:true})
    NOT?: Array<MoveFlagMapScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    move_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    move_flag_id?: Identity<IntFilter>;
}
