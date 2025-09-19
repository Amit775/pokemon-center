import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveMetaAilmentOrderByWithRelationInput } from "../../../inputs/MoveMetaAilmentOrderByWithRelationInput";
import { MoveMetaAilmentWhereInput } from "../../../inputs/MoveMetaAilmentWhereInput";
import { MoveMetaAilmentWhereUniqueInput } from "../../../inputs/MoveMetaAilmentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateMoveMetaAilmentArgs {
  @TypeGraphQL.Field(_type => MoveMetaAilmentWhereInput, {
    nullable: true
  })
  where?: MoveMetaAilmentWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaAilmentOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: MoveMetaAilmentOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => MoveMetaAilmentWhereUniqueInput, {
    nullable: true
  })
  cursor?: MoveMetaAilmentWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
