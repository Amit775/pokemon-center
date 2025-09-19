import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveMetaOrderByWithRelationInput } from "../../../inputs/MoveMetaOrderByWithRelationInput";
import { MoveMetaWhereInput } from "../../../inputs/MoveMetaWhereInput";
import { MoveMetaWhereUniqueInput } from "../../../inputs/MoveMetaWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateMoveMetaArgs {
  @TypeGraphQL.Field(_type => MoveMetaWhereInput, {
    nullable: true
  })
  where?: MoveMetaWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: MoveMetaOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => MoveMetaWhereUniqueInput, {
    nullable: true
  })
  cursor?: MoveMetaWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
