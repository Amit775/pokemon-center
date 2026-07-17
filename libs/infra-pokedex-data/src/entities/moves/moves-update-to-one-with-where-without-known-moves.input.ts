import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MovesWhereInput } from './moves-where.input';
import { Type } from 'class-transformer';
import { MovesUpdateWithoutKnownMovesInput } from './moves-update-without-known-moves.input';

@InputType()
export class MovesUpdateToOneWithWhereWithoutKnownMovesInput {

    @Field(() => MovesWhereInput, {nullable:true})
    @Type(() => MovesWhereInput)
    where?: Identity<MovesWhereInput>;

    @Field(() => MovesUpdateWithoutKnownMovesInput, {nullable:false})
    @Type(() => MovesUpdateWithoutKnownMovesInput)
    data!: Identity<MovesUpdateWithoutKnownMovesInput>;
}
