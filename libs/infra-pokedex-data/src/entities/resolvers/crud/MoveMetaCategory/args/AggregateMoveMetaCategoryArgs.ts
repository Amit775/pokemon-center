import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveMetaCategoryOrderByWithRelationInput } from "../../../inputs/MoveMetaCategoryOrderByWithRelationInput";
import { MoveMetaCategoryWhereInput } from "../../../inputs/MoveMetaCategoryWhereInput";
import { MoveMetaCategoryWhereUniqueInput } from "../../../inputs/MoveMetaCategoryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateMoveMetaCategoryArgs {
  @TypeGraphQL.Field(_type => MoveMetaCategoryWhereInput, {
    nullable: true
  })
  where?: MoveMetaCategoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaCategoryOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: MoveMetaCategoryOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => MoveMetaCategoryWhereUniqueInput, {
    nullable: true
  })
  cursor?: MoveMetaCategoryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
