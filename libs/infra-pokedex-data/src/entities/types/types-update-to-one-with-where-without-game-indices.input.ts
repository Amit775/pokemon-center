import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { TypesWhereInput } from './types-where.input';
import { Type } from 'class-transformer';
import { TypesUpdateWithoutGameIndicesInput } from './types-update-without-game-indices.input';

@InputType()
export class TypesUpdateToOneWithWhereWithoutGameIndicesInput {

    @Field(() => TypesWhereInput, {nullable:true})
    @Type(() => TypesWhereInput)
    where?: Identity<TypesWhereInput>;

    @Field(() => TypesUpdateWithoutGameIndicesInput, {nullable:false})
    @Type(() => TypesUpdateWithoutGameIndicesInput)
    data!: Identity<TypesUpdateWithoutGameIndicesInput>;
}
