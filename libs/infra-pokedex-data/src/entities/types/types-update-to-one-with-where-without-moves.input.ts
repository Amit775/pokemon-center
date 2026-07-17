import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { TypesWhereInput } from './types-where.input';
import { Type } from 'class-transformer';
import { TypesUpdateWithoutMovesInput } from './types-update-without-moves.input';

@InputType()
export class TypesUpdateToOneWithWhereWithoutMovesInput {

    @Field(() => TypesWhereInput, {nullable:true})
    @Type(() => TypesWhereInput)
    where?: Identity<TypesWhereInput>;

    @Field(() => TypesUpdateWithoutMovesInput, {nullable:false})
    @Type(() => TypesUpdateWithoutMovesInput)
    data!: Identity<TypesUpdateWithoutMovesInput>;
}
