import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveMetaCategoryOrderByWithRelationInput } from "../../../inputs/MoveMetaCategoryOrderByWithRelationInput";
import { MoveMetaCategoryWhereInput } from "../../../inputs/MoveMetaCategoryWhereInput";
import { MoveMetaCategoryWhereUniqueInput } from "../../../inputs/MoveMetaCategoryWhereUniqueInput";
import { MoveMetaCategoryScalarFieldEnum } from "../../../../enums/MoveMetaCategoryScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstMoveMetaCategoryOrThrowArgs {
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

  @TypeGraphQL.Field(_type => [MoveMetaCategoryScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "identifier"> | undefined;
}
