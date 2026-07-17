import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoveMetaCreateManyMetaCategoryInput } from './move-meta-create-many-meta-category.input';
import { Type } from 'class-transformer';

@InputType()
export class MoveMetaCreateManyMetaCategoryInputEnvelope {

    @Field(() => [MoveMetaCreateManyMetaCategoryInput], {nullable:false})
    @Type(() => MoveMetaCreateManyMetaCategoryInput)
    data!: Array<MoveMetaCreateManyMetaCategoryInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
