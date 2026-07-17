import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoveMetaCreateManyMetaAilmentInput } from './move-meta-create-many-meta-ailment.input';
import { Type } from 'class-transformer';

@InputType()
export class MoveMetaCreateManyMetaAilmentInputEnvelope {

    @Field(() => [MoveMetaCreateManyMetaAilmentInput], {nullable:false})
    @Type(() => MoveMetaCreateManyMetaAilmentInput)
    data!: Array<MoveMetaCreateManyMetaAilmentInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
