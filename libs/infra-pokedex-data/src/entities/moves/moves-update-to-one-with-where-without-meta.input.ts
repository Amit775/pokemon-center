import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MovesWhereInput } from './moves-where.input';
import { Type } from 'class-transformer';
import { MovesUpdateWithoutMetaInput } from './moves-update-without-meta.input';

@InputType()
export class MovesUpdateToOneWithWhereWithoutMetaInput {

    @Field(() => MovesWhereInput, {nullable:true})
    @Type(() => MovesWhereInput)
    where?: MovesWhereInput;

    @Field(() => MovesUpdateWithoutMetaInput, {nullable:false})
    @Type(() => MovesUpdateWithoutMetaInput)
    data!: MovesUpdateWithoutMetaInput;
}
