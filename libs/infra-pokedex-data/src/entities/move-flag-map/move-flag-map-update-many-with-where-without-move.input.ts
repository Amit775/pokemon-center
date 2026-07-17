import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MoveFlagMapScalarWhereInput } from './move-flag-map-scalar-where.input';
import { Type } from 'class-transformer';
import { MoveFlagMapUncheckedUpdateManyWithoutMoveInput } from './move-flag-map-unchecked-update-many-without-move.input';

@InputType()
export class MoveFlagMapUpdateManyWithWhereWithoutMoveInput {

    @Field(() => MoveFlagMapScalarWhereInput, {nullable:false})
    @Type(() => MoveFlagMapScalarWhereInput)
    where!: Identity<MoveFlagMapScalarWhereInput>;

    @Field(() => MoveFlagMapUncheckedUpdateManyWithoutMoveInput, {nullable:false})
    @Type(() => MoveFlagMapUncheckedUpdateManyWithoutMoveInput)
    data!: Identity<MoveFlagMapUncheckedUpdateManyWithoutMoveInput>;
}
